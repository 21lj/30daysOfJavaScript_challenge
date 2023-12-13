let age = prompt("Enter your age")
if(age>=18){
    alert("you are old enough to drive")
}
else{
    let lft = 18 - age
    alert(`sorry, you have to wait ${lft} year to drive`)
}


let Yage = prompt("Enter your age")
if(Yage>=19){
    let M = Yage - 19
    alert(`You're ${M} years older than me`)
}
else{
    alert("i am older than you")
}

let a = 4
let b = 3
if (a>b) {
    alert(`${a} > ${b}`)
}
else if(a<b){
    alert(`${a} < ${b}`)
}

a>b ? alert(`${a} > ${b}`):alert(`${a} < ${b}`)

let num = prompt('Enter a number')
if(num%2==0){
    alert(`${num} is even`)
}
else{
    alert(`${num} is odd`)
}

let score = prompt("Enter score")
if(score<=100&&score>79){
    alert("A")
}
else if(score<=89&&score>=70){
    alert('B')
}
else if(score<=69&&score>=60){
    alert('C')
}
else if(score<=59&&score>=50){
    alert('D')
}
else{
    alert('F')
}

let mon = prompt("Enter Month")
switch(mon.toLowerCase()){
    case "january":
        alert('winter')
        break
    case 'february':
        alert('winter')
        break
    case 'march':
        alert('spring')
        break
    case 'april':
        alert('spring')
        break
    case 'may':
        alert('spring')
        break
    case 'june':
        alert('summer')
        break
    case 'july':
        alert('summer')
        break
    case 'august':
        alert('summer')
        break
    case 'september':
        alert('autumn')
        break
    case 'october':
        alert('autumn')
        break
    case 'november':
        alert('autumn')
        break
    case 'december':
        alert('winter')
        break
    default:
        alert('Invalid month')
        break
}

let check = prompt("what is the day today?")
switch(check.toLowerCase()){
    case "monday":
        alert(`${check} is a working day`)
        break
    case 'tuesday':
        alert(`${check} is a working day`)
        break
    case 'wednesday':
        alert(`${check} is a working day`)
        break
    case 'thursday':
        alert(`${check} is a working day`)
        break
    case 'friday':
        alert(`${check} is a working day`)
        break
    case 'saturday':
        alert(`${check} is a weekend`)
        break
    case 'sunday':
        alert(`${check} is a holiday`)
        break
}
