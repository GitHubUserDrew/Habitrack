import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllTask = createAsyncThunk('allTask', async () => {
    try {
      const { data } = await axios.get('/api/task');
      console.log(' we are inside fetchallTasks and here is data:', data);
      return data;
    } catch (err) {
      console.error(err);
    }
  });

// export const createTask = createAsyncThunk("allTask/createTask", async ({ id, title, description, status }) => {
//     console.log("posted");
//     const { data } = await axios.post("/api/task", { id, title, description, status });
//     return data;
// });

export const createTask = createAsyncThunk(
    'allTask/createTask',
    async ({ id, title, description, status }) => {
      console.log('posted');
      const { data } = await axios.post('/api/task', {
        id,
        title,
        description,
        status
      });
      return data;
    }
);



export const allTaskSlice = createSlice({
    name: 'allTask',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchAllTask.fulfilled, (state, action) => {
        return action.payload;
      });
      builder.addCase(createTask.fulfilled, (state, action) => {
        state.push(action.payload);
      });
      // builder.addCase(updateTask.fulfilled, (state, action) => {
      //     return action.payload;
      // });
      // builder.addCase(deleteTask.fulfilled, (state, action) => {
      //     return action.payload;
      // });
    },
  });

export const selectAllTasks = (state) => {
    return state.allTask;
};

export default allTaskSlice.reducer;