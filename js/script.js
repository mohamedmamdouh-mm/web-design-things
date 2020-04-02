/*global $,alert,console*/
$(function(){
    'use strict';
    // trigger nice scrool
    $('html').niceScroll({
        cursorcolor:'#f7600e',
        width:10,
        cursorborderradius:0,
        cursorborder:'1px solid #f7600e'
    });
    
    // change header height
    $(document).ready(function(){
      $('.header').height($(window).height());  
    });
    
    
    // scroll to features
    $('.header .arrow i').click(function(){
       $('html , body').animate({
           scrollTop:$('.Features').offset().top
       },1000) 
    });
    $('.hire').click(function(){
       $('html , body').animate({
           scrollTop:$('.our-team').offset().top
       },1000); 
    });
    
    
    // show hidden items
    $('.show-more').click(function(){
    $('.our-work .hidden').fadeIn(10000);
    });
    // check testimonial
       var leftArrow = $('.testim .fa-chevron-left'),
           rightArrow = $('.testim .fa-chevron-right');
      function ckeckclients(){
          
          
          $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
          
          $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
      }
    ckeckclients();
    
    $('.testim i').click(function(){
        if($(this).hasClass('.fa-chevron-right')){
            $('.testim .active').fadeOut(100, function (){
               $(this).removeClass('active').next('.client').addClass('active').removeClass('hidden').fadeIn();
                ckeckclients();
            });
        }else{
             $('.testim .active').fadeOut(100, function (){
               $(this).removeClass('active').next('.client').addClass('active').removeClass('hidden').fadeIn();
                ckeckclients();
            });
        }
    });
    
});
function myFnc(e){
            e.classList.toggle("show");
            var elem = document.getElementById("navID"),
            style = window.getComputedStyle(elem),
            right = style.getPropertyValue("right");
            
            if(right == "0px" ){
               elem.style.right = "-260px";
            }else{
                elem.style.right = "0px"
            }
            
            
        };


  


