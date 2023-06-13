// Your code here
class Dragon {
  constructor(name, color) {
    this.name = name
    this.color =color
  }
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }
  static getDragons(...dragonclasses){
    let list = []
    dragonclasses.forEach((dragon)=>{ 
      list.push(dragon.name)})
      
    return list

  }
}

const puff = new Dragon("Puff", "green");
//console.log(puff);
//console.log(puff.breathesFire());

const toothless = new Dragon("Toothless", "black");
//console.log(toothless);
//console.log(toothless.breathesFire());

//console.log(Dragon.getDragons(puff, toothless));
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}