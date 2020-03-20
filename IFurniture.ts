import Table from './Table'
import PolyObject from "./PolyObject"
import ConveyorBelt from './ConveyorBelt'

export default interface Ifurniture {

     put(furniture:ConveyorBelt | Table, object :PolyObject ) : void 
     take(furniture:ConveyorBelt | Table,ndex?:number) : PolyObject | null 

}

export  class IfurnitureException extends Error {

    message: string= ""

    constructor(message:string){
        super()
        this.message=message
    }
}