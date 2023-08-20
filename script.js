var nameError    =document.getElementById('name-error');
var phoneError   =document.getElementById('mobile-error');
var emailError   =document.getElementById('email-error');
var messegeError = document.getElementById('message-error');
var submitError  =document.getElementById('submit-error');


function validateName() {
    var name = document.getElementById('contact-name').value;
    

    if (name.length == 0) {

        nameError.innerHTML= 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Enter full name';
        return false;
    }
    
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    localStorage.setItem("Name:-",name);


  
    return true;
    

}
function validatenumber(){
    var phone = document.getElementById('mobilenumber').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Enter phone number'
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML="check the number"
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'invalid number';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    localStorage.setItem("Phone Number:", phone);
    return true;

}
function validateemail() {
    var email = document.getElementById('Email').value; 
    if (email.length == 0) {
        emailError.innerHTML = 'Enter E-mail'; 
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        emailError.innerHTML = 'invalid mail id'
        return false;
    }

  

  
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    localStorage.setItem("Email:", email);
    return true;
}



function validatemessage() {
  var messege = document.getElementById('message').value;
  var required = 30;
  var left = required - messege.length;

  if (left > 0) {
    messegeError.innerHTML = left + ' more character required'; 
    return false;
  }

  messegeError.innerHTML = '<i class="fa-solid fa-check"></i>';
  localStorage.setItem("Message:", message);
  return true;
}
function validateform(){
    if(!validateName() || validatenumber() || validateemail()||validatemessage()){
        submitError.style.display ='block'
        submitError.innerHTML ='Please fix the error to submit';
        setTimeout(function(){submitError.style.display ='none';},3000);
        false
    }
}


    
   
