import React, { useState, useEffect } from 'react' 
import usePersist from '../Persist'

function English (props) {
    const [englishMessage, setEnglishMessage] = useState('') 

    const doEnglishChange = (e) => {
        setEnglishMessage(e.target.value)
    }

    return (
        <div className='form-group'>
            <label for='english'>英語:</label>
            <textarea id='english' className='form-control' 
                onChange={doEnglishChange} value={englishMessage} />
        </div>
    )
}

export default English