import Figurine from './Figurine'

export class DragonBall extends Figurine {
  
   private _carachter : DBHeroes 

  ​ constructor(carachter:DBHeroes){
    super()
    this._carachter=carachter
    super._type=`Dragon Ball figurine ${DBHeroes[this._carachter]}`
    super.cry='Kamé Hamé Ha!'
    
    
    console.log(`${DBHeroes[this._carachter]} is singing -->
    CHA-LA HEAD CHA-LA
    Nani ga okite mo kibun wa heno-heno kappa
    CHA-LA HEAD CHA-LA
    Mune ga pachi-pachi suru hodo
    Sawagu Genki-Dama --Sparking !`);
    
  }
   
  }

export enum DBHeroes{
    SANGOKU,
    BEJITA,
    BEERUS,
    KAMESENNIN,
  }
