// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get header height for offset
                const headerHeight = document.querySelector('.header').offsetHeight;
                
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scrolling for the button in the title sectionS
    document.querySelector('.title-section .btn').addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
        });
        }
    });

    // Add to your script.js
document.addEventListener('DOMContentLoaded', function() {
    const modelViewer = document.querySelector('model-viewer');
    const progressBar = document.querySelector('.progress-bar');
    const updateBar = document.querySelector('.update-bar');
    
    if (modelViewer && progressBar && updateBar) {
      modelViewer.addEventListener('progress', (event) => {
        const progress = event.detail.totalProgress * 100;
        updateBar.style.width = `${progress}%`;
        if (progress === 100) {
          progressBar.classList.add('hide');
        } else {
          progressBar.classList.remove('hide');
        }
      });
    }
  });
  
    
    // Navbar background change on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg');
            header.classList.remove('shadow-sm');
        } else {
            header.classList.remove('shadow-lg');
            header.classList.add('shadow-sm');
        }
    });
    
    // Add active class to nav items based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavItem() {
        const scrollY = window.pageYOffset;
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.navbar-nav a[href*=${sectionId}]`)?.classList.add('active');
            } else {
                document.querySelector(`.navbar-nav a[href*=${sectionId}]`)?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavItem);
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Here you would typically send the data to a server
            console.log('Form submitted with values:', formValues);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-3';
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            
            this.reset();
            this.appendChild(successMessage);
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
});
