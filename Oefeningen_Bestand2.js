const assert = require('assert')


//* schrijf een functie die het grootste van twee getallen teruggeeft
function max(a, b) {
    if(a>b)
    {
        return a
    }
    if(b>a)
    {
        return b
    }
    else
    {
        return a
    }
}

assert.equal(max(0, 0), 0)
assert.equal(max(1, 0), 1)
assert.equal(max(0, 1), 1)
assert.equal(max(-1, 1), 1)

//* grootste van drie getallen
function max3(a, b, c) {
    if(a > b && a > c)
    {
        return a
    }
    if(b > a && b > c)
    {
        return b
    }
    if(c > b && c > a)
    {
        return c
    }
    if(c == b == a)
    {
        return a
    }
    if(c==b)
    {
        return c
    }
    if(c == a)
    {
        return c
    }
    else
    {
        return b
    }
}

assert.equal(max3(0, 0, 0), 0)
assert.equal(max3(1, 0, 0), 1)
assert.equal(max3(0, 1, 0), 1)
assert.equal(max3(0, 0, 1), 1)
assert.equal(max3(-1, 1, 0), 1)

//* gegeven de volgende code:
function pair(left, right) {
    return function (f) {
      return f(left, right)
    }
  }
  
  function left(pair) {
      return "linker oog"
  }
  
  function right(pair) {
      return "rechter oog"
  }

//* schrijf de functies left en right, zodat:
const ogen = pair("linker oog", "rechter oog")
assert.equal(left(ogen), "linker oog")
assert.equal(right(ogen), "rechter oog")

//*/
