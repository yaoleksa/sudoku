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

const validator = {
    check: check,
    rows: rows,
    columns: columns
};

export { validator };