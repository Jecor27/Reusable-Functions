//Take an array of numbers and return the sum
const num = [5, 5, 7, 6, 4];
function arrSum (arr){
let sum = 0;
for (let i = 0; i< num.length; i++) {
    sum += num[i];
}
console.log(sum);
}
arrSum(num);


//Take an array of numbers and return the average.
function arrAve(arr){
    let sum = 0;
    for (let i =0; i< arr.length; i++){
        sum += arr[i];
    }
    sum /= arr.length;
    console.log(sum);
}
arrAve(num);

//Take an array of strings and return the longest string.

const str = ["Hello", "bye", "computer", "tree", "water", "hereisareallylongstr"];
function longestString(arr) {
    let longestString = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }
    //return longestString;
    console.log(longestString)
}
longestString(str);

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

let num1 = 5; 

function strLongerThan(arr, num){
    let newArr = [];
    let str = ""; 
    
    for (let i = 0; i < arr.length; i++) {
       
        if(arr[i].length > num){
            str = arr[i];
            newArr.push(str);
            
       }
    }
    console.log(newArr)
}

strLongerThan(str, num1);

//Part 2

const arr2 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: 41 }, 
    { id: "48", name: "Barry", occupation: "Runner", age: 25 }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 }, 
    { id: "7", name: "Bilbo", occupation: "None", age: 111 }
];

console.log(arr2.sort((r,t) => r.age - t.age));
    
console.log(arr2.filter((arr2)=> arr2.age < 50));