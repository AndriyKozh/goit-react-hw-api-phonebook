import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
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
  async function ({ name, phone }, { rejectWithValue, dispatch }) {
    console.log(name);
    try {
      const user = {
        name: name,
        phone: phone,
        id: uuidv4(),
      };

      const respons = await fetch(
        'https://637e073b9c2635df8f96b35c.mockapi.io/contacts',
        {
          method: 'POST',
          headers: { 'Content-Type': 'aplication/json' },
          body: JSON.stringify(user),
        }
      );
      if (!respons.ok) {
        throw new Error("Can't add contact. Server error");
      }
      const data = await respons.json();
      console.log(data);
      return data;
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
      console.log(state);
      console.log(action);

      state.contacts.push({
        user: action.payload,

        isComplet: false,
        id: uuidv4(),
      });
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
  },
});

const persistConfig = {
  key: 'phoneBook',
  storage,
  whitelist: ['contacts'],
};
export const phoneReducer = persistReducer(persistConfig, phoneSlice.reducer);

export const { addContactGandler, deleteContact, filterText } =
  phoneSlice.actions;
