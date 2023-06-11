import { Link } from "react-router-dom";

const Header = () => {
  const navMenu = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Instructors</Link>
      </li>
      <li>
        <Link>Classes</Link>
      </li>
      <li>
        <Link>Dashboard</Link>
      </li>
      {/* <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 text-black">
            <li>
              <Link>Submenu 1</Link>
            </li>
            <li>
              <Link>Submenu 2</Link>
            </li>
          </ul>
        </details>
      </li> */}
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </>
  );
  return (
    <div className=" ">
      <div  className="navbar   pb-5 md:px-10 bg-gradient-to-r from-[#815ead] to-purple-900">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-white w-5"
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
              className="menu bg-white menu-sm dropdown-content mt-3 p-2 shadow   text-black rounded-box w-52 z-30 font-semibold text-base"
            >
              {navMenu}
            </ul>
          </div>
          <Link className="     normal-case text-xl">
            <div className="border-2 font-semibold  rounded-full px-5 py-3 shadow-md shadow-violet-900 ">
            <p className="uppercase italic text-white  tracking-widest">Lingua<span className="text-yellow-100">Camp</span> </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-semibold text-base tracking-wider  menu-horizontal text-white  px-1">
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Button</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
