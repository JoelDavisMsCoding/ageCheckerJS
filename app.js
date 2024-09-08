let ageInput = document.getElementById("birthYear");
console.log(ageInput);

let ageButton = document.getElementById("checkAge");
console.log(ageButton.value);

let displayElement = document.querySelector(".col1 h3")
console.log(displayElement.innerHTML);

// img1 = document.querySelector(".img1 img");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
console.log(img1);
console.log(img2);

let currentYear = new Date().getFullYear() 
console.log(currentYear);
let birthYear = "";

let nAn = "abcdefghijklmnopqrstuvwxyz`~!@#$%^&*()-_=+[{]}:;$|'<,>.?/'\`";
console.log(nAn);
ageInput.addEventListener("input", () => 
{
    
    // birthYear = ageInput.value;
    // console.log(birthYear)
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