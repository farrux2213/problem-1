const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number (n): ", function (n) {
  n = parseInt(n);

  if (isNaN(n) || n <= 0) {
    console.log("Invalid input. Please enter a positive integer.");
    rl.close();
    return;
  }

  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  rl.close();
});
