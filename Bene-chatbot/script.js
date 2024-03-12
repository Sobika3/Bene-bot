const chatHistory = document.querySelector('.chat-history');
const userInput = document.getElementById('user-message');
const sendBtn = document.querySelector('button');

sendBtn.addEventListener('click', () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    // Add user message to chat history
    const userChatMessage = document.createElement('li');
    userChatMessage.classList.add('chat-message');
    userChatMessage.textContent = 'You: ' + userMessage;
    chatHistory.appendChild(userChatMessage);

    // Generate a basic response
    const botResponse = document.createElement('li');
    botResponse.classList.add('chat-message');
    botResponse.textContent = 'Bot: Hi there! How can I help you today?';
    chatHistory.appendChild(botResponse);

    // Clear user input field
    userInput.value = '';
  }
});
