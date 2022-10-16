// FUNCTIONS
let box = document.querySelector(".box")

//  1-FUNCTION TURI

// btn.addEventListener('click', giveStyle)

function giveStyle(){
    document.body.style.background = "red"
}
giveStyle()

function jaloliddin(){
    box.style.height = "300px"
    box.style.width = "400px"
    box.style.background = "yellow"
}
btn.addEventListener('click', jaloliddin)



let a =  10;
let b = 2190;

function sayHello (a,b){
    console.log(a+b);
}
sayHello(a,b);

let c = 20;
let d = 3;

function multiply (c,d){
    console.log(c*d);
}
multiply(c,d);

// let a = 200;
// let b = 350;

// function calculate (a,b){
//     console.log(a+b);
// }
// calculate(a,b)


let g = 200;
let h = 350;

function add (g,h){
    console.log(g + h);
}
add(g,h);
const ks  = (a,b ) => { // PARAMETRE
    console.log(a+b);
}
ks(a,b);  // ARGUMENT

let n = 20;
let q = 30;
let m = 30;
const add2 = (n,q,m)=>{
    console.log(n+m-q);
}
add2(n,q,m);


const change = ()=>{
    box.style.height = "400px"
    box.style.width = "600px"
    box.style.background = "white"
}
btn2.addEventListener('click', change)

let e = 90;
const jasen = (q,e)=>{
    console.log(q-e);
}
jasen(q,e);
// const jasen = (a,b)=>{
//     console.log(a-b);
// }
// jasen(a,b)




const hj = function(a,b){
    console.log(a+b);
}
hj(a,b)
const james = function(a,b){
    console.log(a+b);
}
james(a,b)

hj(a,b);

// FAQAT FUNCTION DECORATION OZIDAN YUQORIDA CHAQIRILSA HAM ISHLAYDI


// btn.addEventListener('click', giveStyle)


// function giveStyle(){
//     document.body.style.background = "black"
// }



// let l = 100;

// function func1(){
//     let n = 300;
//     func2(n,l)
// }

// function func2(n,l){
//     console.log(n-l);
// }
// func1