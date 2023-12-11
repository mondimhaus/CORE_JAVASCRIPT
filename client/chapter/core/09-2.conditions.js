/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let age = 20;
if (age >= 14 && age <= 90) {
  console.log('청소년 또는 성인입니다.');
}

// 아래 형식도 가능 !
// if(14 <= age <= 90) {
//  console.log('성인');
// }

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// logical AND Assignment 논리곱 할당 연산자
// a = a && b;
// a &&= b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// Logical OR Assignment 논리합 할당 연산자
// a ||= b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3] || { thisIsTruthy: true };

// 로그인
// 취소 버튼, ESC 누르면 null 이동
// 어떤 값도 입력하지 않았을 경우 => 빈문자 ''

function login() {
  let userName = prompt('누구신가요?', '');

  if (!userName) return;

  if (userName?.toLowerCase() === 'admin') {
    let pwd = prompt('비밀번호 :', '');

    if (pwd?.toLowerCase() === 'themaster') {
      console.log('로그인 성공 환영합니다!');
    } else {
      console.log('비밀번호를 잘못 입력하셨습니다.');
    }
  } else if (
    userName === null ||
    userName.replace(/\s*/g, '') === '' ||
    userName === ' '
  ) {
    console.log('취소되었습니다.');
  } else {
    console.log('올바른 사용자가 아닙니다!');
  }
}

login();
