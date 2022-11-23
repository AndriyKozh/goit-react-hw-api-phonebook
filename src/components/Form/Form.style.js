import styled from 'styled-components';

export const FormContact = styled.div`
  padding: 10px;
  position: relative;
  margin-bottom: 50px;
`;

export const FormLable = styled.label`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  border: transparent;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 30px;
  border: transparent;
  padding: 4px 10px 4px 10px;

  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;

export const FormBtn = styled.button`
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  padding: 4px 20px 4px 20px;
  background-color: #fff;
  border: none;
  margin-top: 3px;
  border-radius: 5px;
  left: 0;

  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #2a404e;
    transition-duration: 250ms;
  }
`;
