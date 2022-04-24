let navBtn = document.getElementById("mobNavBtn");
let mobNav = document.getElementById("mobNav");
mobNav.style.maxHeight = "0px"

navBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    menuToggle();

})

function menuToggle(){

    if(mobNav.style.maxHeight == "0px"){
        console.log("height is 0")
        mobNav.style.maxHeight = "400px"
    } else {
        console.log("height is not 0")
        mobNav.style.maxHeight = "0px"
    }
}