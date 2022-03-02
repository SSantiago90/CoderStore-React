import React from "react";

const ImgLoader = ({size = 96}) => {
    const sizeCSS = `m-auto rounded-full bg-gray-300 h-${size} w-${size}`;
  return (
        <div className="mx-auto mb-10 animate-pulse flex space-x-12">
                <div className={sizeCSS}></div>           
            </div>
  );
};

export default ImgLoader;

