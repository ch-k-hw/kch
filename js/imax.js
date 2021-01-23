$(function(){
    $('.gnb>div>ul >li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
        $('.gnb_bg').stop().slideDown(400);
    });
    $('.gnb>div>ul >li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
        $('.gnb_bg').stop().slideUp(400);
    });
    $(document).ready(function() {
      $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3srdPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['imax', 'screen', 'camera','sound'],
        });
    });
      var defaultW=20; 
      var expendW=40;
      var othersW=(100-expendW)/4;
      $('#fullpage .movie>div').on('mouseenter',function(){
          $(this).stop().animate({width:expendW+'%'},300);
         $(this).siblings().stop().animate({width:othersW+'%'},300);    
      
      });
      $('#fullpage .movie>div').on('mouseleave',function(){ $('#fullpage .movie>div').stop().animate({width:defaultW+'%'},300);  
      })
    
    
    
});