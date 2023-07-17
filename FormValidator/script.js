const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const repassword = document.getElementById('repassword');

function validateEmail(email) {
    var regexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var isValid = regexPattern.test(email);
    return isValid;
}


function isValid(input)
{
    if(input.value === '')
    {
        error(input, input.name + " boş geçilemez.");
    }else{
        success(input);
    }
    
    if(input.id == 'email' && input.value !== '')
    {
        if(validateEmail(input.value))
        {
            success(input)
        }else{
            error(input,"Hatalı e-posta formatı girildi.")
        }
    }

    if(input.id == 'password' && input.value !== '')
    {
        if(input.value.length < 7 || input.value.length > 16)
        {
            error(input,"Şifre minimum 7, maksimum 16 karakter olmalıdır.");
        }
        else{
            success(input);
        }
    }


    if(input.id == 'repassword' && input.value !== '')
    {
        if(input.value != password.value)
        {
            error(input,"Şifreler uyuşmuyor, tekrar deneyin.");
        }else{
            success(input);
        }
    }
}

function error(input, message){
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input){
    input.className = 'form-control is-valid'
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    isValid(username);
    isValid(email);
    isValid(password);
    isValid(repassword);
});
