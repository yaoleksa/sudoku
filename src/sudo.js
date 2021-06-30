const table=[1, 2, 3, 4, 5, 6, 7, 8, 9,
    4, 5, 6, 7, 8, 9, 1, 2, 3,
    7, 8, 9, 1, 2, 3, 4, 5, 6,
    2, 3, 1, 5, 6, 4, 8, 9, 7,
    5, 6, 4, 8, 9, 7, 2, 3, 1,
    8, 9, 7, 2, 3, 1, 5, 6, 4,
    3, 1, 2, 6, 4, 5, 9, 7, 8,
    6, 4, 5, 9, 7, 8, 3, 1, 2,
    9, 7, 8, 3, 1, 2, 6, 4, 5];


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

    const sudo = {
        table: table,
        renew: renew
    }

export { sudo };