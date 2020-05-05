const http = require('http');
const server = http.createServer((request, response) => {
  switch (request.url) {
    case '/':
      response.write('h');
      break;
    case '/post':
      response.write('j');
      break;
    default:
      response.writeHead(404);
      response.write('404');
  }
  response.end();
});

server.listen(3000, () => {
  console.log('服务已启动');
});