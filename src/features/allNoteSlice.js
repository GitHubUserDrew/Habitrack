import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllNote = createAsyncThunk('allNote', async () => {
    try {
        const { data } = await axios.get('/api/note');
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
});

export const createNote = createAsyncThunk('allNote/createNote', async ({ id, title, content }) => {
    console.log('posted');
    const { data } = await axios.post('/api/note', { id, title, content });
    return data;
});

export const deleteNote = createAsyncThunk('note/deleteNote', async (id) => {
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


export const allNoteSlice = createSlice({
    name: 'allNote',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllNote.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(createNote.fulfilled, (state, action) => {
            state.push(action.payload);
        });
        // builder.addCase(updateNote.fulfilled, (state, action) => {
        //     return action.payload;
        // });
        builder.addCase(deleteNote.fulfilled, (state, action) => {
            const deletedNoteId = action.payload.id;
            return state.filter(note => note.id !== deletedNoteId)
        });
    },
});

export const selectAllNote = (state) => {
    return state.allNote;
};

export default allNoteSlice.reducer;