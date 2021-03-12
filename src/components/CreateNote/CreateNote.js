import React, { useState } from 'react'
import { useHistory } from 'react-router';
import './CreateNote.css'

const CreateNote = () => {

    const [content, setContent] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = { content }

        fetch('http://localhost:8000/notes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note)
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
