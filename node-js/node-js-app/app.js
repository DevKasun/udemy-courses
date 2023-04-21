const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node js</title></head>');
    res.write('<body>');
    res.write('<h1>Hello we are node js</>');
    res.write('</body>');
    res.write('</html>');
})

server.listen(3000);