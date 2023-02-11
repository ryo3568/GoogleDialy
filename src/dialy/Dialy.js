import React, { useState, useEffect } from 'react'
import usePersist from "../Persist"


function Dialy(props) {
    const [japaneseMessage, setJapaneseMessage] = useState('')
    const [englishMessage, setEnglishMessage] = useState('') 
    const [googleMessage, setGoogleMessage] = useState('') 
    const [transcriptMessage, setTranscriptMessage] = useState('') 

    const API_KEY = process.env.REACT_APP_DEEPL_API_KEY
    const API_URL = process.env.REACT_APP_DEEPL_API_URL

    const doJapaneseChange = (e) => {
        setJapaneseMessage(e.target.value)
    }

    const doEnglishChange = (e) => {
        setEnglishMessage(e.target.value)
    }

    const pushGoogleButton = (e) => {
        const entext = japaneseMessage
        let content = encodeURI('auth_key=' + API_KEY + '&text=' + entext + '&source_lang=JA&target_lang=EN')
        let url = API_URL + '?' + content 

        fetch(url)
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Could not reach the API: " + response.statusText);
                }
            }).then(function(data) {
                setGoogleMessage(data["translations"][0]["text"])
            }).catch(function(error){
                console.log(error.message)
            })
    }

    const pushGoogleButton2 = (e) => {
        setGoogleMessage(japaneseMessage + 'を翻訳した文章')
    }

    const doTranscriptChange = (e) => {
        setTranscriptMessage(e.target.value)
    }

    return (
        <div>
            <h1 className='display-4 text-center'>English Dialy</h1>
            <div className='form-group'>
                <label for='date'>日付:</label>
                <input type='date' id='date' className='form-control' />
            </div>
            <div className='alert alert-primary pb-0'>
                <div className='form-group'>
                    <label for='japanese'>日本語:</label>
                    <textarea id='japanese' className='form-control' 
                        onChange={doJapaneseChange} value={japaneseMessage} />
                </div>
                <div className='form-group'>
                    <label for='english'>英語:</label>
                    <textarea id='english' className='form-control' 
                        onChange={doEnglishChange} value={englishMessage} />
                </div>
            </div>
            <div className='form-group text-center'>
                <input type='submit' value='翻訳' onClick={pushGoogleButton2} 
                        className='btn btn-primary btn-sm col-2 text-center'/>          
            </div>
            <div className='alert alert-warning pb-0'>
                <div className='form-group'>
                    <label for='translate'>翻訳結果:</label>
                    <textarea id='translate' className='form-control' value={googleMessage}/>
                </div>
                <div className='form-group'>
                    <label for='transcript'>書き写し:</label>
                    <textarea id='transcript' className='form-control' 
                        onChange={doTranscriptChange} value={transcriptMessage}/>
                </div>
            </div>
            <div className='form-group text-center'>
                <input type='submit' value='保存' onClick={pushGoogleButton2} 
                        className='btn btn-success btn-sm col-2 text-center'/>          
            </div>
        </div>
    )
}

export default Dialy