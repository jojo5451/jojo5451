let ourObject = {
    "name":"josie",
    "profession":"student",
    "age":22,
    "pets":[{"name":"Lainey", "type":"dog","age":9,"unit":"years"}]
}
cosnsole.log(ourObject);

let myData={};
function fetchData(){

fetch('http://catfact.ninja/fact')
.then (res =>{
    if (res.ok){
        return res.json();

    }
    else{
        console.log(res);
    }
}).then(res =>{
    myData=res;
    console.log(myData["fact"]);
    document.getElementById("fact").innerHTML =myData.fact;

})
.catch(error =>{console.log(error)})
}
fetchData;

document.getElemnetById("generate").addEventListener("click", e=> {fetchData();})
console.log(myData);

let name ="Josie"
let myString = "hello ${name}"