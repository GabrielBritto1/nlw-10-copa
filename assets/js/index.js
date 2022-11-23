function createGame(player1, hour, player2, loser = 0, scoreBoard1 = 0, scoreBoard2 = 0) {
    let loser1 = "";
    let loser2 = "";

    if (loser == 1) {
        loser1 = "loser";
    } else if (loser == 2) {
        loser2 = "loser";
    }

    return `
    <li>
        <div class="score">
            <img class="bandeiras ${loser1}" src="./assets/img/flags/${player1}.svg" data-toggle="tooltip" data-placement="bottom" title="${player1.toUpperCase()}" alt="Bandeira do ${player1}">
            <span>${scoreBoard1}</span>
        </div>
            <strong>${hour}</strong>
        <div class="score">
                <img class="bandeiras ${loser2}" src="./assets/img/flags/${player2}.svg" data-toggle="tooltip" data-placement="bottom" title="${player2.toUpperCase()}" alt="Bandeira da ${player2}">
            <span>${scoreBoard2}</span>
        </div>
    </li>
    `
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <ul>
        <details>
        <summary> <h2>${date} <span>${day}</span></h2> </summary>
            ${games}
        </details>
        </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML =
    createCard('20/11', 'domingo',
        createGame('qatar', '00:00', 'ecuador', 1, 0, 2)) +

    createCard('21/11', 'segunda',
        createGame('england', '00:00', 'iran', 2, 6, 2) +
        createGame('senegal', '00:00', 'netherlands', 1, 0, 2) + createGame('usa', '00:00', 'wales', 0, 1, 1)) +

    createCard('22/11', 'terça',
        createGame('argentina', '00:00', 'saudi arabia', 1, 1, 2) +
        createGame('denmark', '10:00', 'tunisia', 0, 0, 0) +
        createGame('mexico', '13:00', 'poland', 0, 0, 0) +
        createGame('france', '16:00', 'australia', 2, 4, 1)) +

    createCard('23/11', 'quarta',
        createGame('morocco', '07:00', 'croatia') +
        createGame('germany', '10:00', 'japan') +
        createGame('spain', '13:00', 'costa rica') +
        createGame('belgium', '16:00', 'canada')) +

    createCard('24/11', 'quinta',
        createGame('switzerland', '07:00', 'cameroon') +
        createGame('uruguay', '10:00', 'korea republic') +
        createGame('portugal', '13:00', 'ghana') +
        createGame('brazil', '16:00', 'serbia')) +

    createCard('25/11', 'sexta',
        createGame('wales', '07:00', 'iran') +
        createGame('qatar', '10:00', 'senegal') +
        createGame('netherlands', '13:00', 'ecuador') +
        createGame('england', '16:00', 'usa')) +

    createCard('26/11', 'sábado',
        createGame('tunisia', '07:00', 'australia') +
        createGame('poland', '10:00', 'saudi arabia') +
        createGame('france', '13:00', 'denmark') +
        createGame('argentina', '16:00', 'mexico')) +

    createCard('27/11', 'domingo',
        createGame('japan', '07:00', 'costa rica') +
        createGame('belgium', '10:00', 'morocco') +
        createGame('croatia', '13:00', 'canada') +
        createGame('spain', '16:00', 'germany')) +

    createCard('28/11', 'segunda',
        createGame('cameroon', '07:00', 'serbia') +
        createGame('korea republic', '10:00', 'ghana') +
        createGame('brazil', '13:00', 'switzerland') +
        createGame('portugal', '16:00', 'uruguay')) +

    createCard('29/11', 'terça',
        createGame('ecuador', '12:00', 'senegal') +
        createGame('netherlands', '12:00', 'qatar') +
        createGame('ira', '16:00', 'usa') +
        createGame('wales', '16:00', 'england')) +

    createCard('30/11', 'quarta',
        createGame('tunisia', '12:00', 'france') +
        createGame('australia', '12:00', 'denmark') +
        createGame('poland', '16:00', 'argentina') +
        createGame('saudi arabia', '16:00', 'mexico')) +

    createCard('01/12', 'quinta',
        createGame('croatia', '12:00', 'belgium') +
        createGame('canada', '12:00', 'morocco') +
        createGame('japan', '16:00', 'spain') +
        createGame('costa rica', '16:00', 'germany')) +

    createCard('02/12', 'sexta',
        createGame('korea republic', '12:00', 'portugal') +
        createGame('ghana', '12:00', 'uruguay') +
        createGame('serbia', '16:00', 'switzerland') +
        createGame('cameroon', '16:00', 'brazil'));


function yellowMode() {
    var element = document.body;
    var content = document.getElementById("YellowModetext");
    element.className = "yellow-mode";
    content.innerText = "Yellow Mode is ON";
}

function blueMode() {
    var element = document.body;
    var content = document.getElementById("BlueModetext");
    element.className = "blue-mode";
    content.innerText = "Blue Mode is OFF";
}

function greenMode() {
    var element = document.body;
    var content = document.getElementById("GreenModetext");
    element.className = "green-mode";
    content.innerText = "Green Mode is OFF";
}
