import React , {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'

const ItemCount = (props) => {
    const [cantidad, setCantidad] = useState(props.initial);

    const [plusBtn, setPlusBtn] = useState(true);
    const [minusBtn, setMinusBtn] = useState(true);

    useEffect( ()=>{
        setCantidad(props.initial);
        setPlusBtn(true);
        setMinusBtn(true);
    },[])

    function addToCart(){
        props.onAdd(cantidad);
    }

    function addCount(){        
        if (cantidad < props.stock) 
            setCantidad(cantidad + 1);
        if (cantidad === props.stock)
            setPlusBtn(false);

        setMinusBtn(true)        
    };    

    function substractCount(){
        if (cantidad > 0)
            setCantidad(cantidad - 1);
        if (cantidad === 0)
            setMinusBtn(false);

        setPlusBtn(true);
    };

    return (
        <div className="text-gray-600 body-font">
            <div className="container px-5 py-2 mx-auto">
                <div className="flex justify-center align-center flex-wrap -m-4">              
               
                <div className="w-full pt-4">
                    <div className="h-full bg-gray-300 bg-opacity-75 px-8 pt-8 pb-6 rounded-lg overflow-hidden text-center relative">
                        <h1 className="text-sm uppercase title-font text-gray-500 tracking-widest">Agregar al carrito</h1>
                        <div className="flex flex-wrap mt-4 mb-6 -m-4 text-center">                                                
                            <button className="w-1/4 text-red-400" onClick={substractCount}>
                                <FontAwesomeIcon icon={faMinusSquare} />
                            </button>
                            <h2 class="w-1/2 title-font font-medium text-3xl text-gray-900">{cantidad}</h2>
                            
                            <button className="w-1/4 text-green-400"  onClick={addCount}>
                                <FontAwesomeIcon icon={faPlusSquare} />                            
                            </button>
                            <div className="h-6 mt-1 w-full flex flex-wrap text-center">
                                <span className={`w-full block py-1 px-2 rounded bg-red-50 text-red-500 text-xs font-medium tracking-widest ${plusBtn? "hidden" : "visible"}`}>Alcanzaste el máximo disponible</span>
                                <span className={`w-full block py-1 px-2 rounded bg-red-50 text-red-500 text-xs font-medium tracking-widest ${minusBtn? "hidden" : "visible"}`}>Alcanzaste el mínimo</span>
                            </div>
                        </div>
                        <div className="text-center mt-2 leading-none flex-wrap justify-centerw-full py-2">                      
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                Cantidad disponible: {props.stock}
                            </h2>                       
                        </div>
                        <div>
                            {cantidad > 0?
                            <button                                 
                                onClick={addToCart}
                                className="flex mx-auto mt-2 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                                Agregar al Carrito
                            </button>
                            :
                            <button  
                                disabled                                                               
                                className="flex mx-auto mt-2 text-grey-400 bg-grey-800 border-0 py-2 px-8  rounded text-lg">
                                Agregar al Carrito
                            </button>
                            }
                        </div>
                    </div>  
                </div>
                </div>
            </div>
        </div>
    );
}



export default ItemCount;
