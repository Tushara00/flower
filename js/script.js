

let menuBar = document.querySelector('.menuBar');
let navBar = document.querySelector('.navbar');
window.onscroll = () => {
    menuBar.classList.remove('fa-times') ; 
    navBar.classList.remove('active');
}
menuBar.addEventListener('click',() =>{
    menuBar.classList.toggle('fa-times') ; 
    navBar.classList.toggle('active');
})
console.log(navbar);