 const name = "karan-c"
 const repocount = 50 

 console.log(name+repocount + " ") // never used like this in industry 

 console.log(`my name is ${name} and my repocount is ${repocount}, thank you`)
 // another way if declaring strings

const gameName = new String('karan-sarawagi-100') // ye string ka object bana deta h jisse hme methods use krne me easy hota h  
console.log(gameName[0]);
console.log(gameName.charAt(0))

const newString = gameName.substring(0,4) // yaha 0 inclusive and 4 inclusive nhi h
console.log(newString)

const anotherString  = gameName.slice(6,7)
console.log(anotherString)

// substring me negative values nhi de skte h par susbstring me de skte h negative values
 
// ek acha method h trim isse whitespaces hat jate h 
// trim only whitespace me use hota h 

const aString = "  karan  ";
console.log(aString.trim())

const url = "https:/karan.sarawagi/karan%20sarawagi"
console.log(url.replace('%20','-'))  // replace krdega jisko jisee
console.log(url.includes('kara')) // batadega ki string me ye cheez h ki nhi 

// ab maanlo string ko kisi - ke aadhar pe split krke array me store krvana h 

const stringArray = gameName.split('-')
console.log(gameName)

// prototype are the funtions which can be used to take help from strings
// also keep trak of backslash wale string me `` ye variable string me help krte h 





