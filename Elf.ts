import Packaging from "./Packaging"
import Toy from './Toy'
import Box from "./Box"
import ConveyorBelt from './ConveyorBelt'
import Table from "./Table"
import PolyObject from './PolyObject'
import GiftWrap from "./GiftWrap"
import { futimes } from "fs"

export default class Elf {

   private _nickname:string 
    
    constructor(nickname:string){
        this._nickname = nickname
    }

    get nickname() : string{
        return this._nickname
    }
    set nickname(nickname:string) {
        this._nickname = nickname
    }

    pack(pack:Packaging,toy:Toy) : void | never {
        if (!pack.isOpen && pack instanceof Box){
            throw new CustomPackError('Sorry this package is not open'); 
        }
        else if( pack.toy instanceof Toy){
            throw new CustomPackError('Sorry this package already filled');
        }
        else {
            pack.insert(toy)  
            console.log(`Yeaaaah! Just packing the toy ~~ ${toy.type} ~~`); 
        }   
    }

    unpack(pack:Packaging): Toy | never {
        if (pack.isOpen || pack.toy == null){
            throw new CustomPackError('Sorry this package is already empty')
        }
        else{
            pack.open()
            console.log(`Ooooooh! Just unpacking the toy ~~ ${pack.toy.type} ~~`);
            const toy : Toy = pack.toy
            pack.toy = null
            return toy
        }
    }

    look(furniture:Table |ConveyorBelt):void{
        let message : string[] = []
         //Table
        if(furniture instanceof Table){
            if(furniture.content.length >= 1){
                 message = furniture.content.map(obj => obj instanceof Toy ? "Toy" : "Packaging")
                console.log(message);  
            }
            else{
                console.log('Pas de contenu');  
            }
        }
        //Convoyer Belt 
        else{ 
            if(!furniture.isBusy){
                console.log(' -- vide --');
            }
            else{
                let message :string =  furniture.item instanceof Toy ? 'Toy' : 'Packaging'
                console.log(' -- ',message,' --');
            }
        }
    }

    put(furniture:ConveyorBelt | Table, object :PolyObject ):void{
        if(furniture instanceof Table){
            try{
                furniture.put(furniture,object) 
            }
            catch (e){
                console.log(e.message); 
            }      
        }
        else{
            try{
                furniture.out(object)
            }
            catch (e){
                console.log(e.message);   
            }
        }   
    }

    take(furniture:ConveyorBelt | Table,ndex?:number):  never |PolyObject {
        if(furniture instanceof Table){
                return furniture.take(furniture,ndex)
        }
        else{
                return furniture.take(furniture) 
        }
    }

    in(conveyor:ConveyorBelt):void{
        try {
            conveyor.in()
        }
        catch(e){
            console.log(e.message);   
        }
    }

 
}

export class CustomPackError extends Error {
    message :string =""
    constructor(message:string){
        super()
        super.message = message
    }
}

