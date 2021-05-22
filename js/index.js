const myWishes = ['ezt', 'azt', 'amazt', 'télen ne legyen olyan hideg', 'egyátalán ne is legyen többet tél', 'rájönni, hogy annak a szomszéd fiatal srácnak mi a francból telik olyan rohadt jó kocsira', 'összejönni azzal a népbüfés kínai csajjal', 'csak egyszer csinálná meg rendesen az a mocsadék fogtechnikus a fogsorom', 'sört!', 'még több sört!', 'még annál is több sört!', 'korkedvezményes eutanáziát']
const points = Array();
for (let k in myWishes) {
    points[k] = Math.ceil(Math.random() * 50)
}
const isCompletedAll=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
const wishes=Array();

myWishes.forEach((value,index)=>{
    let myObject=Object();
    myObject.id=index+1;
    myObject.name=value;
    myObject.point=points[index];
    myObject.isCompleted=isCompletedAll[index];
    wishes[index]=myObject;
})

const myAllPoints = Array();
wishes.forEach((value, index) => { myAllPoints[index] = value.point })

const container = document.querySelector("#wishes-list")

import {represent} from "/js/modules.js"
import {loading} from "/js/modules.js"
import {missionCompletedOrNot} from "/js/modules.js"

loading(container,wishes,points);

document.querySelectorAll(".wish-input").forEach((value,index) => {
    value.addEventListener('click', ()=>{missionCompletedOrNot(index,wishes,myAllPoints)})
})

