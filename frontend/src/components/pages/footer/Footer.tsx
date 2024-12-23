import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="fixed bottom-0 left-0 right-0 bg-green-200 py-2">
        <ul className="flex justify-around">
          <li>
            <Link to="/">
            <button
               className="flex flex-col items-center gap-1 px-2 py-1 rounded focus:outline-none transition duration-300 ease-in-out transform hover:bg-[#b810c749] hover:scale-100 focus:bg-[#b810c749] focus:scale-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-home h-6 "
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
            </button>
            </Link>
          </li>
          <li>
            <Link to="/community">
            <button
               className="flex flex-col items-center gap-1 px-2 py-1 rounded focus:outline-none transition duration-300 ease-in-out transform hover:bg-[#b810c749] hover:scale-100 focus:bg-[#b810c749] focus:scale-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>Community</span>
            </button>
            </Link>

          </li>
          <li>
            <Link to="/market">
            <button
              className="flex flex-col items-center gap-1 px-2 py-1 rounded focus:outline-none transition duration-300 ease-in-out transform hover:bg-[#b810c749] hover:scale-100 focus:bg-[#b810c749] focus:scale-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-store"
              >
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                <path d="M2 7h20" />
                <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
              </svg>
              <span>Market</span>
            </button>
             </Link>
          </li>
          <li>
            <Link to="/settings">
            <button  className="flex flex-col items-center gap-1 px-2 py-1 rounded focus:outline-none transition duration-300 ease-in-out transform hover:bg-[#b810c749] hover:scale-100 focus:bg-[#b810c749] focus:scale-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-cog"
              >
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M12 2v2" />
                <path d="M12 22v-2" />
                <path d="m17 20.66-1-1.73" />
                <path d="M11 10.27 7 3.34" />
                <path d="m20.66 17-1.73-1" />
                <path d="m3.34 7 1.73 1" />
                <path d="M14 12h8" />
                <path d="M2 12h2" />
                <path d="m20.66 7-1.73 1" />
                <path d="m3.34 17 1.73-1" />
                <path d="m17 3.34-1 1.73" />
                <path d="m11 13.73-4 6.93" />
              </svg>
              <span>Settings</span>
            </button>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
