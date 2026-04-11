// Navbar sticky + scroll-up button
const navbar = document.getElementById('navbar');
const scrollBtn = document.getElementById('scrollUpBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) navbar.classList.add('sticky');
    else navbar.classList.remove('sticky');

    if (window.scrollY > 500) scrollBtn.classList.add('show');
    else scrollBtn.classList.remove('show');
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('active');
});

// Portfolio filter
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.port-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Lightbox open — call with (title, desc, icon, event)
function openLightbox(title, desc, icon, event) {
    const btn = event ? event.currentTarget : null;
    const cardThumb = btn ? btn.closest('.card-thumb') : null;
    const cardImg = cardThumb ? cardThumb.querySelector('img') : null;

    const lbImage = document.getElementById('lbImage');
    const lbFallback = document.getElementById('lbFallbackIcon');
    const lbPlaceholder = document.getElementById('lbPlaceholder');

    // Use getAttribute('src') so we get the raw path (works for jpg, png, etc.)
    // Only skip if the card's onerror already hid the image (meaning it failed to load)
    const imgSrc = cardImg ? cardImg.getAttribute('src') : null;
    const imgVisible = cardImg && cardImg.style.display !== 'none';

    if (imgSrc && imgVisible) {
        lbImage.src = imgSrc;
        lbImage.alt = cardImg.alt || title;
        lbImage.style.display = 'block';
        lbFallback.style.display = 'none';
        lbPlaceholder.style.background = '#111';

        // Fallback if lightbox image also fails
        lbImage.onerror = function () {
            lbImage.style.display = 'none';
            lbFallback.className = icon || 'fas fa-image';
            lbFallback.style.display = 'block';
            lbPlaceholder.style.background = '';
        };
    } else {
        lbImage.style.display = 'none';
        lbFallback.className = icon || 'fas fa-image';
        lbFallback.style.display = 'block';
        lbPlaceholder.style.background = '';
    }

    document.getElementById('lbTitle').textContent = title;
    document.getElementById('lbDesc').textContent = desc;
    document.getElementById('lightbox').classList.add('open');
}

// Lightbox close
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    const lbImage = document.getElementById('lbImage');
    lbImage.src = '';
    lbImage.onerror = null;
}

// X button
document.getElementById('lightboxCloseBtn').addEventListener('click', function (e) {
    e.stopPropagation();
    closeLightbox();
});

// Close on backdrop click
document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
});