var explorebtn = document.querySelector('.explorebtn')
var navbar = document.querySelector('.navigation-bar')
var navbarElement = document.querySelectorAll('.navbar-element')

explorebtn.addEventListener('click', showNavBarList)


function showNavBarList(){
    navbar.classList.toggle('inactive-navbar')
};

navbarElement.forEach(navbarElement => {
    navbarElement.addEventListener('click', function hideNavbarList() {
        navbar.classList.add('inactive-navbar')

        
    })
});