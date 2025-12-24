const chat = document.getElementById("chat");
const input = document.getElementById("message");
const button = document.getElementById("send");

button.addEventListener("click", sendMessage);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  chat.innerHTML += `<div class="user">Jij:</div><div>${text}</div>`;
  input.value = "";

  // ⬇️ HIER KOMT STRAKS MAKE
  const response = await fetch("PLAK_HIER_JE_MAKE_WEBHOOK", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text })
  });

  const data = await response.json();

  chat.innerHTML += `<div class="bot"><strong>Adviseur:</strong><br>${data.answer}</div>`;
  chat.scrollTop = chat.scrollHeight;
}
