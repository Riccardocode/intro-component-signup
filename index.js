const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("repass");
const firstnameAlarm = document.getElementById("firstnameAlarm");
const lastnameAlarm = document.getElementById("lastnameAlarm");
const emailAlarm = document.getElementById("emailAlarm");
const passwordAlarm = document.getElementById("passwordAlarm");
const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

email.addEventListener(
  "invalid",
  function() {
   email.value="email@example/com";
   errorFirstName.classList.add("error-icon");
   // email.placeholder.value = ;
  }
);

function checkField(e) {
  e.preventDefault();
  if (!firstname.value) {
    firstnameAlarm.classList.add("empy-warning-active");
    errorFirstName.classList.add("error-icon");
  }
  if (!lastname.value) {
    lastnameAlarm.classList.add("empy-warning-active");
    errorLastName.classList.add("error-icon");
  }
  if (!email.value) {
    emailAlarm.classList.add("empy-warning-active");
    errorEmail.classList.add("error-icon");
  }
  console.log(password.value);
  if (!password.value) {
    passwordAlarm.classList.add("empy-warning-active");
    errorPassword.classList.add("error-icon");
  }
}
