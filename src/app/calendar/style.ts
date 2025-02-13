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

  border: 1px solid black;
`;
export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  max-height: 805px;
  background-color: aliceblue;
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
