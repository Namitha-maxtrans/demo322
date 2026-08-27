
// const add = (a, b) => {
//     console.log(a + b);
// };

// add(10, 20);
//  function greet(){
//       	console.log("hi")
// }
// greet()
// function add(a,b){
//       	return a+b} ; 
// console.log(add(6,7))
// let  a=function(){
// console.log("gm")}
// a()
//  let person ={
//      	name : "john",
//      	age:21,
//     	greet:function(){
//         	console.log("my name is " + this.name)
 
//    	}
// }; person.greet()
// function one(){
//     	console.log("hi")
// }
// function two(){
// console.log("hello")
// }
// one(two)

// function outer(){
//     let n=23
//     function  inner(){
//         console.log(n)
//     }
//     inner()
// } outer()
// const num=[1,2,3,5]
// const res=num.map(item => item*2)
//  console.log(res)
// const num =[1,3,6,97,95]
//     	const res= num.filter(item => item>6)
//         console.log(res)
// const n= [1,3,5,6]
//   const res =n.reduce((sum,num)=>{
//         return sum+=num},0)

//         console.log(res)
 
// const promise = new Promise((resolve, reject) => {
 
// 	let success = true;
 
// 	if (success) {
//         resolve("Data received");
// 	} else {
//         reject("Failed");
// 	}
// });
// promise
// 	.then(result => {
//         console.log(result);
// 	})
// 	.catch(error => {
//         console.log(error);
// 	});
 
// Promise.resolve(10)
//       .then(n => n*3)
//     .then(n=> n+10)
//     .then(res => {
//      console.log(res)
//     }  )
// Promise.resolve()
// const p1=Promise.resolve(10)
// const p2=Promise.resolve(20)
// const p3=Promise.resolve(30)
// Promise.all([p1,p2,p3])
// .then( res =>{
//     console.log(res)
// })

// const p1=Promise.resolve(10)
// const p2=Promise.reject("some")
// const p3=Promise.resolve(30)
// Promise.all([p1,p2,p3])
// .then( res =>{
//     console.log(res)
// })
// .catch(error=>{
//     console.log(error)
// })
//  const p1=Promise.resolve(10)
// const p2=Promise.reject("something went wrong")
// const p3=Promise.resolve(30)
// Promise.allSettled([p1,p2,p3])
// .then( res =>{
//     console.log(res)
// })
// const p1=Promise.resolve(10)
// const p2=Promise.reject("something went wrong")
// const p3=Promise.resolve(30)
// Promise.any([p1,p2,p3])
// .then( res =>{
//     console.log(res)
// })
// async function test(){
//     return "ho"
// }
// test().then(res => {
//     console.log(res)
// })
// function test(age){
//     if (age<18){
//         throw new Error ("Your are not eligible to vote")
//     }
// }
// try{
//     test(13)
// }catch(error){
//     console.log(error.message)
// }
 
 

 
async function test() {
	try {
    	const result = await Promise.reject("Failed");
        console.log(result);
	} catch (error) {
        console.log(error);
	}
}test()
let p1=new Promise((resolve,reject)=>{
    resolve("Successfull")
})
async function one(){
    let a= await p1;
    console.log(a)
} one()
try{
    console.log(x)
}catch(error){
    console.log(error.message)}  
try {
    console.log("Start");
	console.log(x);
    console.log("End");
} catch (error) {
    console.log("Error occurred");
}
