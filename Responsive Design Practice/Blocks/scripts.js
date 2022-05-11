let menuBtn = document.getElementById('mobNavBtn');
let mobMenu = document.getElementById('mobNav');
mobMenu.style.maxHeight = "0px"


menuBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('Yup')
    toggleMenu();
})

mobMenu.addEventListener('click', (e)=>{
    toggleMenu();
})

function toggleMenu(){
    let maxHeight = mobMenu.style.maxHeight;
    if(maxHeight == "0px"){
        mobMenu.style.maxHeight = "100vh";
    } else {
        mobMenu.style.maxHeight = "0px";
    }
}