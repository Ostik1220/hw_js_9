//1
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

logItems(['Mango', 'Poly', 'Ajax']);

//2
function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");

    const totalPrice = words.length * pricePerWord;

    return totalPrice;
}


const message = "Діамант гравірують шоб він став твердішим, але тут йдется не про то.... факт я теж сам придумав";
const pricePerWord = 10;
const totalCost = calculateEngravingPrice(message, pricePerWord);

console.log(`Загальна вартість гравіювання: ${totalCost}`);


//3
function  findLongestWord(string){
    const words = string.split(" ");
    
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; 
        }
    }

    return longestWord;
}

const longestWord = findLongestWord("Піраміди в давній пустиння задумувалися як будівлі нвд могилою а не як сама могила");
console.log(longestWord)

//4
function formatString(string){
 if(string.length <= 40){
    return string;
 } else {
     return string.slice(0, 40) + "..."
 }
}

console.log(formatString("Одже мене звати остап і мені 14 років. ОЙ я випадково написав остап з маленької.")); 

//5
function checkForSpam(_message){
    
    const check = _message.toLowerCase();

    
    return check.includes("spam") || check.includes("sale");
}


console.log(checkForSpam("hello please buy our new sale"))
console.log(checkForSpam("just messege"))

//6

const numbers = [];
let input;



while (true) {
    input = prompt("Введіть число бо натисніть Cancel для завершення");
    
    if (input === null) {
        break;
    }
    
    const number = Number(input);
    

    if (!isNaN(number)) {
        numbers.push(number); 
    } else {
        alert("Будь ласка, введіть коректне число!");
    }
}

if (numbers.length > 0) {
    let total = 0; // я трохи переніс


    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Масив чисел порожній. Немає що підсумовувати.");
}

