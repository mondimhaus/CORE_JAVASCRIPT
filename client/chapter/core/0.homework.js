// querySelector
const button = document.querySelector('.menu-button')
const menu = document.querySelector('.menu')

console.log(button);

// eventListener 이벤트 핸들러  :    객체 가짐
// click : 객체   ,   scoll : 객체
// 이벤트핸들러가 함수에 객체를 던짐

/*     preventDefault 넣는 이유    */
// js - html을 우선시. (테그 능력 우선시)
// / : reload
// 글자를 찍음과 동시에 새로고침이 됨

// 타이머
function timer() {
}
setTimeout(timer,3000);



/*      global gap       */
let isOpened = false;



function handleMenu(e){
  e.preventDefault()    // 이벤트 핸들러의 스태틱 메소드를 사용하기 위함, 폼 submit 시 새로고침을 막을 수 있음
  
  // 메뉴에게 is-active 클래스를 넣어준다.
  // 메뉴에게 클래스를 넣어준다 is-active
  menu.classList.add('is-active')

  // 닫혀 있으면 열고, 열려 있으면 닫기
  if(!isOpened){
    menu.classList.add('is-active')  
  }else{
    menu.classList.remove('is-active')  
  }
  isOpened = !isOpened;
}

button.addEventListener('click',handleMenu);  // 클릭하면 핸들메뉴 함수 출력
function handleInput(){
  console.log();

  if(this.value === 'hello'){
    console.log('success');
    
  }
}


// classList

// preventDefault
// 태그의 기본 동작을 차단

