import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { fetchTask, createTask, updateTask, deleteTask, selectTask } from './singletaskSlice';
import { fetchTask ,deleteTask } from '../features/singleTaskSlice';


const DeleteTask = ({task}) => {
    const {id,title,description, status} = task
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Handling the deletion of an existing task
    const handleTaskDelete = (id) => {
        // taskId.preventDefault();
        dispatch(deleteTask(id));
        navigate('/task');
    };
    return (
        <div>
            <button value={task.id} onClick={handleTaskDelete}>Delete Task</button>
        </div>
    );
};

export default DeleteTask