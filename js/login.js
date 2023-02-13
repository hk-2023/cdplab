function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.querySelectorAll(".form-register").forEach(function(field){field.style.display='none'})
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function setAction(form) {
  
  var email = form.querySelector("#form-userid").value;
  var fname = form.querySelector("#form-fname").value;
  var lname = form.querySelector("#form-lname").value;


analytics.identify( email,{
  email: email,
  firstName:fname,
  lastName:lname}
);
form.action = "index.html";
  return false;
}

function loginForm(form) {
  document.querySelectorAll(".form-register").forEach(function(field){field.style.display='none'})

}
function registerForm(form) {
  document.querySelectorAll(".form-register").forEach(function(field){field.style.display='block'})
}