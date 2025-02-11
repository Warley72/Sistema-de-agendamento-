"use client";
import {
  FormContainer,
  FormWrapper,
  TitleStyle,
  InputContainer,
  Input,
  ButtonStyle,
} from "./style";

export default function Form() {
  return (
    <FormContainer>
      <FormWrapper>
        <TitleStyle>Agendamento</TitleStyle>
        <InputContainer>
          <Input type="text" placeholder="Nome" />
        </InputContainer>
        <InputContainer>
          <Input type="email" placeholder="Email" />
        </InputContainer>
        <InputContainer>
          <Input type="password" placeholder="Senha" />
        </InputContainer>
        <InputContainer>
          <Input type="password" placeholder="Senha" />
        </InputContainer>

        <ButtonStyle type="submit">Confirmar</ButtonStyle>
      </FormWrapper>
    </FormContainer>
  );
}
