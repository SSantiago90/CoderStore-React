import React from 'react';
import styles from './spinner.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Spinner() {
    return (
        <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">        
            <div className="spin p-3">
                <FontAwesomeIcon className="text-red-600" icon={faSpinner} size="6x" />        
            </div>
        </div>
    )
}