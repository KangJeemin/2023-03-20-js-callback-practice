import { response } from 'express';
import http from 'http';

const server = http.createServer(function(request, response) {

  console.dir(response);
  response.statusCode = 200;
  response.setHeader('Contant-Type','text/plain');
  response.end('Hello World');
})