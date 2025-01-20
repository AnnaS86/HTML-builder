const fs = require('fs');

const readStream = fs.createReadStream('./01-read-file/text.txt', {
  encoding: 'utf-8',
});

readStream.on('data', (chunk) => {
  process.stdout.write(chunk);
});

readStream.on('error', (err) => {
  console.error(err.message);
});
