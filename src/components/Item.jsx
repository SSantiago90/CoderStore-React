
import React from 'react';
import {Link} from 'react-router-dom';

import OnImagesLoaded from "react-on-images-loaded";
import ImageLoader from "./loaders/ImgLoader";

const Item = (props) => {
    const [imgLoaded, setImgLoaded] = React.useState(false);

    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="shadow-lg bg-gray-100 p-6 rounded-lg">
            <Link to={`/products/${props.id}`}>
                <OnImagesLoaded onLoaded={()=> setImgLoaded(true)} >        
                <div className={imgLoaded ? 'hidden-false' : 'hidden-true'}>
                    <img alt={props.title} className="image object-contain bg-placeholder h-60 rounded w-full object-center mb-6" src={props.imgUrl}/>
                </div>
                {  !imgLoaded && <ImageLoader size={64} /> }      
                </OnImagesLoaded>
                
            </Link>
                <h3 className="h-20 tracking-widest text-grey-800 font-bold title-font">{props.title}</h3>
                <span className="title-font font-medium text-2xl text-gray-900">
                    <h2 className="mb-4">${props.price}</h2>
                </span>
                <p className="leading-relaxed text-base">{props.description}</p>
                <Link to={`/products/${props.id}`} className="text-indigo-500 inline-flex items-center mt-3">Ver más</Link>
            </div>
         </div>
    );
}

export default Item;
