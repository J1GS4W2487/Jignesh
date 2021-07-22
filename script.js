$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		} // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
	});


    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

	// toggle menu/navbar
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});
	$('.carousel').owlCarousel({
		margin:20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items: 1,
				nav: false
			},
			600:{
				items:2,
				nav: false
			},
			1000:{
				items:3,nav: false
			}
		}
	});
});

// sld script
$('.scroll-up-btn').click(function(){
	$('html').animate({scrollTop:0});
});

var typed = new Typed(".typing",{
	strings:["Programmer","Web Designer","Equity Analyst","Content Writer","Hogwarts Alumnus"],
	typeSpeed:100,
	backSpeed:60,
	loop: true
}); 
var typed = new Typed(".typing-2",{
	strings:["Programmer","Web Designer","Equity Analyst", "Content Writer","Hogwarts Alumnus"],
	typeSpeed:100,
	backSpeed:60,
	loop: true
}); 
var typed = new Typed(".typing3",{
	strings:["Designing"],
	typeSpeed:60,
	backSpeed:100,
	loop: true
}); 
var typed = new Typed(".typing4",{
	strings:[" Programs"],
	typeSpeed:85,
	backSpeed:90,
	loop: true
}); 
var typed = new Typed(".typing5",{
	strings:["Market"],
	typeSpeed:140,
	backSpeed:70,
	transition: true,
	loop: true
	
}); 


