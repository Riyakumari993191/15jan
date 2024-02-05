//---------- object declear krne ke 2 tarike hai-----------
// 1 constorctor ke tarah
//2  litearal ke tarah
//singleton------ jab constecrtor se object bnta hai
//nosingleton-----------------------literal ke tarah

//object literals
//const newsymboll = Symbol("key1")

//const newuser = {
    //name:"riya",
    //age:"19",
    //[newsymboll]:"yourkey",
  //  moblieno:9931913614,
    //email:"riyakumari@123",
//}
//console.log(newuser)
 //newuser.email="ryakumari123"
//console.log(newuser.email)
//Object.freeze(newuser)
//newuser.email="shaku@123"
 //console.log(newuser.email)
 
//ek synbol lo ushko object k key me add kro ar mujhe print kr ke dikkhao// 
// console.log(newuser[newsymboll])

////// ab hum baat krenge singleton ya phir constorcutor ke help e kaise declear krenge
//const tinderUser = new Object()
 //const tinderUser = {}
//tinderUser.id="abc1234"
//tinderUser.name="riya"
//console.log (tinderUser);



// const regularuser = {
//     email:"riya@123",
//     fullname:{
//         userfullname:{
//             firstname:"riya",
//             lastname:"kumari",
//             moblieno: 9931913614
//         }

//     }
// }
// console.log(regularuser.fullname.userfullname.firstname)

//jab hum 1 object ko dusre object se combine krte hai 
// const obj1 = {1: "a", 2: "b"}
// const obj2  = {3: "c", 4: "d"} 
// const obj4 = {5:"e", 6: "f"}  

// const obj3 = Object.assign({},obj1, obj2,obj4)
// console.log(obj3);
  

// destructure of object

/// objec ka destructure means koi दाहरण में देखिए user नाम का एक object है जिसमें 3 properties है और हर property की value को fetch करने के लिए अलग अलग variable को define करनी पड़ी है | जिससे code काफी lengthy हो जाता है 
//इसी लम्बी code को कम करने के लिए object destructuring का उपयोग किया गया है | एक empty object में सारे variables को एक साथ declare करके उसे object के सारे properties को sequencially assign कर सकतें हैं |


//syntax---let {property1: variable1, property2: variable2, property3: variable3} = object;||
const course = {
  coursename:"js in hindi",
  price:"900",
  courseinstructor: "riya"
}
const {coursename:name}=course
console.log(name)
