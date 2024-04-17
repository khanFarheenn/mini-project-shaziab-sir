// const promiseone = new Promise(function(resolve, reject){
// setTimeout(function()  {
//     console.log("Async take is complete");
//     resolve()
// }, 2000);
// });
// promiseone.then(function(){
//     console.log("promise consumed");
// })


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hi i am new promise");
        resolve()
    },1000)
})
.then(function(){
    console.log("i am aresolve two ");
})

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("hi i am promes 3");
        resolve()
    },1000)
    
})
.then(function(){
    console.log("i am new then function");
})






const promisefour =new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("o am four promise function");
        resolve({
            username:"farheen khan",
            Email:"farrheenkhan1995@gmail.com"
        })
    },1000)
})
promisefour.then(function(user){
    console.log(user);
})
