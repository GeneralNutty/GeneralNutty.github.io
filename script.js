// Get the element that should become sticky
const stickyH2 = document.querySelector('.sticky-h2');

// Initial position relative to the viewport
const initialOffset = stickyH2.offsetTop;

// Function to update the h2's position based on scroll
function updateStickyH2Position() {
    if (window.pageYOffset > initialOffset) {
        stickyH2.style.position = 'fixed';
        stickyH2.style.top = '0';
        stickyH2.style.left = '0';
        stickyH2.style.width = '100%';
        stickyH2.style.background = 'white';
        stickyH2.style.zIndex = '1000';
    } else {
        stickyH2.style.position = 'static';
    }
}

// Add scroll event listener to call the function
window.addEventListener('scroll', updateStickyH2Position);
