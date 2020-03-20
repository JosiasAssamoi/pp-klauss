import Toy from './Toy'

export default class Pony extends Toy {

  private ​static _nb: number =1 
  id : number | undefined = undefined

  constructor(){
      super()
      this.id = Pony._nb
      super._type=`Pony ${this.id}`
      super.cry='Huuuuuuhu!'

      Pony._nb++

      console.log(`Pony ${this.id} is singing -->
      Dou-double poney, j’fais izi money
      D’où tu m’connais ? Parle moi en billets violets
      Dou-double poney, j’fais izi money`);
  }
  

}