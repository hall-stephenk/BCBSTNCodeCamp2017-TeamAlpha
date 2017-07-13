'use strict';

// parse out our API key from the file
var fs = require('fs');
var apiKey = fs.readFileSync('./slackApiKey.txt', 'utf8');

var CodeCampModule = require('./CodeCamp');

var SlackBot = require('slackbots');

// create a bot 
var bot = new SlackBot({
    token: apiKey, // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: CodeCampModule.botName,
});

// basic message handler to pass over to CodeCamp module
var lastChannel = '';
bot.on('message', function(data) {
    if (data.type == 'message' && data.username != CodeCampModule.botName) {
        var lowerMsg = data.text.toLowerCase();

        if (lowerMsg == 'shutdown secret') {
            process.exit(0);
        }

        bot.postMessage(data.channel, CodeCampModule.messageReceived(lowerMsg));
        lastChannel = data.channel;

        // reset the boredom timer
        createBoredomTimer();
    }
});

// timer for boredom detection
var boredomTimer = null;
function boredomHandler() {
    bot.postMessage(lastChannel, CodeCampModule.youAreBored());

    boredomTimer = setTimeout(boredomHandler, 8000);
}

function createBoredomTimer() {
    if (null != boredomTimer) {
        clearTimeout(boredomTimer);
        boredomTimer = null;
    }

    if ('' != lastChannel) {
        boredomTimer = setTimeout(boredomHandler, 8000);
    }
}

// bot.on('start', function() {
//     // bot.postMessageToChannel('general', CodeCampModule.botName + ' reporting...');
// });

// process.exit(0);
