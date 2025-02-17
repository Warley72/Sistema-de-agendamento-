import styled from "styled-components";

export const CalendarContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const ButtonsContainerModal = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const DadeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;
export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  max-height: 850px;
  background: linear-gradient(to right, #e5c8c7, #ffaeb2);
  border: 2px solid #ffaeb2;
  border-radius: 10px;

  .fc-toolbar-title {
    margin-top: 15px;
    color: #805151;
    font-size: 26px;
    font-weight: bold;
  }
  .fc-col-header-cell {
    color: #805151;
    font-size: 20px;
    border: none;
    font-family: ${(props) => props.theme.fonts.regular};
    text-transform: uppercase;
  }
  .fc-daygrid-day {
    border: none;
    padding: 5px;
  }
  .fc-scrollgrid {
    border: none;
    cursor: pointer;
  }
  .fc-day-today {
    border-radius: 15px;
  }
  .fc .fc-daygrid-day.fc-day-today {
    border: 5px solid transparent;
    background-image: linear-gradient(white, white),
      linear-gradient(90deg, #e17a7e, #87605f);
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }
  .fc-daygrid-day-frame {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff3fd;
    color: #805151;
    font-size: 20px;
    font-weight: bold;
    transition: 1s;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

    &:hover {
      transform: translateY(-5px);
      background-color: rgb(253, 203, 207);
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
    }
  }
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  pointer-events: auto;
`;
export const ModalContent = styled.div`
  background: linear-gradient(to right, #e5c8c7, #ffaeb2);
  border: 2px solid #ffaeb2;
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
  padding: 20px;
`;
export const TitleStyle = styled.h1`
  color: #805151;
  font-size: 24px;
  font-weight: bold;
`;
export const TextStyle = styled.p`
  color: #805151;
  font-size: 18px;
  font-weight: bold;
`;
export const CloseButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  border: none;
  background-color: #fff3fd;
  color: #805151;
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
    transform: translateY(-1px);
  }
`;
export const ButtonStyle = styled.button`
  width: 100%;
  max-width: 120px;
  height: 40px;
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
    transform: translateY(-1px);
  }
`;
