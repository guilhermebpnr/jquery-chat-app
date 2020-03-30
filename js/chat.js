$(document).ready(function () {
    loadPage();
    getBotMessage('greeting');
});

$('#message-input').on('input', function () {
    enableDisableSendButton();
});

$("#message-form").on('submit', function (event) {
    event.preventDefault();
    sendMessage();
});

function loadPage() {
    $('#loader').css('display', 'none');
    $('#main').removeAttr('style');
}

function enableDisableSendButton() {
    if ($('#message-input').val().trim()) {
        $("#send-button").removeAttr('disabled');
    }
    else {
        $("#send-button").attr('disabled', 'disabled');
    }
}

function sendMessage() {
    $messageInput = $('#message-input')
    const message = $messageInput.val();
    if (message) {
        $time = $getTimeElement();
        $('<div>')
            .addClass('message message-out')
            .text(message)
            .append($time)
            .appendTo($('#messages'));
        $messageInput.val('');
        $("#send-button").attr('disabled', 'disabled');
        flowScreen();
        getBotMessage('random');
    }
}

function getBotMessage(type) {
    window.setTimeout(function () {
        $('#status').text('Row Bot is typing...');
    }, 1000);
    window.setTimeout(function () {
        let botMessage = '';
        
        if (type === 'greeting') {
            botMessage = 'Hey, what\'s up?!';
        } else if (type === 'random') {
            botMessage = botMessages[Math.floor((Math.random() * 100)) % botMessages.length];
        } 

        $('#status').text('Online');
        $time = $getTimeElement();
        
        $('<div>')
            .addClass('message message-in')
            .text(botMessage)
            .append($time)
            .appendTo($('#messages'));

        flowScreen();
    }, 3000);
}

function getTime() {
    const date = new Date();
    return date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
}

function $getTimeElement() {
    return $('<div>')
        .addClass('time')
        .text(getTime());
}

function flowScreen() {
    var $messages = $('#messages');
    $messages.scrollTop($messages.prop('scrollHeight'));
}

const botMessages = [
    'Are you a fan of alcohol?',
    'Do you wanna chat a bit?',
    'I\'m feeling good today =)',
    'I\'ll soon be taking a very interesting course in Barcelona',
    'Do you enjoy traveling?',
    'Which is your favorite city in Europe? Mine is Barcelona!',
    'I\'m a little tired today...',
    'No way.',
    'Hmmm ok',
    `Wanna hear a joke? Two cows are standing in a field. One cow says "Did you hear about that 
    outbreak of mad cow disease? It makes cows go completely insane!". The other cow replies "Good 
    thing I'm a helicopter".`,
    `How about a joke? Husband brings the child home from kindergarten and asks his wife, "He’s 
    been crying the whole way home. Isn’t he sick or something?" "No," replies the wife, "he was 
    just trying to tell you he isn’t our Frankie."`
]