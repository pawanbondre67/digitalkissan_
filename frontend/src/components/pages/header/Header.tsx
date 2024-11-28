import { Link, useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
// import { FaUserCircle } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "@/components/core/Firebase";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { User } from "@/components/constants/Interfaces";
import React, { useEffect } from "react";

const Header: React.FC = () => {
  
 const navigate = useNavigate();


  
  const result: User = React.useMemo(() => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : {};
  }, []);
  
  useEffect(() => {
    console.log(result.photoURL)
  }, [result]);

  


  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user"); // Optionally remove user data from local storage
      console.log("User signed out successfully");
      navigate("/login");
      // Redirect to login page or perform other actions
    } catch (error) {
      console.error("Error signing out:", error);
    }
    localStorage.clear();
    window.location.reload();
  };
  
  return (
    <div>
      <header className=" backdrop-blur-md shadow-sm w-full  xl:py-2 fixed  flex items-center justify-between px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-5 z-50 ">
        <Link to="/" className="flex items-center gap-2">
          <img className="h-[45px]" src="/logo.png" alt="" />
        </Link>

        <div className="flex gap-3">
          <Link to="/">
            <div className="text-3xl">
              <IoIosNotificationsOutline />
            </div>

            
          </Link>

          <Popover>
              <PopoverTrigger>
                <img
                  className="h-[35px] w-[35px] rounded-full"
                  src={result.photoURL}
                 alt="User Avatar"
                />
              </PopoverTrigger>
              <PopoverContent className="w-20 m-4">
                <h2  onClick={handleLogout} >LogOut</h2>
              </PopoverContent>
            </Popover>
        </div>
      </header>
      
    </div>
  );
};

export default Header;
