/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,

  // 같은 이름의 메서드를 만들면 본래 기능 상실
  hasOwnProperty() {
    return '난 누굴까~?'
  }
};



// 객체에서 내가 원하는 값이 있어?
// : in 문

Object.prototype.nickname = 'tiger';
// const key = 'nickname';
// console.log(key in javaScript);
//   => T/F 불린 값으로 출력됨


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?



// 객체 자신의 속성인지 확인하는 방법
// - "자신의(own) 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// 자바스크립트 : 자유로운 언어 : 내가 맘대로 바꿀 수 있음.

const key = 'createAt';
// console.log(javaScript.hasOwnProperty(key));


// jS 객체(만든값) 가 오염된 상태 >> 조상 Object 값 빌려 써야 함
// console.log(Object.prototype.hasOwnProperty.call(javaScript,key));
// console.log( ({}).prototype.hasOwnProperty.call(javaScript,key) );



// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript,key)) {
    // console.log(key);
  }
}

const tens = [10, 100, 1000, 10000];

for (let key in tens) {
  console.log(key);
}

// for..in 은 객체를 순환하는 용도로 사용해주세요
// 배열은.. 순서 보장이 안됨, 성능 x => for..in은 객체에 양보하세요..
// enumerable : 열거 가능한
