// 1. Print odds 1 - 20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.
// for (let i = 1; i <= 20; i++) {
//     // if (i % 2 === 0) console.log('Even Number: ' + i)
//     // if (i % 2 != 0)  console.log('Odd Number: ' + i)
// }


// 2. Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
// for (let i = 100; i >= 0; i--) {
//     if (i % 3 === 0) {
//         // console.log("Divisible by 3: " + i);
//     }
// }


// 3. Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
let buuIsMyNeko = [4, 2.5, 1, -0.5, -2, -3.5];
// :smile:
let sequenceM = (arg, pirate) => {
    let empty = [];
    for (let i = 0; i < arg.length; i++)
    /* Edge cases policy #1: Write :lightBulb under the declaration line*/
    {
        let loopyLoop = arg[i];
        if (empty.push(loopyLoop === loopyLoop)) empty.push(loopyLoop)
    };
    return empty;
};

let percyIsMySecondCat = [4, 6, 0, -3, -12];
// console.log(`${buuIsMyNeko} & ${percyIsMySecondCat} `)

// 4. Sigma
// Write code that will add all of the values from 1 - 100 onto some variable sum and at the end console.log the
// result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

function sigmaCode(number) {

    let sum = 0;

    for (let i = number; i <= 100; i++) {
        sum += i;
        // console.log('Current Number: ' + i, 'Summed by the next number in line: ' + sum)
        console.log(`Current: ${i} + ... ${sum}`)
    }

    // console.log("Result:", sum);

    // let empty = 0;
    // let current = 0;
    // for (let i = number; i < 100; i++) {
    //     // console.log(number[i])
    //     if (i < 100) {
    //         let temp = i;
    //         current = temp
    //         temp = current

    //     }
        // if (i < number2) {
        //     let math = number + number
        //     if ()
        // }
            // console.log(`${i + number2}`)
        // console.log(`${number} +`,`${number2}`)
    // }
    // console.log(`${current} + ... ${empty}`)
};
// console.log(sigmaCode(1))


// 5. Factorial
// Write code that will multiply all of the values from 1 - 12 onto some variable product and at the end
// console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

function catFactorial(arg) {
    let empty = 1;
    for (let i = 1; i <= arg; i++) {
        empty *= i
    }
    console.log(empty)
}
catFactorial(12)
// console.log(catFactorial())
