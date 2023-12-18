/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains


function getNode(node,context = document) {
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인수는 문자 타입 이어야 합니다." );
  } 

  // if(context.nodeType !== document.ELEMENT_NODE){
    // context = document.querySelector(context);
  // }
  return context.querySelector(node);
}


function getNodes(node) {
  if (typeof node !== "string") {
    throw new Error("getNodes 함수의 인수는 문자 타입 이어야 합니다." );
  }
  return document.querySelectorAll(node);
}


const first = getNode('.first'); 
console.log(first);


/* 문서 대상 확인 */
// - matches

console.log(first.matches('span')); // target에 항목(selector)가 있어?
console.log(getNode('h1').contains(getNode('.second')));  // target(부모) 안에 자식 노드가 포함됐어?

