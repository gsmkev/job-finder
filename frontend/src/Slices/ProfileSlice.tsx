import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
    name: "profile",
    initialState: {},
    reducers: {
        changeProfile: (state, action) => {
            return { ...state, ...action.payload };
        },
        setProfile: (state, action) => {
            return action.payload;
        },
    },
});

export const { changeProfile, setProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;