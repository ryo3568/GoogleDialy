import React, { useState, useEffect } from 'react' 
import usePersist from '../Persist'

function Translate(props) {
    const [googleMessage, setGoogleMessage] = useState('') 

    const pushGoogleButton = (e) => {
        const responseMessage = 'Hello' 
        setGoogleMessage(responseMessage)
    }

    return (
        <div className='form-group'>
            <label for='translate'>翻訳結果:</label>
            <textarea id='translate' className='form-control' />
        </div>
    )
}

export default Translate