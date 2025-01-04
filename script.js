// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Smooth scroll to the section
        window.scrollTo({
            top: targetElement.offsetTop - 20, // Adjust scroll position (20px offset)
            behavior: 'smooth',
        });
    });
});

// Highlight active navigation link based on scroll position
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-yellow-500'); // Remove active class
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('text-yellow-500'); // Add active class
        }
    });
});

// Optional: Scroll to the top button (appears after scrolling)
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('fixed', 'bottom-10', 'right-10', 'bg-blue-500', 'text-white', 'rounded-full', 'p-3', 'shadow-lg', 'hidden', 'hover:bg-blue-600');
document.body.appendChild(scrollToTopButton);

// Show the "scroll to top" button when scrolling
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});

// Smooth scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
