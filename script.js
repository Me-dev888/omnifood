$(document).ready(function(){
    
    $('.js-tp-sec').waypoint(function(direction){
        
      if(direction=="down"){
          $('nav').addClass('sticky');
      } else{
          $('nav').removeClass('sticky');
      }
    }, 
       {
         offset: '90px;'
       
       });
    
     $('.js-feat').waypoint(function(direction){
        $('.js-feat').addClass('animated fadeIn');},{
         offset:'300px;'
     }
        );
    $('.js-feat1').waypoint(function(direction){
        $('.js-feat1').addClass('animated fadeIn');},{
         offset:'440px;'
     }
        );
    $('.js--iphone').waypoint(function(direction){
        $('.js--iphone').addClass('animated bounceInUp');},{
         offset:'300px;'
     }
        );
    $('.js-form').waypoint(function(direction){
        $('.js-form').addClass('animated zoomIn');},{
         offset:'500px;'
     }
        );
    
   
    /*------------------------------------
       SCROLL FUCNTION
    ----------------------------------*/
    $('.js-btn1').click(function(){
        $('html, body').animate({scrollTop:$('.plans').offset().top},1000);
    });
    $('.js-btn2').click(function(){
        $('html, body').animate({scrollTop:$('.js-tp-sec').offset().top},1000);
    });
    $('.js-how').click(function(){
        $('html, body').animate({scrollTop:$('.sec-iphone').offset().top},1000);
    });
    $('.js-city').click(function(){
        $('html, body').animate({scrollTop:$('.js-cityon').offset().top},1000);
    });
    $('.js-signup').click(function(){
        $('html, body').animate({scrollTop:$('.plans').offset().top},1000);
    });
    $('.js-food').click(function(){
        $('html, body').animate({scrollTop:$('.js-tp-sec').offset().top},1000);
    });
});