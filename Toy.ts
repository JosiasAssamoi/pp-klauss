​import PolyObject from './PolyObject'
export default class Toy extends PolyObject {
  protected _type: string = "";
  cry: string = "";
​
  constructor() {
    super()
    
  }
  get type() : string {
      return this._type
  }

  isMoved() : void {
      console.log(this.cry);
      
  }

}


​
