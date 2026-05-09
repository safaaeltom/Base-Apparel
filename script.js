const emailInput = document.querySelector ("input");
const submitButton = document.querySelector ("button");

submitButton.addEventListener("click", function() {
    console.log(emailInput.value);
});
