const saveButton = document.getElementById("save-btn");
const signOutButton = document.getElementById("sign-out");
const editButton = document.getElementById("profile-image-edit-btn");
const deleteButton = document.getElementById("profile-image-delete-btn");
const fileInput = document.createElement("input");
const profileBtn = document.getElementById("profile-btn");


fileInput.type = "file";
fileInput.accept = "image/*";


document.body.appendChild(fileInput);
fileInput.style.display = 'none';

document.addEventListener("DOMContentLoaded", () => {
    const rememberMeCheckbox = document.querySelector(".remember-me");
    const usernameField = document.querySelector(".inputfield-1");
    const passwordField = document.querySelector(".inputfield-2");

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    const savedRememberMe = localStorage.getItem("rememberMe");

    if (savedUsername && savedPassword && savedRememberMe === "true") {
        usernameField.value = savedUsername;
        passwordField.value = savedPassword;
        rememberMeCheckbox.checked = true;
    } else {
        console.log("Ingen sparad inloggning hittades.");
    }
});

window.addEventListener("load", () => {
    const userData = JSON.parse(localStorage.getItem("userProfile"));
    console.log(userData);

    if (userData) {
        document.getElementById("name").value = userData.name || "";
        document.getElementById("email").value = userData.email || "";
        document.getElementById("role").value = userData.role || "";
        document.getElementById("text-area").value = userData.aboutMe || "";

        if (userData.profileImage) {
            const profileImage = document.getElementById("profile-img");
            profileImage.src = userData.profileImage;
            console.log(userData.profileImage);
        }
    }
});

saveButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;
    const aboutMe = document.getElementById("text-area").value;
    const profileImage = document.getElementById("profile-img").src;

    if (profileImage && profileImage !== "") {
        const userData = {
            name: name,
            email: email,
            role: role,
            aboutMe: aboutMe,
            profileImage: profileImage
        };

        localStorage.setItem("userProfile", JSON.stringify(userData));
        console.log("Användardata sparad:", userData);
    } else {
        console.log("Ingen profilbild att spara.");
    }
});

signOutButton.addEventListener("click", () => {
    if (localStorage.getItem("rememberMe") !== "true") {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("rememberMe");
    }

    window.location.href = "login.html"; 
});

editButton.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = () => {
            const profileImage = document.querySelector("#profile-img");
            profileImage.src = reader.result;
            console.log(reader.result);
        };

        reader.readAsDataURL(file);
    }
});

deleteButton.addEventListener("click", () => {
    const profileImage = document.querySelector("#profile-img");
    profileImage.src = "";
});

profileBtn.addEventListener("click", function () {
    window.location.href = "landingpage.html";
});
