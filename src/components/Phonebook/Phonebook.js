import PhoneBookList from 'components/Contact/PhoneBookList';
import { useSelector } from 'react-redux';

const Phonebook = () => {
  const contactList = useSelector(state => state.contacts.contacts);
  const contactFilter = useSelector(state => state.contacts.filter);

  const filterList = contactList.filter(contact => {
    return contact.name.toLowerCase().includes(contactFilter);
  });

  // const filtredContact = contactList.filter(contact =>
  //   contact.name.includes(contactFilter)
  // );
  // console.log(filtredContact);

  return (
    <div className="contacts">
      {filterList.map((contact, index) => {
        return <PhoneBookList key={index} {...contact} />;
      })}
    </div>
  );
};

export default Phonebook;
