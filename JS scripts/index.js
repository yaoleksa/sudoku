/* Validator
In future this part of code will be imported from validator.js file.
But now I can't solove problem with importing.
This file will be separated minimum into two different files.
 */

const rows = {
    r1: [],
    r2: [],
    r3: [],
    r4: [],
    r5: [],
    r6: [],
    r7: [],
    r8: [],
    r9: []
};

const columns = {
    c1: [],
    c2: [],
    c3: [],
    c4: [],
    c5: [],
    c6: [],
    c7: [],
    c8: [],
    c9: []
};

const check = (rows, columns, num, val) => {
    let validRow = false;
    let validColumn = false;
    if([0, 1, 2, 9, 10, 11, 18, 19, 20].includes(num)) {
        if(rows.r1.includes(val)) {
            return false;
        } else {
            rows.r1.push(val);
            validRow = true;
        }
    }
    if([3, 4, 5, 12, 13, 14, 21, 22, 23].includes(num)) {
        if(rows.r2.includes(val)) {
            return false;
        } else {
            rows.r2.push(val);
            validRow = true;
        }
    }
    if([6, 7, 8, 15, 16, 17, 24, 25, 26].includes(num)) {
        if(rows.r3.includes(val)) {
            return false;
        } else {
            rows.r3.push(val);
            validRow = true;
        }
    }
    if([27, 28, 29, 36, 37, 38, 45, 46, 47].includes(num)) {
        if(rows.r4.includes(val)) {
            return false;
        } else {
            rows.r4.push(val);
            validRow = true;
        }
    }
    if([30, 31, 32, 39, 40, 41, 48, 49, 50].includes(num)) {
        if(rows.r5.includes(val)) {
            return false;
        } else {
            rows.r5.push(val);
            validRow = true;
        }
    }
    if([33, 34, 35, 42, 43, 44, 51, 52, 53].includes(num)) {
        if(rows.r6.includes(val)) {
            return false;
        } else {
            rows.r6.push(val);
            validRow = true;
        }
    }
    if([54, 55, 56, 63, 64, 65, 72, 73, 74].includes(num)) {
        if(rows.r7.includes(val)) {
            return false;
        } else {
            rows.r7.push(val);
            validRow = true;
        }
    }
    if([57, 58, 59, 66, 67, 68, 75, 76, 77].includes(num)) {
        if(rows.r8.includes(val)) {
            return false;
        } else {
            rows.r8.push(val);
            validRow = true;
        }
    }
    if([60, 61, 62, 69, 70, 71, 78, 79, 80].includes(num)) {
        if(rows.r9.includes(val)) {
            return false;
        } else {
            rows.r9.push(val);
            validRow = true;
        }
    }
    if([0, 3, 6, 27, 30, 33, 54, 57, 60].includes(num)) {
        if(columns.c1.includes(val)) {
            return false;
        } else {
            columns.c1.push(val);
            validColumn = true;
        }
    }
    if([1, 4, 7, 28, 31, 34, 55, 58, 61].includes(num)) {
        if(columns.c2.includes(val)) {
            return false;
        } else {
            columns.c2.push(val);
            validColumn = true;
        }
    }
    if([2, 5, 8, 29, 32, 35, 56, 59, 62].includes(num)) {
        if(columns.c3.includes(val)) {
            return false;
        } else {
            columns.c3.push(val);
            validColumn = true;
        }
    }
    if([9, 12, 15, 36, 39, 42, 63, 66, 69].includes(num)) {
        if(columns.c4.includes(val)) {
            return false;
        } else {
            columns.c4.push(val);
            validColumn = true;
        }
    }
    if([10, 13, 16, 37, 40, 43, 64, 67, 70].includes(num)) {
        if(columns.c5.includes(val)) {
            return false;
        } else {
            columns.c5.push(val);
            validColumn = true;
        }
    }
    if([11, 14, 17, 38, 41, 44, 65, 68, 71].includes(num)) {
        if(columns.c6.includes(val)) {
            return false;
        } else {
            columns.c6.push(val);
            validColumn = true;
        }
    }
    if([18, 21, 24, 45, 48, 51, 72, 75, 78].includes(num)) {
        if(columns.c7.includes(val)) {
            return false;
        } else {
            columns.c7.push(val);
            validColumn = true;
        }
    }
    if([19, 22, 25, 46, 49, 52, 73, 76, 79].includes(num)) {
        if(columns.c8.includes(val)) {
            return false;
        } else {
            columns.c8.push(val);
            validColumn = true;
        }
    }
    if([20, 23, 26, 47, 50, 53, 74, 77, 80].includes(num)) {
        if(columns.c9.includes(val)) {
            return false;
        } else {
            columns.c9.push(val);
            validColumn = true;
        }
    }
    return validRow && validColumn;
}


const renew = (arr, arr1 = undefined) => {
    if(arr instanceof Array) {
        if(arr.length < 1) {
            for(let i=0; i<9; i++) {
                arr.push(i+1);
            }
        }
        return;
    }
    for(let i of Object.keys(arr)) {
        arr[i].length = 0;
    }
    for(let i of Object.keys(arr1)) {
        arr1[i].length = 0;
    }
}


//const validateTable = require('./validator.js');

const main=document.getElementById('main');

const table=[1, 2, 3, 4, 5, 6, 7, 8, 9,
             4, 5, 6, 7, 8, 9, 1, 2, 3,
             7, 8, 9, 1, 2, 3, 4, 5, 6,
             2, 3, 1, 5, 6, 4, 8, 9, 7,
             5, 6, 4, 8, 9, 7, 2, 3, 1,
             8, 9, 7, 2, 3, 1, 5, 6, 4,
             3, 1, 2, 6, 4, 5, 9, 7, 8,
             6, 4, 5, 9, 7, 8, 3, 1, 2,
             9, 7, 8, 3, 1, 2, 6, 4, 5];

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
        let buf=table[count];
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

table.length = 0; // Make an array to check whether table includs incorrect values.
renew(table);                  // this will be used into submit function.

const divWithButton = document.getElementById('a7');
const submitButton = document.createElement('button');
submitButton.innerHTML = 'SUBMIT';
divWithButton.appendChild(submitButton);

const innerSquare = document.getElementsByClassName('inner_square');

const submit = () => {
    renew(rows, columns);
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
        if(!check(rows, columns, i, cellValue)) {
            changeStyle(innerSquare[i].firstChild); console.log('row||col');
        }
        if(table.indexOf(cellValue) < 0) {
            changeStyle(innerSquare[i].firstChild); console.log('table');
        };
        table.splice(table.indexOf(cellValue), 1);
        renew(table);
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