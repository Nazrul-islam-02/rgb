
const button1 = document.getElementById("click_me_1");
const button2 = document.getElementById("click_me_2");
const button3 = document.getElementById("click_me_3");
const color = document.getElementById("color");

// console.log(color)

let count = 0;
let r = 220 , g = 220, b = 220;

const child = document.createElement("p");
child.textContent = `rgb(${r},${g},${b})`;
child.style.color = "white";
child.style.textAlign = "center";
color.appendChild(child);


button1.addEventListener("click",()=>{
    r = r + 10;
    colorChage(r,g,b);
    rgbValue(r,g,b);
    if( r>255 ) r = 0;
})

button2.addEventListener("click",()=>{
    g= g + 20;
    colorChage(r,g,b);
    rgbValue(r,g,b);
    if( g>255 ) g = 0;
})

button3.addEventListener("click",()=>{
    b=b+20;
    colorChage(r,g,b);
    rgbValue(r,g,b);
    if( b>255 ) b = 0;
})

function colorChage(r,g,b){
    color.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function rgbValue(r,g,b){
    console.log(child);
    child.innerText = `rgb(${r} ${g} ,${b})`
}

// console.log(count);