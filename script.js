var explorebtn = document.querySelector('.explorebtn')
var navbar = document.querySelector('.navigation-bar')
var navbarElement = document.querySelectorAll('.navbar-element')
var techDescription = document.querySelectorAll('.tech-description')
var htmlTech = document.querySelector('.html-tech')
var cssTech = document.querySelector('.css-tech')
var jsTech = document.querySelector('.js-tech')
var gitTech = document.querySelector('.git-tech')
var githubTech = document.querySelector('.github-tech')
var htmlDescription = document.querySelector('#html-description')
var cssDescription = document.querySelector('#css-description')
var jsDescription = document.querySelector('#js-description')
var gitDescription = document.querySelector('#git-description')
var gitHubDescription = document.querySelector('#gitHub-description')
var techdescCloseBtn = document.querySelectorAll('.closebtn')
var darken = document.querySelector('.darken')
var darkenToggle = document.querySelector('.darken-inactive')

explorebtn.addEventListener('click', showNavBarList)
htmlTech.addEventListener('click', showhtmldescription)
cssTech.addEventListener('click', showCSSdescription)
jsTech.addEventListener('click', showJsdescription)
gitTech.addEventListener('click', showGitdescription)
githubTech.addEventListener('click', showGitHubdescription)


function showNavBarList(){
    navbar.classList.toggle('inactive-navbar')
};

navbarElement.forEach(navbarElement => {
    navbarElement.addEventListener('click', function hideNavbarList() {
        navbar.classList.add('inactive-navbar')    
    })
});

function showhtmldescription(){
    htmlDescription.classList.toggle('inactive-tech-description')
    cssDescription.classList.add('inactive-tech-description')
    jsDescription.classList.add('inactive-tech-description')
    gitDescription.classList.add('inactive-tech-description')
    gitHubDescription.classList.add('inactive-tech-description')
    darken.classList.remove('darken-inactive')
}
function showCSSdescription(){
    cssDescription.classList.toggle('inactive-tech-description')
    htmlDescription.classList.add('inactive-tech-description')
    jsDescription.classList.add('inactive-tech-description')
    gitDescription.classList.add('inactive-tech-description')
    gitHubDescription.classList.add('inactive-tech-description')
}
function showJsdescription(){
    jsDescription.classList.toggle('inactive-tech-description')
    cssDescription.classList.add('inactive-tech-description')
    htmlDescription.classList.add('inactive-tech-description')
    gitDescription.classList.add('inactive-tech-description')
    gitHubDescription.classList.add('inactive-tech-description')
}
function showGitdescription(){
    gitDescription.classList.toggle('inactive-tech-description')
    jsDescription.classList.add('inactive-tech-description')
    cssDescription.classList.add('inactive-tech-description')
    htmlDescription.classList.add('inactive-tech-description')
    gitHubDescription.classList.add('inactive-tech-description')
}
function showGitHubdescription(){
    gitHubDescription.classList.toggle('inactive-tech-description')
    gitDescription.classList.add('inactive-tech-description')
    jsDescription.classList.add('inactive-tech-description')
    cssDescription.classList.add('inactive-tech-description')
    htmlDescription.classList.add('inactive-tech-description')

}

/*Closing technologies description by using the CloseBtn */ 
techdescCloseBtn.forEach(techdescCloseBtn =>{
    techdescCloseBtn.addEventListener('click', hideTechDescription)
    function hideTechDescription(e){
        for(var i=0; i < techDescription.length; i++){
            if (e.target !== techDescription[i]){
                techDescription[i].classList.add('inactive-tech-description')
            }
        }   
    }
})

/*Closing Technologies description by Clicking outside of the description*/
