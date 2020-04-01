let players = ['x', 'o'];
let r = Math.floor(Math.random() * 2);
let player = players[r];

let h2 = document.querySelector('h2');
h2.innerHTML = player;

for (let i = 0; i < 3; i++) {
    let table = document.querySelector('table');
    let tr = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
        let td = document.createElement('td');
        td.addEventListener('click', () => {
            if (td.innerHTML == '') {
                td.innerHTML = player;

                if (player == 'o') player = 'x';
                else player = 'o';

                h2.innerHTML = player;
            }
        });

        tr.appendChild(td);
    }
    table.appendChild(tr);
}

function pickPlayer() {
   alert(player + ' starts');
}