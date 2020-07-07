$(document).ready(function(){
    
    $('.js--features-section').waypoint(function(direction){
       if(direction == "down"){
           $('nav').addClass('sticky');
       }
        else{
            $('nav').removeClass('sticky');
        }
    },{ offset:'60px'});
    
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top} , 1000);  
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--features-section').offset().top} , 1000);  
    });


});