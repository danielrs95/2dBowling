import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Score = () => {
  const dispatch = useDispatch();

  const globalState = useSelector((state) => state.globalState);
  const { score, frame } = globalState;

  useEffect(() => {
    console.log("useEffect activado");
  }, [score, frame]);

  // let pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // Creamos array con length 10
  let pins = Array.from({ length: "10" });

  // Aseguramos que siempre existan 10 elementos en el array de score
  const emptyFrames = () => {
    let numFrames = 10 - score.length;
    let empty_frames = Array.from({ length: numFrames }).map(() => []);
    return score.concat(empty_frames);
  };

  emptyFrames();
  console.log(score);

  return (
    <>
      <thead>
        <td>Player</td>
        {pins.map((pin, i) => (
          <td key={i}>Frame {i + 1}</td>
        ))}
        <td>Score</td>

        <tr>
          <td>Player 1</td>
          {score.length > 1 ? (
            score.map((tableCell) => <td>{tableCell}</td>)
          ) : (
            <td></td>
          )}
          <td>xxxx</td>
        </tr>
      </thead>

      {/* <div className='frame-container'>
        <div className='frame'>
          <span className='first-pin'>{score[0]}</span>
          <span className='second-pin'>{score[1]}</span>

          <p>{score[0] + score[1]}</p>
        </div>
      </div> */}
    </>
  );
};

export default Score;
