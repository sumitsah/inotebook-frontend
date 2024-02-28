import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const { note, loadUpdateNote, showAlert } = props;
    const context = useContext(noteContext);
    const { deleteNote } = context;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-itmes-center">

                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id); showAlert("Deleted successfully", "success"); }}></i>
                        <i className="fas fa-edit mx-2" onClick={() => { loadUpdateNote(note);; }}></i>
                    </div>

                    <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error ipsa nemo, aliquid assumenda</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem
