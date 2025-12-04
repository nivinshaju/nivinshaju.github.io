/* GSAP Scroll Animations */
gsap.from(".project-card", {
    scrollTrigger: ".project-card",
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.2
});

/* 3D Tilt Effect */
document.querySelectorAll(".glass-tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `rotateX(${-y / 20}deg) rotateY(${x / 20}deg) scale(1.05)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});
