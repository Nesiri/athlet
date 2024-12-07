document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded!");
    adjustWaterfallBackground();
    startHeaderFadeInOut();
    document.getElementById('rolled-scroll').addEventListener('click', openScroll);
    document.getElementById('next-btn').addEventListener('click', showNext);
    document.getElementById('prev-btn').addEventListener('click', showPrevious);
    window.addEventListener('resize', adjustWaterfallBackground);

    // Smooth scroll to the Contact section
    const contactLink = document.getElementById("contact-link");
    if (contactLink) {
        contactLink.addEventListener("click", function (event) {
            event.preventDefault();
            // Scroll smoothly to the contact section
            document.getElementById("contact-section").scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});

function adjustWaterfallBackground() {
    const windowHeight = window.innerHeight;
    const waterfall = document.querySelector('.waterfall');
    waterfall.style.height = `${windowHeight * 2}px`;
    waterfall.style.animationDuration = `${Math.max(10, windowHeight / 100)}s`;
}

let currentPage = 1;
const totalPages = 4;

function openScroll() {
    document.getElementById('rolled-scroll').classList.add('hidden');
    document.getElementById('unrolled-scroll').classList.remove('hidden');
    showPage(currentPage);
}

function showPage(page) {
    const pages = document.querySelectorAll('.page');
    for (const p of pages) {
        if (p.id === `page${page}`) {
            p.classList.remove('hidden');
        } else {
            p.classList.add('hidden');
        }
    }
}

function showNext() {
    if (currentPage < totalPages) {
        ++currentPage;
        showPage(currentPage);
    } else {
        foldScroll();
    }
}

function showPrevious() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function foldScroll() {
    currentPage = 1;
    document.getElementById('rolled-scroll').classList.remove('hidden');
    document.getElementById('unrolled-scroll').classList.add('hidden');
}

function startHeaderFadeInOut() {
    const header = document.getElementById("header");
    function fadeInOut() {
        header.style.opacity = 1;
        setTimeout(() => {
            header.style.opacity = 0;
        }, 3000);
    }
    setInterval(fadeInOut, 6000);
    fadeInOut();
}




document.getElementById('contact-link').addEventListener('click', function (event) {
    event.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection.style.display === 'block') {
        contactSection.style.display = 'none'; // Hide the section

    } else {
        contactSection.style.display = 'block'; // Show the section
        contactSection.scrollIntoView({ behavior: 'smooth' });
    
    }
});