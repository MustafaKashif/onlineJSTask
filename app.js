let passwordField = document.getElementById("passwordField")
let checkBox = document.getElementById("showPassword")

function showPassword(){
if(checkBox.checked){
    passwordField.type = "text"
}
else{
    passwordField.type = "password"
}
}