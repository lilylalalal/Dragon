const Dragon = require('./dragon')
const FriendlyDragon = require('./friendly-dragon')
const EvilDragon =require('./evil-dragon')

let falkor = new FriendlyDragon("Falkor" ,"white",["save Atreyu from the swamp", "save Atreyu from the Nothing",
"scare the local bullies into a dumpster"],"Bastian")

let smaug = new EvilDragon("Smaug","black",["take over your mountain kingdom", "steal all your dwarven gold",
"burn down your floating village"] ,"Dwarf King")

const allDragons = Dragon.getDragons(falkor,smaug)

//console.log('///////////')

//console.log(allDragons)
//console.log(falkor);
//falkor.hasLifeGoals();
//console.log(falkor.breathesFire());
//console.log(falkor.helpsPeople());

//console.log(smaug);
//smaug.dontInviteThemOverForDinner();
//console.log(smaug.breathesFire());
//console.log(smaug.burnsNemesis());


module.exports = {
        falkor,
        smaug,
        allDragons};

        module.exports.falkor = falkor
        module.exports.smaug = smaug
        module.exports. allDragons = allDragons
  