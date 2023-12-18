function getAttr(node, prop) {
  // 0. 넘어온 대상이 문자인지를 체크
  // 1. 체크 후 element node 로 변경해 줘야함.!
  if (typeof node === 'string') node = getNode(node);
  if (typeof prop !== 'string')
    throw new TypeError(
      'getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );

  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof prop !== 'string' || typeof value !== 'string')
    throw new TypeError(
      'setAttr함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );

  if (value === '') {
    node.removeAttribute(prop);
    return;
  }

  if (!value)
    throw new Error('setAttr함수의 세 번째 인수는 필수 입력값 입니다.');

  // node.dataset.name = 'kindtiger'
  if (prop.startsWith('data')) {
    prop = prop.slice(5);
    node.dataset[prop] = value;
    return;
  }
  node.setAttribute(prop, value);
}

const attr = (node, prop, value) =>
  value === undefined ? getAttr(node, prop) : setAttr(node, prop, value);
