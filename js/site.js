function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers)
    } else {
        alert("You must enter integers")
    }
}

function generateNumbers(startValue, endValue) {
    let numbers = [];
    for (let i = startValue; i <= endValue; i++) {
        numbers.push(i);
    }
    return numbers;
}

function displayNumbers(numbers) {
    let templateRows = "";
    let className = "";
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`
    }
    document.getElementById("results").innerHTML = templateRows;
}