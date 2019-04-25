const process = require('process');
const os = require('os');
var _ = require('lodash');


console.log(new Date().toISOString(), 'Start bin/server.js')
console.log('os.cpus().length:', os.cpus().length)
console.log('os.platform():', os.platform())
console.log('os.arch():', os.arch())
console.log('os.type():', os.type())
console.log('os.release():', os.release())
console.log('process.pid:', process.pid)
console.log('process.platform:', process.platform)
console.log('process.title:', process.title)
console.log('process.version:', process.version)
console.log('process.cwd():', process.cwd())
console.log('new Date().getTimezoneOffset():', new Date().getTimezoneOffset())
console.log('as hours:', -new Date().getTimezoneOffset() / 60)

var objects = [
    { 'a': 1, 'b': 2 },
    { 'a': [3, 4], 'b': 4 },
];

var deep = _.cloneDeep(objects);
console.log(objects);
console.log(objects[1].a);
console.log(deep);


let c = 1;

if (c === 1) {
    let c = 2;
}

console.log(c);


