const score= 400
const newScore = new Number(400)
console.log(score)
console.log(newScore) 

// dono me main farak ye h ki score to apne aap number identify krlega usko 
// lekin newScore usko specifically typecast krega ki number h 
// and prototype use kr skte h usme

console.log(newScore.toString())
// ab isme string wale protypes use kr skte h :))

console.log(newScore.toFixed(2))
// fix krdega precision ko like upto 2 decimals

const hundereds = 1000000
console.log(hundereds.toLocaleString('en-IN'))

// isse kya hoga ye indian standard ya us standard me convert ho jayega jisse
// readibility badh jati h 

// ****************** maths ****************

console.log(Math) 
// ye ek object hota h number jaise hi and isme bhi protoypes hote h 

console.log(Math.abs(-4))
console.log(Math.ceil(5.2))
console.log(Math.sqrt(25))

console.log(Math.random())
// ye random values generate krta h 0-1 ke bich me only 

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// ye formula h kisi range ke andar rndom number laane ka 
