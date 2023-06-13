// Your code her
const Dragon =require('./dragon')

class FriendlyDragon extends Dragon {
    constructor(name, color,lifeGoals=[],friend) {
        super(name,color);
        this.lifeGoals = lifeGoals
        this.friend = friend
    }
    hasLifeGoals(){
        this.lifeGoals.forEach((goal) =>{
        console.log(`${this.name} likes to ${goal}`)
    })
    }
    helpsPeople(){
        return `${this.name} helps their friend ${this.friend}`
    }
}


try {
    module.exports = FriendlyDragon;
  } catch {
    module.exports = null;
  }

  const puff = new FriendlyDragon(
    "Puff",
    "green",
    [
      "live by the sea",
      "frolick in the autumn mist",
      "help small children"
    ],
    "Jackie Paper"
  );
  //console.log('==========')
  //console.log(puff);
  //console.log(puff.breathesFire());
  //puff.hasLifeGoals();
//console.log(puff.helpsPeople());