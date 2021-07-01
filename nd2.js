//2.1-as ND, 

let m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let rez = [];
for (let i = 0; i < m.length; i++) {
    rez.push(new Array(m.length));
    for (let j = 0; j < m.length; j++) {
        if (i + j < m.length) {
            rez[i][j] = m[i + j];
        } else {
            rez[i][j] = m[(i + j) - m.length];
        }

    }
}

console.log(rez);

/*
1, 2, 3, 4, 5
2, 3, 4, 5, 1
3, 4, 5, 1, 2
4, 5, 1, 2, 3
5, 1, 2, 3, 4
*/

//----------------------------------------------------

//2.2-as ND, 

// let m = [1, 2, 3, 4, 5];

// let rez = [];
// for (let i = 0; i < m.length; i++) {
//     rez.push(new Array(m.length));
//     for (let j = 0; j < m.length; j++) {
//         if (j - i >= 0) {
//             rez[i][j] = m[j - i];
//         } else {
//             rez[i][j] = m[(j - i) + m.length];
//         }

//     }
// }

// console.log(rez);

/*
1, 2, 3, 4, 5
5, 1, 2, 3, 4
4, 5, 1, 2, 3
3, 4, 5, 1, 2
2, 3, 4, 5, 1
*/

//----------------------------------------------------