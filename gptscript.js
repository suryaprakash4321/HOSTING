const chatElement = document.getElementById("chat");
createIframe();
  
function createIframe() {
  const iframe = document.createElement("iframe");
  iframe.src = "https://chatgpt.hunet.ai/chat-gpt/Test%20User?lang=en"; 
  // Assuming the lang=en parameter sets the language
  iframe.style.width = "80%"; // Make iframe responsive to screen width
  iframe.style.height = "90%"; // Make iframe responsive to screen height
  iframe.frameBorder = "0";
  iframe.scrolling = "no";

  iframe.onload = function() {
    this.contentWindow.postMessage({ message: "FOCUS_INPUTBOX" }, "*");

    // Set a timeout to clear the message after 10 minutes (600,000 milliseconds)
    setTimeout(clearIframeMessages, 600000);
  }

  chatElement.appendChild(iframe);
}

function sendMessageToIframe(message) {
  const chatElement = document.getElementById("chat");
  const chatIframeElement = chatElement.getElementsByTagName("iframe")[0];
  chatIframeElement.contentWindow.postMessage({ message }, "*"); 
}

function clearIframeMessages() {
  const iframe = chatElement.getElementsByTagName("iframe")[0];
  
  // Assuming there is a method in the iframe content to clear messages, you can call it like this:
  iframe.contentWindow.postMessage({ message: "CLEAR_MESSAGES" }, "*");
  
  // Alternatively, you could reload the iframe to clear the chat interface
  iframe.src = iframe.src;
}
