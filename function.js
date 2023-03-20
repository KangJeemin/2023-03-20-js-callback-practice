function one() {
  return 1;
}

function twoReturnString() {
  return "1";
}

function isthree() {
  return true;
}

// 값을 객체에 담는 새로운 관점. 이러한 값으로 모듈을 쓰면 머리 터짐..->디버거에 의존해야함
function four() {
  return {
    a:1,
    b:"2",
    c:true
  }
}

//return 이 없는 형태. 더하는 행위만 하는 실행 함수.
function five() {
  let a = 1+1;
}
