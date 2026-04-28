document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact form");
    const navLinks = document.querySelectorAll("nav a[href^='#']");
    const yearEl = document.querySelector("footer .year");

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = form.querySelector("#name").value.trim();
            const email = form.querySelector("#email").value.trim();
            const message = form.querySelector("#message").value.trim();

            if (!name || !email || !message) {
                return;
            }

            const successMessage = document.createElement("div");
            successMessage.className = "form-success";
            successMessage.textContent = `Thanks, ${name}! Your message has been received. We will respond soon.`;
            form.prepend(successMessage);
            form.reset();

            setTimeout(() => {
                successMessage.remove();
            }, 6000);
        });
    }
});
