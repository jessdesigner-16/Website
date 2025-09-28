document.addEventListener('DOMContentLoaded', () => {
    // ... (Your existing code for lightbox or other JS can go here) ...

    const scrollContent = document.querySelector('.scroll-content');

    // For touch devices
    scrollContent.addEventListener('touchstart', () => {
        scrollContent.style.animationPlayState = 'paused';
    });
    scrollContent.addEventListener('touchend', () => {
        scrollContent.style.animationPlayState = 'running';
    });
    
    // For mouse devices
    scrollContent.addEventListener('mouseenter', () => {
        scrollContent.style.animationPlayState = 'paused';
    });
    scrollContent.addEventListener('mouseleave', () => {
        scrollContent.style.animationPlayState = 'running';
    });

    // Ensure the scroll content is duplicated for the infinite effect
    const workItems = scrollContent.querySelectorAll('.work-item');
    if (workItems.length > 0) {
        // Create a fragment to hold duplicated items
        const fragment = document.createDocumentFragment();
        workItems.forEach(item => {
            const clone = item.cloneNode(true);
            fragment.appendChild(clone);
        });
        scrollContent.appendChild(fragment);
    }
});
