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
const divWithButton = document.getElementById('a7');
const submitButton = document.createElement('button');

submitButton.hidden = true;
submitButton.innerHTML = 'SUBMIT';
divWithButton.appendChild(submitButton);

title.setAttribute('id', 'title');
title.innerHTML='Select level';
divWithTitle.appendChild(title);

const divWithTable=document.getElementById('a4');
let count=0;

const easyButton = document.createElement('button');
const middleButton = document.createElement('button');
const hardButton = document.createElement('button');

easyButton.innerHTML = 'Easy';
middleButton.innerHTML = 'Middle';
hardButton.innerHTML = 'Hard';

divWithTable.appendChild(easyButton);
divWithTable.appendChild(middleButton);
divWithTable.appendChild(hardButton);

const insertTable = () => {
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
    }
}

const restrict = (val) => {
    if(val.target.value < 1) {
        val.target.value = '';
    }
    if(val.target.value.toString().length > 1) {
        val.target.value = parseInt(val.target.value.toString()[0]);
    }
}

const selectLevel = (event) => {

    title.innerHTML = 'Sudoku';
    sudo.genereteSudo(event.target.innerHTML, parseInt(Math.random() * 3));
    easyButton.remove();
    middleButton.remove();
    hardButton.remove();
    submitButton.hidden = false;

    insertTable();

    const innerSquare = document.getElementsByClassName('inner_square');
    const inputBox = document.getElementsByClassName('num_inp');

    for(let i = 0; i < inputBox.length; i++) {
        inputBox[i].addEventListener('input', restrict);
    }

    const resetChanges = () => {
        msg.innerHTML = "";
        Array.from(innerSquare).forEach(e => {
            if(e.firstChild.classList.value === 'changed') {
                e.firstChild.classList.value = 'num_inp';
            }
        });
    }

    const submit = () => {
        sudo.table.length = 0;
        sudo.renew(validator.rows, validator.columns);
        sudo.renew(sudo.table);
        let cellValue = 0;
        for(let i = 0; i < 81; i++) {
            if(innerSquare[i].firstChild.nodeName === 'INPUT') {
                cellValue = parseInt(innerSquare[i].firstChild.value);
                if(!cellValue) {
                    msg.innerHTML = 'Empty cells not allowed.';
                    divWithTable.appendChild(msg);
                    return;
                }
            } else {
                cellValue = parseInt(innerSquare[i].firstChild.innerHTML);
            }
            if(!validator.check(validator.rows, validator.columns, i, cellValue)) {
                changeStyle(innerSquare[i].firstChild);
            }
            if(sudo.table.indexOf(cellValue) < 0) {
                changeStyle(innerSquare[i].firstChild);
            };
            sudo.table.splice(sudo.table.indexOf(cellValue), 1);
            sudo.renew(sudo.table);
        }
        
        if(document.getElementsByClassName('changed').length > 0) {
            msg.innerHTML = 'Entered incorrect value.';
            divWithTable.appendChild(msg);
            return;
        }
        msg.innerHTML = 'You WIN!';
        divWithTable.appendChild(msg);
    }

    divWithTable.addEventListener('click', resetChanges);
    submitButton.addEventListener('click', submit);
}

easyButton.addEventListener('click', selectLevel);
middleButton.addEventListener('click', selectLevel);
hardButton.addEventListener('click', selectLevel);

const msg = document.createElement('p');
msg.setAttribute('id', 'msg');

const changeStyle = (node) => {
    node.setAttribute('class', 'changed');
}