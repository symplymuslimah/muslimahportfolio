document.addEventListener('DOMContentLoaded',function () {
    const activeIcon = document.querySelector('.icon-active');
    const cancelIcon = document.querySelector('.icon-cancel');
    const navHeading = document.querySelector('.nav-header');
     activeIcon.addEventListener('click',function () {
       navHeading.classList.add('active');
       activeIcon.style.display = 'none';
       cancelIcon.style.display = 'block';
    })
     
    cancelIcon.addEventListener('click',function () {
      navHeading.classList.remove('active');
      activeIcon.style.display = 'block';
      cancelIcon.style.display = 'none';
   })
    
  
  });

  //scroll reveal code
  ScrollReveal({ distance: '120px' });
  ScrollReveal().reveal('.container', { origin: 'top', delay:200, interval:300,
duration:3000 });
ScrollReveal().reveal('.landing-page-content h2,.landing-page-content p,.cv-content', { origin: 'left', delay:200, interval:400,
duration:3000 });
ScrollReveal().reveal('.landing-page-image', { origin: 'right', delay:200, interval:300,
duration:3000 });
ScrollReveal().reveal('.skill-content,.project-content,.others-content', { origin: 'left', delay:200, interval:300,
duration:3000 });
ScrollReveal().reveal('.contact-section', { origin: 'bottom', delay:200, interval:300,
duration:3000 });