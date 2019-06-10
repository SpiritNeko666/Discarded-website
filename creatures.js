var txt;
function preload() {
    txt = loadStrings('game_info.txt');
}

function setup() {
    noCanvas();
    console.log(txt);
    createP((txt));
}

