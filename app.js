const button = document.querySelector('.btn');
const userPw = document.querySelector('#user-password');
const confirmPw = document.querySelector('#confirm-pw');
const errorMsg = document.querySelector('.error');


button.addEventListener('click', function(e) {
    // If password value does not match make both password field border red
    if(userPw.value !== confirmPw.value) {
        userPw.style.borderColor = 'red';
        confirmPw.style.borderColor = 'red';
        errorMsg.innerHTML = "* Password does not match";
        e.preventDefault();
    } else {
        userPw.style.borderColor = '#E5E7EB';
        confirmPw.style.borderColor = '#E5E7EB';
        errorMsg.innerHTML = "";
    }
})