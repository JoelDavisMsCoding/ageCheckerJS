let ageInput = document.getElementById("age");
console.log(ageInput);

let ageButton = document.getElementById("checkAge");
console.log(ageButton.value);

let displayElement = document.querySelector(".col1 h1")
console.log(displayElement.innerHTML)

let age = "";

ageInput.addEventListener("input", () => 
{
    age = ageInput.value;
    console.log(age)
})

ageButton.addEventListener("click", () =>
{
    if (age < 18) {displayElement.innerHTML = "you are a child. NO ALCOHOLIC BEVERAGES FOR YOU!";}
    else {displayElement.innerHTML = "You are an adult. Welcome to the grown up club!";}
})
