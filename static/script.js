//sök fukntion 
function active(){
    var searchBar = document.getElementById('searchBar');

    if(searchBar.value == 'Sök på produkt...'){
        searchBar.value = ''
        searchBar.placeholder = 'Sök på produkt...'
    }}
function inactive(){
    var searchBar = document.getElementById('searchBar');

    if(searchBar.value == ''){
        searchBar.value = 'Sök på produkt...'
        searchBar.placeholder = ''
    }}
//sök fukntion end

// meny mobil
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      navLinks.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation = '';
        }
        else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
      burger.classList.toggle('toggle');
    }); }  
// meny mobil end

// slide show
navSlide();
const slideshowImages = document.querySelectorAll(".slideshow-img");

if (slideshowImages == undefined){
  console.log('ingen slide')
  } else {
    const nextImagesDelay = 4000;

    let currentImagesCounter = 0;
    
    slideshowImages[currentImagesCounter].style.display = "block";
    
    setInterval(nextImages, nextImagesDelay);
    
    function nextImages(){
        slideshowImages[currentImagesCounter].style.display = "none";
        currentImagesCounter = (currentImagesCounter + 1) % slideshowImages.length;
        slideshowImages[currentImagesCounter].style.display = "block";
  }
}
// slide show