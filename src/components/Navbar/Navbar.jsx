import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout =()=>{
    logOut()
    navigate('/')
  }

  const navlinks = (
    <>
      <li>
        <Link to={"/"}>home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/services"}>Services</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
      { user &&
        <li>
        <Link to={"/bookings"}>Bookings</Link>
      </li>
      }
      <li>
        <Link to={"/signin"}>Login</Link>
      </li>
    </>
  );
  return (
    <div className="h-28 flex items-center px-1 md:px-5 ">
      <div className="navbar bg-base-100 ">
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
              {navlinks}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl mb-10">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        {
          user ?
          <div className="navbar-end">
          <button onClick={()=>handleLogout()} className="btn btn-outline btn-error">logout </button>
        </div> 
        :
        <div className="navbar-end">
          <Link to={'/signin'}>
          <button className="btn btn-outline btn-error">login </button>
          </Link>
        </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
