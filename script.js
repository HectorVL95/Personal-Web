var explorebtn = document.querySelector('.explorebtn')
var navbar = document.querySelector('.navigation-bar')
var navbarElement = document.querySelectorAll('.navbar-element')
var techDescription = document.querySelectorAll('.tech-description')

/*Hobbies Pictures */
var bmx = document.querySelector('.bmx')
var htmlCssCert = document.querySelector('.htmlCssCert')
var book = document.querySelector('.book')
var jsCert = document.querySelector('.jsCert')
var htmlCode = document.querySelector('.htmlCode')
var respDesCert = document.querySelector('.respDesCert')

/*Hobby Big Pictures*/
var hobbiesBigPics = document.querySelectorAll('.hobbies-big-pics')
var bmxBigPic = document.querySelector('.bmxBigPic')
var htmlCssCertBigPic = document.querySelector('.htmlCssCertBigPic')
var bookBigPic = document.querySelector('.bookBigPic')
var jsCertBigPic = document.querySelector('.jsCertBigPic')
var htmlCodeBigPic = document.querySelector('.htmlCodeBigPic')
var respDesCertBigPic = document.querySelector('.respDesCertBigPic')


/*Technologies */
var htmlTech = document.querySelector('.html-tech')
var cssTech = document.querySelector('.css-tech')
var jsTech = document.querySelector('.js-tech')
var gitTech = document.querySelector('.git-tech')
var githubTech = document.querySelector('.github-tech')
var reactTech = document.querySelector('.react-tech')

/*Technologies Description */
var htmlDescription = document.querySelector('#html-description')
var cssDescription = document.querySelector('#css-description')
var jsDescription = document.querySelector('#js-description')
var gitDescription = document.querySelector('#git-description')
var gitHubDescription = document.querySelector('#gitHub-description')
var reactDescription = document.querySelector('#react-description')
var techdescCloseBtn = document.querySelectorAll('.closebtn')
 
/*Darken Website */
var darken = document.querySelector('.darken')
var darkenToggle = document.querySelector('.darken-inactive')

/* AddEventListeners */
explorebtn.addEventListener('click', showNavBarList)
htmlTech.addEventListener('click', showhtmldescription)
cssTech.addEventListener('click', showCSSdescription)
jsTech.addEventListener('click', showJsdescription)
gitTech.addEventListener('click', showGitdescription)
githubTech.addEventListener('click', showGitHubdescription)
reactTech.addEventListener('click', showReactdescription)
darken.addEventListener('click', closeTechDescription)
bmx.addEventListener('click', showBmxPicture)
htmlCssCert.addEventListener('click', showHtmlCssCert)
book.addEventListener('click', showBook)
jsCert.addEventListener('click', showjsCert)
htmlCode.addEventListener('click', showHtmlCode)
respDesCert.addEventListener('click', showrespDesCert)




function showNavBarList(){
    navbar.classList.toggle('inactive-navbar')
};

navbarElement.forEach(navbarElement => {
    navbarElement.addEventListener('click', function hideNavbarList() {
        navbar.classList.add('inactive-navbar')    
    })
});



/*hobbyImage.forEach(hobbyImage => {
    hobbyImage.addEventListener('click', showHobbyImages)
    function showHobbyImages(e){
        for(var i=0; i < hobbyBigPics.length; i++){
            if (e.target !== hobbyBigPics[i]){
                hobbyBigPics[i].classList.remove('hobbies-inactive')
            }
        }
    }
});*/


