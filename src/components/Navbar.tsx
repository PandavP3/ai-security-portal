
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-800 bg-black sticky top-0 z-50">
      <Link to="/" className="flex items-center">
        <span className="text-2xl font-bold text-white">
          AI<span className="text-neonBlue">Secure</span>
        </span>
      </Link>

      <button 
        className="neon-button text-sm"
        onClick={toggleLogin}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default Navbar;
