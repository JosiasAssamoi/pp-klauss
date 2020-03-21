import IFurniture,{IfurnitureException} from './IFurniture'
import PolyObject from './PolyObject'

export default class Table implements IFurniture  {

    _content: PolyObject[] = []
    MAX_NB_OBJECTS : number = 10

    set content (content:PolyObject[]){
        this._content=content
    }

    get content():PolyObject[]{
        return this._content
    }

   
   

     put(furniture :Table, object :PolyObject ) : void | never {
        
        
        if ( furniture.content.length == furniture.MAX_NB_OBJECTS ){
            throw new IfurnitureException(`Sorry the ${furniture.constructor.name} is full`)
        }
        else{
            furniture.content = [...furniture.content,object]
            
        }
    }
     take(furniture:Table,ndex=this.content.length-1 ) : PolyObject | never {
        
         
         if(furniture.content.length <1 ){
            throw new IfurnitureException(`Sorry the ${furniture} is empty`)
         }
         else if (ndex < 0 || ndex > this.content.length -1){
            throw new IfurnitureException(`Sorry this is an imaginary ndex`)
         }
         else{
             const obj = this.content[ndex]
             this.content = this.content.filter((cont)=> {return cont !=this.content[ndex]})
             return obj
         }
     }
}