const add = (step) => {
    let numberElement = document.getElementById("number");
    let number = parseInt(numberElement.innerText);

    numberElement.innerText = number + step;
};

const subtract = (step) => {
    let numberElement = document.getElementById("number");
    let number = parseInt(numberElement.innerText);

    numberElement.innerText = number - step;
};

const reset = () => {
    document.getElementById("number").innerText = 0;
    document.getElementById("step").value = "";
};

const addFromInput = () => {
    let numberElement = document.getElementById("number");
    let stepElement = document.getElementById("step");

    let number = parseInt(numberElement.innerText);
    let step = parseInt(stepElement.value) || 0;

    numberElement.innerText = number + step;
};

const subtractFromInput = () => {
    let numberElement = document.getElementById("number");
    let stepElement = document.getElementById("step");

    let number = parseInt(numberElement.innerText);
    let step = parseInt(stepElement.value) || 0;

    numberElement.innerText = number - step;
};
