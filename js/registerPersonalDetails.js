let register = document.querySelector('.form');
let registerButton = document.querySelector('.register-button');
let perfectFor = document.querySelector('.perfectFor');
let age = document.querySelector('.age');

registerButton.addEventListener('click', function (e) {
  e.preventDefault();
  checkForm();
});

function showError (errorElement, errorMessage) {
  let errorElementRef = document.querySelector('.' + errorElement);
  document.querySelector('.'+errorElement).classList.add('display-error');
  document.querySelector('.'+errorElement).innerHTML = errorMessage;

    errorElementRef.parentElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });  

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

function calculateAge(birthdate) {
  let today = new Date();
  let birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

function checkForm() { 
  let firstName = register.firstName.value; 
  let lastName = register.lastName.value; 
  let country = register.country.value; 
  let city = register.city.value; 
  let streetAddress = register.streetAddress.value; 
  let phone = register.number.value; 
  let email = register.email.value;
  let questionOne = register.questionOne.value;
  let questionTwo = register.questionTwo.value;
  let dateBirth = register.dateBirth.value;
  let gender = register.gender.value;

  const illegalchars = /[^a-zA-Z ]/;
  const illegalnum = /[^0-9/-]/;
  
  clearError();

  //firstname
  if (firstName == "") {
    showError('firstNameError', 'Please enter your first name')
    return false; 
  };

  if (illegalchars.test(firstName)) { 
    showError('firstNameError', 'Please enter a legal first name')
    return false; 
  };

  //lastname
  if (lastName == "") {
    showError('lastNameError', 'Please enter your last name')
    return false; 
  };

  if (illegalchars.test(lastName)) { 
    showError('lastNameError', 'Please enter a legal last name')
    return false; 
  };

  //gender
  if (gender == "") {
    showError('genderError', 'Please enter your gender')
    return false; 
  };

  //age
  if (dateBirth == "") {
    showError('dateBirthError', 'Please enter your age')
    return false; 
  };

  let participantAge = calculateAge(dateBirth);

  if (participantAge < 21) {
    showError('dateBirthError', 'This trip is not suitable for participants under 21 years old.');
    return false;
  };

    //country
  if (country == "") {
    showError('countryError', 'Please enter your country name')
    return false; 
  };
  
  if (illegalchars.test(country)) { 
    showError('countryError', 'Please enter a legal country name')
    return false; 
  };

  //city
  if (city == "") {
    showError('cityError', 'Please enter your city name')
    return false; 
  };

  if (illegalchars.test(city)) { 
    showError('cityError', 'Please enter a legal city name')
    return false; 
  };

  //streetaddress
  if (streetAddress == "") {
    showError('streetAddressError', 'Please enter your street address name')
    return false; 
  };
  
  if (illegalchars.test(streetAddress)) { 
     showError('streetAddressError', 'Please enter a legal street address name')
    return false; 
  };

  //email
  if (email == "") {
    showError( "emailError", 'Please enter your email address');
    return false; 
  };
  if (email.indexOf("@")== -1 || email.indexOf(".")== -1) { 
    showError( "emailError", 'Please enter a legal email address');
      return false; 
  };

  //phonenumber
  if (phone=="") {
    showError( "phoneError", 'Please enter your phone number');
    return false; 
  };
  if (phone.length < 9 || phone.length >15) { 
    showError( "phoneError", 'Please enter a legal phone number');
    return false; 
  };
  if (illegalnum.test(phone)) { 
    showError( "phoneError", 'Please enter a legal phone number');
    return false; 
  };

  //question1
  if (questionOne == "") {
    showError('questionOneError', 'Please enter your answer')
    return false; 
  };
  
  if (illegalchars.test(questionOne)) { 
    showError('questionOneError', 'Please enter a legal answer, Yes or No')
    return false; 
  };

  if (questionOne !== "No" && questionOne !== "no" && questionOne !== "yes" && questionOne !== "Yes") {
    showError('questionOneError', 'Please enter either Yes or No!');
    return false;
  };

  if (questionOne === "No" || questionOne === "no") {
    showError('questionOneError', 'This trip is not suitable for participants with no previous experience.')
    return false; 
  };

  //question2
  if (questionTwo == "") {
    showError('questionTwoError', 'Please enter your answer')
    return false; 
  };
  
  if (illegalchars.test(questionTwo)) { 
    showError('questionTwoError', 'Please enter a legal answer, Beginner or Intermediate or Professional')
    return false; 
  };

  if (questionTwo !== "Beginner" && questionTwo !== "beginner" && questionTwo !== "Intermediate" && questionTwo !== "intermediate" && questionTwo !== "Professional" && questionTwo !== "professional") {
    showError('questionTwoError', 'Please enter either Beginner or Intermediate or Professional!');
    return false;
  };

  if (questionTwo === "Beginner" || questionTwo === "beginner") {
    showError('questionTwoError', 'This trip is not suitable for beginner participants.')
    return false; 
  }

  //nextpage
  if (!document.querySelector('.error.display-error')) {
    window.location.href = 'register2-1.html'; //
  }
}