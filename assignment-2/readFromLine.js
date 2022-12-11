const readLine = require('readline');

const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log(process.stdin);
// r1.question('Please enter your name: ', (userName) => {
//     console.log(`Hello ${userName}`)
//     r1.close();
// })
