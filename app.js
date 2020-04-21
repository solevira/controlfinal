var args = process.argv.slice(2);
console.log(args);
var mins = 1;

const execFile = require('child_process').execFile;

const child = execFile('./app', args, (err, stdout, stderr) => {
  if (err) {
    throw err;
  }

  console.log(stdout);
});

const child2 = execFile('./app', ["--help"], (err, stdout, stderr) => {
  if (err) {
    throw err;
  }

  console.log(stdout);
});

var timeout = mins * 60000;

setTimeout(function () {
  process.exit(1);
}, timeout)




