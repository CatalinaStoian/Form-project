let emailInput = document.querySelector(".email-input");
let userEmail = document.querySelector(".user-email");
let mailError = document.querySelector('.mail-error');
let formLabel = document.querySelector('.form-label');

let firstNameInput = document.querySelector(".first-name-input");
let userFirstName = document.querySelector(".first-name");

let lastNameInput = document.querySelector(".last-name-input");
let userLastName = document.querySelector(".last-name");

let locationInput = document.querySelector(".location-input");
let userLocation = document.querySelector(".location");
let imgLocation = document.querySelector('.img-location')

let phoneInput = document.querySelector(".phone-input");
let userPhone = document.querySelector(".phone");
let imgPhone = document.querySelector('.img-phone')

let linkedinInput = document.querySelector(".linkedin-input");
let userLinkedin = document.querySelector(".linkedin");

let card = [emailInput, firstNameInput, lastNameInput, locationInput, phoneInput, linkedinInput]

let showCard = () => {
    let userCard = document.querySelector('.user-card');
    if(card.length > 1){
        userCard.style.display = 'flex';
    }


}


let updateUserEmail = () => {
    userEmail.innerText = emailInput.value;
    if( emailInput.value.length < 5){
        mailError.style.display = 'flex';
        formLabel.style.color = '#ff0000'
    }else{
        mailError.style.display = 'none';
        formLabel.style.color = '#050E26'
    }
};

let updateUserFirstName = () => {
    userFirstName.innerText =  firstNameInput.value;
};

let updateUserLastName = () => {
    userLastName.innerText = lastNameInput.value;
};

let updateUserLocation = () => {
    userLocation.innerText = locationInput.value;
    imgLocation.style.display = 'flex';
};

let updateUserPhone = () => {
    userPhone.innerText = phoneInput.value;
    imgPhone.style.display = 'flex';

};

let updateUserLinkedin = () => {
    userLinkedin.innerText = linkedinInput.value;
};


emailInput.addEventListener("input", updateUserEmail);
firstNameInput.addEventListener("input", updateUserFirstName);
lastNameInput.addEventListener("input", updateUserLastName);
locationInput.addEventListener("input", updateUserLocation);
phoneInput.addEventListener("input", updateUserPhone);
linkedinInput.addEventListener("input", updateUserLinkedin);