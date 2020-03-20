import Pony from './Pony'
import Elf from './Elf'
import Packaging from './Packaging'
import GiftWrap from './GiftWrap'
import Toy from './Toy'
import Box from './Box'
import ConveyorBelt from './ConveyorBelt'
import Table from './Table'
import  { DBHeroes,DragonBall } from './DragonBall'
import PolyObject from './PolyObject'
import { parentPort } from 'worker_threads'

// Step #1
console.log("--- STEP #1 ---");

const pony: Pony = new Pony();
const goku: DragonBall = new DragonBall(DBHeroes.SANGOKU);

pony.isMoved();
goku.isMoved();

// Step #2
console.log("--- STEP #2 ---")

const majdi: Elf = new Elf("makiboto")
const box: Packaging = new Box()

try {
  majdi.pack(box, goku)
}
catch (e){
console.log(e.message)
}
box.open()
try {
  majdi.pack(box, goku)
}
catch (e){
console.log(e.message)
}

const paper: Packaging = new GiftWrap()

try {
  majdi.pack(paper, pony);
} catch(e) {
  console.log(e.message);
}
try {
  majdi.pack(paper, pony);
} catch(e) {
  console.log(e.message);
}


const toy: Toy = majdi.unpack(paper)
console.log(toy === pony)
try {
  majdi.unpack(paper);
} catch (e) {
  console.log(e.message);
}

// Step #3
console.log("--- STEP #3 ---")

const table: Table = new Table()
const conveyor: ConveyorBelt = new ConveyorBelt()
//on tente d'ajouter 11 objet au 11eme errror
majdi.put(table, paper)
majdi.put(table, pony)
majdi.put(table, box)
for (let i of Array(8).keys()){
  majdi.put(table,PolyObject)
}
// on affiche les 10
majdi.look(table)
// convoyeur vide
majdi.look(conveyor)
// on recuperee un objet du pere noel
majdi.in(conveyor)
// on laffixhe
majdi.look(conveyor)
// on envoit un jouet non emballé mais erreur car  on a pas recupere lobjet issu du majdi.in(conveyor)
majdi.put(conveyor,goku)
// on lenleve

try{
  majdi.take(conveyor)
}
catch(e){

}
// on retente lenvoi de goku au perenoel 
majdi.put(conveyor,goku)

try{
  //recupere l'objet n°2 donc Pony ( index a 0)
  const popony = majdi.take(table,1)
  if(popony instanceof PolyObject){
    majdi.put(conveyor,popony)
  }
     
}
catch(e){

}















