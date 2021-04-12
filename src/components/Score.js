import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Score = () => {
  const dispatch = useDispatch();

  const globalState = useSelector((state) => state.globalState);
  const { score, frame } = globalState;

  const [frames, setFrames] = useState([]);
  const [playerScore, setPlayerScore] = useState("");

  useEffect(() => {
    // Creamos los frames que usaremos para la tabla
    // Hacemos el estado dependiende de  score
    setFrames(emptyFrames());
    setPlayerScore(calculateScore(score));
  }, [score]);

  // let pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // Creamos array con length 10
  let pins = Array.from({ length: "10" });

  // Aseguramos que siempre existan 10 elementos en el array de score
  const emptyFrames = () => {
    let numFrames = 10 - score.length;
    let empty_frames = Array.from({ length: numFrames }).map(() => []);
    let new_frames = score.concat(empty_frames);
    return new_frames;
  };

  const calculateScore = (frames) => {
    // Flat al array
    let flatArray = [].concat.apply([], frames);

    for (let i = 0; i < frames.length; i++) {
      // Miramos si el frame suma 10 puntos
      let frameSum = frames[i].reduce((res, curr) => res + curr, 0) === 10;
      // Miramos si es strike, es decir, 10 puntos en 1 tiro (length===1)
      let isStrike = frameSum && frames[i].length === 1;
      let isSpare = frameSum && frames[i].length === 2;

      if (isStrike) {
        console.log("STRIKE!");
      } else if (isSpare) {
        console.log("spare");
      }
    }

    if (flatArray.length > 0) {
      return flatArray.reduce((res, curr) => {
        return res + curr;
      });
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <table className='table table-bordered'>
        <thead>
          <td>Player</td>
          {pins.map((pin, i) => (
            <td key={i}>Frame {i + 1}</td>
          ))}
          <td>Score</td>

          <tr>
            <td>Player 1</td>
            {frames.map((tableCell) => (
              <td>{tableCell}</td>
            ))}
            <td>{playerScore}</td>
          </tr>
        </thead>
      </table>
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
