import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { fetchTask, createTask, updateTask, deleteTask, selectTask } from './singletaskSlice';
import { fetchTask ,deleteTask } from '../features/singleTaskSlice';


const DeleteTask = (taskId) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Handling the deletion of an existing task
    const handleTaskDelete = () => {
        taskId.preventDefault();
        dispatch(deleteTask(taskId));
        navigate('/task');
    };
    return (
        <div>
            <button onClick={handleTaskDelete}>Delete Task</button>
        </div>
    );
};

export default DeleteTask