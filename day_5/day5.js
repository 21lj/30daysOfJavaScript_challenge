let ar0 = Array()
let ar1 = [1,2,3,4,55]
console.log(ar1.length)
console.log(ar1[0],ar1[2],ar1[4])

let mixeddatatypes = [1,'10',null,false,"hi"]
console.log(mixeddatatypes.length)

let  itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies)

console.log(itCompanies[0],itCompanies[4],itCompanies[6])

console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

console.log(itCompanies.join())

let check = prompt("Enter company name")
let c=check.toUpperCase()
let mcheck = itCompanies.indexOf(c)
if(mcheck==-1){
    alert(`${check} not found!`)
}
else{
    alert(`${check} is found!`)
}

console.log(itCompanies.sort())

console.log(itCompanies.reverse())

onsole.log(itCompanies.slice(3))

onsole.log(itCompanies.pop())

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let min = ages[0]
ages.reverse()
let max = ages[0]
console.log(`MAX = ${max} MIN = ${min}`)
let med = (ages[3] + ages[4] )/ 2
console.log(`Median =${med}`)
