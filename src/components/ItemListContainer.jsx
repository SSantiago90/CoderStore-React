import React from 'react';

const ItemListContainer = (props) => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{props.title}</h1>
                </div>            
            </div>
      </section>
    );
}

export default ItemListContainer;
