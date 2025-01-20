console.log('Hi! Please input anything:');
const fs = require('fs');

rl.on('line', (input) => {
  let data = input;
  fs.writeFile('./02-write-file/text.txt', data);
})