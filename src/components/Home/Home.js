import React from 'react'
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
    }
    ]

    return (
        <div className="Home">
            <h1 class='HomeNotes'>Notes</h1>
            <button className="AddBtn">+</button>
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
