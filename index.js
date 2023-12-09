const input = document.querySelector(".input");
const button = document.querySelector(".button");
const result = document.querySelector(".result");
const background = document.querySelector("body");
const title = document.querySelector(".title");

console.log(input);


let number = "";
let resultText = "";
function fizzBuzz(number) {


    if(number % 3 === 0 && number % 5 === 0) {
        //console.log("Fizz Buzz");
        resultText = "Fizz Buzz";
        background.style.backgroundColor = "#9723C9";
        title.style.color = "#9723C9";
        result.style.color = "#9723C9";
    } else if(number % 3 === 0) {
        //console.log("Fizz");
        resultText = "Fizz";
        background.style.backgroundColor = "#2FFF2F";
        title.style.color = "#2FFF2F";
        result.style.color = "#2FFF2F";
    } else if( number % 5 === 0 ) {
        //console.log("Fizz Buzz");
        resultText = "Buzz";
        background.style.backgroundColor = "#3300FF";
        title.style.color = "#3300FF";
        result.style.color = "#3300FF"
    } else {
        //console.log(`${number + 1} vous donnera un resultat`);
        resultText = `${number}.Pas divisible par 3 ni 5.`;
        background.style.backgroundColor = "#FADF0B";
        title.style.color = "#FADF0B";
        result.style.color = "#FADF0B";
    }

}


input.addEventListener("blur", (e) => {
    number = e.target.value;
});

input.addEventListener("keyup", (e) => {
    number = e.target.value;
});



button.addEventListener("click", (e) => {
e.preventDefault();
fizzBuzz(number);
 result.innerHTML = resultText;
 number = "";
 resultText = "";
input.value = "";
})





















