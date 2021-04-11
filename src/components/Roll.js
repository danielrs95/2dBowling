import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPin } from "../actions/playerActions";

const Roll = ({ pin }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setPin(pin));
  };

  return (
    <Button variant='primary' type='submit' onClick={clickHandler}>
      {pin}
    </Button>
  );
};

export default Roll;
