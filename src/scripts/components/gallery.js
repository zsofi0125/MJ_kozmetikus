/**
 * Initializes the interactive gallery carousel.
 */
export function initGallery() {
  const track = document.getElementById('galleryTrack');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');

  if (track && prevBtn && nextBtn) {
    let isAnimating = false;

    const getMoveAmount = () => {
      const firstChild = track.firstElementChild;
      if (!firstChild) return 400;
      const computedGap = parseFloat(window.getComputedStyle(track).gap) || 40;
      return firstChild.getBoundingClientRect().width + computedGap;
    };

    nextBtn.addEventListener('click', () => {
      if (isAnimating) return;
      const firstImg = track.firstElementChild;
      if (!firstImg) return;
      
      isAnimating = true;
      const moveAmount = getMoveAmount();
      
      track.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)';
      track.style.transform = `translateX(-${moveAmount}px)`;

      const handleNextEnd = () => {
        track.style.transition = 'none';
        track.appendChild(firstImg);
        track.style.transform = 'translateX(0)';
        void track.offsetWidth;
        isAnimating = false;
        track.removeEventListener('transitionend', handleNextEnd);
      };

      track.addEventListener('transitionend', handleNextEnd);
    });

    prevBtn.addEventListener('click', () => {
      if (isAnimating) return;
      const lastImg = track.lastElementChild;
      if (!lastImg) return;

      isAnimating = true;
      const moveAmount = getMoveAmount();

      track.style.transition = 'none';
      track.prepend(lastImg);
      track.style.transform = `translateX(-${moveAmount}px)`;
      void track.offsetWidth;

      track.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)';
      track.style.transform = 'translateX(0)';

      const handlePrevEnd = () => {
        isAnimating = false;
        track.removeEventListener('transitionend', handlePrevEnd);
      };

      track.addEventListener('transitionend', handlePrevEnd);
    });
  }
}
