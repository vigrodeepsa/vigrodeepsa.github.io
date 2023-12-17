

const chatBox = document.getElementById('chat-log');
const userInput =  document.getElementById('user-input');
const typingDiv = document.getElementById('typing-indicator');

function sendMessage() {

  const userMessage = userInput.value.trim().toLowerCase();
  if (userMessage === '') return;

  const userDiv = document.createElement('div');
  userDiv.className = 'message sent';
  userDiv.textContent = userMessage;
  chatBox.appendChild(userDiv);

  showTypingIndicator();

  setTimeout(() => {
    const botResponse = generateBotResponse(userMessage);
    hideTypingIndicator();
    showBotResponse(botResponse);
    saveConversation();
  }, 2000);

  userInput.value = '';
  scrollToBottom();
}

function generateBotResponse(userMessage) {
  const keywordsMatched = botLogics.filter(logic => logic.keywords.some(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    return regex.test(userMessage);
  }));

  if (keywordsMatched.length > 0) {
    const botAnswers = keywordsMatched.map(logic => logic.answers[Math.floor(Math.random() * logic.answers.length)]);
    return botAnswers.map(answer => addEmojis(answer, userMessage)).join('<p>');
  } else {
    return 'Sorry, I didn\'t understand that,Try asking somethinh else.';
  }
}

function addEmojis(answer, userMessage) {
  const emojis = extractEmojis(userMessage);
  return emojis.length > 0 ? `${answer} ${emojis}` : answer;
}

function extractEmojis(text) {
  const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  return text.match(emojiRegex) || [];
}

function showTypingIndicator() {
  typingDiv.style.display = 'block';
}

function hideTypingIndicator() {
  typingDiv.style.display = 'none';

}

function showBotResponse(response) {
  const botDiv = document.createElement('div');
  botDiv.className = 'message received';
  botDiv.innerHTML = response;
  chatBox.appendChild(botDiv);
  scrollToBottom();
}

function resetConversation() {
  chatBox.innerHTML = '<center>new conversation Started</center>';
  localStorage.removeItem('chatConversation'); // Clear local storage
}

// Load previous messages from local storage if available
const savedConversation = localStorage.getItem('chatConversation');
if (savedConversation) {
  chatBox.innerHTML = savedConversation;
}

// Save messages to local storage
function saveConversation() {

  localStorage.setItem('chatConversation', chatBox.innerHTML);
}

// Save messages before page refresh or closure
window.addEventListener('beforeunload', saveConversation);
window.hideTypingIndicator();

// Add this JavaScript function to scroll to the bottom of the chat log
function scrollToBottom() {
const chatLog = document.getElementById("chat-log");
chatLog.scrollTop = chatLog.scrollHeight;
}