$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
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
