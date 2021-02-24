function clearScreen() {
    document.getElementById("result").value = "";
}

function liveScreen(value) {
    document.getElementById("result").value += value;
}

function res(r){
    let res = eval(r);
    document.getElementById("result").value = res;
}