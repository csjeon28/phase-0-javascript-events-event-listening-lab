const input = document.querySelector('input');

function addingEventListener() {
  input.addEventListener('click', clickAlert); 
}

function clickAlert() {
  alert('I was clicked!');
}
