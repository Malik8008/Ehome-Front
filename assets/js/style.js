$('.blogcarusel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        400:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.carusel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:7
        },
        600:{
            items:7
        },
        1000:{
            items:7
        }
    }
})

$('.detailcarousel').owlCarousel({
    loop:true,
    dots:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:0
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



let btnScrolltop = document.querySelector("#btnScrollTop")

btnScrolltop.addEventListener('click' ,function(){

    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });   
})

window.addEventListener("scroll" ,scrollFunction);

function scrollFunction(){
    if(window.scrollY>300){
        btnScrolltop.style.display="block";
    }
    else{
        btnScrolltop.style.display="none";
    }
}





$(document).ready(function(){
    $(".catli").hide();
    $(".cat-li").click(function(e){
        e.preventDefault();
        $(".catli").slideToggle();
        $(".cat-li i").toggleClass("cat-li-icon")
    });
  });

const menu = document.querySelector(".menubar");
const menubarin = document.querySelector(".menubarin");

menu.addEventListener("click" , (e)=>{
    e.preventDefault();
    menu.classList.toggle("active");
    menubarin.classList.toggle("active");
})



  
  