const headerMenuToggle=document.querySelector(".header__menu-toggle");
const headerMenus=document.querySelector(".header-menus");
headerMenuToggle.addEventListener('click',()=>{
    headerMenus.classList.toggle('active');
});
