import { PhonebookBlock, PhoneBookItem, PhoneBookBtn } from './Contacts.style';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'store/phoneSlice';
import PropTypes from 'prop-types';

let a = 0;

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
