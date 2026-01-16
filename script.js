const chat = document.getElementById("chat");
const form = document.getElementById("chat-form");
const input = document.getElementById("message");

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// Startbericht van de bot
addMessage(
  "Ik kan je helpen een game te kiezen, maar ik heb wel wat info nodig. Op welk platform speel je?",
  "bot"
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  // Tijdelijke nep-reactie (backend komt later)
  setTimeout(() => {
    addMessage("Helder. Vertel me iets meer.", "bot");
  }, 600);
});
