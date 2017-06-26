"use strict";

testMe = "this"

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your data: ",
(answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
}
);

console.log("Hello world!");

