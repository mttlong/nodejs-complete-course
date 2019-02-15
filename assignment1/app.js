const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  //console.log('URL: ' + url + '\n method: ' + method);
  if (url === '/') {   
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title><head>');
    res.write('<body><h1>Hi! Welcome to this awesome page!</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data',(chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });

  }
  if (url === '/users') {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
    res.write('</html>');
    return res.end();  
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
