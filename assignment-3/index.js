const http = require('http');
const fs = require('fs');

const server = http.createServer();

// Custom name
let yourName = "Ravi"

//For writing the data to html file
const wstream = fs.createWriteStream('index.html');

wstream.write(`<h1> Hello World </h1><p> This is ${yourName}... </p>`, () => console.log('File has written'));

// Error handling
wstream.on('error', () => console.log("Couldn't write the file, something went wrong"))

wstream.end();

server.on('request', (req, res) => {

    // Reading the file
    const rstream = fs.createReadStream('index.html', { encoding: 'utf-8' });

    // Error handling
    rstream.on("error", (err) => {
        res.end("There is something wrong while reading the file");
    });


    rstream.pipe(res);
    /** OR could be written this way instead of pipe method
    
    rstream.on('data', (chunk) => {
        res.end(chunk);
    })
    rstream.on("end", (err) => {
        console.log("ALl the data from file has been read");
        res.end();
    })
     */

})


server.listen(5000, () => console.log('Server is up on 5000'))