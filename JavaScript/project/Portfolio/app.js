// Scroll to section when clicking on navigation link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Show or hide mobile navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

// Validate contact form
const contactForm = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();
    if (nameValue === '' || emailValue === '' || messageValue === '') {
        alert('Please fill in all fields');
    } else {
        alert('Message sent successfully');
        contactForm.reset();
    }
});
