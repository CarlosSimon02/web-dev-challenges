let rate = 0;

function setRate(num) {
    if(rate != 0) {
        document.getElementById(`${rate}`).style.backgroundColor = "var(--color-light-blue)";
        document.getElementById(`${rate}`).style.color = "var(--color-medium-grey)";
    }

    rate = num;
    document.getElementById(`${num}`).style.backgroundColor = "var(--color-orange)";
    document.getElementById(`${num}`).style.color = "var(--color-white)";

    console.log(rate);
}

function submitRate() {
    if(rate === 0) {
        document.getElementById("pop-up").style.display = "block";
    } else {
        document.getElementById("selected").innerHTML = `You selected ${rate} out of 5`;
        document.getElementById("rating-state").style.display = "none";
        document.getElementById("ty-state").style.display = "flex";
    }
}

