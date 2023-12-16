function fullname(){
    let N = 'Lijo Joseph'
    return N
}
let name = fullname()
console.log(`Welcome you ${name}`)

function NN(fname,lname){
    let rname = fname+' '+lname
    return rname
}

let F = NN('Lijo','Joseph')
console.log(F)

function area(){
    let l = 5;
    let b = 3;
    return l*b
}

let a1 = area()
console.log(a1)

function per(){
    let l = 5;
    let b = 3;
    return 2*l*b
}

let p1 = per()
console.log(p1)

function speed(tdist,time){
    return tdist/time
}

let spd = speed(150,2)
console.log(`speed is ${spd}`)

function convertCelsiusToFahrenheit(C){
    return (C*(9/5))+32
}

console.log(convertCelsiusToFahrenheit(27))

function solveLinEquation(a,b,c,x,y){
    const result = a*x+b*y+c
    return result
}

const res = solveLinEquation(2,3,4,2,2)
console.log(`result = ${res}`)

/*function solveQuadEquation(a, b, c) {
    // Calculate the discriminant
    const discriminant = b ** 2 - 4 * a * c;

    // Check the discriminant to determine the number and type of solutions
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2]; // Two real roots
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root]; // One real root (double root)
    } else {
        return []; // No real roots (complex roots)
    }
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
*/

function showDate(){
    let now = new Date()
    let d = now.getDate()
    let m = now.getMonth()
    let y = now.getFullYear()
    let hr = now.getHours()
    let mm = now.getMinutes()
    console.log(`Today's date is: ${d}/${m}/${y}, ${hr}:${mm}`)
}

showDate()

function swap(a,b){
    a = a+b
    b = a-b
    a = a-b
    console.log(`a=${a},b=${b}`)
}
swap(5,8)

/*function rev(arr){
    let nr=[]
    for(let i = length.arr-1;i>=0;i--){
        nr.push(arr[i])
    }
    return nr
}

let sa = [2,3,4,1,5,7,8]
console.log(rev(sa))*/

