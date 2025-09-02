const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click', function(){
const item = document.createElement('li');
item.innerText = input.value;
item.classList.add('style');
list.appendChild(item);
input.value='';

item.addEventListener('click', function(){
    item.classList.add('heck');
})
item.addEventListener('dblclick', function(){
    list.removeChild(item);
})
})