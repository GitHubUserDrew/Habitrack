import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { createNote, fetchAllNote, selectAllNote, deleteNote} from '../features/allNoteSlice'


const SingleNote = ({ note }) => {
  const {id, title, content} = note || {}; 
  const dispatch = useDispatch();
  // const [note, setNote] = useState(null);

  // const handleEditClick = () => {
  //   setShowEditForm(true);
  // };

  // const handleCancelClick = () => {
  //   setShowEditForm(false);
  // };

  const handleDelete = () => {
    dispatch(deleteNote((id)));
  };


  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div className="note">
      <div className="note_name">{title}</div>
      <div className="note_content">{content}</div>
      <button value={note.id} className="note-delete-button" onClick={handleDelete}>Delete</button>
      {/* <button onClick={handleEdit}>Edit</button> */}
    </div>
  );
};



const AllNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const notes = useSelector(selectAllNote);
  const myId = useSelector((state) => state.auth.me.id);

  useEffect(() => {
    if (myId) {
    console.log(myId, 'here is my id');
    dispatch(fetchAllNote(id));
    console.log('If condition met');
    }
  }, [dispatch, id]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };



  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const handleAddNote = () => {
    dispatch(createNote({ id, title, content }));
    setTitle("");
    setContent("");
  };

  return (
    <div className="notespage">
      <h2>Notes</h2>
      <br></br>
      <div className="Notes">
        <input className="title-edit"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter a title"
        />
        <input className ="content-edit"
          type="text"
          value={content}
          onChange={handleContentChange}
          placeholder="Enter some content"
        />
        <button className="addnote" onClick={handleAddNote}>Add Note</button>
      </div>
      <br></br> 
      {notes
        .slice()
        .reverse()
        .map((note) => (
          <SingleNote key={note.id} note={note} />
          
        ))}
    </div>
  );
};

export default AllNote;