function showhtmldescription(){
    htmlDescription.classList.toggle('inactive-tech-description')
    cssDescription.classList.add('inactive-tech-description')
    jsDescription.classList.add('inactive-tech-description')
    gitDescription.classList.add('inactive-tech-description')
    gitHubDescription.classList.add('inactive-tech-description')
    reactTech.classList.add('inactive-tech-description')
    darken.classList.remove('darken-inactive')
}
function showCSSdescription(){
    cssDescription.classList.toggle('inactive-tech-description')
    htmlDescription.classList.add('inactive-tech-description')
    jsDescription.classList.add('inactive-tech-description')
    gitDescription.classList.add('inactive-tech-description')
    gitHubDescription.classList.add('inactive-tech-description')
    reactTech.classList.add('inactive-tech-description')
    darken.classList.remove('darken-inactive')
}
function showJsdescription(){
    jsDescription.classList.toggle('inactive-tech-description')
    cssDescription.classList.add('inactive-tech-description')
    htmlDescription.classList.add('inactive-tech-description')
    gitDescription.classList.add('inactive-tech-description')
    gitHubDescription.classList.add('inactive-tech-description')
    reactTech.classList.add('inactive-tech-description')
    darken.classList.remove('darken-inactive')
}
function showGitdescription(){
    gitDescription.classList.toggle('inactive-tech-description')
    jsDescription.classList.add('inactive-tech-description')
    cssDescription.classList.add('inactive-tech-description')
    htmlDescription.classList.add('inactive-tech-description')
    gitHubDescription.classList.add('inactive-tech-description')
    reactTech.classList.add('inactive-tech-description')
    darken.classList.remove('darken-inactive')
}
function showGitHubdescription(){
    gitHubDescription.classList.toggle('inactive-tech-description')
    gitDescription.classList.add('inactive-tech-description')
    jsDescription.classList.add('inactive-tech-description')
    cssDescription.classList.add('inactive-tech-description')
    htmlDescription.classList.add('inactive-tech-description')
    reactTech.classList.add('inactive-tech-description')
    darken.classList.remove('darken-inactive')
}
function showReactdescription(){
    reactDescription.classList.toggle('inactive-tech-description')
    gitDescription.classList.add('inactive-tech-description')
    gitHubDescription.classList.add('inactive-tech-description')
    jsDescription.classList.add('inactive-tech-description')
    cssDescription.classList.add('inactive-tech-description')
    htmlDescription.classList.add('inactive-tech-description')
    darken.classList.remove('darken-inactive')
}
function showBmxPicture(){
    bmxBigPic.classList.toggle('hobbies-inactive')
    htmlCssCertBigPic.classList.add('hobbies-inactive')
    bookBigPic.classList.add('hobbies-inactive')
    jsCertBigPic.classList.add('hobbies-inactive')
    htmlCodeBigPic.classList.add('hobbies-inactive')
    respDesCertBigPic.classList.add('hobbies-inactive')
    darken.classList.remove('darken-inactive')

}
function showHtmlCssCert(){
    bmxBigPic.classList.add('hobbies-inactive')
    htmlCssCertBigPic.classList.toggle('hobbies-inactive')
    bookBigPic.classList.add('hobbies-inactive')
    jsCertBigPic.classList.add('hobbies-inactive')
    htmlCodeBigPic.classList.add('hobbies-inactive')
    respDesCertBigPic.classList.add('hobbies-inactive')
    darken.classList.remove('darken-inactive') 
}
function showBook(){
    bmxBigPic.classList.add('hobbies-inactive')
    htmlCssCertBigPic.classList.add('hobbies-inactive')
    bookBigPic.classList.toggle('hobbies-inactive')
    jsCertBigPic.classList.add('hobbies-inactive')
    htmlCodeBigPic.classList.add('hobbies-inactive')
    respDesCertBigPic.classList.add('hobbies-inactive')
    darken.classList.remove('darken-inactive')     
}
function showjsCert(){
    bmxBigPic.classList.add('hobbies-inactive')
    htmlCssCertBigPic.classList.add('hobbies-inactive')
    bookBigPic.classList.add('hobbies-inactive')
    jsCertBigPic.classList.toggle('hobbies-inactive')
    htmlCodeBigPic.classList.add('hobbies-inactive')
    respDesCertBigPic.classList.add('hobbies-inactive')
    darken.classList.remove('darken-inactive')     
}
function showHtmlCode(){
    bmxBigPic.classList.add('hobbies-inactive')
    htmlCssCertBigPic.classList.add('hobbies-inactive')
    bookBigPic.classList.add('hobbies-inactive')
    jsCertBigPic.classList.add('hobbies-inactive')
    htmlCodeBigPic.classList.toggle('hobbies-inactive')
    respDesCertBigPic.classList.add('hobbies-inactive')
    darken.classList.remove('darken-inactive')      
}
function showrespDesCert(){
    bmxBigPic.classList.add('hobbies-inactive')
    htmlCssCertBigPic.classList.add('hobbies-inactive')
    bookBigPic.classList.add('hobbies-inactive')
    jsCertBigPic.classList.add('hobbies-inactive')
    htmlCodeBigPic.classList.add('hobbies-inactive')
    respDesCertBigPic.classList.toggle('hobbies-inactive')
    darken.classList.remove('darken-inactive')    
}



/*Closing technologies description and darken by using the CloseBtn */ 
techdescCloseBtn.forEach(techdescCloseBtn =>{
    techdescCloseBtn.addEventListener('click', hideTechDescription)
    function hideTechDescription(e){
        for(var i=0; i < techDescription.length; i++){
            if (e.target !== techDescription[i]){
                techDescription[i].classList.add('inactive-tech-description')
            }
        
        }   
    }
    techdescCloseBtn.addEventListener('click', hideDarken)
    function hideDarken (){
        darken.classList.add('darken-inactive')
    }
    techdescCloseBtn.addEventListener('click', hideHobbiesBigPics)
    function hideHobbiesBigPics(e){
        for(var i = 0; i < hobbiesBigPics.length; i++){
            if (e.target !== hobbiesBigPics[i]){
                hobbiesBigPics[i].classList.add('hobbies-inactive')
            }
        }
    }
    })

/*Closing Technologies description by Clicking outside of the description*/
function closeTechDescription(e){
    for(var i=0; i < techDescription.length; i++){
        if(e.target !== techDescription[i]){
            techDescription[i].classList.add('inactive-tech-description')
        }
    }
    for(var i = 0; i < hobbiesBigPics.length; i++){
        if(e.target !== hobbiesBigPics[i]){
            hobbiesBigPics[i].classList.add('hobbies-inactive')
        }
    }
    darken.classList.add('darken-inactive')
}
