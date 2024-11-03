// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    email: string;
    password: string;
    role: "teacher" | "admin";
    fio: string;
    groups?: Array<string>
}

interface UserState {
  user: User | null; // Изначально данных нет
}

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
        state.user = action.payload;
        },
        clearUser(state) {
        state.user = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
