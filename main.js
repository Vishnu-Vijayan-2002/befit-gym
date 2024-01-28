var login=()=>{
    
    if(floatingInput.value==""|| floatingPassword.value=="")
    {
        alert("please fill the form completetly...")
    }
    else{
        user=floatingInput.value
        localStorage.setItem("user",user)
        window.location="register.html"
        alert("Login Sucessfully!!...")
    }
    
}
