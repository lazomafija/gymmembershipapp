document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("membershipForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Gather form data
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const membership = document.getElementById("membership").value;

        // Basic validation
        if (!fullName || !email || !phone || !membership) {
            formMessage.textContent = "Please complete all fields.";
            formMessage.style.color = "#ff6b6b";
            return;
        }

        // Email format validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "#ff6b6b";
            return;
        }

        // Phone format validation
        if (!/^\d{10,15}$/.test(phone)) {
            formMessage.textContent = "Enter a valid phone number (10-15 digits).";
            formMessage.style.color = "#ff6b6b";
            return;
        }

        // Simulate submission
        formMessage.innerHTML = `<span style="color: #38ffe7;">Thank you, <strong>${fullName}</strong>! Your application for the <strong>${membership.charAt(0).toUpperCase() + membership.slice(1)}</strong> plan has been received. We'll contact you soon!</span>`;
        form.reset();
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = link.getAttribute('href');
            if (href && href.startsWith("#")) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Animate cards on scroll (basic intersection observer)
    const cards = document.querySelectorAll('.benefit-card');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, ob) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "none";
                    ob.unobserve(entry.target);
                }
            });
        }, { threshold: 0.33 });

        cards.forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(60px) scale(0.96)";
            observer.observe(card);
        });
    }
});