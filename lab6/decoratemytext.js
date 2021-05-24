window.onload = eventHandler;

function eventHandler() {
    document.getElementById("bd").onclick = startTimer;
    document.getElementById("pl").onclick = pigLatin;
    document.getElementById("ml").onclick = malkovitch;
    document.getElementById("bd").onclick = startTimer;
    document.getElementById("cbx").onchange = checkBoxClicked;
    document.getElementById("ta").style.fontSize = "12pt";
}

function startTimer() {
    setInterval(bigDecorationClicked, 500);
}
function bigDecorationClicked() {
    let textarea = document.getElementById("ta");
    textarea.style.fontSize = (parseInt(textarea.style.fontSize) + 2) + "pt";
}
function checkBoxClicked() {
    let checkbox = document.getElementById("cbx");
    let textarea = document.getElementById("ta");

    if(checkbox.checked == true){
        textarea.style.fontWeight = "bold";
        textarea.style.color = "green";
        textarea.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
    }else{
        textarea.style.fontWeight = "normal";
        textarea.style.color = "black";
        textarea.style.textDecoration = "none";
        document.body.style.backgroundImage = "";
    }
}

function pigLatin() {
    let contents = document.getElementById("ta").textContent;
    let splitContents = contents.split(" ").filter(i => i);
    let result = "";
    for(let i = 0; i < splitContents.length; i++){
        if(splitContents[i][0].toLowerCase() == "a" || splitContents[i][0].toLowerCase() == "e" || splitContents[i][0].toLowerCase() == "i" || splitContents[i][0].toLowerCase() == "o" || splitContents[i][0].toLowerCase() == "u"){
            splitContents[i] = splitContents[i] + "-ay";
        }else if(splitContents[i][0] == "0" || splitContents[i][0] == "1" || splitContents[i][0] == "2" || splitContents[i][0] == "3" || splitContents[i][0] == "4" || splitContents[i][0] == "5" || splitContents[i][0] == "6" || splitContents[i][0] == "7" || splitContents[i][0] == "8" || splitContents[i][0] == "9"){
            //do nothing if a number
        }else {
            let start = "";
            let end = "";
            for(let j = 0; j < splitContents[i].length; j++){
                if(splitContents[i][j].toLowerCase() == "a" || splitContents[i][j].toLowerCase() == "e" || splitContents[i][j].toLowerCase() == "i" || splitContents[i][j].toLowerCase() == "o" || splitContents[i][j].toLowerCase() == "u"){
                    end = splitContents[i].substr([j], splitContents[i].length-1);
                    break;
                }else {
                    start = start + splitContents[i][j];
                }
            }
            splitContents[i] = end + start +"-ay";
        }
        result = result + " " + splitContents[i];
    }
    document.getElementById("ta").textContent = result;
}

function malkovitch() {
    let contents = document.getElementById("ta").textContent;
    let splitContents = contents.split(" ").filter(i => i);
    let result = "";
    for(let i = 0; i < splitContents.length; i++){
            if(splitContents[i].length >= 5){
                splitContents[i] = "Malkovitch";
            }
     result = result + " " + splitContents[i];
    }
    document.getElementById("ta").textContent = result;
}

