document.addEventListener("DOMContentLoaded", function () {
    // Scrollovanie na sekcie pri kliknutí na odkazy s triedou .scroll-link
    document.querySelectorAll('.scroll-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Zabrániť predvolenej akcii
            const targetID = this.getAttribute('href').substring(1); // Získanie ID sekcie
            const targetSection = document.getElementById(targetID); // Získanie sekcie podľa ID

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth' // Hladké scrollovanie
                });
            }
        });
    });

    // Validácia emailu pri odosielaní formulára
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        const emailInput = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pre validáciu emailu

        if (!emailPattern.test(emailInput)) {
            alert('Prosím, zadajte platný formát emailu.'); // Varovanie pre používateľa
            event.preventDefault(); // Zastavenie odoslania formulára
        }
    });

    // Získanie tlačidla pre návrat späť na vrchol stránky
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Zobrazenie tlačidla pri scrollovaní
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block"; // Zobrazenie tlačidla
        } else {
            scrollToTopButton.style.display = "none"; // Skrytie tlačidla
        }
    };

    // Funkcia na scrollovanie späť na vrchol
    scrollToTopButton.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Hladké scrollovanie
        });
    };
});

document.querySelectorAll('.button').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Zabrániť predvolenej akcii
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.button-2').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Zabrániť predvolenej akcii
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// JavaScript na otváranie a zatváranie hamburger menu
document.getElementById("hamburger-menu").addEventListener("click", function() {
    var navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show");  // Pridá alebo odstráni triedu 'show'
    print("Ahoj")
});
