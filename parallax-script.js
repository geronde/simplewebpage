//sticky animated and responsive header

if ($(window).width() >= 961){   
  
  $(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("animated-nav");
    $('#logo').addClass('centered-logo');
    $('.hamburger').css('visibility', 'visible');
    $('.nav').css('visibility', 'hidden');
      }
  else{
    $('header').removeClass("animated-nav");
    $('#logo').removeClass('centered-logo');
    $('.hamburger').css('visibility', 'hidden');
    $('.nav').css('visibility', 'visible');
  }
});
}

else if ($(window).width() <= 960) {
  $(".nav").addClass('hide')
  $('#logo').removeClass('centered-logo').css('right', '0');
  $('.hamburger').css('visibility', 'visible');
     }
//creating the toggle
$('.hamburger').click(function(event) {
	$(this).toggleClass('is-active toggle-nav');

	$('.toggle-nav').toggleClass('hide animated fadeInDown');
	
});

//parallax effect 
var controller=new ScrollMagic.Controller();


  var scene1= new ScrollMagic.Scene({
    triggerElement:".section2",
    offset:-150

  })
  .setClassToggle(".quotes p",'slideup')
  .addTo(controller);  
var scene2=new ScrollMagic.Scene({
  triggerElement:".section3",
})
  .setClassToggle('.blend-phrase','slidedown')
  .addTo(controller);

  //adding tweens while scrolling
  

  var mainScene=new ScrollMagic.Scene({
    triggerElement:'.main-section',
    offset:400,
  })
  .setTween(TweenMax.to(".call_action",1,{
  y:"-300%",
  autoAlpha:0,
  delay:.8 
  }))
  .addTo(controller)

  var smileyScene=new ScrollMagic.Scene({
    triggerElement:'.section2',
    triggerHook:0.25,
    duration:"100%",
    duration:'25%'
  })
  .setClassToggle('.side-icons img',"swing")
  .setPin('.section2')
  .addTo(controller)

  var yogaScene=new ScrollMagic.Scene({
    triggerElement:'.section4',
    duration:'50%'
  })
  .setClassToggle('figure img',"pulse")
  .addTo(controller)

$('.social_media').find('img').addClass('animated');
 var  socialMediaIconsScene=new ScrollMagic.Scene({
    triggerElement:'footer',
    duration:'100%',
    triggerHook:1
  })
  .setClassToggle('.social_media img',"zoomIn")
  .addTo(controller)


  //smooth parallax scrolling
  controller.scrollTo(function (newpos) {
    TweenMax.to(window, 1, {scrollTo: {y: newpos}, ease:Power1.easeInOut});
});