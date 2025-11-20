const chatbox = document.getElementById("chatbox");
const inputBox = document.getElementById("inputBox");

// Load WebLLM model
let engine;
(async () => {
  addMessage("Loading AI model... this may take 5–15 seconds.", "bot");
  engine = await webllm.createEngine("Qwen/Qwen2.5-0.5B-Instruct");
  addMessage("Model loaded. How can I help you?", "bot");
})();

async function sendMessage(msg) {
  addMessage(msg, "user");

  const reply = await engine.chat.completions.create({
    messages: [{ role: "user", content: msg }],
    stream: false
  });

  const text = reply.choices[0].message.content;
  addMessage(text, "bot");
}

function addMessage(text, sender) {
  const el = document.createElement("div");
  el.className = `message ${sender}`;
  el.textContent = text;
  chatbox.appendChild(el);
  chatbox.scrollTop = chatbox.scrollHeight;
}

inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const msg = inputBox.value.trim();
    if (msg.length > 0 && engine) {
      sendMessage(msg);
      inputBox.value = "";
    }
  }
});
