export const loading = function(container,wishes,points) {
    
    container.innerHTML='';
    wishes.forEach((value,index) => {
        container.innerHTML += `
    <div class='myWish'><input class="wish-input" ${value.isCompleted ? 'checked' : ''} type='checkbox'>
    <span class='innerSpan'>
    <${wishes[index].isCompleted ? 's' : 'span'}>
    ${value.name}
    <${wishes[index].isCompleted ? '/s' : '/span'}>
    </span>
    <span class='myPoint'> (${value.point} pont)</span>
    </div>`
    })
    const maxPoints=points.reduce((total,number)=>{return total+number})
    document.querySelector("#max-points span").innerHTML=maxPoints;
}

export const represent = function(myNumber,wishes){
    document.querySelectorAll(".innerSpan")[myNumber].innerHTML=`
    ${wishes[myNumber].isCompleted?'<s style="color:black">':'<span>'}
    ${wishes[myNumber].name}
    ${wishes[myNumber].isCompleted?'</s>':'</span>'}`
}

export const missionCompletedOrNot = function (myNumber,wishes,myAllPoints) {
    console.log(myNumber)
    document.querySelector("#all-points").innerHTML = '0 pont'
    document.querySelector("#percentage").innerHTML = '0 %';
    wishes[myNumber].isCompleted = wishes[myNumber].isCompleted ? false : true;
    wishes.forEach((value, index) => { myAllPoints[index] = value.isCompleted ? value.point : 0 })
    let mySum = 0;
    let howManyCompletedArray = Array();
    let howManyCompleted = 0;
    wishes.forEach((value, index) => { howManyCompletedArray[index] = value.isCompleted ? 1 : 0 })
    mySum = myAllPoints.reduce((total, number) => { return total + number; }, 0)
    howManyCompleted = howManyCompletedArray.reduce((total, number) => { return total + number; }, 0)
    document.querySelector("#all-points").textContent = mySum = 0 ? `0 pont` : `${mySum} pont`
    document.querySelector("#percentage").textContent = `${Math.ceil(howManyCompleted * 100 / wishes.length)} %`;
    represent(myNumber,wishes);
}