var txt;
var js;
function loadFile() {
     loadStrings("neko_data.txt", fileLoaded);

}
function fileLoaded(data){
//txt = data;
    createP(join(data,"<br/>"));

}
function updateFile() {
    loadStrings("neko_update.js", fileUpdated);

}

function fileUpdated(data){
//txt = data;
    createP(join(data,"<br/>"));

}
function fileSelected(file) {
    //console.log(file);
    createP(file.name + " " + file.size + " " + file.type);
    if (file.type == "text") {
        creatP(file.data);
    } else {
        createP("this is not a text file :(");
    }
}

function setup() {
noCanvas();
var load = select("#loadfile");
    load.mousePressed(loadFile)
    var update = select("#updatefile");
    update.mousePressed(updateFile)
//console.log(txt);
    console.log(hp)
    createFileInput(fileSelected);

}



