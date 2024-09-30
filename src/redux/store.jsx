import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer';

// Create the Redux store with thunk middleware automatically included
const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

// Create a Redux provider component
const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export { store, ReduxProvider };
