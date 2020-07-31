const form =document.querySelector('form');

const firstNameInputField=document.querySelector('.input-first-name');
const showErrorMessage=document.querySelector('.showErrorMessage');
const lastNameErrorMessage=document.querySelector('.lastNameErrorMesssage');
const emailErrorMessage=document.querySelector('.emailErrorMessage');
const passwordErrorMessage =document.querySelector('.passwordErrorMessage');
const errorImage = document.querySelector('.errorImage');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const firstNameInputValueAlternateOption = form['firstName'].value;
    console.log(firstNameInputValueAlternateOption)
    const lastNameInputValue = form['last'].value;
    console.log(lastNameInputValue)
    const emailInputValue = form['email'].value;
    const passwordInputValue = form['password'].value;

    if (firstNameInputValueAlternateOption == "") {
        showErrorMessage.innerHTML= '<p>Please enter First Name</p>'
        // errorImage.innerHTML= '<img src="images/alert.png" alt="error">';
        firstNameInputField.innerHTML = '<img src="images/alert.png" alt="error">';
    }else {
        showErrorMessage.innerHTML='<h1></h1>';
    }

    if (lastNameInputValue== "") {
        // console.log("We have arrived here");
        lastNameErrorMessage.innerHTML ='<p>Please enter Last Name</p>'
    }else {
        lastNameErrorMessage.innerHTML = '<h2></h2>'
    }

    const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passOrFail = re.test(emailInputValue)
    if(passOrFail){
        emailErrorMessage.innerHTML ='<p></p>';
    }else {
        emailErrorMessage.innerHTML = '<p>Enter valid email</p>';
    }

    const rePassword =/!/
    const passwordPassOrFail = rePassword.test(passwordInputValue)

    if(passwordPassOrFail==""){
        passwordErrorMessage.innerHTML = "<p>Password can't be blank </p>";
    }else {
        passwordErrorMessage.innerHTML ='<h2></h2>';
    }

})