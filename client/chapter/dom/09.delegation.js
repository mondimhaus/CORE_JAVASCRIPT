/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

const nav = getNode('nav');

function handleClick(e) {
  let target = e.target;
  let li = target.closest('li');
  let dataName = attr(li, 'data-name');

  if (!li) return;

  // if(li.className === 'home'){
  //   li.style.background = 'orange'
  // }

  // if(li.dataset.name === 'contact'){
  //   li.style.background = 'dodgerblue'
  // }

  if (dataName === 'about') li.style.background = 'hotpink';
  if (dataName === 'home') li.style.background = 'greenyellow';
  if (dataName === 'contact') li.style.background = 'dodgerblue';
}

nav.addEventListener('click', handleClick);
