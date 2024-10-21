document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        const chatOutput = document.getElementById('chat-output');
        
        const userMessage = `<p><strong>You:</strong> ${userInput}</p>`;
        chatOutput.innerHTML += userMessage;

        setTimeout(() => {
            const botMessage = `<p><strong>Chatbot:</strong> I'm here to help you with any mental health questions. How can I assist you?</p>`;
            chatOutput.innerHTML += botMessage;
            chatOutput.scrollTop = chatOutput.scrollHeight; 
        }, 1000);
        
        document.getElementById('user-input').value = "";
    }
});
