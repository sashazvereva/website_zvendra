/* Slider */
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        speed: 800,
        initialSlide: 3,
        waitForAnimatme: false,
        centerMode: true
    });
});


/* Smooth slide navigation */
const menuLinks = document.querySelectorAll('a[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            window.scrollTo({
                top:gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


/* Button */
let animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },300);
};

let bubblyButtons = document.getElementsByClassName("bubbly-button");

for (let i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}


/* Вelay button */
jQuery(document).ready(function ($) {
   
    $('.bubbly-button').on('click', function(e) {
       e.preventDefault();
       
       let 
          href = $(this).attr('href'),
          timeout = 500;
          
       setTimeout(function() {
          location.href = href;
       }, timeout);
       
    });   
    
 }); 






 $(function(){
        // #2 вариант (события всплывают)        
        $(".image_first")
        .mouseover(function() {
            alert('блин');

                 // навели курсор на объект     
        })
        .mouseout(function(){           
                // отвели курсор с объекта
        });
  
});