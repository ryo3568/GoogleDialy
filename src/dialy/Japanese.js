import React, { useState, useEffect } from 'react' 
import usePersist from '../Persist'

function Japanese(props) {
    const [japaneseMessage, setJapaneseMessage] = useState('')

    const doJapaneseChange = (e) => {
        setJapaneseMessage(e.target.value)
    }

    return (
        <div className='form-group'>
            <label for='japanese'>日本語:</label>
            <textarea id='japanese' className='form-control' 
                onChange={doJapaneseChange} value={japaneseMessage} />
        </div>
    )
}

export default Japanese