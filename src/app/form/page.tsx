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
          <Input type="tel" placeholder="Numero de celular" />
        </InputContainer>
        <InputContainer>
          <select>
            <option value="servico1">Qual serviço?</option>
            <option value="servico2">Serviço 2</option>
            <option value="servico3">Serviço 3</option>
          </select>
        </InputContainer>

        <ButtonStyle type="submit">Confirmar</ButtonStyle>
      </FormWrapper>
    </FormContainer>
  );
}
