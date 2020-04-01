let players = ['x', 'o'];
let r = Math.floor(Math.random() * 2);
let player = players[r];

let xArray = [ 
    '','','',
    '','','',
    '','','',
];

let oArray = [ 
    '','','',
    '','','',
    '','','',
];

const winnerArrays = [
  [
    'x', 'x', 'x',
    '',   '',  '',
    '',   '',  '',
  ],
  [
    '',   '',  '',
    'x', 'x', 'x',
    '',   '',  '',
  ], 
  [
    '',   '',  '',
    '',   '',  '',
    'x', 'x', 'x',
  ],
  [
    'x',   '', '',
    'x',   '',  '',
    'x',   '',  '',
  ],
  [
    '', 'x', '',
    '', 'x', '',
    '', 'x', '',
  ],
  [
    '', '', 'x',
    '', '', 'x',
    '',  '','x',
  ],
  [
    'x', '', '',
    '', 'x', '',
    '',  '','x',
  ],
  [
    '', '', 'x',
    '', 'x', '',
    'x', '','',
  ],
  [
    'o', 'o', 'o',
    '',   '',  '',
    '',   '',  '',
  ],
  [
    '',   '',  '',
    'o', 'o', 'o',
    '',   '',  '',
  ], 
  [
    '',   '',  '',
    '',   '',  '',
    'o', 'o', 'o',
  ],
  [
    'o',   '', '',
    'o',   '',  '',
    'o',   '',  '',
  ],
  [
    '', 'o', '',
    '', 'o', '',
    '', 'o', '',
  ],
  [
    '', '', 'o',
    '', '', 'o',
    '',  '','o',
  ],
  [
    'o', '', '',
    '', 'o', '',
    '',  '','o',
  ],
  [
    '', '', 'o',
    '', 'o', '',
    'o', '','',
  ],
   
];

let h2 = document.querySelector('h2');
h2.innerHTML = player;

for (let i = 0; i < 3; i++) {
    let table = document.querySelector('table');
    let tr = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
        let td = document.createElement('td');
        td.addEventListener('click', async () => {

            if (td.innerHTML == '') {
                td.innerHTML = player;

                if (player == 'o') player = 'x';
                else player = 'o';

                h2.innerHTML = player;
            }

            let tds = document.querySelectorAll('td');
            

            for (let k = 0; k < tds.length; k++) {
                if (tds[k].innerHTML === 'x') {
                    xArray[k] = tds[k].innerHTML;
                } else {
                    oArray[k] = tds[k].innerHTML;
                }
            }

            let someOneWins = false;
            let winner = '';
            if (searchForArray(winnerArrays, xArray) !== -1) {
                winner = 'x';
                someOneWins = true;
            } else if (searchForArray(winnerArrays, oArray) !== -1) {
                winner = 'o';
                someOneWins = true;
            }

            
            if (someOneWins) {
                let pickedArray = winner === 'x' ? xArray : oArray;                
                alert(winner + ' wins');
                reset();
            }
            
        });

        tr.appendChild(td);
    }
    table.appendChild(tr);
}

function reset() {
    let tds = document.querySelectorAll('td');
    
    xArray = [ 
        '','','',
        '','','',
        '','','',
    ];
    
    oArray = [ 
        '','','',
        '','','',
        '','','',
    ];

    tds.forEach((td) => {
        td.innerHTML = '';
    });
}

function searchForArray(haystack, needle){
    var i, j, current;
    for(i = 0; i < haystack.length; ++i){
        if(needle.length === haystack[i].length){
            current = haystack[i];
            for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
            if(j === needle.length)
                return i;
        }
    }
    return -1;
}
