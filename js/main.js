const navBtn=document.getElementById('navBurger');
navBtn.addEventListener('click', (navfunc)=>{
    let burgerX=document.querySelectorAll('.burgerx');
    let navCont=document.getElementById('navCont');
    if(navBtn.className=='burger b'){
        navCont.style.right='0';
        navBtn.className='burger';
        burgerX[0].style.transform='rotate(45deg)';
        burgerX[0].style.top='12px';
        burgerX[2].style.bottom='12px';
        burgerX[2].style.transform='rotate(-45deg)';
        burgerX[1].style.display='none';

    } else{
        navCont.style.right='-100%';
        navBtn.className='burger b';
        burgerX[0].style.transform='rotate(0deg)';
        burgerX[2].style.transform='rotate(0deg)';
        burgerX[1].style.display='flex';
        burgerX[0].style.top='5px'

    }
})