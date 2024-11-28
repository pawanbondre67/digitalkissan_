from flask import Flask, request, jsonify
import pickle
import pandas as pd
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the dataset to filter city-specific data
dataset_path = 'crop_pune_data.csv'
data = pd.read_csv(dataset_path)

# Define feature columns
features = ['N', 'P', 'K', 'Temperature', 'Humidity', 'pH', 'Rainfall',
            'Average SoilMoisture Volume', 'Aggregate Soilmoisture Percentage', 'Fertility Rate']

# Load the trained model
model_path = 'crop_prediction_model (1).pkl'
with open(model_path, 'rb') as f:
    model = pickle.load(f)

# Function to predict top crops
def predict_top_crops(city, top_n=3):
    # Filter data for the given city
    city_data = data[data['city'] == city]
    if city_data.empty:
        raise ValueError(f"City '{city}' not found in the dataset.")

    # Compute average of features for the filtered rows
    avg_features = city_data[features].mean().values.reshape(1, -1)

    # Predict crop probabilities and sort to get top crops
    probabilities = model.predict_proba(avg_features)[0]
    crop_classes = model.classes_
    top_indices = probabilities.argsort()[-top_n:][::-1]
    top_crops = [crop_classes[i] for i in top_indices]

    return top_crops

@app.route('/predict', methods=['POST'])
def predict():
    # Extract city from the request
    content = request.json
    city = content.get('city', '')

    if not city:
        return jsonify({'error': 'City is required as input'}), 400

    try:
        # Predict top crops using the standalone function
        top_crops = predict_top_crops(city=city)
        return jsonify({'city': city, 'top_crops': top_crops}), 200
    except ValueError as e:
        return jsonify({'error': str(e)}), 404

if __name__ == '__main__':
    app.run(debug=True)
