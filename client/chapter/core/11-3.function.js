/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

// const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => {

  // normal function
  // let total = 0;
  // total = args.reduce(function(acc, cur) {
  //   return acc + cur;
  // }, 0)
  // return total;


  // arrow function
  let total = 0;
  total = args.reduce((acc,cur)=> acc + cur,0)
  return total;

};

const result = calcAllMoney(1000, 5000, 4500, 15000);

// console.log(result);




// 화살표 함수와 this
// 일반 함수의 양면의 얼굴    // 생성자
// arrow function : 생성자 함수 생성 불가

function Button(name) {
  this.name = name;
}

const b = new Button('tiger');


function button() {
  return 'hello';
}

const a = button();


// 일반함수
// - constructor 내장
// - this : 나를 호출한 대상을 this로 찾음
// 객체의 메서드로 사용이 많이 됨. => this를 찾기 위해

// 화살표함수
// - constructor 비내장
// - this : 자체를 바인딩(가지지)하지 않음
// - 메서드 안의 함수로 많이 사용됨

// concise 함수
// constructor 비내장, this 내장


const user = {
  total : 0,
  name : '선범',
  age : '13',
  address : '서울시 중랑구 면목동',
  grade : [80,90,100],
  totalGrades: function(){

    // this
    this.grade.forEach((item)=>{
      this.total += item;
    })
    return this.total


  //   console.log('일반함수 :', this);

  //   function sayHi() {
  //     console.log('sayHi : ', this);
  //   }
  //   sayHi();
  }
}



// user.totalGrades()



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;

  for (let i = 0; i < powerCount; i++) {
    result *= numeric;
  }
  return result;

}; 



// let powExpression = (numeric,powerCount)=>{

//   return Array(powerCount).fill(null).reduce((acc)=>{
//     return acc * numeric
//   },1)

// }

let powExpression = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc =>  acc * numeric ,1) 

powExpression(2,53)

// console.log(pow(2,53));



// repeat(text: string, repeatCount: number): string;
// for 문
// 값 누적 : (reduce 사용)

let repeat = (text, repeatCount) => {
  let result = '';

  for (let i = 0; i < 3; i++) { 
    result += text;
  }
  return result;
};



repeat('hello',3);  

// 일반함수 형식
// let repeatExpression = (text, repeatCount) => {
//   Array(repeatCount).fill(null).reduce((acc) => {
//     return acc + text
//   }, '')
// }

// 화살표함수 형식
let repeatExpression = (text, repeatCount) => Array(repeatCount).fill(null).reduce((acc) => acc + text, '')
