console.log("JS file loaded");


const emailInput = document.querySelector ("input");
const submitButton = document.querySelector ("button");

submitButton.addEventListener("click", function() {
    const emailValue = emailInput.value;
    if (emailValue===""){
    console.log("Email is empty")
    };
});



