// singleton  --> single instance 
// Object.create 

// object through literals 

// creating symbols 


const mySym = Symbol("key1")

const user = {
    "full name" : "karan sarawagi" ,
    [mySym] : "mykey1",
    name: "karan",
    age : 22 ,
    location : "suratgarh",
    email : "kanuagarwal01@gmail.com" ,
    isLoggedIn : false ,
    lastLoginDays : ["Monday" , "Saturday"]
}

console.log(user.age)
console.log(user.email)  // access krne ka tarika objects ko 
console.log(user["email"])

console.log(user["full name"])  // yhi tarika h access krne ka strings ko . use nhi kr skte yaha 

console.log(user[mySym])   // yhi tarika h symbol ko acces krne ka

user.email = "kanuagarwal1119@gmail.com"
Object.freeze(user)  // ye tarika h object ko freeze krne ka taki koi change na kr ske values

// adding function in object

user.greeting = function(){
    console.log("hello user");
}

user.greeting2 = function(){
    console.log(`hello ${user.name} user`)  // jab hm object ki hi koi property define kr rhe h to this use kro na ki user
}

user.greeting3 = function(){
    console.log(`hello ${this.name}`)
}

console.log(user.greeting)  // this wrong kyoki function ko () ke saath hoga
console.log(user.greeting());
console.log(user.greeting2())
console.log(user.greeting3())  // simply function chala dega 

// ******
// vaise touser. se hi access hota h but somtimes [" "] isi se hi krna pdta h access







