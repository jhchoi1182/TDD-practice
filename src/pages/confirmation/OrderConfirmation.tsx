import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useOrderDetails } from "../../contexts/OrderDetails";
import AlertBanner from "../common/AlertBanner";
import { ComponentProps } from "../../App";

export default function OrderConfirmation({ setOrderPhase }: ComponentProps) {
  const { resetOrder } = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .post(`http://localhost:3030/order`)
      .then((response) => {
        setOrderNumber(response.data.orderNumber);
      })
      .catch((error) => setError(true));
  }, []);

  function handleClick() {
    resetOrder();
    setOrderPhase("inProgress");
  }

  const newOrderButton = <Button onClick={handleClick}>Create new order</Button>;

  if (error) {
    return (
      <>
        <AlertBanner message="" variant="" />
        {newOrderButton}
      </>
    );
  }

  if (orderNumber) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Thank You!</h1>
        <p>Your order number is {orderNumber}</p>
        <p style={{ fontSize: "25%" }}>as per our terms and conditions, nothing will happen now</p>
        {newOrderButton}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
