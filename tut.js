const form = document.getElementById('form');
const username = document.querySelector('#username');
const email =document.querySelector('#Email');
const password =document.querySelector('#password');
const confirmPw =document.querySelector('#confirm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkReq([username,email,password,confirmPw]);
    checkLen(username,3,15);
    checkLen(password,6,25);
    validateEmail(email);
    checkPw(password,confirmPw);
})
function showError(input,massege) {
    UAContaienr = input.parentElement;
    UAContaienr.className = "U--container fail error";
    const small = UAContaienr.querySelector('small');
    small.innerText = massege;
}
function showPass(input) {
    UAContaienr = input.parentElement;
    UAContaienr.className = "U--container suc";
}
function validateEmail(input) { //Credit: https://stackoverflow.com/users/3518452/rnevius
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showPass(input)
    }else {
        showError(input, 'Emial is not vaild');
    }
}
function checkReq(arr) {
    arr.forEach((input)=> {
        console.log(input.id);
        if(input.value.trim() === '')showError(input,`${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is Required`)
        else showPass(input);
    });
}
function checkLen(input,min,max) {
    if(input.value.length<min) showError(input,`${input.id.charAt(0).toUpperCase() + input.id.slice(1)} must be at least ${min} charcters`)
    else if(input.value.length>max) showError(input,`${input.id.charAt(0).toUpperCase() + input.id.slice(1)} must be less than ${max} charcters`)
    else showPass(input);
}
function checkPw(input1,input2) {
    if(input1.value !== input2.value) showError(confirmPw,"Passwords don't match");}
