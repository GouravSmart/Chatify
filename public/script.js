const socket = io();
const loginScreen = document.getElementById('login-screen');
const chatScreen = document.getElementById('chat-screen');
const usernameInput = document.getElementById('username');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messagesDiv = document.getElementById('messages');
const userLabel = document.getElementById('user-label');
const sound = new Audio('ting.mp3');

const attachBtn = document.getElementById('attachBtn');
const attachmentInput = document.getElementById('attachmentInput');


let username = "";



// Hide emoji picker if clicking outside


// --- Attachment Logic ---
attachBtn.addEventListener('click', () => {
  attachmentInput.click(); // Programmatically click the hidden file input
});

attachmentInput.addEventListener('change', (e) => {
  const files = e.target.files;
  if (files.length > 0) {
    // You would typically handle file uploads here.
    // For now, we'll just log the file names.
    let fileNames = Array.from(files).map(file => file.name).join(', ');
    const fileMessage = `Attached file(s): ${fileNames}`;
    
    // Optionally, send a message to indicate attachment
    socket.emit('chat message', { name: username, message: fileMessage });
    sound.play(); // Play sound for attachment message
  }
  // Clear the input so the same file can be selected again if needed
  attachmentInput.value = ''; 
});

loginBtn.addEventListener('click', () => {
  const name = usernameInput.value.trim();
  if (name !== "") {
    username = name;
    socket.emit('join', username);
    loginScreen.classList.add('hidden');
    chatScreen.classList.remove('hidden');
    userLabel.textContent = `You: ${username}`;
  }
});

logoutBtn.addEventListener('click', () => {
  socket.emit('leave', username);
  username = "";
  chatScreen.classList.add('hidden');
  loginScreen.classList.remove('hidden');
  messagesDiv.innerHTML = "";
});

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (messageInput.value) {
    socket.emit('chat message', { name: username, message: messageInput.value });
    sound.play(); // Play sound when you send a message
    messageInput.value = '';
  }
});

socket.on('chat message', ({ name, message }) => {
  const div = document.createElement('div');
  if (name === username) {
    div.classList.add('message', 'you');
    div.textContent = `You: ${message}`;
  } else if (name === 'System') {
    div.classList.add('message', 'system');
    div.textContent = message;
  } else {
    div.classList.add('message', 'other');
    div.textContent = `${name}: ${message}`;
  }
  
  sound.play(); // Play sound when any message is received
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});