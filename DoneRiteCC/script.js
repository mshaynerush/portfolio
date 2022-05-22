

if ( document.readyState = 'loading'){
    document.addEventListener('DOMContentLoaded', ready)

} else {
    ready();
}
var i = 0;
var p = 0;
function ready(){



var subBtn = document.getElementById('submitBtn');
var ctBtn = document.getElementById('contactBtn');




subBtn.addEventListener('click', verifyEmail);

ctBtn.addEventListener('click', goToContact);

}



function verifyEmail(){

        var email = document.getElementById('email').value;
        if (email.indexOf("@",0) < 0) {
            alert("Please Enter a valid e-mail address!");
            document.getElementById('email').style = "border-color: #AA0000";
        return;
        }
}

function goToContact(){
    
    location.href="#contact";
    
}

