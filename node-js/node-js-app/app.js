const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="post">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node js</title></head>');
    res.write('<body>');
    res.write('<h1>Hello we are node js</>');
    res.write('</body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);