import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import axios from 'axios';

import DeleteIcon from '@material-ui/icons/Delete';

const Home = () => {

    const [noteList, setNotes] = useState(null);


    useEffect(async () => {

        const token = localStorage.getItem('token')

        const notes = await axios.get(`${process.env.REACT_APP_NOTERAPP_BACKEND}/notes`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });

        console.log(notes.data)

        try {
            setNotes(notes.data);
        } catch (err) {
            console.log(err.message)
        }
    }, [])

    useEffect(async () => {

        const token = localStorage.getItem('token')

        const notes = await axios.get(`${process.env.REACT_APP_NOTERAPP_BACKEND}/notes`, {
            headers: { 'Authorization': `Bearer ${token}` },
        });

        try {
            setNotes(notes.data);
        } catch (err) {
            console.log(err.message);
        }
    }, [noteList, setNotes]);

    const handleDelete = (id) => {

        const token = localStorage.getItem('token')

        axios({
            url: `${process.env.REACT_APP_NOTERAPP_BACKEND}/notes/` + id,
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(() => {
                setNotes(
                    noteList.map((note) => {
                        return note._id !== id;
                    })
                )
            })
    }

    return (
        <div className="Home">
            <h1 className='HomeNotes'>Notes</h1>

            <Link to='/create'><button className="AddBtn">+</button></Link>

            <div className="NoteList">


                {noteList && <div> {noteList.map((note) => (
                    <div className="Note">
                        <div className="NoteContent">{note.content}</div>
                        <span className="DelIcon" onClick={() => {
                            handleDelete(note._id)
                        }} ><DeleteIcon /></span>
                    </div>
                ))} </div>}
            </div>
        </div>
    )
}

export default Home