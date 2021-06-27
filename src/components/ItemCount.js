import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'

const ItemCount = (props) => {
    const [cantidad, setCantidad] = useState(props.initial);

    function addCount(){
        cantidad < props.stock ? setCantidad(cantidad + 1) : alert('máximo alcanzado');
    };    

    function substractCount(){
        cantidad > 0 ? setCantidad(cantidad - 1) : alert('mínimo alcanzado');
    };

    return (
        <div className="text-gray-600 body-font">
            <div className="container px-5 py-2 mx-auto">
                <div className="flex justify-center align-center flex-wrap -m-4">              
               
                <div className="p-4 lg:w-1/3">
                    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Comprar Item</h1>
                    <div className="flex flex-wrap justify-around align-center ">                                                
                        <button className="text-red-400" onClick={substractCount}>
                            <FontAwesomeIcon icon={faMinusSquare} />
                        </button>
                        <h2 class="title-font font-medium text-3xl text-gray-900">{cantidad}</h2>
                        
                        <button className="text-green-400"  onClick={addCount}>
                            <FontAwesomeIcon icon={faPlusSquare} />
                        </button>
                    </div>
                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            Cantidad disponible: {props.stock}
                        </h2>                       
                    </div>
                    </div>  
                </div>
                </div>
            </div>
        </div>
    );
}



export default ItemCount;