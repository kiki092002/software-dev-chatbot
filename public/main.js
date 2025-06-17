const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
function sendMessage(){
    const message = userInput.value;
    displayMessge('user',message);
    getChatbotResponse(message);
    userInput.value='';
}

function displayMessge(sender,message){
    const messageElement = document.createElement('div');
    messageElement.classList.add('messge',sender);
    const messageParagraph = document.createElement('p');
    messageParagraph.innerText = message;
    messageElement.appendChild(messageParagraph);
    chatLog.appendChild(messageElement);

}

function getChatbotResponse(userMessage){
    fetch('/getChatbotResponse',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({userMessage}),
    })
    .then(response=>response.json())
    .then(data=>{
        displayMessge('chatbot',data.chatbotResponse);
    })
    .catch(error=>console.error('Error',error));
}