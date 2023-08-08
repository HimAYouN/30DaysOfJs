let imgId = document.getElementById('imageID');
let button = document.getElementById('button');
let imgcls = document.getElementsByClassName('imgClass');

function SlideShow(){
    for(i = 0; i<imgcls.length;i++){
        imgcls[i].style.display = "";
    }
}

button.addEventListener('click', ()=>{
    SlideShow();
});
