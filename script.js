document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navbar Links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href').substring(1); // Get the section ID
            const targetElement = document.getElementById(targetId); // Get the section element
            const offset = 140; // Adjust for fixed logo + navbar height

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // Smooth scrolling
                });
            }
        });
    });

    // Intersection Observer for Animations
    const elements = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    elements.forEach((el) => observer.observe(el));

    // Control Bootstrap Carousel Speed
    const carouselElement = document.querySelector('#myCarousel'); // Replace with your carousel's ID
    if (carouselElement) {
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 4000,// Set speed to 1 second (1000ms)
            ride: 'carousel' // Auto-start the carousel
        });

        // Optional: Dynamically change the interval
        carouselElement.addEventListener('slid.bs.carousel', () => {
            console.log('Slide transitioned!');
            // Adjust the interval dynamically if needed
            carousel._config.interval = 4000; // Change to 1 second
        });
    }
});
