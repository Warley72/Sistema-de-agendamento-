import styled from "styled-components";

export const ButtonsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
  min-height: 100vh;
`;
export const EmployeesContainer = styled.div`
  color: #805151;
  background: linear-gradient(to right, #e5c8c7, #ffaeb2);
  padding: 15px 120px;
  border-radius: 50px;
  font-family: ${(props) => props.theme.fonts.regular};
  cursor: pointer;
  border: 2px solid #ffaeb2;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  }
`;
export const StyleTitle = styled.h1`
  font-size: clamp(18px, 4vw, 26px);
  text-align: center;
`;
export const StyleText = styled.p`
  font-size: 18px;
`;
