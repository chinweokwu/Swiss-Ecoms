import React,{useState} from "react";
import { Link } from "react-router-dom";


const  Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="h-18 bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div>
            <Link
              className="block lg:hidden px-3 py-2 text-2xl flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
              to="/">
              Swiss Socials
            </Link>
          </div>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
            <i className="fas fa-bars"></i>
          </button>
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className={ "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden") } id="example-navbar-danger">
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link        
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                    to="#pablo"
                  >
                    Men
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  to="#pablo"
                >
                 Women
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  to="#pablo"
                >
                  Children
                </Link>
              </li>
            </ul>
            </div>
          </div>
          <div className="lg:block hidden grow">
            <h1 className="flex justify-center ">Swiss</h1>
          </div>
          <div
            className={
              "lg:flex items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  to="#pablo"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  to="#pablo"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  to="#pablo"
                >
                  Contacts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  to="#pablo"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar