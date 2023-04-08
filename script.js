const loginBox = document.querySelector('#login'),
    signupBox = document.querySelector('#signup'),
    loginLink = document.querySelector('#login_link'),
    signupLink = document.querySelector('#signup_link'),
    eyeIcons = document.querySelectorAll('.fa-eye-slash');

eyeIcons.forEach(eyeIcon => {
    eyeIcon.addEventListener('click', () => {
        const passwords = document.querySelectorAll('.password');
        // console.log(password.type);
        passwords.forEach(password => {
            if (password.type == "password") {
                password.type = "text";
                eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
                return;
            }else{
            password.type = "password";
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
            }
        })
     
    });
});


signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupBox.style.display = 'block';
    loginBox.style.display = 'none';
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupBox.style.display = 'none';
    loginBox.style.display = 'block';
})

