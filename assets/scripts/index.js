window.addEventListener('DOMContentLoaded', event => {
    window.scrollTo(0, 0);
  
    // Navbar shrink function
    var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
      } else {
        navbarCollapsible.classList.add('navbar-shrink')
      }
  
    };
  
    // Shrink the navbar 
    navbarShrink();
  
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
  
    //Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 35,
      });
    };
  
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });

    // Create background colour change trigger on expanding navbar
    const navToggle = document.body.querySelector('#navbar-toggler-button');
    navToggle.addEventListener('click', () => {
      console.log("A click!");
      if (navToggle.getAttribute("aria-expanded") === 'true') {
        mainNav.style.transition = "background-color 0.2s ease";
        mainNav.style.backgroundColor = "#3b0505";
      }
      else {
        mainNav.style.transition = "background-color 0.4s ease";
        mainNav.style.backgroundColor = "transparent";
      }
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
      elements: '#portfolio a.portfolio-box'
    });
  
    //ScrollReveal animation
    const sr = ScrollReveal ({
      distance: '50px',
      duration: 2500,
      reset: true
    })
  
    sr.reveal('.page-section',{delay:250, origin:'bottom'})

    const resizeElement = () => {
      const element = document.body.querySelector(".video-embed");
      const screenWidth = window.innerWidth;
      const newWidth = screenWidth > 992 ? screenWidth * 0.75 : screenWidth*0.95; // Set new width to 80% of screen width if screen width is greater than 992px else 95% screen width
      element.style.width = `${newWidth}px`;
      element.style.height= `${newWidth * 0.5625}px`; // Maintain aspect ratio
    }

    resizeElement();
    window.addEventListener("resize", resizeElement);
  });