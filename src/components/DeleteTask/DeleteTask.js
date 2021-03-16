import axios from 'axios';
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router'

const DeleteTask = () => {

    const [noteE, setNote] = useState('')

    const { id } = useParams();

    const history = useHistory();

    const token = localStorage.getItem('token')

    const note = axios({
        url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/notes/${id}`,
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((res) => {
        setNote(res.data.content)
    }).catch((e) => {
        console.log(e.message)
    })


    const handleYesDelete = () => {
        axios({
            url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/notes/${id}`,

            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(
                history.push('/dashboard')
            )
    }

    const handleNoDelete = () => {
        history.push('/dashboard')
    }


    return (
        <div className="DeleteTask">
            <h2>Are you sure you want to delete this note?</h2>
            <div>{noteE}</div>
            <button onClick={handleNoDelete}>No</button>
            <button onClick={handleYesDelete}>Yes</button>

        </div>
    )
}

export default DeleteTask
