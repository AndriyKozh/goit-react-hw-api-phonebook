import { PhonebookBlock, PhoneBookItem, PhoneBookBtn } from './Contacts.style';
import { useDispatch } from 'react-redux';
import { deleteContact, deleteContacts } from 'store/phoneSlice';
import PropTypes from 'prop-types';

const PhoneBookList = ({ id, phone, name }) => {
  const dispatch = useDispatch();

  return (
    <PhonebookBlock>
      <PhoneBookItem>
        {name}: {phone}
      </PhoneBookItem>
      <PhoneBookBtn type="button " onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </PhoneBookBtn>
    </PhonebookBlock>
  );
};

PhoneBookList.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.string),
};

export default PhoneBookList;
