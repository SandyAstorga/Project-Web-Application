//Variables Javascript puro
let nav = document.getElementById('nav');
let menu = document.getElementById('links');
let open = document.getElementById('open');
let btns = document.getElementsByClassName('btn-header')
let close = true;

function menus(){
    let current_offset = window.pageYOffset;
    
    if(current_offset <= 300){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        open.style.color = '#fff'

    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        open.style.color = '#000'
    }
}

function opening(){
    if(close){
        menu.style.width = '70vw';
        close = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        close = true;
    }
}
window.addEventListener('load', function(){
    $('#onload').fadeOut(); //jquery
    $('body').removeClass('hidden');
    menus();
});
window.addEventListener('click', function(e){
    if(close === false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== open){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            close = true;
        }
    }
});
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});
window.addEventListener('resize', function(){
    if(screen.width >= 700){
        close = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
open.addEventListener('click', function(){
    opening();
});