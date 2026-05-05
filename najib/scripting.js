JavaScript
function validateSignup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill all fields");
    return false;
  }
  return true;
}

function validateLogin() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  if (email === "" || password === "") {
    alert("All fields required");
    return false;
  }
  return true;
}