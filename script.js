//setup and initial code setup
document.addEventListener("DOMContentLoaded", () => {


const form = document.getElementById('registration-form');


const feedbackDiv = document.getElementById('form-feedback');

//form submission and event prevention


    form.addEventListener("submit", (event) => {

    event.preventDefault();



///input retrieval and trimming
const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();

//validation logic

    
    
    let isValid = true;

    const messages = [];
    
    //username validation
    if(username.length < 3){
        isValid = false;
        messages.push("This username information provided should be more that 3 values.");
       
    }
    
//email validation
    if(!email.includes("@") || !email.includes(".")){
       
        isValid = false;
        messages.push("email provided is not correct.");
        
    }

    //password validation
    if(password.length < 8){

        isValid = false;
        messages.push("password must be at least 8 characters.");
        
    }



//displaying feedback
feedbackDiv.style.display = "block";
if(isValid){
    feedbackDiv.textContent = "Registration successful";
    feedbackDiv.style.color = "#28a745";
}
else{
   feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
}




});
});
