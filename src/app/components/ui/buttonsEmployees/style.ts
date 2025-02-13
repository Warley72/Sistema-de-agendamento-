import styled from "styled-components";
import { breakpoints } from "@/styles/theme";
import Link from "next/link";

export const ButtonsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  min-height: 100vh;
  @media (max-width: ${breakpoints.mobile}) {
    margin: 0px 20px;
  }
`;
export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  max-width: 420px;
  height: 75px;
`;
export const EmployeesContainer = styled.div`
  color: #805151;
  background: linear-gradient(to right, #e5c8c7, #ffaeb2);
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
  margin-top: 15px;
  font-size: 20px;
  text-align: center;
`;
export const StyleText = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.regular};
  padding-bottom: 10px;
  padding-left: 115px;

  @media (max-width: ${breakpoints.mobile}) {
    padding-left: 80px;
  }
  @media (max-width: ${breakpoints.mobileP}) {
    padding-left: 40px;
  }
`;
