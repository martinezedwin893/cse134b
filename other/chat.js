function sendChat() {
    var message = document.getElementById('message').value;
    if(message == "") {
        alert("No input entered!");
    }
    else {
        var currTime = new Date();
        var isPM = currTime.getHours() >= 12;
        var isMidday = currTime.getHours() == 12;
        var result = document.querySelector('#result');
        var dateHoursMinutes = [currTime.getHours() - (isPM && !isMidday ? 12 : 0), 
                                currTime.getMinutes()].join(':') +
                                (isPM ? ' p.m.' : ' a.m.');

        document.getElementById("chat").innerHTML += '<hr>\n' + 
                    '<div class = "userinfo">\n' +
                  '<div class="username">\n' + 
                    '<strong>Justin Meng</strong>\n' +
                '</div>\n' +
                '<div class="time">' +
                    dateHoursMinutes + '\n' +
              '</div>\n' +
            '</div>\n' +
            '<div class = "usermessage">\n' +
            message + '\n'
            '</div>\n';

        document.getElementById('message').value = "";
    }
}