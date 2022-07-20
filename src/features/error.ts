import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type IsErrorState = {
  isError: boolean;
};

const initialState: IsErrorState = {
  isError: false,
};

export const isErrorSlice = createSlice({
  name: 'isError',
  initialState,
  reducers: {
    isErrorGotten: (
      state,
      action: PayloadAction<{
        isError: boolean;
      }>,
    ) => ({
      ...state,
      isError: action.payload.isError,
    }),
  },
});
