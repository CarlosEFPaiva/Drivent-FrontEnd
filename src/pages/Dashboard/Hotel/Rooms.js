import styled from "styled-components";
import Room from "./Room";

export default function Rooms(props) {
  const { hotels, hotelSelected, selectedRoom, setSelectedRoom, previousRoomId, setPreviousRoomId, clearPreviusRoom } = props;

  return (
    <RoomsContainer hidden={hotelSelected !== "" ? false : true}>
      <Subtitle>Ótima pedida! Agora escolha seu quarto:</Subtitle>
      <OptionsContainer>
        {hotels.map((hotel) => {
          if (hotel.id === hotelSelected) {
            return (
              hotel.rooms.map((room, key) => {
                return (
                  <Room key={key} selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} previousRoomId={previousRoomId} setPreviousRoomId={setPreviousRoomId} thisRoom={room} clearPreviusRoom={clearPreviusRoom} />
                );
              })
            );
          }
        })}
      </OptionsContainer>
    </RoomsContainer>
  );
};

const RoomsContainer = styled.div`
  display: ${props => props.hotelSelected};
`;

const Subtitle = styled.p`
  color: #8E8E8E;
  font-size: 20px;
  margin-bottom: 20px;
`;

const OptionsContainer = styled.div`
  display: grid;
  cursor: pointer;
  grid-template-columns: auto auto auto auto;
`;
