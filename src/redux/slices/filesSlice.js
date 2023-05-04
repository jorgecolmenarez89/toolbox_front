import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  list: [],
	loading: false,
	error: ''
}

export const fetchFiles = createAsyncThunk('files/fetchFiles', (data) => {
	console.log('data', data)
	return axios.get(`http://localhost:4000/api/files/list`, {
		params: {
			fileName: data ? data : {},
		},
	})
	.then((response) => response.data)
})

const filesSlice = createSlice({
  name: 'files',
  initialState,
  extraReducers: (builder) => {
		builder.addCase(fetchFiles.pending, (state) => {
			state.loading = true
		})
		builder.addCase(fetchFiles.fulfilled, (state, action) => {
			state.loading = false
			state.list = action.payload.data
			state.error = ''
		})
		builder.addCase(fetchFiles.rejected, (state, action) => {
			state.loading = false
			state.list = []
			state.error = action.error.rejected
		})
  },
})

export default filesSlice.reducer