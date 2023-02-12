import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Item (props) {
    const th = {
        width: "30%"
    }
    
    const history = useHistory()
    let d = new Date(props.value.date)
    let f = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()

    const doChange = (e) => {
        history.push({
            pathname: "/dialy",
            state: {
                title: props.value.title,
                date: props.value.date,
                japan: props.value.japan,
                english: props.value.english,
                google: props.value.google
            }
        })
    }

    return (
        <tr onClick={doChange}><th style={th}>{f}</th>
            <td>{props.value.title}</td>
        </tr>
    )
}

export default Item