/* ---------------- PARALLAX ---------------- */
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 50;
    const y = (e.clientY - window.innerHeight / 2) / 50;

    document.querySelector(".layer-back").style.transform = `translate(${x}px, ${y}px)`;
    document.querySelector(".layer-mid").style.transform = `translate(${x * 2}px, ${y * 2}px)`;
    document.querySelector(".layer-front").style.transform = `translate(${x * 3}px, ${y * 3}px)`;
});

/* ---------------- GSAP ANIMATIONS ---------------- */
gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1.5 });
gsap.from(".pfp-frame", { opacity: 0, scale: 0.7, duration: 1.5 });
gsap.from(".skill-bar", {
    scrollTrigger: ".skill-bar",
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.2
});

/* ---------------- GLASS TILT ---------------- */
document.querySelectorAll(".glass-tilt").forEach(panel => {
    panel.addEventListener("mousemove", (e) => {
        const rect = panel.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        panel.style.transform = `rotateX(${-y / 20}deg) rotateY(${x / 20}deg)`;
    });
    panel.addEventListener("mouseleave", () => {
        panel.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
});

/* ---------------- AI CHATBOT ---------------- */
const chatBtn = document.getElementById("chatbot-button");
const chatWin = document.getElementById("chatbot-window");
const chatClose = document.getElementById("chat-close");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");

chatBtn.onclick = () => chatWin.style.display = "flex";
chatClose.onclick = () => chatWin.style.display = "none";

chatSend.onclick = sendMessage;

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage("You", text);
    chatInput.value = "";

    // FAKE AI RESPONSE (Upgradable to real API)
    setTimeout(() => {
        addMessage("AI", "I'm your assistant! I can help with portfolio info, projects, skills, and more.");
    }, 500);
}

function addMessage(sender, msg) {
    chatBody.innerHTML += `<p><strong>${sender}: </strong>${msg}</p>`;
    chatBody.scrollTop = chatBody.scrollHeight;
}


