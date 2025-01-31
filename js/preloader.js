// PRELOADER
let loader = document.getElementById('preloader');

function viewPage(){
    loader.style.display = 'none';
}

window.addEventListener('load', () =>{
   setTimeout(viewPage, '1000');
})