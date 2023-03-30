import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//id, title, description, start_date, end_date, start_time, end_time

export const fetchEvents = createAsyncThunk("calendar/fetchEvents", async () => {
    try {
        const { data } = await axios.get("/api/events");
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
});

export const createEvent = createAsyncThunk("calendar/createEvent", async ({ id, title, description, }) => {
    console.log("posted");
    const { data } = await axios.post("/api/events", { id, title, description, });
    return data;
});

export const updateEvent = createAsyncThunk("calendar/updateEvent", async (event) => {
    try {
        const { id, title, description,  } = event;
        const updatedEvent = { id, title, description,  };
        const { data } = await axios.put(
            `/api/events/${id}`,
            updatedEvent
        );
        if (data) {
            console.log(data)
            return data
        }

    } catch (err) {
        console.log(err);
    }
});

export const deleteEvent = createAsyncThunk("calendar/deleteEvent", async (id) => {
        try {
            const { data } = await axios.delete(
                `/api/events/${id}`
            );
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

export const calendarSlice = createSlice({
    name: "calendar",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEvents.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(createEvent.fulfilled, (state, action) => {
            state.push(action.payload);
        })
        builder.addCase(updateEvent.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(deleteEvent.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});  

export const selectEvent = (state) => {
    return state.event;
  };
 export default calendarSlice.reducer;