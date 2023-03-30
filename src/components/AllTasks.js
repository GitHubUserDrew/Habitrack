import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllTask, selectAllTasks } from '../features/allTaskSlice';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

const SingleTask = ({ task }) => {
  const { title, description, status } = task || {};
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleCancelClick = () => {
    setShowEditForm(false);
  };

  if (!task) {
    return <div>No task found</div>;
  }

  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <h5>Status: {status}</h5>
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
  );
};

const AllTasks = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);

  useEffect(() => {
    if (id) {
      dispatch(fetchAllTask(id));
    }
  }, [dispatch, id]);

  if (tasks.loading) {
    return <div>Loading...</div>;
  }

  if (tasks.error) {
    return <div>{tasks.error}</div>;
  }

  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {tasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;




// const AllTasks = () => {

//   const tasks = useSelector(selectAllTasks);
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   console.log(id)


//   useEffect(() => {
//     if (id) {
//       dispatch(fetchAllTask(id));
//     }
//   }, [dispatch, id]);

//   if (tasks.loading) {
//     return <div>Loading...</div>;
//   }

//   if (tasks.error) {
//     return <div>{tasks.error}</div>;
//   }

//   const { title, description, status } = tasks.task || {};

//   return (
//     <div>
//       <h1>Tasks</h1>
//       <div>
//         {tasks.map((task) => (
//           <SingleTask key={task.id} task={task} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllTasks;








// const Task = () => {
//     // Using useDispatch to get access to the Redux dispatch function
//     const dispatch = useDispatch();
//     // Using useNavigate to get access to the React Router navigate function
//     const navigate = useNavigate();
//     // Using useParams to get access to the taskId URL parameter
//     const { taskId } = useParams();
//     // Using useSelector to get access to the tasks state in the Redux store
//     const tasks = useSelector(selectTask);
//     // Using useState to manage the local state of the title input field
//     const [title, setTitle] = useState('');
//     // Using useState to manage the local state of the description input field
//     const [description, setDescription] = useState('');
//     // Using useState to manage the local state of the status input field
//     const [status, setStatus] = useState('');

//     // Using useEffect to fetch the list of tasks from the server when the component mounts
//     useEffect(() => {
//         dispatch(fetchTask());
//     }, [dispatch]);

//     // Handling changes to the title input field
//     const handleTitleChange = (event) => {
//         setTitle(event.target.value);
//     };

//     // Handling changes to the description input field
//     const handleDescriptionChange = (event) => {
//         setDescription(event.target.value);
//     };

//     // Handling changes to the status input field
//     const handleStatusChange = (event) => {
//         setStatus(event.target.value);
//     };

//     // Handling the creation of a new task
//     const handleTaskCreate = () => {
//         dispatch(createTask({ title, description, status })).then(() => {
//             // Navigating to the home page after the task is created
//             navigate('/');
//         });
//     };

//     // Handling the updating of an existing task
//     const handleTaskUpdate = () => {
//         dispatch(updateTask({ id: taskId, title, description, status })).then(() => {
//             // Navigating to the home page after the task is updated
//             navigate('/');
//         });
//     };

//     // Handling the deletion of an existing task
//     const handleTaskDelete = () => {
//         dispatch(deleteTask(taskId)).then(() => {
//             // Navigating to the home page after the task is deleted
//             navigate('/');
//         });
//     };

//     // Getting the selected task based on the taskId URL parameter
//     const selectedTask = tasks.find((task) => task.id === Number(taskId));

//     return (
//         <div>
//             <h2>Tasks</h2>
//             <ul>
//                 {/* Displaying a list of tasks */}
//                 {tasks.map((task) => (
//                     <li key={task.id}>{task.title}</li>
//                 ))}
//             </ul>
//             <h2>Create Task</h2>
//             <div>
//                 <label>Title:</label>
//                 {/* Managing the title input field */}
//                 <input type="text" value={title} onChange={handleTitleChange} />
//             </div>
//             <div>
//                 <label>Description:</label>
//                 {/* Managing the description input field */}
//                 <input type="text" value={description} onChange={handleDescriptionChange} />
//             </div>
//             <div>
//                 <label>Status:</label>
//                 {/* Managing the status input field */}
//                 <input type="text" value={status} onChange={handleStatusChange} />
//             </div>
//             {/* Button to create a new task */}
//             <button onClick={handleTaskCreate}>Create Task</button>
//             {selectedTask && (
//                 <>
//                     <h2>Update Task</h2>
//                     <div>
//                         <label>Title:</label>
//                         {/* Controlled component input for updating title */}
//                         <input type="text" value={title} onChange={handleTitleChange} />
//                     </div>
//                     <div>
//                         <label>Description:</label>
//                         {/* Controlled component input for updating description */}
//                         <input type="text" value={description} onChange={handleDescriptionChange} />
//                     </div>
//                     <div>
//                         <label>Status:</label>
//                         {/* Controlled component input for updating status */}
//                         <input type="text" value={status} onChange={handleStatusChange} />
//                     </div>
//                     {/* Update Task and Delete Task buttons */}
//                     <button onClick={handleTaskUpdate}>Update Task</button>
//                     <button onClick={handleTaskDelete}>Delete Task</button>
//                 </>
//             )}
//         </div>
//     )
// };

// export default Task


//  <div>
//     <h1>Tasks</h1>
//     <div>
//         {/* Displaying a list of tasks */}
//         {tasks.map((task) => (
//             <div key={task.id}>
//                 <h4>{title}</h4>
//                 <p>{description}</p>
//                 <p>{status}</p>
//                 <EditTask task={`${task.id}`} />
//                 <DeleteTask task={`${task.id}`} />
//             </div>)
//         )};
//     </div>
// </div>




{/* <div>
{Object.values(tasks).map(task => (
  <SingleTask key={task.id} task={task} />
))}
</div> */}


{/* <div>
{tasks.map((task) => (
  <SingleTask key={task.id} task={task} />
))}
</div> */}
// return <div>No tasks found.</div>;