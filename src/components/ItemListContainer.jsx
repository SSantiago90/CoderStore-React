import React from 'react';
import ItemCount from './ItemCount';


const ItemListContainer = (props) => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-large title-font mb-8 text-red-600">{props.title}</h1>
                    <hr />
                </div>    
                <ItemCount stock={4} initial={1} />
            </div>
      </section>
    );
}

export default ItemListContainer;
