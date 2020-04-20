var args = process.argv.slice(2);
console.log(args);



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



setTimeout(function () {
  process.exit();
}, 420000)
