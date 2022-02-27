import React from "react";
import { Link } from "react-router-dom";

const ItemLoader = () => {
  return (
    <section className="relative w-full text-gray-600 body-font overflow-hidden">
      <div className="container m-auto px-5 py-24 mx-auto shadow-lg bg-gray-100 rounded-md mb-10">
        <div className="lg:w-4/5 mx-auto">
        <div className="animate-pulse flex flex-wrap space-x-12">
                <div className="m-auto rounded-full bg-gray-300 h-96 w-96"></div>
                <div className="flex-1 space-y-24">
                    <div className="flex-1 space-y-8 py-1">
                        <div className="h-12 bg-gray-300 rounded  w-3/6"></div>
                        <div className="space-y-2">
                            <div className="h-6 bg-gray-300 rounded w-6/6"></div>
                            <div className="h-6 bg-gray-300 rounded w-4/6"></div> 
                        </div>
                        <div className="h-8 bg-gray-300 rounded w-3/6"></div> 
                    </div>
                <div className="h-12 bg-gray-300 rounded w-6/6"></div> 
            </div>
        </div>    
      </div>    
    </div>
    </section>
  );
};

export default ItemLoader;

