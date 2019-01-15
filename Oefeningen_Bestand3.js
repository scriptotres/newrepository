// van 0 tem 100

for(i = 0; i<=100; i++)
{
console.log(i)   
}

console.log()

lijst  = [1, 2, 3, 4, 5, 6, 7, 2, 5]
var a = 0

for(i = 0; i < lijst.length; i++)
{
 if(lijst[i] > a)
 {
    a = lijst[i]
 }
}

console.log(a)

// grootste getal functional programming

const fpA = lijst.reduce(function(a,b){ return a > b ? a : b})
console.log("With functional programming:")
console.log(fpA)

//langeste string

lijstStrings = ["ajhg","lsdfksh","dfjhs","ksghdf","kshf"]
var a = 0
var b 

for(i = 0; i < lijstStrings.length; i++)
{
 if(lijstStrings[i].length > a)
 {
    a = lijstStrings[i].length
    b = lijstStrings[i]
 }
}
console.log()
console.log(b)

// langste string functional programming 

console.log("With functional programming: ")
const fpB = lijstStrings.reduce(function(a,b){ return a.length > b.length ? a : b})
console.log(fpB)
console.log()

// gemiddelde

var indexer = 0
var totaleSom = 0

for(i = 0; i < lijst.length; i++)
{
indexer++
totaleSom += lijst[i]
}

console.log(totaleSom / indexer)

// gemiddelde functional programming

console.log("With functional programming:")
const fpC = lijst.reduce((a,b) => a + b)
const fpCAverage = fpC / lijst.length
console.log(fpCAverage)
console.log()

//palindroom

const pali = "kalfflak"
const niet = "kazenkroeg"
const paliOneven = "lepel"


function testPalindroom(woord)
{
var half = woord.length / 2
if(half % 2 == 0)
{
    for(i = 0; i <= half; i++)
    {
        if(woord[i] != woord[woord.length - i - 1])
        {
            return "Dit is geen palindroom."
        }
    }
    return "Dit is een palindroom"
}
else
{
    for(i = 0; i <= half - 1; i++)
    {
        if(woord[i] != woord[woord.length - i - 1])
        {
            return "Dit is geen palindroom."
        }
    }
    return "Dit is een palindroom"
}
}

console.log(testPalindroom(paliOneven))