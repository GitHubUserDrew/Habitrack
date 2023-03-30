import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNote = createAsyncThunk("note", async (id) => {
    try {
        const { data } = await axios.get(`/api/note/${id}`);
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
});

// export const createNote = createAsyncThunk("note/createNote", async ({ id, title, content }) => {
//     console.log("posted");
//     const { data } = await axios.post("/api/note", { id, title, content });
//     return data;
// });

export const updateNote = createAsyncThunk("note/updateNote", async (Note) => {
    try {
        const { id, title, content } = Note;
        const updatedNote = { id, title, content};
        const { data } = await axios.put(
            `/api/note/${id}`,
            updatedNote
        );
        if (data) {
            console.log(data)
            return data
        }
    } catch (error) {
        console.log(error);
    }
});

export const deleteNote = createAsyncThunk("note/deleteNote", async (id) => {
    try {
        const { data } = await axios.delete(
            `/api/note/${id}`
        );
        return data;
    } catch (err) {
        console.log(err);
    }
}
);

export const singleNoteSlice = createSlice({
    name: "Note",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNote.fulfilled, (state, action) => {
            return action.payload;
        });
        // builder.addCase(createNote.fulfilled, (state, action) => {
        //     state.push(action.payload);
        // });
        builder.addCase(updateNote.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(deleteNote.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const selectNote = (state) => {
    return state.note;
};
export default singleNoteSlice.reducer;