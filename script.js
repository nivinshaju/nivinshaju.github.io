/* PARALLAX */
document.addEventListener("mousemove", e => {
    const x = (e.clientX - innerWidth / 2) / 50;
    const y = (e.clientY - innerHeight / 2) / 50;

    document.querySelector(".layer1").style.transform = `translate(${x}px, ${y}px)`;
    document.querySelector(".layer2").style.transform = `translate(${x * 2}px, ${y * 2}px)`;
    document.querySelector(".layer3").style.transform = `translate(${x * 3}px, ${y * 3}px)`;
});

/* GSAP Animations */
gsap.from(".glow-title", { opacity: 0, y: -30, duration: 1.2 });
gsap.from(".pfp", { opacity: 0, scale: 0.7, duration: 1.3 });

gsap.utils.toArray(".skill").forEach(el => {
    gsap.from(el, {
        scrollTrigger: el,
        opacity: 0,
        x: -40,
        duration: 1
    });
});

/* Chatbot System */
const chatBtn = document.getElementById("chatbot-btn");
const chatWin = document.getElementById("chatbot-window");
const chatClose = document.getElementById("chat-close");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");

chatBtn.onclick = () => chatWin.style.display = "flex";
chatClose.onclick = () => chatWin.style.display = "none";

chatSend.onclick = send;
chatInput.addEventListener("keypress", e => e.key === "Enter" && send());

function send() {
    const msg = chatInput.value.trim();
    if (!msg) return;

    append("You", msg);
    chatInput.value = "";

    setTimeout(() => append("AI", "Hello! I'm your portfolio assistant. 😊"), 500);
}

function append(sender, text) {
    chatBody.innerHTML += `<p><strong>${sender}:</strong> ${text}</p>`;
    chatBody.scrollTop = chatBody.scrollHeight;
}




