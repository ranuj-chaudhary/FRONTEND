const initialTurns = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

export function gameFinish(updatedTurn) {
  const isFinished = [...updatedTurn.flat()].every((ele) => ele !== '');
  return isFinished;
}

export function checkRows(turns, currentPlayer) {
  for (let i = 0; i < turns.length; i++) {
    const rowTurns = [];
    for (let j = 0; j < turns.length; j++) {
      rowTurns.push({
        value: turns[i][j],
        indices: {
          row: i,
          col: j,
        },
      });
    }
    const isWinner = rowTurns.every((ele) => ele.value === currentPlayer);
    console.log(rowTurns);
    console.log(isWinner);
    if (isWinner) {
      const coords = rowTurns.map((ele) => ele.indices);
      return { currentPlayer, coords };
    }
  }
  return false;
}

export function checkColumns(turns, currentPlayer) {
  for (let i = 0; i < turns.length; i++) {
    let currentColumnTurns = [];
    for (let j = 0; j < turns.length; j++) {
      currentColumnTurns.push({
        value: turns[j][i],
        indices: {
          row: j,
          col: i,
        },
      });
    }
    const isWinner = currentColumnTurns.every(
      (ele) => ele.value === currentPlayer
    );

    if (isWinner) {
      const coords = currentColumnTurns.map((ele) => ele.indices);
      return { currentPlayer, coords };
    }
  }
  return false;
}

export function checkDiagonals(turns, currentPlayer) {
  const leftDigonal = [];
  for (let i = 0; i < turns.length; i++) {
    leftDigonal.push({
      value: turns[i][i],
      indices: {
        row: i,
        col: i,
      },
    });
  }
  let isWinner = leftDigonal.every((ele) => ele.value === currentPlayer);
  if (isWinner) {
    const leftDigonalCoords = leftDigonal.map((ele) => ele.indices);
    return { currentPlayer, coords: leftDigonalCoords };
  }

  const rightDiagonal = [];
  for (let i = 0; i < turns.length; i++) {
    rightDiagonal.push({
      value: turns[turns.length - 1 - i][i],
      indices: {
        row: turns.length - 1 - i,
        col: i,
      },
    });
  }
  isWinner = rightDiagonal.every((ele) => ele.value === currentPlayer);
  if (isWinner) {
    const rightDiagonalCoords = rightDiagonal.map((ele) => ele.indices);
    return { currentPlayer, coords: rightDiagonalCoords };
  }
  return false;
}
