import React from 'react';
import receiptImg from '../assets/img/bill.svg';
import {Link} from 'react-router-dom';

const Receipt = ({id,error}) => {
    return (
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded" alt="hero" src={receiptImg}/>
            </div>
            
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            {id && 
                <div>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">¡Gracias por tu compra!</h1>
                    <p className="mb-8 leading-relaxed">El número de ticket de tu órden de compra es <strong>{id}</strong></p>
                </div>
            }
            {error && 
                <div>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hubo un error :(</h1>
                    <p className="mb-8 leading-relaxed">No pudimos realizar la transacción. Intentá de nuevo más tarde</p>
                    <small><strong>Error: </strong>{error}</small>
                </div>
            }
                <div className="flex justify-center">
                    <Link to="/" type="button" className="btn btn-inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Volver al inicio</Link>
                </div>
            </div>
        </div>
        </section>          
    );
}

export default Receipt;
