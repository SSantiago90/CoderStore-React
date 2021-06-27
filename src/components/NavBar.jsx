import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
        <header className="shadow-lg text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                
                <span className="ml-3 text-xl">CoderStore</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a href="#" className="mr-5 hover:text-gray-900">Categorías</a>
                    <a href="#" className="mr-5 hover:text-gray-900">About</a>
                    <a href="#" className="mr-5 hover:text-gray-900">Contacto</a>
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
