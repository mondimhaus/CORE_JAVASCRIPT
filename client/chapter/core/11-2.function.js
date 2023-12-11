/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(a, b, c, d, e, f, g) {

  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 변수 : arguments
  // arguments 객체를 사용해서 함수의 매개변수 없이 모든 아이템들을 수집 : 모든 값 더하기
  // console.log(arguments);

  let total = 0;

  // for 문
  // for (let i = 0; i < arguments.length; i++) {
  //   // total = total + arguments[i];
  //   total += arguments[i];
  // }

  // for...of 문
  // for (let value of arguments) {
  //   total += value
  // }

  // 빌려쓰기
  Array.prototype.forEach.call(arguments, function(item){
    // total += item;
  })


  // [ 진짜 배열 만들기 ]
  // 배열의 메서드 : forEach, reduce
  // from 사용 : 구식 브라우저에서 호환 안 되는 경우 있음
  // const arr = Array.from(arguments);

  // slice
  // const arr = Array.prototype.slice.call(arguments)

  // spread syntax : 가장 많이 사용하는 방법
  const arr = [...arguments];

  // arguments의 (태생) 부모 자체를 배열로 바꿔 버리면?
  // arguments.__proto__ = Array.prototype;
  // console.log(arguments);


  // forEach : 값을 반환하지 않음.
  // arr.forEach(item => total += item)
  // arr.forEach(function(item){
  //   total += item;
  // })

  // 예시 2
  // const arr = ['김다영','이경화','김용범'];
  // const newArr = ['김다영-hi','이경화-hi','김용범-hi'];
  
  // let name = [];
  
  // arr.forEach(function(item){
  //   name.push(item + '-hi')
  // })
  
  // console.log(name);
  

  // const name = arr.reduce(function(acc,cur){
  
  //   acc.push(cur + '-hi');
    
  //   return acc;
  // },[])
  
  // console.log( name );
  
  // const name = arr.map(function(item){
  //   return item + '-hi'
  // })
  
  // console.log(name);

  
  // map : 값을 반환함, 단 배열만 반환
  // filter : 값을 반환함, 단 배열만 반환
  // reduce : +,-,*,/ 등 여러 연산 가능, 값읇 반환
  total = arr.reduce(function(acc,cur) {
    return acc + cur
  }, 0)



  // console.log(arr);

  return total;
};


const result = calculateTotal(1000, 2300, 5000, 1500, 3500, 4600, 35000);
console.log(result);


// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){

};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {

};


// 콜백 함수 (표현)식
let cb = function(isActive, success, fail) {
  // let isActive = false;
  // let success = function(){ 
  //   console.log('성공!')
  //  }
  // let fail = function(){ 
  //   console.log('error')
  //  }
  if(isActive) {
    success();
  } else{
    fail()
  }
};

cb(
  false,
  function(){
    console.log('성공!');
  },
  function(){
    console.log('실패!');
  }
)


// 예제 2
// 실행부
function movePage(url, success, fail) {
  if(url.match(/http.+www/) || typeof url === 'string') {
    success(url)
  } else {
    fail()
  }
}

// 선언부
movePage(
  'https://www.naver.com',

  function(url){
    console.log( url + '페이지로 넘어갑니다.');
  },

  function(){
    console.log('입력하신 url 주소는 없는 주소입니다.'); 
  }
)

// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// 정의 : 함수가 선언 됨과 동시에 실행되는 것

// 쓰게 된 이유 : var, 캡슐화를 위해
// var 블록스코프 : 스코프 뚫고 호이스팅됨
// var 함수스코프 : 스코프 뚫지 못함. 함수 통째로 호이스팅 되어 var를 가둠
// 요즘은 잘 사용하지 않음. => import를 사용하여 모듈화 함.

// incapsulation (캡슐화)
// 모듈화 => 모듈 프로그래밍 (import, export)
// import css from 'css.js' // module 

let IIFE;

(function(){

})()


// const MASTER = (function (g){

//   console.log( g.alert() );
//   let uuid =  'askdjaz';

//   return {
//     getKey(){
//       return uuid
//     },
//     setKey(value){
//       uuid = value
//     }
//   }

// })(window);


// // console.log(MASTER.getKey());

// MASTER.setKey('새로운 비밀번호')




const css = (function(){

  function getStyle(node,prop){

    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('getStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.');

    return getComputedStyle(node,null)[prop]
  }

  function setStyle(node,prop,value){

    if(typeof node === 'string') node = document.querySelector(node);
    if(typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다.');
    if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.')
    
    node.style[prop] = value;

  }

  function css(node,prop,value){
    // if(!value){
    //   return getStyle(node,prop) // getter
    // }else{
    //   setStyle(node,prop,value) // setter
    // }

    return !value ? getStyle(node,prop) : setStyle(node,prop,value);

  }

  return css
})()