function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    let message = document.getElementById("message");
    console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Wow, Passwords match";
            message.style.backgroundColor = "#1dcd59";
            location.href="file:///C:/Users/Toshiba/Documents/HTML%20i%20CSS/webiste%20proj/unmmsg.html"
        }
        else{
            message.textContent = "Sorry, Password's don't match";
            message.style.backgroundColor = "#ff4d4d";
        }
    }
    else{
        alert("Password can't be empty!");
        message.textContent = "";
    }
}
function checkEmail(){
    let Email = document.getElementById("Email").value;
    let cnfrmEmail = document.getElementById("cnfrm-Email").value;
    let messagee = document.getElementById("messagee");
    console.log(" Email:", Email,'\n',"Confirm Email:",cnfrmEmail);

    if(Email.length != 0){
        if(Email == cnfrmEmail){
            messagee.textContent = "Wow, Email's match!";
            messagee.style.backgroundColor = "#1dcd59";
        }
        else{
            messagee.textContent = "Sorry, Email's don't match";
            messagee.style.backgroundColor = "#ff4d4d";
        }
    }
    else{
        alert("Email can't be empty!");
        messagee.textContent = "";
    }
}