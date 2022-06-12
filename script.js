function clr(){
    document.getElementById('result').innerText = ""
}

function display(value){
    document.getElementById('result').innerText+=value
}

function equate(){
    let x = document.getElementById('result').innerText;
    let y = eval(x);
    document.getElementById('result').innerText = y;
}

function rmLastLetter(){
    let x = document.getElementById('result').innerText;
    y = x.substring(0, x.length-1)
    document.getElementById('result').innerText = y;
}