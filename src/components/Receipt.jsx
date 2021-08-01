import React, {useEffect, useState} from 'react';

const Receipt = ({id,error}) => {
    return (
        <div>
            {id && (
                <div>
                    <h1>Gracias por tu compra!</h1>
                    <span>tu ID: <strong>{id}</strong></span>            
                </div>
            )}
              {error && (
                <div>
                    <h1>Hubo un error en tu solicitud.</h1>
                    <span>error: <strong>{error}</strong></span>    
                </div>
            )   }    
          
        </div>
    );
}

export default Receipt;
