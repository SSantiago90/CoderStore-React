import React from "react";
import CartWidget from "./CartWidget";

import logo from '../assets/img/brand-logo-thumb.png';

import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <header className="shadow-lg text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link 
                    to="/" 
                    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" 
                >
                    {/* <span className="ml-3 text-xl">CoderStore</span> */}
                    <img className="h-10" src={logo} alt="CoderStore"/>
                </Link>
               
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">                   
                    
                    <div className="dropdown inline-block relative">
                        <button className="mr-5 hover:text-gray-900">
                        <span className="mr-1">Categorías</span>                        
                        </button>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li className=""><Link to="/category/men's clothing" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Men</Link></li>
                        <li className=""><Link to="/category/women's clothing" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Women</Link></li>
                        <li className=""><Link to="/category/jewelery" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">jewelery</Link></li>
                        <li className=""><Link to="/category/electronics" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Electronic</Link></li>
                        </ul>
                    </div>
                    <NavLink 
                        to="/about" 
                        className="mr-5 hover:text-gray-900"
                    >
                        About
                    </NavLink>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    <CartWidget/>
                </button>
            </div>
        </header>
    </div>
  );
};

export default NavBar;
