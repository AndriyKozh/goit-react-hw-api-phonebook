import Form from './Form/Form';
import Filter from './Filter/Filter';
import { AppBlock } from './App.style';
import Phonebook from './Phonebook/Phonebook';
import PhoneStyle from './PhoneStyle/PhoneStyle';
import Clock from './Clock/Clock';
import { fetchContacts } from 'store/phoneSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { Audio } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppBlock className="App">
      <div className="content">
        <div className="emblem">
          <Form />
          <Filter />
          <Phonebook />
          {isLoading === 'loading' && <h2>Loading...</h2>}
          {error && <h2>An error acced: {error}</h2>}
        </div>
        <PhoneStyle />
      </div>
      <Clock />
    </AppBlock>
  );
};
