import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async function (_, { rejectWithValue }) {
    try {
      const respons = await fetch(
        'https://637e073b9c2635df8f96b35c.mockapi.io/contacts'
      );
      if (!respons.ok) {
        throw new Error('Server Error');
      }
      const data = respons.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const respons = await fetch(
        `https://637e073b9c2635df8f96b35c.mockapi.io/contacts/${id}`,
        { method: 'DELETE' }
      );
      if (!respons.ok) {
        throw new Error("Can't delete contact. Server error");
      }
      dispatch(deleteContact({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async function ({ nameUser, numberUser }, { rejectWithValue, dispatch }) {
    try {
      let user = {
        createdAt: new Date().toISOString(),
        name: nameUser,
        phone: numberUser,
      };

      const respons = await fetch(
        'https://637e073b9c2635df8f96b35c.mockapi.io/contacts',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=UTF-8' },
          body: JSON.stringify(user),
        }
      );
      console.log(respons);
      if (!respons.ok) {
        throw new Error("Can't add contact. Server error");
      }
      const data = await respons.json();
      console.log(data);
      dispatch(addContactGandler(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Error Helper
const setError = (state, action) => {
  state.isLoading = 'rejected';
  state.error = action.payload;
};

const phoneSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: [],
    isLoading: null,
    error: null,
    filter: '',
  },
  reducers: {
    addContactGandler(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    filterText(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = 'loading';
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = 'resolve';
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: setError,
    [deleteContacts.rejected]: setError,
    [addContact.rejected]: setError,
  },
});

export const phoneReducer = phoneSlice.reducer;

export const { addContactGandler, deleteContact, filterText } =
  phoneSlice.actions;
