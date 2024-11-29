const inputfield1 = document.querySelector(".inputfield-1");
const inputfield2 = document.querySelector(".inputfield-2");
const modal = document.querySelector(".modal-content");
const loginButton = document.querySelector(".login-btn");
const modalClose = document.getElementById("btn");
const modalMessage = modal.querySelector("p");
const checkbox = document.querySelector(".remember-me");
const forgotPasswordLink = document.querySelector(".forgot-password a");
const forgotPasswordModal = document.querySelector(".forgot-password-modal");
const buttonSubmit = document.querySelector(".btn-submit");

const users = [
    { username: "admin", password: "password" }
];

loginButton.addEventListener("click", (event) => {
    event.preventDefault();

    const username = inputfield1.value.trim();
    const password = inputfield2.value.trim();
    const rememberMe = checkbox.checked;

    if (username === "" && password === "") {
        modalMessage.textContent = "Username & Password are empty!";
        modal.style.display = "block";
    } else if (username !== "" && password === "") {
        modalMessage.textContent = "Password is empty";
        modal.style.display = "block";
    } else if (password !== "" && username === "") {
        modalMessage.textContent = "UserName is empty";
        modal.style.display = "block";
    } else {
        const user = users.find(user => user.username === username && user.password === password);

        if (!user) {
            modalMessage.textContent = "Incorrect Username or Password";
            modal.style.display = "block";
        } else {
            if (rememberMe) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                localStorage.setItem("rememberMe", "true");
            } else {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
                localStorage.removeItem("rememberMe");
            }
            window.location.href = "profile.html";
        }
    }
});

window.addEventListener("load", () => {
    const rememberMe = localStorage.getItem("rememberMe");

    if (rememberMe === "true") {
        checkbox.checked = true;
        inputfield1.value = localStorage.getItem("username") || "";
        inputfield2.value = localStorage.getItem("password") || "";
    }
});

modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});

function enterKey(event) {
    if (event.key === "Enter") {
        loginButton.click();
    }
}

inputfield1.addEventListener("keydown", enterKey);
inputfield2.addEventListener("keydown", enterKey);

forgotPasswordLink.addEventListener("click", (event) => {
    event.preventDefault();
    modalMessage.textContent = "Please enter your email to reset password";
    forgotPasswordModal.style.display = "block";
});

buttonSubmit.addEventListener("click", () => {
    forgotPasswordModal.style.display = "none";
});
