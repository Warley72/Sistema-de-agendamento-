import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0px 20px;
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 45px 30px;

  background: linear-gradient(to right, #e5c8c7, #ffaeb2);
  color: #805151;
  border-radius: 15px;
  border: 1px solid #ffaeb2;
  width: 100%;
  max-width: 420px;
`;
export const TitleStyle = styled.h1`
  font-size: 21px;
  text-align: center;
  font-weight: bold;
  padding-bottom: 40px;
  font-family: ${(props) => props.theme.fonts.regular};
`;
export const InputContainer = styled.div`
  width: 100%;
  max-width: 360px;
  list-style: none;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;
export const Input = styled.input`
  width: 100%;
  max-width: 360px;
  height: 55px;
  padding: 0px 20px;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  text-decoration: none;
  outline: none;
  background-color: #fff3fd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  &::placeholder {
    width: 100%;
    color: #805151;
    font-weight: bold;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
export const ButtonStyle = styled.button`
  width: 100%;
  max-width: 200px;
  height: 55px;
  color: #805151;
  font-size: 18px;
  font-weight: bold;
  background-color: #fff3fd;
  border-radius: 5px;
  border: 2px solid #e17a7e;
  cursor: pointer;
  border: 2px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(90deg, #e17a7e, #87605f);
  background-origin: border-box;
  background-clip: padding-box, border-box;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;
