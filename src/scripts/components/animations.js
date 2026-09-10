/**
 * Initializes Intersection Observer for scroll animations.
 * Elements with the .fade-up class will animate when scrolling into view.
 */
export function initAnimations() {
  const fadeElements = document.querySelectorAll('.fade-up');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px 150px 0px'
  };

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => fadeObserver.observe(el));
}
