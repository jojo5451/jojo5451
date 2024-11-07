hello();

function hello(){
    alert("hello " + name);
}

function even(n){
    if(n%2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(even(20));
console.log(even(1));
console.log(even(13));


let text =["one","two", "three"];
let paragraph = "";

function buildText(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
        paragraph += arr[i] + " ";
    }
    document.getElementById("my_para").innerHTML = paragraph;

}
document.getElementById("button_1").addEventListener("click", function(e){buildText(text)});


function tellFortune(numofChildren,partnerName,geographicLocation,jobTitle){
    let fortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numofChildren} kids.`;
    document.write(fortune + "<br>");
}

tellFortune(2, "Alex", "New York", "Engineer");
tellFortune(3, "Jamie", "Tokyo", "Designer");
tellFortune(1, "Sam", "Paris", "Chef");

function calculateDogAgeFromInput() {
    let humanAge = parseInt(prompt("Enter your dog's age in human years:"));
    let dogAge = humanAge * 7;
    document.write(`Your doggie is ${dogAge} years old in dog years!<br>`);
}


calculateDogAgeFromInput();

function reverseNumber(num) {
    let reversed = num.toString().split("").reverse().join("");
    document.write(`Reversed number: ${reversed}<br>`);
}

reverseNumber(32243);
reverseNumber(12345);

function alphabetizeString(str) {
    let sortedStr = str.split("").sort().join("");
    document.write(`Alphabetized string: ${sortedStr}<br>`);
}


alphabetizeString("webmaster");
alphabetizeString("javascript");




