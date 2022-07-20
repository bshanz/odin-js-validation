// cache dom
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

const country = document.getElementById("country");
const countryError = document.getElementById("country-error");

const zip = document.getElementById("zip");
const zipError = document.getElementById("zip-error");

const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const password2 = document.getElementById("password2");
const password2Error = document.getElementById("password2-error");

email.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showEmailError();
  }
});

country.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (country.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    countryError.textContent = ""; // Reset the content of the message
    countryError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showCountryError();
  }
});

zip.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (zip.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    zipError.textContent = ""; // Reset the content of the message
    zipError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showZipError();
  }
});

password.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (password.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    passwordError.textContent = ""; // Reset the content of the message
    passwordError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showPasswordError();
  }
});

password2.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (password2.value !== password.value) {
    password2Error.textContent = "Your passwords do not match.";
    // Set the styling appropriately
    password2Error.className = "error active";
  } else if (password2.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    password2Error.textContent = ""; // Reset the content of the message
    password2Error.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showPassword2Error();
  }
});

//fix this
form.addEventListener("submit", function (event) {
  // if the email field is valid, we let the form submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showEmailError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else if (!country.validity.valid){
      showCountryError();
      event.preventDefault();
  } else if (!zip.validity.valid){
    showZipError();
    event.preventDefault();
} else if (!password.validity.valid){
    showPasswordError();
    event.preventDefault();
} else if (!password2.validity.valid){
    showPassword2Error();
    event.preventDefault();
} else{
    alert("Done! High-five!")
}
});

function showEmailError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}

function showCountryError() {
  if (country.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    countryError.textContent = "You need to enter a country.";
  } else if (country.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    countryError.textContent = "Entered value needs to be an e-mail address.";
  } else if (country.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    countryError.textContent = `Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
  } else if (country.validity.tooLong) {
    // If the data is too short,
    // display the following error message.
    countryError.textContent = `Country should less than ${country.maxLength} characters; you entered ${country.value.length}.`;
  }

  // Set the styling appropriately
  countryError.className = "error active";
}

function showZipError() {
  if (zip.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    zipError.textContent = "You need to enter a zip code.";
    console.log("first error");
  } else if (zip.validity.patternMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    zipError.textContent = "Entered value needs to be a number.";
    console.log("patter error");
  } else if (zip.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    zipError.textContent = `Zip code should be at least ${zip.minLength} characters; you entered ${zip.value.length}.`;
    console.log("too short");
  } else if (zip.validity.tooLong) {
    // If the data is too short,
    // display the following error message.
    zipError.textContent = `Zip code should less than ${zip.maxLength} characters; you entered ${zip.value.length}.`;
    console.log("too long");
  }

  // Set the styling appropriately
  zipError.className = "error active";
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    passwordError.textContent = "You need to enter a password.";
  } else if (password.validity.patternMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    passwordError.textContent =
      "The password must contain minimum eight characters, at least one number, and one special character.";
  }

  // Set the styling appropriately
  passwordError.className = "error active";
}

function showPassword2Error() {
  if (password2.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    password2Error.textContent = "You need to enter a password.";
  } else if (password2.validity.patternMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    password2Error.textContent =
      "The password must contain minimum eight characters, at least one number, and one special character.";
  } else if (password2.value !== password.value) {
    password2Error.textContent = "Your passwords do not match.";
  }

  // Set the styling appropriately
  password2Error.className = "error active";
}
