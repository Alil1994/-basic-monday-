
for (let i = 1; i <= 135; i++) {
    console.log(i);
}


//Write a program using JavaScript that will print all the odd numbers from 1 to 135.

function printOddNumbers() {
    for (let i = 1; i <= 135; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
printOddNumbers();

// Sum of Printed Numbers:

let sum = 0;

for (let i = 1; i <= 135; i++) {
    sum += i;
    console.log("Number is:", i, "Sum:", sum);
}

//Print the elements of an array:


const X = [1, 4, 2, 12];
for (let i = 0; i < X.length; i++) {
    console.log(X[i]);
}

//Find Max:


const X = [2, -3, -1]; 
let max = X[0]; 

for (let i = 1; i < X.length; i++) {
    if (X[i] > max) {
        max = X[i];
    }
}
console.log("The maximum value in the array is:", max);


//Get Average:


const X = [2, 1, 3]; 
let sum = 0;
let count = X.length;

for (let i = 0; i < X.length; i++) {
    sum += X[i];
}
const average = sum / count
console.log("The average value of the array is:", average);


//Eliminate the Negatives:

const X = [2, -1, 4, -3]; 
for (let i = 0; i < X.length; i++) {
    if (X[i] < 0) {
        X[i] = 0;
    }
}
console.log(X);

//Number to String:

const x = [1, -4, 0, -1]; 
for (let i = 0; i < x.length; i++) {
    if (x[i] < 0) {
        x[i] = 'Turing';
    }
}
console.log(x);




