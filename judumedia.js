// Change Header Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('nav');
    if (window.scrollY > 50) {
        header.style.background = '#000000';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'rgba(15, 15, 15, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Subtle Greeting in Console (Just for fun!)
console.log("Welcome to Judumedia - Quality Media in Sunyani.");

// Simple click animation for social cards
const cards = document.querySelectorAll('.social-card');
cards.forEach(card => {
    card.addEventListener('mousedown', () => {
        card.style.transform = 'scale(0.95)';
    });
    card.addEventListener('mouseup', () => {
        card.style.transform = 'scale(1.05)';
    });
});