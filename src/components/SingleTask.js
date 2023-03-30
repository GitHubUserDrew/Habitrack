import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';
import {  fetchTask, selectTask } from '../features/singleTaskSlice' 



const SingleTask = () => {
    const { id } = useParams();
    console.log(id);
    const tasks = useSelector(selectTask);
    const task = tasks[0];
    // const { title, description, status } = task || {};
    const dispatch = useDispatch();
    const [showEditForm, setShowEditForm] = useState(false);

    const handleEditClick = () => {
      setShowEditForm(true);
    };
  
    const handleCancelClick = () => {
      setShowEditForm(false);
    };

    useEffect(() => {
      if (id) {
        dispatch(fetchTask(id));
      }
    }, [dispatch, id]);

    if (task.loading) {
      return <div>Loading...</div>;
    }
  
    if (task.error) {
      return <div>{task.error}</div>;
    }
  
    const { title, description, status } = task.task || {};

    return (
        <div>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <h5>Status:{status}</h5>
        {showEditForm ? (
          <>
            <EditTask task={task} />
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
        <DeleteTask task={`${task.id}`} />
      </div>
    )
};

export default SingleTask







// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from "react-router-dom";
// import { createTask, fetchTask, updateTask, deleteTask, selectTask } from './taskSlice';

// const Task = () => {
//     const [newTask, setNewTask] = useState({ id: "", title: "", description: "", status: "" });
//     const [isEditing, setIsEditing] = useState(false);
//     const [editTask, setEditTask] = useState({ id: "", title: "", description: "", status: "" });

//     const dispatch = useDispatch();
//     const tasks = useSelector(selectTask);
//     const {id, title, description, status } = tasks 

//     useEffect(() => {
//         dispatch(fetchTask());
//     }, [dispatch]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewTask({ ...newTask, [name]: value });
//     };

//     const handleEditInputChange = (e) => {
//         const { name, value } = e.target;
//         setEditTask({ ...editTask, [name]: value });
//     };

//     const handleAddTask = (e) => {
//         e.preventDefault();
//         dispatch(createTask(newTask));
//         setNewTask({ id: "", title: "", description: "", status: "" });
//     };

//     const handleEditTask = (e) => {
//         e.preventDefault();
//         dispatch(updateTask(editTask));
//         setIsEditing(false);
//         setEditTask({ id: "", title: "", description: "", status: "" });
//     };

//     const handleDeleteTask = (id) => {
//         dispatch(deleteTask(id));
//     };

//     const handleEditClick = (task) => {
//         setIsEditing(true);
//         setEditTask(task);
//     };

//     return (
//         <div>
//             <h2>Task</h2>
//             <form onSubmit={isEditing ? handleEditTask : handleAddTask}>
//                 <label>
//                     Title:
//                     <input type="text" name="title" value={isEditing ? editTask.title : newTask.title} onChange={isEditing ? handleEditInputChange : handleInputChange} />
//                 </label>
//                 <br />
//                 <label>
//                     Description:
//                     <input type="text" name="description" value={isEditing ? editTask.description : newTask.description} onChange={isEditing ? handleEditInputChange : handleInputChange} />
//                 </label>
//                 <br />
//                 <label>
//                     Status:
//                     <input type="text" name="status" value={isEditing ? editTask.status : newTask.status} onChange={isEditing ? handleEditInputChange : handleInputChange} />
//                 </label>
//                 <br />
//                 <button type="submit">{isEditing ? "Edit Task" : "Add Task"}</button>
//             </form>
//             <hr />
//             {tasks.map((task) => (
//                 <div key={task.id}>
//                     <h4>{task.title}</h4>
//                     <p>{task.description}</p>
//                     <p>{task.status}</p>
//                     <button onClick={() => handleEditClick(task)}>Edit</button>
//                     <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Task
