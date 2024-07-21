

const inputSLider=document.getElementById("inputSlider");
const sliderValue=document.getElementById("sliderValue");
const passBox=document.getElementById("passwordBox");
const lowercaseCheck=document.getElementById("lowercase");
const uppercaseCheck=document.getElementById("uppercase");
const generateBtn=document.getElementById("getBtn");
const copyIcon=document.getElementById("copyContant");
const passIndicator=document.getElementById("pass-indicator");
const numberCheck=document.getElementById("numbers");
const symbolCheck=document.getElementById("symbols");
// 

const lowercaseArea="abcdefghijklmnopqrstuvwxyz";
const uppercaseArea="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberArea="0123456789";
const symbolArea='!@#$%^&*()_+{}:"<>?';

sliderValue.textContent=inputSLider.value;
inputSLider.addEventListener("input",()=>{
    sliderValue.textContent=inputSLider.value;
    generatePassword();




});
function generatePassword(){
    const length=inputSLider.value;
    let password="";
let characters = "";
characters += lowercaseCheck.checked?lowercaseArea:"";
characters += uppercaseCheck.checked?uppercaseArea:"";
characters += numberCheck.checked?numberArea:"";
characters += symbolCheck.checked?symbolArea:"";

for(let i=0;i<length;i++){
    password+=characters[Math.floor(Math.random()*characters.length)];
}

passBox.value=password;
updatePasswordIndicator();
}

generateBtn.addEventListener("click",()=>{
    generatePassword();

});
function updatePasswordIndicator(){
const passwordStrrength=getPasswordStrenght(passBox.value);
console.log(passwordStrrength);
passIndicator.className="pass-indicator "+passwordStrrength;
console.log(passwordStrrength);
}

function getPasswordStrenght(password){
 if(password.length<=10){
    return "weak";
}else if(password.length<=20){

    return "medium";
}else{
    return "strong";
}

}
window.addEventListener("DOMContentLoaded",()=>{
updatePasswordIndicator();
});

copyIcon.addEventListener("click",()=>{
if(passBox.value != "" || passBox.value.length>=1){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText="check";
    setTimeout(()=>{
    copyIcon.innerText="content_copy";

    },1000);
}
});