let changeTheme = function () {
    let toggleBtn = document.getElementById("toggle-btn");
    let toggleBtnPos = window.getComputedStyle(toggleBtn).getPropertyValue("left");
    let body = document.getElementsByTagName("body")[0].dataset;

    switch (body.theme) {
        default:
            toggleBtn.style.animation = "toggle-middle .5s";
            setTimeout(() => toggleBtn.style.left = "22px", 400);
            body.theme = "2";
            break;
        case "2":
            toggleBtn.style.animation = "toggle-right .5s";
            setTimeout(() => toggleBtn.style.left = "44px", 400);
            body.theme = "3";
            break;
        case "3":
            toggleBtn.style.animation = "toggle-left .5s";
            setTimeout(() => toggleBtn.style.left = "0px", 400);
            body.theme = "1";
            break;
    }
}

let expression = document.getElementById("screen");

let isMathError = function() {
    if(expression.innerHTML == NaN || 
       expression.innerHTML == Infinity ||
       expression.innerHTML == -Infinity ||
       expression.innerHTML == "Math Error") return true;
}

let isOperation = function(value) {
    if(value === "+" ||
       value === "/" ||
       value === "*" ||
       value === "-") return true;
}

let typeChar = function(value) {
    if(value === ".") { 
        if(isOperation(expression.innerHTML.slice(-1))) {
            expression.innerHTML += " 0.";
            return;
        } 
        
        try {
            Function(`return ` + expression.innerHTML + value)()
        } catch(error) {
            return;
        }

    } else if(isMathError() || expression.innerHTML === "0") {
        if(value === ".") {
            expression.innerHTML = "0.";
            return;
        }
        expression.innerHTML = value;
        return;
    } else if(isOperation(value) || isOperation(expression.innerHTML.slice(-1))) {
        expression.innerHTML += " " + value;
        return;
    } else if(expression.innerHTML.slice(-1) == "0" && expression.innerHTML.slice(-2,-1) == " ") {
        if(value === ".") {
            expression.innerHTML += "0.";
            return;
        }

        expression.innerHTML = expression.innerHTML.slice(0,-1);
        expression.innerHTML += value;
        return;
    }

    expression.innerHTML += value;
}

let del = function() {
    if(isMathError()) {
        expression.innerHTML = "0";
        return;
    } else if(expression.innerHTML.slice(-2,-1) == " " ) {
        expression.innerHTML = expression.innerHTML.slice(0,-1);
    }
    
    expression.innerHTML = expression.innerHTML.slice(0,-1);
    if(expression.innerHTML === "") expression.innerHTML = "0";
}

let equal = function() {
    try {
        expression.innerHTML = Function(`return ` + expression.innerHTML)();
    }
    catch(error) {
        expression.innerHTML = "Math Error";
    }
}

let reset = function() {
    expression.innerHTML = "0";
}
