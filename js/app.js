// let a=-10.32
// console.log(parseInt(a))
// function kopaytma(sin1, sin2 , sin3){
//     return ( sin1*sin2)+sin3;
// }
// console.log(kopaytma(2, 3, 5))
// aray > push ohiridan qushish
// pop => ohiridan uchadi
// unshift => boshida qushiladi
// shift => boshida uchiriladi
// blur.splice(a,b,c)
// a=> index
// b=>index dan kyn nechta uchishi
// c=> uniga qushadigan element          
// object { key :value}   
// let gm = { name:"gentra", year:2022 , color:"black"} 

let elFrom =document.querySelector(".form");
let elBtn =document.querySelector(".btn");
let elInput =document.querySelector(".form-input");
let elWalk =document.querySelector(".walk-num");
let elBike =document.querySelector(".bike-num");
let elCar =document.querySelector(".car-num");
let elPlane =document.querySelector(".plane-num");
let elWalk1=document.querySelector(".walk-num1");
let elBike1 =document.querySelector(".bike-num1");
let elCar1 =document.querySelector(".car-num1");
let elPlane1 =document.querySelector(".plane-num1");
let elWalk2=document.querySelector(".walk-num2");
let elBike2 =document.querySelector(".bike-num2");
let elCar2 =document.querySelector(".car-num2");
let elPlane2 =document.querySelector(".plane-num2");
const WALK =3.6;
const BIKE =20.1;
const CAR =70;
const PLANE =800;
elFrom.addEventListener("submit", function (evt){
evt.preventDefault();
const inputVal= Number(elInput.value);
let elResultWalk = Math.floor(inputVal/WALK);
let elResultBike = Math.floor(inputVal/BIKE);
let elResultCar = Math.floor(inputVal/CAR);
let elResultPlane = Math.floor(inputVal/PLANE);
let elResultWalk1 = Math.floor(( (inputVal/WALK)-elResultWalk)*60);
let elResultBike1 = Math.floor(( (inputVal/BIKE)-elResultBike)*60);
let elResultCar1 = Math.floor( ((inputVal/CAR)-elResultCar)*60);
let elResultPlane1 =Math.floor( ((inputVal/PLANE)-elResultPlane)*60);
let elResultWalk2  = Math.round(( (((inputVal/WALK)-elResultWalk)*60)-elResultWalk1)*60);
let elResultBike2 = Math.round(( (((inputVal/BIKE)-elResultBike)*60)-elResultBike1)*60);
let elResultCar2  = Math.round(( (((inputVal/CAR)-elResultCar)*60)-elResultCar1)*60);
let elResultPlane2  =Math.round(( (((inputVal/PLANE)-elResultPlane)*60)-elResultPlane1)*60);

elWalk.textContent = elResultWalk;
elBike.textContent = elResultBike;
elCar.textContent = elResultCar;
elPlane.textContent = elResultPlane;
elWalk1.textContent = elResultWalk1;
elBike1.textContent = elResultBike1;
elCar1.textContent = elResultCar1;
elPlane1.textContent = elResultPlane1;
elWalk2.textContent = elResultWalk2;
elBike2.textContent = elResultBike2;
elCar2.textContent = elResultCar2;
elPlane2.textContent = elResultPlane2;
});