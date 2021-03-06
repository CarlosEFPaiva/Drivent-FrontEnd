import { useContext } from "react";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";
import usePayment from "../hooks/usePayment";
import BlankSpace from "./BlankSpace";

import Confirmed from "./Dashboard/Payment/Confirmed";
import CreditCardForm from "./Dashboard/Payment/CreditCardForm";

export default function ConfirmPayment() {
  const { loading, confirmPayment } = usePayment();
  const { user } = useContext(UserContext).userData;
  const finalPrice = Number(user.accomodation.price) + Number(user.ticket.price);
  let userTicket = user.ticket.name;
  if (user.ticket.name === "Presencial") userTicket+= ` + ${user.accomodation.name}`; 

  return (
    <>
      <BlankSpace
        isTransparent
        isLoading
        isShown={loading}
      />
      <Subtitle>Ingresso escolhido</Subtitle>
      <Card>
        <h3>{userTicket}</h3>
        <p>R$ {finalPrice}</p>
      </Card>
      <Subtitle>Pagamento</Subtitle>
      {user.status.id === 3 ? 
        <CreditCardForm confirmPayment={confirmPayment} loading={loading} />
        :
        <Confirmed />
      }
    </>
  );
}

const Subtitle = styled.h2`
  font-size: 20px;
  color: #8E8E8E;
  margin-bottom: 17px;
  margin-top: 40px;
`;

const Card = styled.div`
  width: 290px;
  height: 108px;
  background: #FFEED2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  h3 {
    font-size: 16px;
    line-height: 19px;
    color: #454545;
  }

  p {
    font-size: 14px;
    line-height: 25px;
    color: #898989;
  }
`;
