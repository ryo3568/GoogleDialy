import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import usePersist from "../Persist"


function Dialy(props) {
    const [dialy, setDialy] = usePersist("dialy", [])
    const {state} = useLocation()

    let init_date = new Date()
    let init_title = ''
    let init_japan = ''
    let init_english = ''
    let init_google = '' 
    let init_transcript = ''

    if (state != null){
        init_title = state.title
        init_date = state.date
        init_japan = state.japan 
        init_english = state.english 
        init_google = state.google
    }

    const [date, setDate] = useState(init_date)
    const [title, setTitle] = useState(init_title)
    const [japaneseMessage, setJapaneseMessage] = useState(init_japan)
    const [englishMessage, setEnglishMessage] = useState(init_english) 
    const [googleMessage, setGoogleMessage] = useState(init_google) 
    const [transcriptMessage, setTranscriptMessage] = useState(init_transcript) 

    const API_KEY = process.env.REACT_APP_DEEPL_API_KEY
    const API_URL = process.env.REACT_APP_DEEPL_API_URL


    const doDateChange = (e) => {
        setDate(e.target.value)
    }

    const doTitleChange = (e) => {
        setTitle(e.target.value)
    }

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

    const pushSaveButton = (e) => {
        const data = {
            title: title,
            date: date,
            japan: japaneseMessage,
            english: englishMessage,
            google: googleMessage
        }
        dialy.unshift(data)
        setDialy(dialy)
    }

    const doTranscriptChange = (e) => {
        setTranscriptMessage(e.target.value)
    }

    return (
        <div>
            <h1 className='display-4 text-center'>TanTan English Dialy</h1>
            <div className='form-group'>
                <label for='date'>日付:</label>
                <input type='date' id='date' className='form-control' 
                    onChange={doDateChange} value={date}/>
            </div>
            <div className='form-group'>
                <label for='title'>タイトル:</label>
                <input type='text' id='title' className='form-control' 
                    onChange={doTitleChange} value={title} />
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
                <input type='submit' value='翻訳' onClick={pushGoogleButton} 
                        className='btn btn-success btn-lg'/>          
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
                <a onClick={pushSaveButton} href='/' className='btn btn-primary
                btn-lg'>保存</a> 
            </div>
        </div>
    )
}

export default Dialy