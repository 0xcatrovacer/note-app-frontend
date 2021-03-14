import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import './CreateNote.css'

const CreateNote = () => {

    const [content, setContent] = useState('');
    const history = useHistory();

    const token = localStorage.getItem('token');

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = { content }

        axios({
            method: 'POST',
            url: 'http://localhost:8000/notes',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            data: note
        }).then(() => {
            console.log('New Note Added')
            history.push('/');
        })
    }

    return (
        <div className="CreateForm">
            <div className="FormContent">
                <form onSubmit={handleSubmit}>
                    <div className="NoteForm">
                        <h3 className="TextHead">Note</h3>
                        <textarea
                            className="NoteText"
                            required
                            value={content}
                            onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <button className="CreateNoteBtn" onClick={handleSubmit} >Create Note</button>
                </form>
            </div>
        </div>
    )
}

export default CreateNote
