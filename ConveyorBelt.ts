import IFurniture, {IfurnitureException} from './IFurniture'
import PolyObject from './PolyObject'

export default class ConveyorBelt implements IFurniture {
private _isBusy : boolean = false
private _item : PolyObject | null = null

set item(item :PolyObject | null){
    this._item = item
}
get item():PolyObject | null{
    return this._item
}

set isBusy(busy:boolean){
    this._isBusy = busy
}

get isBusy(){
    return  this._isBusy
}
    
    put(furniture :ConveyorBelt, objet :PolyObject ) : void | never {
        if (furniture.isBusy ){
            throw new IfurnitureException(`Sorry the ${furniture} has already an item`)
        }
        else{   
                furniture.item = objet
                furniture._isBusy = true
        }
    }
     take(furniture:ConveyorBelt ) {
         
        if(!furniture.isBusy ){
          throw new IfurnitureException(`Sorry the conveyor is empty`)
        } 
        else{
            return furniture.item
        }
     }

    in(objet?:PolyObject) {
        if(this.isBusy){
            throw new IfurnitureException(`Vide d'abord ton tapis avant de m'appuyer, merci aurevoir`)
        }
        this.item= objet instanceof PolyObject ? objet : new PolyObject
        this.isBusy = true;
    }
    out(objet:PolyObject|null) {
        if(this.isBusy || objet ==null){
            throw new IfurnitureException(`recupere deja l'objet qui est sur le tapis, merci aurevoir`)
        }
        console.log('Lelf a renvoyer cet objet ',objet)
        this.isBusy = false;
        this.item= null
    }
}
