const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const formObject = {};
  let allFieldFilled = true;
  formData.forEach((value, key) => {
    if (value === '') {
      allFieldFilled = false;
    } else {
      formObject[key] = value;
    }
  });
  if (allFieldFilled) {
    localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
    console.log(formObject);
    form.reset();
  } else {
    alert('alani niye bos biraktin guzel kardesim');
  }
}

if (localStorage.getItem('feedback-form-state')) {
  window.addEventListener('load', () => {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedData) {
      form.email.value = savedData.email;
      form.message.value = savedData.message;
    }
  });
}
