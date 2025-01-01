function findMaxNumber(arr) {
    return Math.max(...arr);
}

const numbers = [5, 10, 15, 20, 25];

const maxNumber = findMaxNumber(numbers);
console.log("Angka terbesar dalam array adalah:", maxNumber);
