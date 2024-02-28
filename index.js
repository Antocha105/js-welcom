 class Figure{
  constructor(sideQuantity){
    this.sideQuantity = sideQuantity;
  }

  get sideQuantity(){
    return this._sideQuantity
  }

  set sideQuantity(newValue){
    if(newValue<0){
      throw new RangeError('Side quantity can be less than 0')
    }
    this._sideQuantity = newValue
  }


  getArea(){

  }
 }

class Triangle extends Figure{
  constructor(a,b,angle){
    super(3)
    this.a =a;
    this.b = b;
    this.angle = angle
  }

  get a(){
    return this._a
  }

  set a(newValue){
    if(newValue<0){
      throw new RangeError('Side not less than 0')
    }
    this._a = newValue

  }

  get b(){
    return this._b
  }

  set b(newValue){
    if(newValue<0){
      throw new RangeError('Side not less than 0')
    }
    this._b = newValue

  }

  get angle(){
    return this.angle
  }

  set angle(newValue){
    if(newValue<0){
      throw new RangeError('Side not less than 0')
    }
    this._angle = newValue
  }

  getArea(){
    return this.a*this.b*Math.sin(this.angel);
  }
}

class Square extends Figure{
  constructor(a){
    super(4)
    this.a = a;
    
  }

  get a(){
    return this._a
  }

  set a(newValue){
    if(newValue<0){
      throw new RangeError('Side not less than 0')
    }
    this._a = newValue
  }

  getArea(){
    return this.a*this.a
  }
}

const square = new Square(4)