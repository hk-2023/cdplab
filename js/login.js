function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function setAction(form) {
  
  var email = form.querySelector("#form-userid").value;
  alert(email);
analytics.identify( email,{
  name:email,
  email: email}
);
/*form.action = "index.html";*/
  return false;
}