const http = require('http')

//exe1
const serverExe1 = http.createServer(function (request, response) {

    if (request.method === 'GET' && request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write('Welcome to my server!')
        response.end();
    }
    else if (request.method === 'GET' && request.url === '/about') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write('This is the about page')
        response.end();

    }
    else if (request.method === 'GET' && request.url === '/contact') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write('email: estib@gmail.com phone: 0542301777')
        response.end();
    }
    else {
        response.writeHead(404);
        response.end('404 Not Found');
    }
}
)

let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

//exe2
const serverExe2 = http.createServer(function (request, response) {

    if (request.method === 'GET' && request.url === '/api/users') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write(users)
        response.end();
    }
    else if (request.method === 'GET' && request.url === '/about') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write('This is the about page')
        response.end();

    }
    else if (request.method === 'GET' && request.url === '/contact') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write('email: estib@gmail.com phone: 0542301777')
        response.end();
    }
    else {
        response.writeHead(404);
        response.end('404 Not Found');
    }
})

const port = 3000
serverExe1.listen(port, function () {
    console.log(`Node server1 created at port ${port}`)
})

serverExe2.listen(port, function () {
    console.log(`Node server2 created at port ${port}`)
})