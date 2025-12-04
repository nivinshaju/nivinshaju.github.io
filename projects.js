/* GSAP Scroll Animations */
gsap.from(".project-card", {
    scrollTrigger: ".project-card",
    opacity: 0,
    y: 60,
    duration: 1.1,
    stagger: 0.18,
    ease: "power3.out"
});

/* Improved 3D Tilt Effect */
document.querySelectorAll(".glass-tilt").forEach(card => {

    const strength = 18; // smooth + modern tilt

    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * strength * 2;
        const rotateX = -((y / rect.height) - 0.5) * strength * 2;

        card.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.06)
        `;

        card.style.boxShadow = `
            ${-rotateY * 2}px
            ${rotateX * 2}px
            40px rgba(0,150,255,0.35)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        card.style.boxShadow = "0 0 20px rgba(0,150,255,0.2)";
    });
});


