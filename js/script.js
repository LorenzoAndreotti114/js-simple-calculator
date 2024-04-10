
// FIRST ARRAY
let firstArray 

// SECONDARY ARRAY
let secondaryArray 

// NUMBER BUTTONS
let numberBtn = document.querySelectorAll(".number-btn");

let resultEl = document.getElementById("result");

for (let x = 0; x < numberBtn.length; x++) {
    let curBtn = numberBtn[x]

    curBtn.addEventListener("click", numberClicker)
}

let numSummer;

function numberClicker () {
    let clickedNmb = this.innerText;
    console.log(clickedNmb, typeof clickedNmb);

    if (resultEl.innerText === "0") {
        resultEl.innerText = clickedNmb;
        numSummer = clickedNmb;
    }
    else {
        resultEl.innerText += clickedNmb;

        numSummer += clickedNmb;
        console.log(numSummer, typeof numSummer);
    }
};

// CANC BTN
let cancBtnInput = document.getElementById("cancBtn");

cancBtnInput.addEventListener("click", function() {

    location.reload();
});

// OPERATION BTNS
let operationBtn = document.querySelectorAll(".operation-btn");

for (let x = 0; x < operationBtn.length; x++) {
    let curBtnOperation = operationBtn[x];

    curBtnOperation.addEventListener("click", operationClicker);
}

let clickedOperation;

function operationClicker () {
    clickedOperation = this.innerText;

    if (clickedOperation === "×") {
        console.log("moltiplicazione");
        numSummer = parseInt(numSummer);
        firstArray = numSummer ;
        console.log(firstArray);
        resultEl.innerText = "0";
    }
    else if (clickedOperation === "+") {
        console.log("somma");
        numSummer = parseInt(numSummer);
        firstArray = numSummer;
        console.log(firstArray);
        resultEl.innerText = "0";
    }
    else if (clickedOperation === "-") {
        console.log("sottrazione");
        numSummer = parseInt(numSummer);
        firstArray = numSummer;
        console.log(firstArray);
        resultEl.innerText = "0";
    }
    else if (clickedOperation === "÷") {
        console.log("divisione");
        numSummer = parseInt(numSummer);
        firstArray = numSummer;
        console.log(firstArray);
        resultEl.innerText = "0";
    }
}

// = BUTTON

let resultBtnInput = document.getElementById("resultBtn");

resultBtnInput.addEventListener("click", function() {
    if (clickedOperation === "×") {
        numSummer = parseInt(numSummer);
        secondaryArray = numSummer;
        console.log(secondaryArray);

        resultEl.innerText = numTotMultiply(firstArray, secondaryArray);
        console.log(numTotMultiply(firstArray, secondaryArray));
    }
    else if (clickedOperation === "+") {
        numSummer = parseInt(numSummer);
        secondaryArray = numSummer;
        console.log(secondaryArray);

        resultEl.innerText = numTotSummary(firstArray, secondaryArray);        
        console.log(numTotSummary(firstArray, secondaryArray));
    }
    else if (clickedOperation === "-") {
        numSummer = parseInt(numSummer);
        secondaryArray = numSummer;
        console.log(secondaryArray);

        resultEl.innerText = numTotSubtraction(firstArray, secondaryArray);
        console.log(numTotSubtraction(firstArray, secondaryArray));
    }
    else if (clickedOperation === "÷") {
        numSummer = parseInt(numSummer);
        secondaryArray = numSummer;
        console.log(secondaryArray);

        resultEl.innerText = numTotDevider(firstArray, secondaryArray);
        console.log(numTotDevider(firstArray, secondaryArray));

        if (secondaryArray === 0) {
            resultEl.innerText = "ERRORE"
        }
    }
})
