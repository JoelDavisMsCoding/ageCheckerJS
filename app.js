let ageInput = document.getElementById("birthYear"); //Grabbing the input box the info will be typed in.
console.log(ageInput);

let ageButton = document.getElementById("checkAge"); //Grabbing the button that will start the function to check the data that was entered.
console.log(ageButton.value);

let refreshButton = document.getElementById("refresh"); //Grabbing the refresh button
console.log(ageButton.value);

let displayElement = document.querySelector(".col1 h3")
console.log(displayElement.innerHTML);

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
console.log(img1);
console.log(img2);

let submitButton = document.querySelector("#submit")

let currentYear = new Date().getFullYear() 
console.log(currentYear);
let birthYear = "";

submitButton.addEventListener("input", () =>
{
    let inputYear = new Date(grabDate.value)
    parsedYear = inputYear.getFullYear();
    console.log(parsedYear)
})

ageInput.addEventListener("input", () => 
{
    img1.classList.add("d-none");
    img2.classList.add("d-none");
    displayElement.innerHTML = "";

    if (isNaN(ageInput.value))
    {
        ageInput.value = ageInput.value.slice(0, -1);
    }
    else {birthYear = ageInput.value;}
})

ageButton.addEventListener("click", () =>
{
    if (birthYear > currentYear - 18)
        {
            displayElement.innerHTML = "You are a MINOR. You must be 18 to get in.";
            img1.classList.remove("d-none");
        }
    else
    {
        displayElement.innerHTML = "You are an adult. Welcome to the grown up club!";
        img2.classList.remove("d-none");
    }
})

refreshButton.addEventListener("click", () =>
{
    displayElement.innerHTML = "";
    ageInput.value = "";
    birthYear = "";
    img1.classList.add("d-none");
    img2.classList.add("d-none");
})