$(function() {

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: true,
            nav: true,
            dots: true,
            pauseOnHover: false,
            responsive:{
                600:{
                    margin: 20,
                    nav: true,
                  items: 2
                },
                1000:{
                    margin: 20,
                    stagePadding: 0,
                    nav: true,
                  items: 3
                }
            }
        });            
    }

})



document.addEventListener('DOMContentLoaded', function() {
  const ratingStars = document.querySelectorAll('.rating .star');

  ratingStars.forEach((star, index) => {
    star.addEventListener('click', function() {
      const ratingValue = index + 1;

      // Set rating value to hidden input
      const ratingInput = document.querySelector('.rating input[type="number"]');
      ratingInput.value = ratingValue;

      // Update visual style of stars
      ratingStars.forEach((star, i) => {
        if (i <= index) {
          star.classList.remove('far');
          star.classList.add('fas');
        } else {
          star.classList.remove('fas');
          star.classList.add('far');
        }
      });
    });
  });
});
