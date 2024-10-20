//change nav color
window.onload = function () {
    window.addEventListener('scroll', changeNavColor)

    let myNav = document.querySelector('.main-nav');
    
    function changeNavColor() {
        if (window.scrollY > 100) {
            myNav.classList.add('scrolled');
        }
        else {
            myNav.classList.remove('scrolled');
        }
    }
}