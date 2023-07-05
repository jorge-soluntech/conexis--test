// Here there is the store or your global state management
// redux - zustand - recoil - context api etc
// In this folder you will create all logic about your entities and reducers to management the state

import { configureStore } from '@reduxjs/toolkit';

import RequestService from '@/infrastructure/services';

import buyersSlice from './buyersSlice/buyersSlice';
import candidatesSlice from './candidatesSlice/candidatesSlice';
import dashboardReducer from './dashboardSlice/dashboardSlice';
import jobsSlice from './jobsSlice/jobsSlice';
import onboardingSlice from './onboardingSlice/onboardingSlice';
import postJobSlice from './postJobsSlice/postJobsSlice';
import roleReducer from './roleSlice/roleSlice';
import supplierSlice from './supplierSlice/supplierSlice';
import uiReducer from './uiSlice/uiSlice';
import workShiftSlice from './workShiftsSlice/workShiftsSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    dashboard: dashboardReducer,
    role: roleReducer,
    buyers: buyersSlice,
    suppliers: supplierSlice,
    onboarding: onboardingSlice,
    workShifts: workShiftSlice,
    candidates: candidatesSlice,
    jobs: jobsSlice,
    postJobs: postJobSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: RequestService,
      },
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
