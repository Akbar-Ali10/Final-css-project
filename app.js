
$(document).ready(function(){
    $('.slider').slick({
      dots: true, 
      infinite: true, 
      speed: 300,
      slidesToShow: 1, 
      slidesToScroll: 1, 
      autoplay: true, 
      autoplaySpeed: 2000 
    });


    AOS.init();
  });



////////////////////////////////////////////////////////////  


const scrollbtn = document.querySelector("#Scroll-to-top");

window.addEventListener("scroll",() =>{
     if(window.pageYOffset > 4000){
        scrollbtn.style.display = "block";
     }else{
        scrollbtn.style.display = "none";
     }
     
     scrollbtn.addEventListener("click", function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
     });
});


///////////////////////////////////////////////animation code////////////



///////////////////////////////////////////////animation code////////////