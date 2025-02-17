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
          <Input type="text" placeholder="Dia" />
        </InputContainer>
        <InputContainer>
          <Input type="text" placeholder="Hora" />
        </InputContainer>
        <InputContainer>
          <Input type="tel" placeholder="Numero Whatsapp" />
        </InputContainer>
        
        <ButtonStyle type="submit">Confirmar</ButtonStyle>
      </FormWrapper>
    </FormContainer>
  );
}
