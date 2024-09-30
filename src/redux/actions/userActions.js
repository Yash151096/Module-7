import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

const API_URL = 'http://localhost:5000/users';

export const getUsers = () => async (dispatch) => {
  const response = await axios.get(API_URL);
  dispatch({ type: GET_USERS, payload: response.data });
};

export const addUser = (user) => async (dispatch) => {
  const response = await axios.post(API_URL, user);
  dispatch({ type: ADD_USER, payload: response.data });
};

export const updateUser = (user) => async (dispatch) => {
  const response = await axios.put(`${API_URL}/${user.id}`, user);
  dispatch({ type: UPDATE_USER, payload: response.data });
};

export const deleteUser = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch({ type: DELETE_USER, payload: id });
};
