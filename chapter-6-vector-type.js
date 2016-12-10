/* this is my code at first, but I find here is another writing way abou the length function, I get a little confused so I record it and try to figure it out.
    get length() {
        var x = this.x,
            y = this.y;
        return Math.sqrt(x * x + y * y);
    }
    and my the method above, you don't have to pass meaningless mane like the 0 in my code, so i think its very good
*/

// my code here.
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype = {
  minus: function(vect) {
    return new Vector(this.x - vect.x, this.y - vect.y);
  },
  plus: function(vect) {
    return new Vector(this.x + vect.x, this.y + vect.y);
  },
  length: function(n) {
    var x = this.x,
        y = this.y;
    return Math.sqrt(x * x + y * y);
  }
};

console.log(new Vector(1, 3))
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length(0));
// → 5
