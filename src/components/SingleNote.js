import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectNote, fetchNote} from '../features/singleNoteSlice'

export const SingleNote = ({ noteId }) => {
  const dispatch = useDispatch();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const noteFromStore = useSelector((state) => selectNote(state, noteId));
    setNote(noteFromStore);
  }, [noteId]);

  const handleDelete = () => {
    dispatch(deleteNote(noteId));
  };

  // const handleEdit = () => {
  //   // Add code to navigate to the edit note page with the noteId prop
  // };

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};


