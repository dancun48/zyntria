function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Search bar filter for nav links
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(link => {
        const text = link.textContent.toLowerCase();
        link.parentElement.style.display = text.includes(query) ? '' : 'none';
    });
});