$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
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

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
var typed = new Typed(".typing", {
    strings: [
        "UI/UX Designer",
        "Graphic Designer",
        "Casual Gamer",
        "Photo Enthusiast",
        "Coffee-Powered Creator",
        "Pixel Perfectionist"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed2 = new Typed(".typing-2", {
    strings: [
      "UI/UX Designer",
        "Graphic Designer",
        "Casual Gamer",
        "Photo Enthusiast",
        "Coffee-Powered Creator",
        "Pixel Perfectionist"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
        
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Scroll-triggered reveals (sections below the fold)
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-in-view');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });
        document.querySelectorAll('section:not(#home)').forEach(function (sec) {
            sec.classList.add('js-scroll-reveal');
            revealObserver.observe(sec);
        });
    }
});