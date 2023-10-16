const marvel_heros =["thor" ,"ironman" , "spriderman"]
const dc = ["superman" , "flash" , "batman"]

marvel_heros.push(dc)
console.log(marvel_heros) 

// ab yaha output me dono merge nhi hoge 
// balki wo array as single element lelega kyoki datatype to koi bhi ho skta h 

// --> ["thor" , "ironman" , "spidema" , ["superman" , "flash" , batman]]

const allHeros = marvel_heros.concat(dc)
console.log(allHeros)

// ab yaha jo h dono merge ho jayege ek new array me so mainly 

// spread operator ****
// kuch nhi bas spread krdega kaanch ka glass tutega and bikhar jayega

const all_new_heros = [...marvel_heros , ...dc]
console.log(all_new_heros) 

// ye kya krega dono ko khol dega to eventually 3+3 total 6 elements ho gye h 

const another_array = [1,2,[4,5,6] ,[7,[8,9]]]
console.log(another_array.flat(Infinity))

// flat ka purpose hi ye h ki subarray me se element nikal ke main array me patak dega 
// depth me infinity daaloge to kitni mrzi andar subarrays bne ho apne aap sbko main array me daal dega

Array.isArray("karan")
Array.from("Karan")

// is array check krlega array h ki nhi and from array convert krdega string karan ko hi array me 

console.log(Array.from({name : "karan"}))

// ab yaha empty array return krega kyoki isko nhi pta ki keys ka array banau ki string ka array banau 

let score1 = 100
let score2 =200
let score3 = 300 

console.log(Array.of(score1,score2,score3))

// agar jayada varaibles h and inko combine krne h to array,from ki jagah array.of use kro sbko concat krdega 

