import React, { useState } from 'react';
import { checkColumns, checkDiagonals, checkRows } from './helpers';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';

const style = {
  box: 'border-2 border-black w-32 h-32 flex justify-center items-center text-4xl',
  winner:
    'winner fixed w-full h-full flex justify-center items-center bg-black bg-opacity-50 text-white text-3x',
  ticTacToe:
    'tictactoe w-full h-full flex justify-center items-center flex-col gap-10 relative',
  ticTacToeContainer:
    'tictacktoe__container w-96 h-96 bg-yellow-600 flex flex-wrap',
};

const TicTacToe = () => {
  const [turns, setTurns] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [winningPattern, setWinningPattern] = useState([]);
  const [status, setStatus] = useState('');

  const [playerFirst, setPlayerFirst] = useState({
    status: true,
    value: 'X',
  });
  const [playerSecond, setPlayerSecond] = useState({
    status: false,
    value: 'Y',
  });

  const currentPlayer = playerFirst.status
    ? playerFirst.value
    : playerSecond.value;

  function handleClick({ x, y }) {
    //1) change player status
    setPlayerFirst({
      ...playerFirst,
      status: !playerFirst.status,
    });
    setPlayerSecond({
      ...playerSecond,
      status: !playerSecond.status,
    });

    //2) set updateTurns
    const updatedTurns = [...turns];
    updatedTurns[x][y] = currentPlayer;

    setTurns([...updatedTurns]);

    //3) check winner
    const winner = [
      checkColumns(turns, currentPlayer),
      checkRows(turns, currentPlayer),
      checkDiagonals(turns, currentPlayer),
    ];

    const isWinnerExist = winner.some(
      (ele) => ele.currentPlayer === currentPlayer
    );
    if (isWinnerExist) {
      setStatus(`winner is ${currentPlayer}`);

      //5) Set Winning Patterns
      const winnerPlayer = winner.find((ele) => ele !== false);

      if (winnerPlayer) {
        const coords = winnerPlayer.coords.map(
          (ele) => String(ele.row) + String(ele.col)
        );
        setWinningPattern(coords);
      }
    }

    //4) game draw
    const isTurnFinished = [...turns.flat()].every((ele) => ele !== '');
    if (!isWinnerExist && isTurnFinished) {
      setStatus('Game Draw');
    }
  }

  function handleToggle() {
    setStatus('');
    setTurns([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setWinningPattern([]);
  }

  return (
    <div className={style.ticTacToe}>
      <div className={style.ticTacToeContainer}>
        {turns.map((ele, idx) =>
          ele.map((ele, idx2) => (
            <button
              key={idx + idx2}
              className={`${style.box} ${
                winningPattern.includes(String(idx) + String(idx2))
                  ? 'bg-red-500 font-bold text-white'
                  : ''
              }`}
              onClick={() => handleClick({ x: idx, y: idx2 })}
              disabled={ele ? true : false}
            >
              {ele}
            </button>
          ))
        )}
      </div>
      <div className="current_player text-3xl">
        <p>{`${currentPlayer} Player Turn`}</p>
      </div>
      {status.length > 0 && (
        <div onClick={handleToggle} className={style.winner}>
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
