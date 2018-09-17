console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
console.log(_.isString(true));
console.log(_.isString('Aartiverma'));

var filteredArray = _.uniq(['Aartiverma'])
console.log(filteredArray);

console.log('Result:', notes.add(9, -2));

var command = process.argv[2];
console.log(process.argv);

if (command ==='add'){
    console.log('Adding all new notes');

}
else if(command ==='list'){
    console.log('listing all notes')
}
else if(command === 'read'){
    console.log('reading note');
}
else if (command === 'remove') {
    console.log('remove');

}
else
console.log('no command found');

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
