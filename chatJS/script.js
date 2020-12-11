let chatOverview = document.querySelector('.chats');
let inputMsg = document.querySelector('.message');



function apiResponse() {
    let searchText = inputMsg.value;

    if(searchText === " ") {
        alert("You have not typed a message. Please do so before clicking send.");
        return false;
    }

    let data = {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Connection': 'keep-alive',
            'Accept-Encoding': 'gzip,deflate,br',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: searchText
        })
    }
   
    fetch('https://agrofuse-maintenance-api.herokuapp.com/chatbot', data)
    .then(response => response.json())
    .then((answer) => {
        console.log(answer);
        let answerResponse = `<div class="chat chat-left">
                        <div class="chat-avatar">
                            <a class="avatar m-0" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="">
                                <img src="../app-assets/images/portrait/small/avatar-s-7.jpg" alt="avatar" height="40" width="40" />
                            </a>
                        </div>
                        <div class="chat-body">
                            <div class="chat-content">
                                <p>${answer}</p>
                            </div>
                            <div class="chat-content">
                                <p></p>
                            </div>
                        </div>
                    </div>`;
        chatOverview.appendChild(answerResponse);
    })
}

function replyAfterEnter(event) {
    if(event.keyCode === 13 && inputMsg.value.length > 0) {
        apiResponse();
    }
}

inputMsg.addEventListener("keypress", replyAfterEnter);