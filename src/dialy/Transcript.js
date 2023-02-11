import React, { useState, useEffect } from 'react' 
import usePersist from '../Persist'

function Transcript (props) {
    const [transcriptMessage, setTranscriptMessage] = useState('') 

    const doTranscriptChange = (e) => {
        setTranscriptMessage(e.target.value)
    }

    return (
        <div className='form-group'>
            <label for='transcript'>書き写し:</label>
            <textarea id='transcript' className='form-control' />
        </div>
    )
}

export default Transcript