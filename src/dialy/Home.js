import React, { useState, useEffect } from 'react' 
import usePersist from '../Persist' 

import Item from './Item'

function Home(props) {
    const [dialy, setDialy] = usePersist("dialy", []) 

    let data = dialy.map((value) => (
        <Item value={value} />
    ))


    return (
        <div>
            <h1 className='display-4 text-center'>Home</h1>
            <table className='table mt-4'>
                <thead><th>Date:</th><th>Title</th></thead>
                <tbody>{data}</tbody>
            </table>
            <div className='form-group text-center'>
                <a href="/dialy" className="btn btn-primary btn-lg">新規作成</a>         
            </div>
        </div>

    )
}

export default Home