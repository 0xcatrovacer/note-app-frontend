import React from 'react'
import './CreateNote.css'

const CreateNote = () => {
    return (
        <div className="CreateForm">
            <div className="FormContent">
                <form action="">
                    <div className="NoteForm">
                        <h3 className="TextHead">Note</h3>
                        <textarea className="NoteText" />
                    </div>
                    <button className="CreateNoteBtn">Create Note</button>
                </form>
            </div>
        </div>
    )
}

export default CreateNote
