import { FiWifi } from 'react-icons/fi';
import { FaSignal } from 'react-icons/fa';
import { BsBatteryFull } from 'react-icons/bs';

const PhoneStyle = () => {
  return (
    <div>
      <div className="bottomUnderline"></div>
      <div className="sensor"></div>
      <div className="dynamik"></div>
      <div className="btn1"></div>
      <div className="btn2"></div>
      <div className="btn3"></div>
      <div className="btn4"> </div>
      <ul className="icon">
        <li className="icon1">
          <FaSignal />
        </li>
        <li className="icon1">
          <FiWifi />
        </li>
        <li className="icon1">
          <BsBatteryFull />
        </li>
      </ul>
    </div>
  );
};

export default PhoneStyle;
