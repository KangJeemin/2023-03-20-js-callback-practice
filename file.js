//CRUD 에 맞춰 설계하기.

import fs from 'fs';

let name = "kangjimin이것은 파일 내용";
let date = new Date();
let fileName = "2023-03-20.txt" ;

fs.writeFileSync(fileName,name)
console.log(fs.readFileSync('2023-03-20.txt'));
fs.rm('2023-03-20.txt')