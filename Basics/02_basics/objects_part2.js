// const tinder = new Object()
const tinder = {}

// h to dono same hi cheez empty objects but upar wala singleton and niche wala literal

tinder.id = "123abc"
tinder.name = "karan"
tinder.isLoggedIn = false; 

console.log(tinder) 
// print krdega object and uski properties ko 

const regularUser = {
      email : " kanuagarwal01!gmail.com",
      fullname : {
         userfullname : {
            firstname: "karan",
            lastname : "sarawagi",
         }
      }
}

console.log(regularUser.fullname.userfullname.firstname)
// is type se nested objects ko access kr skte h

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

const obj3 = { obj1 , obj2}
// is type se dono objects ko combine krge to again vhi problem ki alg alg object show hoga 

const obj4 = Object.assign({} , obj1 , obj2)

// {} empty shuru me dene ka fayada ye h ki ye target h 
// mtlb {} isme aage wale sb objects push krdega 
// isisliye jab hm {} isko store krvate obj3 me to obj3 me obj1 and obj2 store ho jate h 
// agar yhi hm target me {} nhi dege to store to krva dega lekin obj1 bhi change ho jayega

const obj5 = {...obj1 , ...obj2}
// sbse bdiya tarika using spread operator 

const users = [
    {
        id : 1 ,
        email: "k@gmail.com"
    },
    {
        id : 1 ,
        email: "k@gmail.com"
    }, 
    {
        id : 1 ,
        email: "k@gmail.com"
    }
]

// database se aise aata h arrays of objects to unko accesss kr skte h just like array ke elements krte h 

console.log(users[1].email)

console.log(Object.keys(tinder))
// ye jo key (properties) return krta h object ki wo ek array me store krvake return krta h jisse hm us array pe iterate kr skte h 

console.log(Object.values(tinder))
console.log(Object.entries(tinder))
// similar things like array return hoga values ka and entries ka 

console.log(tinder.hasOwnProperty('isLoggedIn'))  // true 
console.log(tinder.hasOwnProperty('isLogged'))  // false
// ye sb check krne ke liye protype check kra kro usme bhot sare functions hote h 

const course = { 

    coursename: "js",
    price  : "999",
    courseInstructor  : "karan",
}

const {courseInstructor : instructor} = course  // ye tarike se hme baar baar ye cheez nhi likhni pdegi course.courseinstructor

// const {} jab hm ye kr rhe h to mltb h ki hm destructure kr rhe h object ko 

console.log(courseInstructor)
console.log(instructor)  // usko hm dusra name bhi de skte h jaise courseintructor ka name change krke instructor kr diya 

// {
//     "name": "karan",
//     "coursename": "js",
//     "price" : "free"
// }

// ab ye json ke jaise treat hota h ab ye object nhi h kyoki apis hamare paas json format me aati h mostly

[
    {},
    {},
    {}
]
// kai baar json ki jagah arrays return hote h jinme further objects hote h 





