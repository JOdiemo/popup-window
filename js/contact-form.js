const emailForm = document.querySelector('#email');
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

// local storage path
const nameForm = document.querySelector('#name');
const emailForm1 = document.querySelector('#email');
const messageForm = document.querySelector('#message');
function handleChange() {
  const formData = {
    fullName: nameForm.value,
    email: emailForm1.value,
    message: messageForm.value,
  };
  localStorage.setItem('form', JSON.stringify(formData));
}
document.addEventListener('DOMContentLoaded', () => {
  const getFormValue = localStorage.getItem('form');
  if (getFormValue) {
    const formObject = JSON.parse(getFormValue);
    nameForm.value = formObject.fullName;
    emailForm1.value = formObject.email;
    messageForm.value = formObject.message;
  }
});
nameForm.onchange = handleChange;
emailForm.onchange = handleChange;
messageForm.onchange = handleChange;