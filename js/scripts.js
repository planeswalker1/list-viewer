// User-interface (or front-end) logic;
let ul = document.querySelector('ul');
let form = document.querySelector('form');
let input = document.querySelector('input');
let h1 = document.querySelector('h1');

function activateItem(event) {
  console.log(event.target.nodeName);
  if (event.target.nodeName === 'LI') {
    h1.textContent = event.target.textContent;
    for (let i = 0; i < event.target.parentNode.children.length; i++) {
      event.target.parentNode.children[i].classList.remove('active');
    }
    event.target.classList.add('active');
  }
}

ul.addEventListener('click', activateItem);
