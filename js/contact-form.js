const emailForm = document.querySelector('#e-mail');
const popupForm = document.querySelector('.formPopup');
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
  if (/[A-Z]/.test(emailForm.value)) {
    popupForm.style.display = 'flex';
  } else {
    popupForm.style.display = 'none';
  }
});

submit.addEventListener('click', (event) => {
  if (/[A-Z]/.test(emailForm.value)) {
    event.preventDefault();
  }
}, false);


//Form input to localStorage

const form = document.getElementById('#form');
form.addEventListener('submit', () => {
  
  const formInput = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    textmessage: document.getElementById('message').value,
  };
  localStorage.setItem('formInput', JSON.stringify(formInput));
});
function inputDisplay() {
  if (localStorage.getItem('formInput')) {
    const {
      name,
      email,
      textmessage,
    } = JSON.parse(localStorage.getItem('formInput'));
    const outputName = document.getElementById('name');
    const outputEmail = document.getElementById('email');
    const outPutTextmessage = document.getElementById('message');
    outputName.value = name;
    outputEmail.value = email;
    outPutTextmessage.value = textmessage;
  }
}

inputDisplay();