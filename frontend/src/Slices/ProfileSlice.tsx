import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../Services/LocalStorageService";
import { updateProfile } from "../Services/ProfileService";

const initialState = getItem("profile") || {};

const ProfileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        changeProfile: (state, action) => {
            return updateProfile(action.payload);
        },
        setProfile: (state, action) => {
            return action.payload;
        },
    },
});

export const { changeProfile, setProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;