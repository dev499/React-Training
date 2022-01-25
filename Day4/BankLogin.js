function validation() {
    var email=document.getElementById('email').value
    var pwd=document.getElementById('pwd').value

    if(email=='admin@gmail.com' && pwd=='admin123'){
        return true
    }
    else  {
        alert("E-mail or password is incorrect")
    }
}