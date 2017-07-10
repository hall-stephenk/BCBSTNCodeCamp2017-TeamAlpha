'use strict';

var CodeCampModule = require('./class');

var testMe = 'this is a test string';

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Enter your data: ',
// (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);

//     rl.close();
// }
// );

console.log('Hello world!');
console.log('Value of testMe = ' + testMe);

var SlackBot = require('slackbots');

// create a bot 
var bot = new SlackBot({
    token: 'xoxb-210061661409-i8fa5rYctbjxTwbhouKcidLL', // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: 'Slack Bot 1',
});

CodeCampModule.registerBot(bot);

bot.on('message', CodeCampModule.messageCallback);

bot.on('start', function() {
    bot.postMessageToChannel('general', 'Slack Bot 1 Reporting...');
});

// process.exit(0);
