'use strict';

var bot = null;

exports.registerBot = function(theBot) {
        bot = theBot;
    };

exports.messageCallback = function(data) {
    console.log(data);
};
