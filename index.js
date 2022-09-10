let empty = "";
let uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lCase= uCase.toLocaleLowerCase();
let numbers = "1234567890"
// console.log(lCase);
let symbols= "!@#$%^&*~=-_";

let pLength = document.querySelector("#p-length");
let upperCase= document.querySelector("#p-uppercase");
let lowerCase= document.querySelector("#p-lowercase");
let pNumber =document.querySelector("#p-numbers"); 
let pSymbols =document.querySelector("#p-symbol"); 
let submit =document.querySelector(".submit"); 
let password =document.querySelector("#password"); 

submit.addEventListener("click",() => {
    let initialpassword = empty;
    (upperCase.checked) ? initialpassword += uCase: " "; 
    (lowerCase.checked) ? initialpassword +=lCase: " "; 
    (pNumber.checked) ? initialpassword +=numbers: " "; 
    (pSymbols.checked) ? initialpassword +=symbols: " "; 

    password.value = generate(pLength.value,initialpassword);
    // alert("passcode generated")
})

function generate(l,init_p){
let pass = "";
for(let i =0;i<l;i++){
    pass+=init_p.charAt(Math.floor(Math.random()*init_p.length))
}
return pass;
}

// copy password to clip board 
const copy =document.querySelector(".copy").addEventListener("click",()=>{
    if(password.value===""){
    // toastr.error("please generate password");
    toastr["error"]("please generate password");

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "2000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}}
else{
    password.select();
    toastr["success"]("password has been copied to clipboard");
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "2000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
    document.execCommand("copy") ;
   
}
})