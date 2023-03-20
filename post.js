import http from 'http'
import url from 'url'
import qs from 'querystring'

var app = http.createServer(function (request, response) {
  var _url = request.url;
  console.log(_url);
  var pathname = url.parse(_url, true).pathname;
  console.log(pathname);
  if (pathname === '/') {
    response.writeHead(200);
    response.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    <form action="/login" method="post">
      <p><input type="text" name="title" placeholder="title"></p>
      <p><textarea name="content" placeholder="content"></textarea></p>
      <input type="submit">
    </form>
    </body>
    </html>`);
  } else if (pathname === '/post_test') {
    var body = '';
    request.on('data', function (data) {
      body = body + data;
    });
    request.on('end', function () {
      var post = qs.parse(body);
      console.log(post);
      var title = post.title;
      var description = post.description;
      response.end(`
          <!doctype html>
          <html>
          <head>
            <title>POST</title>
            <meta charset="utf-8">
          </head>
          <body>
            <p>title : ${title}</p>
            <p>description : ${description}</p>
          </body>
          </html>
          `);
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);