let a = document.querySelectorAll('.nav-link');
for (let x = 0; x < a.length; x++) {
  a[x].addEventListener('click', function (e) {
    $(e.target).css({
      color: '#666'
    })
    $('.offcanvas.offcanvas-end').toggleClass('show')
    $('.offcanvas-backdrop').toggleClass('show')
  })
}

// Slider Carousel 
// $(function(){
//     $('#home .carousel').carousel({
//         interval:3000,
//         pause:'false'
//     })
// })

// Trending Slider Section Start
$('.trending .owl-carousel').owlCarousel({
  margin:30,
  autoplay:false,
  autoplayTimeout:4000,
  autoplayHoverPause:false,
  loop:true,
  dots:false,
  nav:true,
  navText: ['<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
  responsive:{
      0:{
          items:1
      },
      400:{
          items:2
      },
      550:{
        items:3
      },
      800:{
        items:4
      },
      992:{
          items:3
      },
      1600:{
        items:5
      }

    }
    })
// Trending Slider Section End  



$('#review .owl-carousel').owlCarousel({
  margin:30,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:false,
  loop:true,
  dots:true,
  responsive:{

      0:{
          items:1
      },
     768:{
        items:2
      },
      1024:{
        items:3
      }

    }
    })

    AOS.init({
      duration:1000,
      delay:400,
      easing:'linear',
    })
