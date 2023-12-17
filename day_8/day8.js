const dog = {

}
console.log(dog)

dog.name = 'queen'
dog.breed = 'labrador retriever'
dog.color = 'gold'
dog.bark = 'woof'

console.log(dog)

console.log(dog.name,dog.color,dog.breed,dog.bark)

dog.leg = 'right'
dog.info = '1990'
console.log(dog)

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    findmostskill:function(users){
        let skillcount = 0
        let personwithmostskill = null

        for(const user in users){
            const skillscount = users[user].this.skills.length

            if(skillscount>skillcount){
                skillcount=skillscount
                personwithmostskill=user
            }
        }
        return personwithmostskill
    },

  /* findmaxpt:function(users){
        let maxpoints = [];
        let userhavemaxpt = null

        for(const user in users){
            const logpts = users[user].points

           if(logpts>=50){
            maxpoints.this.points.push(logpts)
           }
        }
        console.log(maxpoints)}*/

        mern:function(users){
        const merndev=[]

        for(const user in users){
            const skils = users[user].skills

            const hasmern = this.skills.includes('MongoDB')&&
            this.skills.includes('Express')&&
            this.skills.includes('React')&&
            this.skills.includes('Node')

            if(hasmern){
                merndev.push(user)
            }
        }
        return merndev
    }
  }

  const check = users.mern(users)
  console.log(`he is theperson, ${check}`)
  






  