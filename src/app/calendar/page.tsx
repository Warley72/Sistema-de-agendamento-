"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateSelectArg } from "@fullcalendar/core";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarContainer,
  CalendarWrapper,
  DadeContainer,
  ModalOverlay,
  ModalContent,
  TitleStyle,
  TextStyle,
  CloseButton,
  ButtonStyle,
  ButtonsContainerModal,
} from "./style";
export default function Calendar() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateSelect = (info: DateSelectArg) => {
    setSelectedDate(info.startStr);
    setIsModalOpen(true);
  };
  return (
    <CalendarContainer>
      <CalendarWrapper>
        {isModalOpen && (
          <ModalOverlay>
            <ModalContent>
              <TitleStyle>Data Selecionada: {selectedDate}</TitleStyle>
              <TextStyle>Escolha um horário para agendar:</TextStyle>
              <DadeContainer>
                <h1>8:00</h1>
                <h1>8:00</h1>
                <h1>8:00</h1>
                <h1>8:00</h1>
                <h1>8:00</h1>
                <h1>8:00</h1>
                <h1>8:00</h1>
                <h1>8:00</h1>
              </DadeContainer>
              <ButtonsContainerModal>
                <Link href="/form">
                  <ButtonStyle
                    onClick={() => setIsModalOpen(false)}
                    type="submit"
                  >
                    Confirmar
                  </ButtonStyle>
                </Link>
                <CloseButton onClick={() => setIsModalOpen(false)}>
                  Fechar
                </CloseButton>
              </ButtonsContainerModal>
            </ModalContent>
          </ModalOverlay>
        )}
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          select={handleDateSelect}
          headerToolbar={{
            start: "",
            center: "title",
            end: "prev,next today",
          }}
        />
      </CalendarWrapper>
    </CalendarContainer>
  );
}
