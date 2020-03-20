import Toy from './Toy'
import PolyObject from './PolyObject'

export default class Packaging extends PolyObject {

   isOpen : boolean = false
   toy :  null | Toy = null
    
    constructor(){
        super()
    }

    open() : void{
        this.isOpen = true
    }

    insert(toy:Toy) : void{
        this.toy = toy 
        this.isOpen =false

        
    }
}