let firstName = "Carl"
let lastName = "Johnson"
let country = "USA"
let city = "NYC"
let age = 39
let isMarried = false
console.log(typeof firstName)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)

console.log(typeof'10'==10)

console.log(parseInt(9.8)==10)

let v1 = true
let v2 = 5 == (25/5)
let v3 = 'Hello World!' === ('Hello ' + 'World!')
console.log(`${v1}\n${v2}\n${v3}`)

let v4 = false
let v5 = 5 == (100/5)
let v6 = 'jello World!' === ('Hello ' + 'World!')
console.log(`${v6}\n${v5}\n${v4}`)

/*Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3 true
4 >= 3 true
4 < 3  false
4 <= 3 false
4 == 4 true
4 === 4 true
4 != 4  false
4 !== 4 false
4 != '4' true
4 == '4' false
4 === '4'  false
*/ 

/* 
4 > 3 && 10 < 12 true
4 > 3 && 10 > 12 false
4 > 3 || 10 < 12 true
4 > 3 || 10 > 12 true
!(4 > 3)  false
!(4 < 3) true
!(false) true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 === '4') true
*/

const ty = new Date()
console.log(ty.getFullYear())
console.log(ty.getMonth())
console.log(ty.getDate())
console.log(ty.getDay())
console.log(ty.getHours())
console.log(ty.getMinutes())
console.log(ty.getTime())

let bse = prompt("Enter Base")
let hgt = prompt("Enter height")
let area = bse*hgt*.5
alert(`The area of the triangle is ${area}`)

let s1 = prompt("Enter side A")
let s2 = prompt("Enter side B")
let s3 = prompt("Enter side C")
let pr = s1+s2+s3
alert(`The perimete of the triangle is ${pr}`)

let str = prompt("Enter Name")
let len = str.length()
len >= 7 ? alert("good name"):alert("your name is short")

const tym = new Date()
const Y = tym.getFullYear()
const M = tym.getMonth()
const d = tym.getDate()
const H = tym.getHours()
const mm = tym.getMinutes()
console.log(`${Y}-${M}-${d}  ${H}:${mm}`)
console.log(`${d}-${M}-${Y}  ${H}:${mm}`)
console.log(`${d}/${M}/${Y}  ${H}:${mm}`)