import styled from 'styled-components';

export const PhonebookBlock = styled.div`
  margin-bottom: 5px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

export const PhoneBookItem = styled.p`
  margin-bottom: 10px;
  color: #d4d4d4;
`;

export const PhoneBookDot = styled.div`
  width: 5px;
  height: 5px;
  border: 1px solid #000;
  margin-right: 10px;
  border-radius: 50%;
  background-color: #000;
`;

export const PhoneBookBtn = styled.div`
  margin-left: auto;

  padding: 3px 15px 3px 15px;
  border: none;
  font-weight: normal;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #ef4444;
    color: #fff;
  }
`;
