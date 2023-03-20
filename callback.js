// function six(number,append) {
//   if(typeof(number) ==="number" && typeof(append) ==="number" ){
//     return number + append
//   }
//   else{
//     return number
//   }
// }

function six(number,append) {
    return number + append
  }
function seven(number,append) {
    return number - append
  }
function eight(number,append,callback) {
    return callback(number, append);
  }
console.log(eight(1,2,function(a,b){
  return a+b;
})
)

console.log(eight(3,4,seven));