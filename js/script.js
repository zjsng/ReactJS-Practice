// Question 1
function generateAndDisplayRandomInt() {
    let display = document.getElementById("display");
    let randInt = Math.round(Math.random() * 1000);
    display.innerHTML = "Your number is: " + randInt;
}

// Question 2
function formatNumberToDecimal(number, decimals) {
    let display = document.getElementById("display");
    let pow = Math.pow(10, decimals);
    let result = Math.round(number * pow) / pow;
    display.innerHTML = result;
}

// Question 3
function checkSubstringExists(string, substring) {
    let display = document.getElementById("display");
    let result = string.includes(substring);
    display.innerHTML = result ? "The substring exists." : "The substring does not exist.";
}

// Question 4
function isLeapYear(year) {
    let display = document.getElementById("display");
    display.innerHTML = (year % 4 === 0) ? `${year} is a leap year.` : `${year} is not a leap year.`
}

// Question 5
let balance = 10000;

function getEleById(elementId) { return document.getElementById(elementId); }

function hideDiv(divId) {
    let div = getEleById(divId);
    div.style.setProperty("display", "none");
    div.style.setProperty("visibility", "hidden");
}

function unhideDiv(divId) {
    let div = getEleById(divId);
    div.style.setProperty("display", "block");
    div.style.setProperty("visibility", "visible");
}

function withdrawFromAccount(amount) {
    let display = getEleById("display");
    balance -= amount;
    display.innerHTML = `You have withdrawn ${amount} from your account. You have ${balance} left. Returning to the main menu after 4 seconds...`;
    setTimeout(() => {
        backToMainMenu("pinEntry");
        display.innerHTML = "";
    }, 4000);
}

function loadPage(menuNumber, currDivId) {
    switch(menuNumber) {
        case "1": // Balance & Query Page
            hideDiv(currDivId);
            onLoadBalanceSheet();
            unhideDiv("balanceSheet");
            break;
        case "2": // Withdrawal Page
            hideDiv(currDivId);
            unhideDiv("withdrawalPage");
            break;
        default:
            getEleById("error").innerHTML = "You have entered an invalid menu number. Please enter either 1 or 2.";
            setTimeout(() => {getEleById("error").innerHTML = ""}, 4000);
    }
}

function backToMainMenu(currDivId) {
    hideDiv(currDivId);
    unhideDiv("menu");
}

function onLoadBalanceSheet() {
    let display = document.getElementById("balance");
    display.innerHTML = `You currently have: ${balance}`;
}

function loadPinEntryPage(currDivId) {
    hideDiv(currDivId);
    unhideDiv("pinEntry");
}

// Question 6
function addOnlyEvenNumbersInArray(input) {
    let display = document.getElementById("display");
    let arrayOfNumbers = input.split(",");
    let result = 0;
    arrayOfNumbers.forEach(value => {
        if (value % 2 === 0) {
            result += parseInt(value);
        }
    });
    display.innerHTML = "The total of all even numbers in the input is: " + result;
}

// Question 7
function findBiggestEvenNumInArray(input) {
    let display = document.getElementById("display");
    let arrayOfNumbers = input.split(",");
    let arrayOfEvenNumbers = arrayOfNumbers.filter(value => value % 2 === 0);
    let biggestNum = Math.max(...arrayOfEvenNumbers);
    display.innerHTML = "The biggest even num in the given array is: " + biggestNum;
}

// Question 8
function addTwoArrays(input1, input2) {
    let display = document.getElementById("display");
    let array1 = input1.split(",");
    let array2 = input2.split(",");
    let result = array1.map((value, index) => parseInt(value) + parseInt(array2[index]));
    display.innerHTML = "The sum of the two arrays is: " + result;
}

// Question 9
function reverseArrayWithLoops(input) {
    let display = document.getElementById("display");
    let array = input.split(",");
    let reverseArray = [];
    for (let i = 0, j = array.length - 1; i < array.length; i++, j--) {
        reverseArray[i] = array[j];
    }
    display.innerHTML = "The input array reversed is: " + reverseArray;
}

// Question 10
function reverseStringWithLoops(input) {
    let display = document.getElementById("display");
    let array = input.split("");
    let reverseArray = [];
    for (let i = 0, j = array.length - 1; i < array.length; i++, j--) {
        reverseArray[i] = array[j];
    }
    let reversedString = reverseArray.join("");
    display.innerHTML = "The input string reversed is: " + reversedString;
}

// Question 11
function removeDuplicateValuesFromArray(input) {
    let display = document.getElementById("display");
    let array = input.split(",");
    let arrayWithoutDuplicates = array.filter((value, index) => {
        return array.indexOf(value) === index;
    });
    display.innerHTML = "The input array without duplicates is: " + arrayWithoutDuplicates;
}

// Question 12
function removeValueFromArray(arrayInput, valueToRemove) {
    let display = document.getElementById("display");
    let arrayOfNumbers = arrayInput.split(",");
    let removedArray = arrayOfNumbers.filter(value => value !== valueToRemove);
    display.innerHTML = "The input array without the value to remove is: " + removedArray;
}

// Question 13
function findLargestOddAndEvenNumberInArray(input) {
    let display = document.getElementById("display");
    let array = input.split(",");
    let arrayOfEvenNumbers = array.filter(value => value % 2 == 0);
    let biggestEvenNum = Math.max(...arrayOfEvenNumbers);
    let arrayOfOddNumbers = array.filter(value => value % 2 == 1);
    let biggestOddNum = Math.max(...arrayOfOddNumbers);
    display.innerHTML = `The biggest even number is ${biggestEvenNum}, while the biggest odd number is ${biggestOddNum}`;
}

// Question 14
function createObjectFromInput(input1, input2, input3) {
    let userObj = {
        input1: input1,
        input2: input2,
        input3: input3
    }
    console.log(userObj);
}

// Question 15
class City {
    constructor(name, brand, colour, manufacturer) {
        this.name = name;
        this.brand = brand;
        this.colour = colour;
        this.manufacturer = manufacturer;
    }

    city() { }
    specialFeature() { }
}

// Question 16
class Book {
    constructor(numOfPages, typeOfPages, author) {
        this.numOfPages = numOfPages;
        this.typeOfPages = typeOfPages;
        this.author = author;
    }

    typeOfBook() { }
}

// Question 17
class Animal {
    constructor(gender, name, disease) {
        this.gender = gender;
        this.name = name;
        this.disease = disease;
    }

    walk() { }
    eat() { }
    climb() { }
}

// Question 18
class Electronics {
    constructor(name, version, companyName) {
        this.name = name;
        this.version = version;
        this.companyName = companyName;
    }
}

class Laptop extends Electronics {
    constructor(name, version, companyName) {
        super(name, version, companyName);
    }

    configuration() { }
    price() { }
}

class Phone extends Electronics {
    constructor(name, version, companyName) {
        super(name, version, companyName);
    }

    configuration() { }
    price() { }
}

class Tablet extends Electronics {
    constructor(name, version, companyName) {
        super(name, version, companyName);
    }

    configuration() { }
    price() { }
}