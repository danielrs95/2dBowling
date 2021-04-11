import React from "react";
import { Button } from "react-bootstrap";

const Roll = ({ pin }) => {
  return (
    <Button variant='primary' type='submit'>
      {pin}
    </Button>
  );
};

export default Roll;
