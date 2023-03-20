import fs from 'fs'
import http, { createServer } from 'http'
import url from 'url'


const first = 
`<!DOCTYPE html>
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
</html>`

const server = http.createServer(function(request,response){

  if(request.url=="/"){
  response.statusCode=200;
  response.setHeader('Contant-Type','text/plain');
  response.end(first);
  }
  
if(request.method=='post' && request.url=="/login"){
    let body = ""
    response.end(first)
    request.on('data', (chunk) => {
      body = body + chunk;
      
    })
    request.on('end', () => {
      console.log(body);
  response.end();


    });
   
   }

  // if(request.method=='GET' && request.url.startsWith('/login')){
  //   let sub = request.url.split('=')[1];
  //   let text = request.url.split('=')[2];
  //   fs.writeFileSync(sub,text);


  // }
  
})

server.listen(2080, ()=>{
  console.log('웹 서버가 시작되었습니다.');
});
