import React,{useState} from "react";
import { Link } from "react-router-dom";


const  Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="h-18 bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 flex flex-wrap items-center justify-between px-2 py-3">
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
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ml-5 pl-5">
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
            <Link to="/" className="flex justify-center ">
              Swissfit Collections
            </Link>
          </div>
          <div
            className={
              "lg:flex items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mr-5 pr-5">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  to="/featured"
                >
                  Featured
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  to="/trending"
                >
                  Trending
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  to="/category"
                >
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 flex items-center text-xs uppercase font-bold leading-snug nav-icon hover:opacity-75"
                  to="#pablo"
                >
                      <div class="relative">
  <div class="t-0 absolute left-3">
    <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">3</p>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
</div>
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