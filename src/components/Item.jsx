
import React from 'react';

const Item = (props) => {
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow-lg bg-gray-100 p-6 rounded-lg">
                <img className="object-contain bg-placeholder h-60 rounded w-full object-center mb-6" src={props.imgUrl} alt={props.title}/>
                <h3 className="h-20 tracking-widest text-grey-800 font-bold title-font">{props.title}</h3>
                <h2 className="text-lg text-red-600 font-medium title-font mb-4">${props.price}</h2>
                <p className="leading-relaxed text-base">{props.description}</p>
                <a href="#" className="text-red-500 inline-flex items-center mt-3">Ver más</a>
            </div>
         </div>
    );
}

export default Item;
