  document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    let inputElement = document.querySelector('input');
    let sendButton = document.querySelector('.send');
    let imgElement = document.querySelector('img');
    let container = document.querySelector(".inContainer");

    // Event listener for the send button
	sendButton.addEventListener('click', async function () {
	   if(inputElement.value == ""){
	      alert("Enter your question")
	   } else {
	    let userbox = document.createElement("div");
	    userbox.className = "userbox";
	    userbox.innerHTML = `<p>${inputElement.value}</p>`;
	    container.appendChild(userbox);
	    
	    const message = inputElement.value.trim();
	    let apiUrl = 'https://chatgpt.apinepdev.workers.dev?question=';
	    const response = await fetch(apiUrl + encodeURIComponent(message));
	    const data = await response.json();
	    
	    // Display ChatGPT's response 
	    let chatgpt = document.createElement("div");
	    chatgpt.className = "chatGpt";
        chatgpt.innerHTML = `<p>${data.answer}</p>`;
	    container.appendChild(chatgpt);
	    console.log(data.answer)
	    inputElement.value = '' ;
	}
	});
    });