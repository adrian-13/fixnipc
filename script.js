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
    document.getElementById('contact').addEventListener('submit', function (event) {
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

    // Scrollovanie na sekciu pri kliknutí na tlačidlo s class="button"
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

    // Hamburger menu a modálne okno
    const hamburger = document.getElementById("hamburger-menu");
    const modal = document.getElementById("menu-modal");
    const closeButton = document.getElementById("close-button");
    const menuLinks = document.querySelectorAll("#menu-modal .scroll-link");

    // Funkcia na otvorenie modálneho okna
    function openModal() {
        modal.style.display = "block";
    }

    // Funkcia na zatvorenie modálneho okna
    function closeModal() {
        modal.style.display = "none";
    }

    // Otvoriť modálne okno pri kliknutí na hamburger menu
    hamburger.addEventListener('click', openModal);

    // Zatvoriť modálne okno pri kliknutí na krížik
    closeButton.addEventListener('click', closeModal);

    // Zatvoriť modálne okno pri kliknutí mimo neho
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Obsluha kliknutia na položky menu
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection   
    = document.getElementById(targetId);

            if (targetSection)   
    {
                closeModal(); // Zatvor modálne okno pred scrollovaním
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Funkcia na kontrolu šírky okna a zobrazenie/skrytie hamburger menu
    function checkWidth() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = "block";
            document.querySelector('.navigation').style.display = "none";
        } else {
            hamburger.style.display = "none";
            document.querySelector('.navigation').style.display = "block";
            closeModal(); // Zavrieť modálne okno ak sa zväčší obrazovka
        }
    }

    // Kontrola šírky pri načítaní stránky
    checkWidth();

    // Kontrola šírky pri zmene veľkosti okna
    window.addEventListener('resize', checkWidth);
});
