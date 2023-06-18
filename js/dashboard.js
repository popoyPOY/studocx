const send = document.querySelector(".btn-login");
const question = document.getElementById("question");

const chatbox = document.querySelector('.chatbox');

let wait = document.querySelector(".wait");

let name = document.getElementById("profile-name");



/*
     var messageDiv = document.createElement("div");
     messageDiv.className = "message";
     messageDiv.innerHTML = `<div class="avatar"></div><p>${question.value}</p>`;
     chatbox.append(messageDiv);
*/

/*
               <div class="message">
                    <div class="avatar">
                    </div>
                    <p>Hello John, How may I help you</p>
               </div>
*/


send.addEventListener("click", () => {
     let questionValue = question.value;
     message(questionValue, "div", chatbox, "message");
     wait.style.display = "block";
     chatGPT(questionValue).then((data)=> {

          let content = data.choices[0].message.content;

          gptMessage(content, "div", chatbox, "message");

          wait.style.display = "none";
          
          question.value = "";
     })
});



function message(chatMessage, htmlTag, parentNode, messageClass) {
     let messageTag = document.createElement(htmlTag);

     messageTag.className = messageClass;
     messageTag.innerHTML = `<div class="avatar"><img src='/img/avataaars.svg' class='avatar-img'></div><p style="text-content: justify; color: white;">${chatMessage}</>`;


     parentNode.append(messageTag);

}

function gptMessage(chatMessage, htmlTag, parentNode, messageClass) {
     let messageTag = document.createElement(htmlTag);

     messageTag.className = messageClass;
     messageTag.innerHTML = `<div class="avatar"></div><p style="text-content: justify; color: #FFF3E2;">${chatMessage}</>`;

     parentNode.append(messageTag);

}


async function chatGPT(message) {
     let url = "https://api.openai.com/v1/chat/completions";

     let data = {
          "model": "gpt-3.5-turbo",
          "messages": [
               {
                    "role": "user",
                    "content": message
               },
               {
                    "content": localStorage.getItem("name"),
                    "role": "user"
               }
          ]
     }

     let response = await fetch(url, {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
               "Authorization": "Bearer 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"
          },
          body: JSON.stringify(data)
     })

     return response.json();
}


name.innerHTML = localStorage.getItem("name");


