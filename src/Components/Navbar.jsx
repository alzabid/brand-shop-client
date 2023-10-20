import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out successfully"))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/"> Home </NavLink>
      </li>
      <li>
        <NavLink to="/contact"> Contacts </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/add"> Add Product </NavLink>
          </li>
          <li>
            <NavLink to="/cart"> My Cart </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/login"> Login </NavLink>
      </li>
      <li>
        <NavLink to="/register"> Register </NavLink>
      </li>
    </>
  );
  return (
    <div data-aos="" className="sticky inset-0 z-20">
      <div className="navbar md:px-5 lg:px-10 bg-white  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <NavLink to="/">
            <img className=" w-32 md:w-40" src="/img/logo.png" alt="" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className={`avatar btn btn-ghost btn-circle 
              ${user ? "online" : "offline"} mx-3`}
            >
              <div className=" w-10 md:w-12 rounded-full">
                {user ? (
                  <img src={user.photoURL} />
                ) : (
                  <>
                    <img
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt=""
                    />
                  </>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                {user ? (
                  <>
                    <p>{user.displayName}</p>
                  </>
                ) : (
                  ""
                )}
              </li>
              <li>
                {user ? (
                  <>
                    <p>{user.email}</p>
                  </>
                ) : (
                  ""
                )}
              </li>
              <li>
                {user ? (
                  <>
                    <a onClick={handleLogOut}>Logout</a>
                  </>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>

          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn btn-sm md:btn-md btn-outline"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm md:btn-md btn-outline">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
