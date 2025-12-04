/* ---------------------------
   3D HOLOGRAM PLANET
------------------------------ */
const canvas = document.getElementById("planetCanvas");
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    65,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 4;

/* Wireframe globe */
const geometry = new THREE.SphereGeometry(1.2, 25, 25);
const wireframe = new THREE.WireframeGeometry(geometry);

const material = new THREE.LineBasicMaterial({ color: 0x0ab6ff, opacity: 0.5 });
const planet = new THREE.LineSegments(wireframe, material);

scene.add(planet);

function animate() {
    planet.rotation.y += 0.002;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();

/* Resize */
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

/* ---------------------------
   PARALLAX HERO
------------------------------ */
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 0.3;
    const y = (e.clientY / window.innerHeight - 0.5) * 0.3;
    planet.rotation.x = y;
});

/* ---------------------------
   CHATBOT (Offline AI)
------------------------------ */
const botButton = document.getElementById("chatbot-button");
const chatBox = document.getElementById("chatbot-container");
const messages = document.getElementById("chatbot-messages");
const input = document.getElementById("chatbot-input");

botButton.onclick = () => {
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
};

function botReply(text) {
    const reply = document.createElement("div");
    reply.textContent = "🤖 " + text;
    reply.style.margin = "8px 0";
    messages.appendChild(reply);
    messages.scrollTop = messages.scrollHeight;
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const userMsg = document.createElement("div");
        const value = input.value.trim();
        if (!value) return;

        userMsg.textContent = "🧑 " + value;
        messages.appendChild(userMsg);
        input.value = "";
        messages.scrollTop = messages.scrollHeight;

        // Fake local AI logic
        const lower = value.toLowerCase();

        if (lower.includes("hello")) botReply("Hi! How can I assist you?");
        else if (lower.includes("skills")) botReply("You are skilled in AI, Vision, FastAPI, YOLOv8, and more!");
        else if (lower.includes("project")) botReply("Your best project is the AI Jewelry Similarity Engine.");
        else if (lower.includes("who are you")) botReply("I’m your local AI assistant built for this portfolio.");
        else botReply("I'm not connected to a real AI model, but I'm here to help!");
    }
});

