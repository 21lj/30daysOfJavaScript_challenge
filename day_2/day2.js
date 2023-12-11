let challenge = '30 Days of JavaScript'
console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substring(15,21))

console.log(challenge.slice(3,21))

console.log(challenge.includes('Script'))

console.log(challenge.split(',' ))

console.log(challenge.split(" "))

let gaints = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(gaints.split(', '))

console.log(challenge.replace('JavaScript','Python'))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt('J'))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

console.log(sentence.lastIndexOf("because"))

console.log(sentence.search('because'))

let s = ' 30 days of javascript '
console.log(s)
console.log(s.trim(' '))

console.log(challenge.startsWith('3'))

console.log(challenge.endsWith('t'))

let pattern = 'a'
console.log(challenge.match(pattern))

let str1 = '30 Days Of'
let str2 = ' JavaScript'
console.log(str1.concat(str2))

console.log(challenge.repeat(2))

console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.'\ by John Holmes teaches us to help one another.")

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log(typeof '10')

let numf = 9.8
let f = Math.ceil(numf)
console.log(f)

let s1 = "python"
let s2 = "jargon"

console.log(s1.includes('on'))
console.log(s2.includes('on'))

let ss2 = 'I hope this course is not full of jargon'
console.log(ss2.includes('jargon'))

console.log(Math.random()*101)
console.log(Math.random(50)*101)
console.log(Math.random()*256)

let acc = 'JavaScript'
let vari = Math.random()*11
console.log(acc[Math.round(vari)])

console.log("1 1 1 1 1 \n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")

let N = 'You cannot end a sentence with because because because is a conjunction'
console.log(N.substring('because'))

let L ='Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pat = /love/gi
console.log(L.match(pat))

let salary = 5000 + 10000 + 15000
console.log("Total Annual income is ",salary)