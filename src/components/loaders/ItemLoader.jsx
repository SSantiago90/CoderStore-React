import React from "react";

const ItemLoader = () => {
  return (

    <div className="shadow-lg bg-gray-100 rounded-md mb-10 py-8 p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex-column space-y-12">
            <div className="m-auto rounded-full bg-gray-300 h-64 w-64"></div>
            <div className="flex-1 space-y-8 py-1">
                <div className="h-8 bg-gray-300 rounded  w-3/6"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-6/6"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/6"></div> 
                </div>
                <div className="h-6 bg-gray-300 rounded w-2/6"></div> 

            </div>
      </div>    
    </div>
    /* 
      </div>
    </div> */
  );
};

export default ItemLoader;
