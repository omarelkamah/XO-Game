export const winnerTest = [
  [0, 1, 2],
  [2, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  [3, 4, 5],
];

export const checkWinner = (boxes) => {
  for (let i = 0; i < winnerTest.length; i++) {
    const [a, b, c] = winnerTest[i];
    if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
      return {
        winner: boxes[a],
        line: winnerTest[i],
      };
    }
  }
  return null;
};
