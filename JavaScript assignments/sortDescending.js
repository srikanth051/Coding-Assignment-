function sortDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

const inputArray = prompt("Enter an array of numbers separated by commas (e.g., 5,2,8,1,4):").split(',').map(Number);
const sortedArray = sortDescending(inputArray);
console.log(sortedArray);
