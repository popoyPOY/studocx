let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signUp = document.querySelector(".btn-login");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");



const signupError = "border-color: red; border-style:solid";
const signupSucess = "border-color: green; border-style:solid";


window.addEventListener("keyup", () => {
     let userName = name.value;
     let userEmail = email.value.trim();
     let userPassword = password.value.trim();

     if (userName.length <= 5) {
          signUp.disabled = true;
          nameError.textContent = "atleast 5 characters";
          name.style = signupError;
     }
     else if (!emailCheck(userEmail)) {
          console.log(emailCheck(userEmail));
          email.style = signupError;
          emailError.textContent = "please provide a valid E-mail Address";
     }
     else if (userPassword.length < 2) {
          password.style = signupError;
          passwordError.textContent = "please provide a valid Password";
     }else {
          nameError.textContent = "";
          name.style = signupSucess;
          email.style = signupSucess;
          emailError.textContent = "";
          password.style = signupSucess;
          passwordError.textContent = "";
          signUp.disabled = false;
          return true;
     }
})

signUp.addEventListener("click", () => {
     let userName = name.value;
     let userEmail = email.value.trim();
     let userPassword = password.value.trim();

     localStorage.setItem("name", userName);
     localStorage.setItem("email", userEmail);
     localStorage.setItem("password", userPassword);

     location.href = "/login.html";
})



function emailCheck(email) {
     let reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return reEmail.test(email);
}

function passwordCheck(password) {
     let rePassword = /^[A-Za-z]\w{7,14}$/;
     return rePassword.test(password);
}