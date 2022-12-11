var http = require("http");

const httpServer = http.createServer(handleServer);
const PORT = 8081;

function handleServer(req, res) {
    const { url } = req;
    if (url == '/') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end('Hello World')
    }
    else if (url == '/welcome') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end('Welcome to Dominos!')
    }
    else if (url == '/about') {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }
        ))
    }
    else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('Page not found');
    }
}


httpServer.listen(PORT, () => console.log(`Server connected on PORT ${PORT}`))

module.exports = httpServer;