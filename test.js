'use strict';

var CodeCampModule = require('./class');

var SlackBot = require('slackbots');

// create a bot 
var bot = new SlackBot({
    token: '', // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: 'Slack Bot 1',
});

CodeCampModule.registerBot(bot);

bot.on('message', function(data) {
    data.
});

bot.on('start', function() {
    bot.postMessageToChannel('general', 'Slack Bot 1 Reporting...');
});

// process.exit(0);
