var email =  document.getElementById("email");

const emailFormat = /^([a-zA-Z0-9._]+[@][a-z]+[.][a-z]+)?$/;

function emailValidation() {
    if ( emailFormat.test(email.value) ){
        // console.log(email.value);
        alert("Valid Email");
        return true;
    } else {
        alert("Not a Valid Email");
        return false;
    }
}