import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Score = () => {
  const dispatch = useDispatch();

  const globalState = useSelector((state) => state.globalState);
  const { score } = globalState;
  // const pin1 = players.player1Score[0][0];
  // const pin2 = players.player1Score[0][1];

  return (
    <div className='frame-container'>
      <div className='frame'>
        <span className='first-pin'>{score[0]}</span>
        <span className='second-pin'>{score[1]}</span>

        <p>{score[0] + score[1]}</p>
      </div>
    </div>
  );
};

export default Score;
