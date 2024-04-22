// Simple Addition Caluclater

// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    //Input
    const num1 = +document.getElementById("num1-in").value;
    const num2 = +document.getElementById("num2-in").value;

    //Process
    const total = num1 + num2;

    //Output
    document.getElementById("output").innerHTML = total;
}
