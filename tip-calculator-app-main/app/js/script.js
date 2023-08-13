let docTipAmount = document.getElementById("tip-amount"); 
let docTotal = document.getElementById("total");
let docBill = document.getElementById("bill-input");
let docCustomTip = document.getElementById("custom");
let docPeopleNum = document.getElementById("people-num-input");

let tipAmount = 0.00;
let total = 0.00;
let bill = 0.00;
let tip = 0.00;
let peopleNum = 1.00;

function setBill() {
    bill = (docBill.value === "") ? 0.00 : parseFloat(docBill.value).toFixed(2);
    calculate();
}

function setTip(value=0) {
    clearChoicesActiveState();
    let customValue = (docCustomTip.value === "") ? 0 : parseFloat(docCustomTip.value).toFixed(2);
    tip = (value === "custom") ? customValue : value;
    calculate();

    if(isNaN(value)) {
        document.getElementById("custom").style.backgroundColor = "rgba(38, 194, 173, 1)";
        document.getElementById("custom").style.color = "hsl(183, 100%, 15%)";        
    } else {
        document.getElementById(`${value}%`).style.backgroundColor = "rgba(38, 194, 173, 1)";
        document.getElementById(`${value}%`).style.color = "hsl(183, 100%, 15%)";        
    }
}

function setPeopleNum() {
    if(docPeopleNum.value === "0") {
        docPeopleNum.style.outline = "2px solid red";
        document.getElementById("people-num-invalid").style.display = "inline-block"; 
        docPeopleNum.value = "";
    } else {
        docPeopleNum.style.outline = "0";
        document.getElementById("people-num-invalid").style.display = "none";
        peopleNum = (docPeopleNum.value == "") ? 1.00 : parseFloat(docPeopleNum.value).toFixed(2);
    }
    calculate();
}

function focusPeopleNum() {
    docPeopleNum.style.outline = "2px solid hsl(172, 67%, 45%)";
    document.getElementById("people-num-invalid").style.display = "none";
}

function calculate() {
    tipAmount = parseFloat(bill * (tip/100)).toFixed(2);
    total = parseFloat((parseFloat(tipAmount)+parseFloat(bill)) / peopleNum).toFixed(2);
    docTipAmount.innerHTML = `$${tipAmount}`;
    docTotal.innerHTML = `$${total}`;
    console.log();
}

function reset() {
    docBill.value = "";
    clearChoicesActiveState();
    docPeopleNum.value = "";
    docTipAmount.innerHTML = "$0.00";
    docTotal.innerHTML = "$0.00";
}

function clearChoicesActiveState() {
    const choices = [5,10,15,25,50];
    for(let i=0; i < choices.length; i++) {
        document.getElementById(`${choices[i]}%`).style.backgroundColor = "hsl(183, 100%, 15%)";
        document.getElementById(`${choices[i]}%`).style.color = "hsl(0, 0%, 100%)";
    }
    document.getElementById("custom").style.backgroundColor = "hsl(189, 41%, 97%)";
    document.getElementById("custom").style.color = "hsl(183, 100%, 15%)"; ;
}