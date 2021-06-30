import { validator } from './validator.js';
import { sudo } from './sudo.js';

const main=document.getElementById('main');

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
        let buf=sudo.table[count];
        if(coincidence===1) {
            let p=document.createElement('p');
            p.innerHTML = buf;
            nestedDiv.appendChild(p);
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
    divWithTable.appendChild(div);
};

sudo.table.length = 0; /* Make an empty array to check whether table includs incorrect values.
                          this will be used into submit function. */

const divWithButton = document.getElementById('a7');
const submitButton = document.createElement('button');
submitButton.innerHTML = 'SUBMIT';
divWithButton.appendChild(submitButton);

const innerSquare = document.getElementsByClassName('inner_square');

const submit = () => {
    sudo.renew(validator.rows, validator.columns);
    sudo.renew(sudo.table);
    console.log(validator.rows, validator.columns);
    let cellValue = 0;
    for(let i = 0; i < 81; i++) {
        if(innerSquare[i].firstChild.nodeName === 'INPUT') {
            cellValue = parseInt(innerSquare[i].firstChild.value);
            if(!cellValue) {
                alert('Empty cells are not allowed.');
                return;
            }
        } else {
            cellValue = parseInt(innerSquare[i].firstChild.innerHTML);
        }
        if(!validator.check(validator.rows, validator.columns, i, cellValue)) {
            changeStyle(innerSquare[i].firstChild); console.log('row||col');
        }
        if(sudo.table.indexOf(cellValue) < 0) {
            changeStyle(innerSquare[i].firstChild); console.log('table');
        };
        sudo.table.splice(sudo.table.indexOf(cellValue), 1);
        sudo.renew(sudo.table);
    }
    
    if(document.getElementsByClassName('changed').length > 0) {
        alert('Entered incorrect values.');
        return;
    }
    alert('You win!');
}

const resetChanges = () => {
    Array.from(innerSquare).forEach(e => {
        if(e.firstChild.classList.value === 'changed') {
            e.firstChild.classList.remove('changed');
        }
    });
}

submitButton.addEventListener('click', submit);
divWithTable.addEventListener('click', resetChanges);


const changeStyle = (node) => {
    node.setAttribute('class', 'changed');
};