function checkPassword() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    
    if (password1 !== password2){
        alert("كلمة السر غير متطابقة! يرجى التأكد من إدخال نفس كلمة السر في المدخلين.");
        return false;
    }

    return true; 
}