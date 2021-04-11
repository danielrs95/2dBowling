import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Score = () => {
  const dispatch = useDispatch();

  const playerLogin = useSelector((state) => state.playerLogin);
  const { players } = playerLogin;
  const pin1 = players.player1Score[0][0];
  const pin2 = players.player1Score[0][1];

  return (
    <div className='frame-container'>
      <div className='frame'>
        <span className='first-pin'>{pin1}</span>
        <span className='second-pin'>{pin2}</span>

        <p>{pin1 + pin2}</p>
      </div>
    </div>
  );
};

export default Score;
