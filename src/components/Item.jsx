
import React from 'react';
import {Link} from 'react-router-dom';

const Item = (props) => {
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow-lg bg-gray-100 p-6 rounded-lg">
            <Link to={`/products/${props.id}`}>
                <img className="object-contain bg-placeholder h-60 rounded w-full object-center mb-6" src={props.imgUrl} alt={props.title}/>
            </Link>
                <h3 className="h-20 tracking-widest text-grey-800 font-bold title-font">{props.title}</h3>
                <h2 className="text-lg text-indigo-600 font-medium title-font mb-4">${props.price}</h2>
                <p className="leading-relaxed text-base">{props.description}</p>
                <Link to={`/products/${props.id}`} className="text-indigo-500 inline-flex items-center mt-3">Ver más</Link>
            </div>
         </div>
    );
}

export default Item;
