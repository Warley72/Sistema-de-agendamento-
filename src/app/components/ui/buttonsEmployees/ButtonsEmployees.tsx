import {
  ButtonsContainer,
  EmployeesContainer,
  LinkStyle,
  StyleTitle,
  StyleText,
} from "./style";

export default function ButtonsEmployees() {
  return (
    <ButtonsContainer>
      <LinkStyle href="/calendar">
        <EmployeesContainer>
          <StyleTitle>Trabalho 01</StyleTitle>
          <StyleText>Nome completo grande</StyleText>
        </EmployeesContainer>
      </LinkStyle>
      <LinkStyle href="/form">
        <EmployeesContainer>
          <StyleTitle>Trabalho 02</StyleTitle>
          <StyleText>Nome completo grande</StyleText>
        </EmployeesContainer>
      </LinkStyle>
      <LinkStyle href="/form">
        <EmployeesContainer>
          <StyleTitle>Trabalho 03</StyleTitle>
          <StyleText>Nome completo grande</StyleText>
        </EmployeesContainer>
      </LinkStyle>
    </ButtonsContainer>
  );
}
