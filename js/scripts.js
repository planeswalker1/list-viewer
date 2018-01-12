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

function removeItem(event) {
  if (event.target.nodeName === 'LI') {
    event.target.remove();
  }
}

function createNewItem(event) {
  event.preventDefault();
  let li = document.createElement('li');
  li.textContent = input.value;
  ul.append(li);
  input.value = '';
}

ul.addEventListener('click', activateItem);
ul.addEventListener('dblclick', removeItem);
form.addEventListener('submit', createNewItem);
