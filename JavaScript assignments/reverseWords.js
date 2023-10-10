function reverseWords(sentence) {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

const inputSentence = prompt("Enter a sentence:");
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
