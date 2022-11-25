// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { deleteContact, addContactGandler } from './phoneSlice';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',

//   async function (_, { rejectWithValue }) {
//     try {
//       const respons = await fetch(
//         'https://637e073b9c2635df8f96b35c.mockapi.io/contacts'
//       );
//       if (!respons.ok) {
//         throw new Error('Server Error');
//       }
//       const data = respons.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContacts = createAsyncThunk(
//   'contacts/deleteContact',
//   async function (id, { rejectWithValue, dispatch }) {
//     try {
//       const respons = await fetch(
//         `https://637e073b9c2635df8f96b35c.mockapi.io/contacts/${id}`,
//         { method: 'DELETE' }
//       );
//       if (!respons.ok) {
//         throw new Error("Can't delete contact. Server error");
//       }
//       dispatch(deleteContact({ id }));
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async function ({ nameUser, numberUser }, { rejectWithValue, dispatch }) {
//     try {
//       let user = {
//         name: nameUser,
//         phone: numberUser,
//       };

//       const respons = await fetch(
//         'https://637e073b9c2635df8f96b35c.mockapi.io/contacts',
//         {
//           method: 'POST',
//           headers: { 'Content-Type': 'aplication/json' },
//           body: JSON.stringify(user),
//         }
//       );
//       console.log(respons);
//       if (!respons.ok) {
//         throw new Error("Can't add contact. Server error");
//       }
//       const data = await respons.json();
//       console.log(data);
//       dispatch(addContactGandler(data));
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
