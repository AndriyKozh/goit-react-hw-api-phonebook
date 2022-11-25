import PhoneBookList from 'components/Contact/PhoneBookList';
import { useSelector } from 'react-redux';

const Phonebook = () => {
  const contactList = useSelector(state => state.contacts.contacts);
  const contactFilter = useSelector(state => state.contacts.filter);

  const filterList = contactList.filter(contact => {
    return contact.name.toLowerCase().includes(contactFilter);
  });

  return (
    <div className="contacts">
      {filterList.map((contact, index) => {
        return <PhoneBookList key={index} {...contact} />;
      })}
    </div>
  );
};

export default Phonebook;
