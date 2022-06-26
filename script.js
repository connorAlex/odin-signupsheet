const password = document.querySelector(".pass");
const check = document.querySelector(".check");


function passwordCheck(){
    console.log([password.value, check.value]);
    if (password.value === check.value){
        return true;
    }

    alert("Passwords do not match.");
    return false;
}

