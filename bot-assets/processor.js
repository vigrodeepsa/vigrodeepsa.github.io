const chatBox = document.getElementById('chat-log');
const userInput =  document.getElementById('user-input');
const typingDiv = document.getElementById('typing-indicator');

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function sendMessage() {

  const userMessage = userInput.value.trim();
  if (userMessage === '') return;
  outcoming();
  const userDiv = document.createElement('div');


  // Apply background color to new sent messages
  const sentColor = sentColorPicker.value;
  userDiv.style.backgroundColor = sentColor;
  userDiv.className = 'message sent';
  userDiv.textContent = userMessage ;
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
  } 
  else {
  const defaultResponses = [
  "I'm not sure I understand. Could you rephrase that?",
  "I didn't catch that. Can you try asking in a different way?",
  "I'm still learning, so I might not have an answer for that. Can you try another question?",
  "Hmm, that's a tough one. Let me think...",
  "I'm not programmed to respond to that. Can you ask something else?",
  "I'm sorry, I don't have the information you're looking for at the moment."
  ];
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
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

  incoming();  
  const botDiv = document.createElement('div');
  const currentTime = getCurrentTime(); 
  botDiv.className = 'message received';
  botDiv.innerHTML = response + '<br><span id="receivedTime" class="time-2">'+ getCurrentTime()+'</span>';
  chatBox.appendChild(botDiv);

  // Apply background color to new bot response messages
  const receivedColor = receivedColorPicker.value;
  botDiv.style.backgroundColor = receivedColor;

  scrollToBottom();
}


function resetConversation() {
  chatBox.innerHTML = '<center>new conversation Started</center>';
  localStorage.removeItem('chatConversation'); // Clear local storage
  document.getElementById("done-info").style.display= 'none';
  document.getElementById("btn-save-changes").style.width= '100%';
localStorage.removeItem('sentTime');
localStorage.removeItem('receivedTime');
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


// function to scroll to the bottom of the chat log
function scrollToBottom() {
const chatLog = document.getElementById("chat-log");
chatLog.scrollTop = chatLog.scrollHeight;
}


function incoming() {
    var chatSound = new Audio('./bot-assets/5.mp3');
   chatSound.play();
}
function outcoming() {
    var chatSound = new Audio('./bot-assets/4.mp3');
   chatSound.play();
}