// eslint-disable-next-line no-unused-vars

function showMenu() {
  document.querySelector('.navigation').classList.toggle('active');
  document.querySelector('.menu-list').classList.toggle('active');
}

// eslint-disable-next-line no-unused-vars
function hideMenu() {
  document.querySelector('.navigation.active').classList.remove('active');
  document.querySelector('.menu-list.active').classList.remove('active');
}

// -----------Validate Form--------



document.getElementById("in-touch").onclick = function() {
  const email = document.querySelector('#e-mail');
  const popForm = document.querySelector('.formPopup');
  const submit = document.getElementById('in-touch');

    if (email.value.toLowerCase() !== email.value) {
      popForm.style.display = 'flex';
      
    } else {
       popForm.style.display = 'none';
    }
  }
  
  submit.addEventListener('click', (event) => {
    if (email.value.toLowerCase() !== email.value) {
      event.preventDefault();
    }
  }, false);