// NAVBAR
let lastScrollTop= 0;
navbar= document.getElementById('navbar');
window.addEventListener('scroll',function() {
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
     } else {
        navbar.style.top="0"
        }
        lastScrollTop=scrollTop;
    });

    //Compteur Live
    let Compteur= 0;

    $(window).scroll(function() {
        const top = $('.counter').offset().top - 
        window.innerHeight;

        if (Compteur == 0 && $(window).scrollTop() > top) {
            $('.counter-value').each(function() {
                let $this = $(this),
                countTo= $this.attr('data-count');
                $({
                    countNum: $this.text()

                }).animate({
                    countNum: countTo
                },
                {
                    duration:10000,
                    easing: 'swing',
                    step: function(){
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
            Compteur =1;
        }
    });




//TYPE D
var typed = new Typed('.typed', {
    strings: ["Bonjour à tous et à toutes, je me présente je m'apelle Yanis et j'ai décidé de me lancer à fond dans l'apprentisage du code, je suis actuellement entrain en formation de développeur web a Pop School (Lens). J'y apprend les langages de programmation tels que PHP,Html, Css, Javascript et ses frameworks ( React, nodejs,vuejs) afin de devenir le plus rapidement possible développeur. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder."],
    typeSpeed: 20,
    
  });