// Your code here
const Dragon =require('./dragon')

class EvilDragon extends Dragon {
    constructor(ame, color,evilDoings = [],nemesis){
        super(ame, color);
        this.evilDoings = evilDoings
        this.nemesis = nemesis
    }
    dontInviteThemOverForDinner() {
        this.evilDoings.forEach((evil)=>{
        console.log(`${this.name} will ${evil}`)})
    }
    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    }
}


try {
    module.exports = EvilDragon;
  } catch {
    module.exports = null;
  }
  const enderDragon = new EvilDragon(
    "Ender Dragon",
    "black", [
      "spit a fireball at Steve",
      "rule over all the Endermen",
      "destroy all blocks in its way"
    ],
    "Steve"
  );
  //console.log('++++++++');
  //console.log(enderDragon);
  //enderDragon.dontInviteThemOverForDinner();
  //console.log(enderDragon.breathesFire());
  //console.log(enderDragon.burnsNemesis());