import React from "react";
import { Link } from "react-router-dom";

const ItemLoader = () => {
  return (
    /*   <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="shadow-lg bg-gray-100 p-6 rounded-lg"> */

    <div class="shadow-lg bg-gray-100 rounded-md mb-10 py-8 p-4 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex-column space-y-12">
            <div class="m-auto rounded-full bg-gray-300 h-64 w-64"></div>
            <div class="flex-1 space-y-8 py-1">
                <div class="h-8 bg-gray-300 rounded  w-3/6"></div>
                <div class="space-y-2">
                    <div class="h-4 bg-gray-300 rounded w-6/6"></div>
                    <div class="h-4 bg-gray-300 rounded w-4/6"></div> 
                </div>
                <div class="h-6 bg-gray-300 rounded w-2/6"></div> 

            </div>
      </div>    
    </div>
    /* 
      </div>
    </div> */
  );
};

export default ItemLoader;
