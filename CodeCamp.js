<<<<<<< HEAD
'use strict'; // I was here!
=======
'use strict'; // somebody else changed this!
>>>>>>> c08b81057331be5f54ce909aa630f245e2cf35a7

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
