let register = document.querySelector('.form');
let registerButton = document.querySelector('.register-button');
let perfectFor = document.querySelector('.perfectFor');

registerButton.addEventListener('click', function (e) {
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
  let paymentMethod = register.paymentMethod.value;
  let paymentNumber = register.paymentNumber.value;
  let paymentDate = register.paymentDate.value;
  let paymentCCV = register.paymentCCV.value;

  const illegalnum = /[^0-9/-]/;
  const illegalchars = /[^a-zA-Z ]/;
  
  clearError();

  //paymentMethod
  if (paymentMethod == "") {
    showError('paymentMethodError', 'Please enter your payment method')
    return false; 
  };

  if (illegalchars.test(paymentMethod)) {
    showError('paymentMethodError', 'Please enter a legal payment method')
    return false; 
  };

//paymentNumber
  if (paymentNumber == "") {
    showError('paymentNumberError', 'Please enter your card number')
    return false; 
  };
  if (illegalnum.test(paymentNumber)) { 
    showError('paymentNumberError', 'Please enter a legal card number')
    return false; 
  };
  if (paymentNumber.length != 16) { 
    showError( "paymentNumberError", 'Please enter a valid card number');
    return false; 
  };

  //paymentDate
  if (paymentDate == "") {
    showError('paymentDateError', 'Please enter card expiration date')
    return false; 
  };

  let currentDate = new Date();
  let selectedDate = new Date(paymentDate);

  if (selectedDate < currentDate) {
    showError('paymentDateError', 'Please enter a valid (non-expired) card');
    return false;
  }

  //paymentCCV
  if (paymentCCV=="") {
    showError( "paymentCCVError", 'Please enter your CCV number');
    return false; 
  };
  if (paymentCCV.length != 3) { 
    showError( "paymentCCVError", 'Please enter a valid CCV number');
    return false; 
  };
  if (illegalnum.test(paymentCCV)) { 
    showError( "paymentCCVError", 'Please enter a legal CCV number');
    return false; 
  };

  //nextpage
  if (!document.querySelector('.error.display-error')) {
    window.location.href = 'register3-1.html'; //
  }
}