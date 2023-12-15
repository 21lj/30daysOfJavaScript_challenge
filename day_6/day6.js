const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  let os=0
  let es = 0
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  let i=0
  for(i=0;i<11;i++)
  console.log(i)

  while(i<11){
    console.log(i)
    i++
  }

  do{
    console.log(i)
  }while(i<=10)

  let j=10
  for(j=10;j>=0;j--)
  console.log(j)

  while(j>=0){
    console.log(j)
    j--
  }

  do{
    console.log(j)
  }while(j>-1)

for(i=0;i<7;++i){
    for(j=0;j<=i;++j){
        console.log('#')
    }
    //console.log('\n')
}

let oear=[]

for(let m=0;m<11;m++){
    console.log(`${m} X ${m} = ${m*m}`)
}

for(let m=0;m<11;m++){
    console.log(`${m} ${m*m} ${m*m*m}`)
}

for(i=0;i<101;i++){
    if(i%2!=0){
        continue
    }
    es+=i
    console.log(i)
}
oear.push(es)

for(i=0;i<101;i++){
    if(i%2==0){
        continue
    }
    os+=i
    console.log(i)
}
oear.push(os)

for(i=2;i<101;i++){
    if(100%i!=0){
        continue
    }
    console.log(i)
}

let sum = 0
for(i=0;i<101;i++){
    sum+=i
}
console.log(`Sum of 100 no is ${sum}`)
console.log(`Sum of odd no is ${os}`)
console.log(`Sum of even no is ${es}`)
console.log(oear)

let rar = Math.random() * 6
console.log(rar)

let randarr = []
for(let i = 0;i<5;i++){
   let randno = Math.round(Math.random() * 100)
   randarr.push(randno)
}
console.log(randarr)

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let rID = ''
for (let i = 0; i < 6; i++) {
    const randi = Math.round(Math.random()*characters.length)
    rID = rID + characters.charAt(randi)
}
console.log(rID)

let rID2 = ''
let limit = Math.random() * characters.length
let charlimit = Math.floor(limit)
for(i=0;i<charlimit;i++){
    const randi2 = Math.round(Math.random()*characters.length)
    rID2 = rID2 + characters.charAt(randi2)
}
console.log(rID2)

const hx = '0123456789abcdef'
let clr = ''
for(let j=0;j<5;j++){
    let cindex = Math.round(Math.random()*hx.length)
    clr = clr + hx.charAt(cindex)
}
console.log('#'+clr)

