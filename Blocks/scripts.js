let menuBtn = document.getElementById('mobNavBtn');
let mobMenu = document.getElementById('navMenu');
mobMenu.style.maxHeight = "0px"


menuBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    toggleMenu();
})

mobMenu.addEventListener('click', (e)=>{
    toggleMenu();
})

function toggleMenu(){
    let maxHeight = navMenu.style.maxHeight;
    if(maxHeight == "0px"){
        navMenu.style.maxHeight = "100vh";
    } else {
        navMenu.style.maxHeight = "0px";
    }
}

let learnMoreBtn = document.querySelector('#fenderLearnMore');
learnMoreBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('click')
})

let formBtn = document.querySelector('#submitBtn')
formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("For example only - cannot send");
})