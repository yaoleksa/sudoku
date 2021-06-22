const main=document.getElementById('main');

const table=[];
const verticalValues=[];
const horizontalValues=[];

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
for(let i=0; i<9;i++) {
    let div=document.createElement('div');
    div.setAttribute('class','outer_square');
    for(let j=0;j<9;j++) {
        let nestedDiv=document.createElement('div');
        nestedDiv.setAttribute('class', 'inner_square');
        let coincidence=parseInt(Math.random()*2);
        if(coincidence===1){
            let p=document.createElement('p');
            let buf=parseInt(Math.random()*10);
            if(!table.includes(buf)&&!verticalValues.includes(buf)&&!horizontalValues.includes(buf)) {
                p.innerHTML=buf;
                table.push(buf);
                verticalValues.push(buf);
                horizontalValues.push(buf);
            }
            nestedDiv.appendChild(p);
        } else {
            let input=document.createElement('input');
            input.setAttribute('id', 'num_inp');
            input.setAttribute('type', 'number');
            input.setAttribute('min', '1');
            input.setAttribute('max', '9');
            nestedDiv.appendChild(input);
        }
        div.appendChild(nestedDiv);
    }
    table.length=0;
    if((i+1)%3===0) {
        horizontalValues.length=0;
    }
    divWithTable.appendChild(div);
}
