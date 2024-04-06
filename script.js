let highScore = 800;
let userScore = 700;

if (userScore >= highScore) {
  console.log(`New high score: ${userScore}`);
  highScore = userScore;
} else {
  console.log(
    `Good game. But ${userScore} is not greater than ${highScore}. Keep trying!`
  );
}

console.log({ highScore });
console.log({ userScore });
