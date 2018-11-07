function General(a,b,c){
  this.a = a
  this.b = b
  this.c = c
  this.res = 0

  this.mult1 = function(){
    return 4 * this.a * this.c
  }
  this.multi2 = function(){
    return 2 * this.a
  }
  this.exp = function(){
    return (this.b)^2
  }

  this.sol = function(){
    return (-(this.b) + ((this.exp - this.multi2)^(0.5))/this.mult1)
    
  }


}

var solucion = new General(4,6,2)
solucion.mult1()
console.log(solucion.sol())
