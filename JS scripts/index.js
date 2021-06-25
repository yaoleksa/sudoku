const validateTable = require('./validator.js');

const main=document.getElementById('main');

const table=[1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i=0; i<9; i++) {
    let nested=document.createElement('div');
    nested.setAttribute('id', 'a'+i);
    main.appendChild(nested);
}

const divWithTitle=document.getElementById('a1');
const title=document.createElement('p');
title.setAttribute('id', 'title');
title.innerHTML='Sudoku';
divWithTitle.appendChild(title);

const divWithTable=document.getElementById('a4');
let count=0;


for(let i=0; i<9;i++) {
    let div=document.createElement('div');
    div.setAttribute('class','outer_square');
    for(let j=0;j<9;j++) {
        let nestedDiv=document.createElement('div');
        nestedDiv.setAttribute('class', 'inner_square');
        let coincidence=parseInt(Math.random()*2);
        let buf=table[parseInt(Math.random() * table.length)];
        if(coincidence===1&&validateTable.validate(validateTable.horizontalValues, validateTable.verticalValues, count, buf)) {
            let p=document.createElement('p');
            p.innerHTML = buf;
            nestedDiv.appendChild(p);
            table.splice(table.indexOf(buf), 1);
        } else {
            let input=document.createElement('input');
            input.setAttribute('class', 'num_inp');
            input.setAttribute('type', 'number');
            input.setAttribute('min', '1');
            input.setAttribute('max', '9');
            nestedDiv.appendChild(input);
        }
        count++;
        div.appendChild(nestedDiv);
    }
    
    for(let i = 0; i < 9; i++) {
        table.push(i+1);
    }

    if((i+1)%3===0) {
        horizontalValues.length=0;
    }
    divWithTable.appendChild(div);
}
