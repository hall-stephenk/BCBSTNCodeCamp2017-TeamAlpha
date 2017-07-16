'use strict';

// --------------------------------------
// BEGIN CODING HERE
// --------------------------------------

// this is the name of your bot on Slack as it's seen by other users
var botName = 'Slack Bot 1';

function messageReceived(msg) {
    if (msg.includes('what')) {
        return 'Why not?';
    } else {
        return 'Fascinating...';
    }
}

function youAreBored(data) {
    return 'Anybody there?';
}

// --------------------------------------
// END CODING HERE
// --------------------------------------



















exports.messageReceived = messageReceived;
exports.youAreBored = youAreBored;
exports.botName = botName;
