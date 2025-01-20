const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Hi! Please input anything (for exit type "exit"):');

rl.on('line', (input) => {
  if (input.trim().toLowerCase() === 'exit') {
    rl.close();
  } else {
    fs.appendFile('./02-write-file/text.txt', input + '\n', (err) => {
      if (err) throw err;
    });
  }
});

rl.on('SIGINT', () => {
  rl.close();
});

rl.on('close', () => {
  console.log('Goodbye!');
});
