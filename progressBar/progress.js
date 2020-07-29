const progress = require('progress');
const chalk = require('chalk');

var bar = new progress(':bar', 10 );
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log(chalk.yellow('Completed'))
    clearInterval(timer);
  }
}, 100);