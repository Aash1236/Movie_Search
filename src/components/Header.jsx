import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";
import { IoSearch } from "react-icons/io5";
import { navigation } from "../constants/Navigation";

const Header = () => {
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  // console.log(removeSpace);

  const [searchInput, setSearchInput] = useState(removeSpace);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();

  // console.log("location", location.search.slice(3));

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (searchInput && !isSmallScreen) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput, isSmallScreen, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", searchInput); // Debugging
    if (searchInput) {
      console.log("Navigating to:", `/search?q=${searchInput}`);
      navigate(`/search?q=${searchInput}`);
    }
  };

  return (
    <header className="fixed top-0 z-40 w-full bg-gray-700 bg-opacity-75">
      <div className="container flex items-center justify-start h-16 px-3 py-2 mx-auto">
        <Link to={"/"}>
          <img className="" src={logo} alt="" width={120} />
        </Link>

        <nav className="items-center hidden gap-2 mx-5 lg:flex">
          {navigation.map((nav, index) => {
            return (
              <NavLink
                key={nav.lable}
                to={nav.href}
                className={({ isActive }) =>
                  `px-2 hover:text-red-300 ${isActive && "text-red-300"}`
                }
              >
                {nav.lable}
              </NavLink>
            );
          })}
        </nav>
        <div className="flex items-center gap-5 ml-auto">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search here...."
              className="hidden px-4 py-1 bg-transparent border-none outline-none lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button type="submit" className="text-2xl text-white">
              <IoSearch />
            </button>
          </form>

          <div className="w-10 h-10 transition-all cursor-pointer active:scale-50">
            <img src={userIcon} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

//
