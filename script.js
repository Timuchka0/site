async function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (!userInput) return;

    const chatBox = document.getElementById("chat");
    chatBox.innerHTML += `<p><b>Вы:</b> ${userInput}</p>`;
    document.getElementById("userInput").value = "";

    try {
        const response = await fetch("https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill", {
            method: "POST",
            headers: {
                "Authorization": "Bearer *****",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inputs: userInput })
        });

        const data = await response.json();
        const botReply = data.generated_text || "Ошибка при получении ответа.";
        chatBox.innerHTML += `<p><b>Бот:</b> ${botReply}</p>`;
    } catch (error) {
        chatBox.innerHTML += `<p style="color: red;">Ошибка при получении ответа.</p>`;
    }

    chatBox.scrollTop = chatBox.scrollHeight; // Автопрокрутка вниз
}
