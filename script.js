/* filepath: script.js */
let currentIndex = 0;

function slide(direction) {
    const imageBoxes = document.querySelector('.image-boxes');
    const images = document.querySelectorAll('.image-container');
    const visibleCount = 4;
    const total = images.length;
    const gap = parseInt(getComputedStyle(imageBoxes).gap) || 0;
    const imageWidth = images[0].offsetWidth + gap;

    if (direction === 'right') {
        if (currentIndex < total - visibleCount) {
            currentIndex++;
        }
    } else if (direction === 'left') {
        if (currentIndex > 0) {
            currentIndex--;
        }
    }
    imageBoxes.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Optional: Responsive fix for window resize
window.addEventListener('resize', () => {
    // Re-apply transform to fix offset on resize
    slide();
});
