let contact = document.querySelector('.contact');
let contantButton = document.querySelector('.contact-button');

contantButton.addEventListener('click', function (e) {
  e.preventDefault();
  checkForm();
});

function showError (errorElement, errorMessage) {
  let errorElementRef = document.querySelector('.' + errorElement);
  document.querySelector('.'+errorElement).classList.add('display-error');
  document.querySelector('.'+errorElement).innerHTML = errorMessage;

    let inputField = errorElementRef.parentElement.querySelector('input');
    if (inputField) {
      inputField.style.border = '1px solid red';
    }
}

function clearError() {
  let errors = document.querySelectorAll('.error');
  for (let error of errors) {
    error.classList.remove('display-error');

    let inputField = error.parentElement.querySelector('input');
    if (inputField) {
      inputField.style.border = 'none';
    }
  }
} 

function checkForm() { 
  let fullName = contact.fullName.value;
  let eMail = contact.eMail.value;
  let textArea = contact.textArea.value;

  const illegalchars = /[^a-zA-Z ]/;
  
  clearError();

  //fullname
  if (fullName == "") {
    showError('fullNameError', 'Please enter your full name')
    return false; 
  };

  if (illegalchars.test(fullName)) { 
    showError('fullNameError', 'Please enter a legal full name')
    return false; 
  };

  //email
  if (eMail == "") {
    showError( "eMailError", 'Please enter your email address');
    return false; 
  };
  if (eMail.indexOf("@")== -1 || eMail.indexOf(".")== -1) { 
    showError( "eMailError", 'Please enter a legal email address');
      return false; 
  };

  //textarea
  if (textArea == "") {
    showError('textAreaError', 'Please enter your subject')
    return false; 
  };

  //nextpage
  if (!document.querySelector('.error.display-error')) {
    window.location.href = 'thanks.html'; //
  }
}