import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import DeleteIcon from '@material-ui/icons/Delete';

const Home = () => {

    const notes = [{
        content: 'Task 1',
        completed: true,
        createdAt: 'yesterday'
    },
    {
        content: 'Task 2',
        completed: true,
        createdAt: 'daybefore'
    },
    {
        content: 'Task 3',
        completed: true,
        createdAt: 'daybefore'
    }
    ]

    return (
        <div className="Home">
            <h1 class='HomeNotes'>Notes</h1>

            <Link to='/create'><button className="AddBtn">+</button></Link>

            <div className="NoteList">
                {notes.map((note) => (
                    <div className="Note">
                        <div className="NoteContent">{note.content}</div>
                        <span className="DelIcon"><DeleteIcon /></span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
