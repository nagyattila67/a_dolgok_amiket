const myWishes = ['ezt', 'azt', 'amazt', 'télen ne legyen olyan hideg', 'egyátalán ne is legyen többet tél', 'rájönni, hogy annak a szomszéd fiatal srácnak mi a francból telik olyan rohadt jó kocsira', 'összejönni azzal a népbüfés kínai csajjal', 'csak egyszer csinálná meg rendesen az a mocsadék fogtechnikus a fogsorom', 'sört!', 'még több sört!', 'még annál is több sört!', 'korkedvezményes eutanáziát']
const points = Array();
for (let k in myWishes) {
    points[k] = Math.ceil(Math.random() * 50)
}
const isCompletedAll=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
const wishes=Array();

import {makeAllObject} from "/js/modules.js"
makeAllObject(lines,linesBoolean,allLines);

const container = document.querySelector("#text");

import {loadText} from "/js/modules.js"
loadText(allLines,container);

import {countAverage} from "/js/modules.js"

countAverage(linesBoolean);

//import {inputClick} from "/js/modules.js"
const inputClick = function (place = this) {
    if (place.path[0].id != 'restart-button') {
        //olyankor ui. a restart() hĂ­vnĂĄ meg a virtuĂĄlis click miatt a checked ĂĄtĂ­rĂĄsakor
        let myId = place.path[0].id;
        let myStatus = allLines[myId].status ? false : true;
        allLines[myId].status = myStatus;
        linesBoolean[myId] = myStatus;
        let mySpanId = 'span' + myId;
        document.querySelector(`#${mySpanId}`).innerHTML =
            myStatus ? `<s style="color:grey">${allLines[myId].line}</s>` : `${allLines[myId].line}`
        countAverage(linesBoolean)
    }
}

//import {restart} from "/js/modules.js"
const restart = function () {
    container.innerHTML = '';
    linesBoolean.forEach((value,index)=>{linesBoolean[index]=false;})
    allLines = Array();
    makeAllObject(lines,linesBoolean,allLines);
    loadText(allLines,container);
    countAverage(linesBoolean);
    addEventForInput()
}

document.querySelector("#restart-button").addEventListener('click', restart)

//import {addEventForInput} from "/js/modules.js"
const addEventForInput = function(){
    document.querySelectorAll(".statusInput").forEach((value,index) => {
        document.querySelectorAll(".statusInput")[index].addEventListener('click', inputClick)
    })
}
addEventForInput()
