import { FormContact, FormLable, FormBtn, FormInput } from './Form.style';
import { addContact } from 'store/phoneSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Notiflix from 'notiflix';

const Form = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  Notiflix.Notify.init({
    className: 'notiflix-report',
    width: '320px',
    position: 'center-center',
    backgroundColor: '#f8f8f8',
    borderRadius: '25px',
    rtl: false,
    timeout: 1000,
    zindex: 4002,
    backOverlay: true,
    backOverlayColor: 'rgba(0,0,0,0.5)',
    backOverlayClickToClose: false,
    fontFamily: 'Quicksand',
    svgSize: '110px',
    plainText: true,
    titleFontSize: '16px',
    titleMaxLength: 34,
    messageFontSize: '13px',
    messageMaxLength: 400,
    buttonFontSize: '14px',
    buttonMaxLength: 34,
    cssAnimation: true,
    cssAnimationDuration: 360,
    cssAnimationStyle: 'fade', // 'fade' - 'zoom'

    success: {
      svgColor: '#32c682',
      titleColor: '#1e1e1e',
      messageColor: '#242424',
      buttonBackground: '#32c682',
      buttonColor: '#fff',
      backOverlayColor: 'rgba(50,198,130,0.2)',
    },
  });

  const handleSubmit = ev => {
    console.log(ev.currentTarget.elements.nameUser.value);
    ev.preventDefault();
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() ===
          ev.currentTarget.elements.nameUser.value.toLowerCase()
      )
    ) {
      Notiflix.Notify.warning('such a contact already exists');
    } else {
      dispatch(
        addContact({
          nameUser: name,
          numberUser: phone,
        })
      );
      Notiflix.Notify.success('contact added');
      setName('');
      setPhone('');
    }

    // dispatch(addContactGandler(form.elements.numberUser.value));
  };

  return (
    <FormContact>
      <h1>Phonebook</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <FormLable>
          <h4>New contact</h4>
          <FormInput
            // id={nameInputId}
            type="text"
            name="nameUser"
            value={name}
            onChange={ev => setName(ev.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
          />
        </FormLable>
        <FormLable>
          <FormInput
            // id={numberInputId}
            type="tel"
            name="numberUser"
            value={phone}
            onChange={ev => setPhone(ev.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Number"
          />
        </FormLable>
        <FormBtn type="submit">Add Contact</FormBtn>
      </form>
    </FormContact>
  );
};

export default Form;
