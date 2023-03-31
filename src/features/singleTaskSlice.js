import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTask = createAsyncThunk('task', async (id) => {
    try {
        const { data } = await axios.get(`/api/task/${id}`);
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
});

// export const createTask = createAsyncThunk("task/createTask", async ({ id, title, description, status }) => {
//     console.log("posted");
//     const { data } = await axios.post("/api/task", { id, title, description, status });
//     return data;
// });

export const updateTask = createAsyncThunk('task/updateTask', async (Task) => {
    try {
        const { id, title, description, status } = Task;
        const updatedEvent = { id, title, description, status };
        const { data } = await axios.put(
            `/api/task/${id}`,
            updatedEvent
        );
        if (data) {
            console.log(data)
            return data
        }

    } catch (error) {
        console.log(error);
    }
});

export const deleteTask = createAsyncThunk('task/deleteTask', async (id) => {
    try {
        const { data } = await axios.delete(
            `/api/task/${id}`
        );
        return data;
    } catch (err) {
        console.log(err);
    }
}
);

export const singleTaskSlice = createSlice({
    name: 'task',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTask.fulfilled, (state, action) => {
            return action.payload;
        });
        // builder.addCase(createTask.fulfilled, (state, action) => {
        //     state.push(action.payload);
        // });
        builder.addCase(updateTask.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(deleteTask.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const selectTask = (state) => {
    return state.task;
};
export default singleTaskSlice.reducer;