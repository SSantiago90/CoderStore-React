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
                    
                    <div class="dropdown inline-block relative">
                        <button class="mr-5 hover:text-gray-900">
                        <span class="mr-1">Categorías</span>                        
                        </button>
                        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                        <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                        <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three</a></li>
                        </ul>
                    </div>

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
