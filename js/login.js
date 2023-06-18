let email = document.getElementById("email");
let password = document.getElementById("password");

let validation = document.getElementById("validation");

let login = document.querySelector(".btn-login");


login.addEventListener("click", ()=> {
     if (email.value === localStorage.getItem("email") && password.value === localStorage.getItem("password")) {
          location.href = "/dashboard.html"
     } else {
          validation.style = "color: red;"
          validation.textContent = "Invalid Username or Password";
     }
})
