import {
  ButtonsContainer,
  EmployeesContainer,
  StyleTitle,
  StyleText,
} from "./style";

export default function ButtonsEmployees() {
  return (
    <ButtonsContainer>
      <EmployeesContainer>
        <StyleTitle>Trabalho 01</StyleTitle>
        <StyleText>Nome completo grande</StyleText>
      </EmployeesContainer>
      <EmployeesContainer>
        <StyleTitle>Trabalho 02</StyleTitle>
        <StyleText>Nome completo grande</StyleText>
      </EmployeesContainer>
      <EmployeesContainer>
        <StyleTitle>Trabalho 03</StyleTitle>
        <StyleText>Nome completo grande</StyleText>
      </EmployeesContainer>
    </ButtonsContainer>
  );
}
