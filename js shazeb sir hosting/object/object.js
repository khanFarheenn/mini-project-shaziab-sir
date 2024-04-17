
// Introduction to JavaScript Objects
// JavaScript objects are a way to store collections of data and more complex entities. In simple terms, an object in JavaScript is a collection of related data and functionality. These are stored as key-value pairs where each key (property name) maps to a value that can be a simple data type like a number or string, or more complex types like functions or even other objects.
/*=====object are two type  one is object literal and second is object constrctor====*/

//object constrctor
// Object.create/singletone object
// object literal

// let jsobject ={
//     name :"farheen khan",
//     age : 25,
//     Email :"Farheenkhan@gmail.com",
// }
// jsobject.address="bhopal"
// console.log(jsobject);
// let today ={
//     id:1,
//     Name :"farheen ",
//     Email:"farhee@gimal.com",
    
// }
// console.log(today.Name);
// console.log(today['Email']);



// /*============ Accessing Object Data two type===========*/ 
// console.log(jsobject.name)/* Dot notation*/ 
// console.log(jsobject['Email']) /* Bracket notation*/
// //  Object.freeze(Email) /* value is freez not changeble */
// jsobject.lastname ="afreen"; 
// console.log(jsobject);


let jsobject ={
    name :"farheen khan",
    age : 25,
    Email :"Farheenkhan@gmail.com",
}
jsobject.address="bhopal"

function myfunction(){
    return ("hi i am function")
}
myfunction()

jsobject.greeting = function () {     /*function ex.*/
    console.log(`Hi i am ,${this.name}`);/* ` string enterpulation`(`template litral`) */
}
// 
// jsobject. greetingtwo =function (){
//     console.log(`Hi my age ,${this.age}`);
// }
console.log(jsobject.greeting() );
// console.log(jsobject.greetingtwo() );
//singleton object 
// let objecttender =new object() /*singetone object*/
// let objecttender = {} /* non singetone object*/
// /* insert value  in the empty object */
// objecttender.name =" afreen khan"
// objecttender.id =12556
// objecttender.Designation ="talor"
//  console.log(objecttender);



let objecttender={
    name :"farheen khan",
    age : 25,
    Email :"Farheenkhan@gmail.com",  
}


/*===== if we want to take only key our object we can use object.key(obeject name )=====*/

console.log(objecttender);
console.log(Object.keys(objecttender));/* this line give output  only list of  keys*/ 
console.log(Object.values(objecttender));/* this line give output  only list of  values*/
console.log(Object.entries(objecttender));/* this line give output  only nested list[[keys:values]] */
/*The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.*/  
// console.log(objecttender.hasOwnProperty("Designation"));/* this line give output  only true value {hasOwnProperty it is use to check value in the object are not give boolen output}*/ 




/* ===================nested object make and access=================*/

// let nestedobject = {
//     Emal: "Afreenkhan@12245gamil.com",
//     Fullname: {
//         Username: {
//             firstname: "FARHEEN ",
//             last: "KHAN"
//         }
//     }
// }
//  console.log(nestedobject.Fullname); /* or*/
// console.log(nestedobject.Fullname.Username);


/*======================= cancat two object=========================*/
// let tesget ={1:"a",2:"b"}
// let Source ={3:"c",4:"d"}

// let result = Object.assign(tesget,Source)
// /* Both are doing  Same work */
// let result2 = Object.assign({},tesget,Source)/*{} this is work like target and both are source(tesget,Source) Object.assign() it is also called startic method*/
// let sprateoprater ={...tesget,...Source}/*sprateoprater example glass ka uper se girna and  sprete hona*/
// console.log(result);
// console.log(result2);
// console.log(sprateoprater);
/* ======================Array inner n number of object/object of list=================*/
// let innerobject =[
//     {
//         id:1,
//         email:"farrhenn@xffgmail.com"
        
//     },
//     {
//         id:2,
//         email:"arrhenn@xffgmail.com"
        
//     },
//     {
//         id:3,
//         email:"sdfdg@xffgmail.com"
        
//     },

// ]

// console.log(innerobject);



/*================== Object de-structure  in the object============*/


// let student ={
//     name :"jhon",
//     id:1,
//     sction : "A"

// }

// // console.log(student);
// let {section:secdds}= student
// // console.log(section);
// console.log(secdds);







