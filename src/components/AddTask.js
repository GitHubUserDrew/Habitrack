import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTask ,createTask } from '../features/allTaskSlice';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const dispatch = useDispatch('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleTaskCreate = (e) => {
        e.preventDefault();
        dispatch(createTask({ title, description, status }));
        setTitle('');
        setDescription('');
        setStatus(''); 
    };

    return (
        <section>
            <h2>Create Task</h2>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={handleTitleChange} />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={handleDescriptionChange} />
            </div>
            <div>
                <label>Status:</label>
                <input type="text" value={status} onChange={handleStatusChange} />
            </div>
            <button onClick={handleTaskCreate}>Create Task</button>
        </section>
    )
};

export default AddTask