import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import axios from 'axios';

import DeleteIcon from '@material-ui/icons/Delete';

const Home = () => {

    const [noteList, setNotes] = useState(null);

    useEffect(async () => {
        const notes = await (axios.get('http://localhost:8000/notes')).data
        try {
            setNotes(notes);
        } catch (err) {
            console.log(err.message)
        }
    })

    useEffect(async () => {

        const notes = await (axios.get('http://localhost:8000/notes')).data

        try {
            setNotes(notes);
        } catch (err) {
            console.log(err.message);
        }
    }, [noteList, setNotes]);

    const handleDelete = (id) => {
        fetch('http://localhost:8000/notes/' + id, {
            method: "DELETE"
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
            <h1 class='HomeNotes'>Notes</h1>

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