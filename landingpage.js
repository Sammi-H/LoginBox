const profileSettingsBtn = document.getElementById("settings-btn");
const name = document.getElementById("name");
const landingEmail = document.getElementById("landing-email");
const landingProfession = document.getElementById("landing-profession");
const landingAboutMe = document.getElementById("landing-about-me");
const landingName = document.getElementById("landing-name");

document.getElementById("darkmode").addEventListener("change", function (){
    document.body.classList.toggle("darkmode", this.checked)
});



profileSettingsBtn.addEventListener("click", function (){
    window.location.href ="profile.html";
});




window.addEventListener("load", () => {
    const userData = JSON.parse(localStorage.getItem("userProfile"));
    console.log(userData);

    if(userData && userData.profileImage) {
        const profileImage = document.getElementById("profile-image");
        profileImage.src = userData.profileImage;
        console.log("Profile image set:", userData.profileImage);
    }
});




const userData = JSON.parse(localStorage.getItem("userProfile"));

if(userData) {
    landingName.textContent = userData.name;
    landingProfession.textContent = userData.role;
    landingEmail.textContent = userData.email;
    landingAboutMe.textContent = userData.aboutMe;

    console.log(userData);
}