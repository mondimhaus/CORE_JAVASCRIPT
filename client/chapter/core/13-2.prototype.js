/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.
// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

class Animal {
  constructor(name) {
    this.name = name;
    this.stomach = [];
    this.legs = 4;
    this.tail =true;
  }

  get eat(){
    return this.stomach
  }
  set eat(value) {
    this.stomach.push(value);
  }
}

// const animal = new Animal('포동이')



class Tiger extends Animal{
  static options = {
    version: '1.0.0',
    company: 'like-lion',
    ceo:'---'
  }

  constructor(name) {
    super(name)     // 상위 컨텍스트에서 받아옴
    this.pattern = '호랑이무늬'
  }

  static bark(){    // static : 언제든지 사용할 수 있는 메서드가 됨.
    return '어흥!'
  }

  hunt(target){
    this.prey = target
    return `${target} 에게 조용히 접근한다.`
  }
}

const 한라산호랑이 = new Tiger('포동이')



/*    우리는 이미 클래스 메소드를 쓰고 있었따!    */
class Array {
  
  constructor(){

  }

  static isArray(){

  }
  
  forEach(){

  }

  reduce(){

  }

  map(){

  }
}





// 생성자 함수 