// import { createSlice } from "@reduxjs/toolkit";

// // ── Load persisted session ──────────────────────────────
// const token = localStorage.getItem("token");
// const user = JSON.parse(localStorage.getItem("user") || "null");

// // ── Slice ───────────────────────────────────────────────
// const authSlice = createSlice({
//     name: 'auth',
//     initialState: {
//         token: token || null,
//         user: user || null,
//         isAuthenticated: !!token,
//         loading: true,
//         error: null
//     },
//     reducers: {

//         // Call this after a successful login/signup API response
//         login: (state, action) => {
//             state.token = action.payload.token;
//             state.user = action.payload.user;
//             state.isAuthenticated = true;
//             state.error = null;
//             localStorage.setItem("token", action.payload.token);
//             localStorage.setItem("user", JSON.stringify(action.payload.user));
//         },

//         // Call this on logout button click
//         logout: (state) => {
//             state.token = null;
//             state.user = null;
//             state.isAuthenticated = false;
//             state.error = null;
//             localStorage.removeItem('token');
//             localStorage.removeItem('user');
//         },

//         // Call this after a successful profile update
//         updateUser: (state, action) => {
//             state.user = { ...state.user, ...action.payload };
//             localStorage.setItem("user", JSON.stringify(state.user));
//         },

//         // Toggle the loading spinner (set true before API call, false after)
//         setLoading: (state, action) => {
//             state.loading = action.payload;
//         },

//         // Set error manually (e.g. from a caught API error in your component)
//         setError: (state, action) => {
//             state.error = action.payload;
//         },

//         // Clear error (e.g. when user starts retyping in the login form)
//         clearError: (state) => {
//             state.error = null;
//         }
//     }
// });

// // ── Actions ─────────────────────────────────────────────
// export const {
//     login,
//     logout,
//     updateUser,
//     setLoading,
//     setError,
//     clearError
// } = authSlice.actions;

// // ── Selectors ────────────────────────────────────────────
// export const selectToken           = (state) => state.auth.token;
// export const selectUser            = (state) => state.auth.user;
// export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
// export const selectAuthLoading     = (state) => state.auth.loading;
// export const selectAuthError       = (state) => state.auth.error;
// export const selectIsOwner         = (state) => state.auth.user?.isOwner ?? false;
// export const selectUserRole        = (state) => state.auth.user?.role ?? null;
// export const selectWorkspaceId     = (state) => state.auth.user?.workspace ?? null;

// // Replaces your authHeaders prop everywhere
// export const selectAuthHeaders = (state) => ({
//     Authorization: `Bearer ${state.auth.token}`,
//     'Content-Type': 'application/json'
// });

// // ── Reducer ──────────────────────────────────────────────
// export default authSlice.reducer;












import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem("token") || null,
        user: JSON.parse(localStorage.getItem("user") || "null"),
        loading: true
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.loading = false;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.loading = false;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;