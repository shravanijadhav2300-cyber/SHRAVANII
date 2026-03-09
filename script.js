function validateForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name === "" || email === ""){
alert("Please fill all fields");
return false;
}

alert("Form submitted successfully!");
return true;
}

function showPopup(){
document.getElementById("popup").style.display = "block";
}

function closePopup(){
document.getElementById("popup").style.display = "none";
}