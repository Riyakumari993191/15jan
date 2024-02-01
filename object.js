//---------- object declear krne ke 2 tarike hai-----------
// 1 constorctor ke tarah
//2  litearal ke tarah
//singleton------ jab constecrtor se object bnta hai
//nosingleton-----------------------literal ke tarah

//object literals
const newsymboll = Symbol("key1")

const newuser = {
    name:"riya",
    age:"19",
    [newsymboll]:"yourkey",
    moblieno:9931913614,
    email:"riyakumari@123",
}
console.log(newuser)
 newuser.email="ryakumari123"
console.log(newuser.email)
Object.freeze(newuser)
newuser.email="shaku@123"
 console.log(newuser.email)
 
//ek synbol lo ushko object k key me add kro ar mujhe print kr ke dikkhao// 
 console.log(newuser[newsymboll])

////// ab hum baat krenge singleton ya phir constorcutor ke help e kaise declear krenge


