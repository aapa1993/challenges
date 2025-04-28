const sendPwd = document.getElementById("send");
const checkEmail = document.getElementById("check-email");
const returnPwd = document.getElementById("return");
const openEmail = document.getElementById("open-email");
const newPwd = document.getElementById("new-pwd");
const rstPwd = document.getElementById("rst-pwd");

function togglePassword() {
    const input = document.getElementById("passwordInput");
    input.type = input.type === "password" ? "text" : "password";
}

sendPwd.addEventListener("click", () =>{
  rstPwd.style.display = "none";
  checkEmail.style.display = "flex";
})

openEmail.addEventListener("click", () => {
  checkEmail.style.display = "none";
  newPwd.style.display = "block";
})

returnPwd.addEventListener("click", () => {
  checkEmail.style.display = "none";
  rstPwd.style.display = "block";
})