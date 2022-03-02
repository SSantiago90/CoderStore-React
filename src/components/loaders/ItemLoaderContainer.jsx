import React from 'react'
import ItemLoader from './ItemLoader';

const ItemLoaderContainer = ({count}) => {
    const items = [];
    
    for(let i = 0; i < count; i++ ) items.push(<ItemLoader key={i}/>)

    return items;
}

export default ItemLoaderContainer