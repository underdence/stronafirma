const navMobile=document.querySelector(".header__nav-mobile");const navBtn=document.querySelector(".hamburger");const handleNav=()=>{navBtn.classList.toggle('is-active');navMobile.classList.toggle('header__nav-mobile--active')}
navMobile.addEventListener('click',handleNav)
navBtn.addEventListener('click',handleNav)