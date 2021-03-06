class Vec{
    public x: number;
    public y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    
    plus(vec: Vec){
  	    return new Vec(this.x + vec.x, this.y + vec.y);
    }
  
    minus(vec: Vec){
  	    return new Vec(this.x - vec.x, this.y - vec.y);
    }
  
    get length() {
        let xSum = this.x * this.x;
        let ySum = this.y * this.y;
        let sum = xSum + ySum;
        return Math.sqrt(sum);
    }  
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
