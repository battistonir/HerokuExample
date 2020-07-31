const FileIO = require("./fileIO");

const fileIO = new FileIO();

fileIO.write("message.txt", "Hello World!");

const message = fileIO.read("message.txt");

const appended = fileIO.append("Goodbye World!");

console.log(message);
console.log(appended);
