let ham = document.querySelector(".ham");

let ulShow = document.querySelector(".ul-show");
let close = document.querySelector(".close")

ham.addEventListener("click", () => {
     ulShow.childNodes[1].style.display = "block";
})

close.addEventListener("click", () => {
     ulShow.childNodes[1].style.display = "none";
})