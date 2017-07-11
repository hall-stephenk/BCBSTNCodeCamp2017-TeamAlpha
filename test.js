'use strict';

// parse out our API key from the file
var fs = require('fs');
var apiKey = fs.readFileSync('./slackApiKey.txt', 'utf8');

var CodeCampModule = require('./class');

var SlackBot = require('slackbots');

// create a bot 
var bot = new SlackBot({
    token: apiKey, // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: CodeCampModule.botName,
});

bot.on('message', function(data) {
    if (data.type == 'message' && data.username != CodeCampModule.botName) {
        if (data.text == 'shutdown secret') {
            process.exit(0);
        }

        bot.postMessage(data.channel, CodeCampModule.messageReceived(bot, data.text));
    }
});

bot.on('start', function() {
    // bot.postMessageToChannel('general', CodeCampModule.botName + ' reporting...');
});

// process.exit(0);
