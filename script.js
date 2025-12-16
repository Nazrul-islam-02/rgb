
const range_value_R = document.getElementById("range_value_R");
const range_value_G = document.getElementById("range_value_G");
const range_value_B = document.getElementById("range_value_B");
const color = document.getElementById("color");
// const range_value = document.getElementById("range_value");

// console.log(range_value);

// range_value.addEventListener("input",()=>{
//     console.log(range_value.value)
// })

// console.log(color)

let count = 0;
let r = 220 , g = 220, b = 220;

const child = document.createElement("p");
child.textContent = `rgb(${r},${g},${b})`;
child.style.color = "white";
child.style.textAlign = "center";
color.appendChild(child);


range_value_R.addEventListener("input",()=>{
    r = range_value_R.value;
    colorChage(r,g,b);
    rgbValue(r,g,b);
    fontColor(r,g,b);
    if( r>255 ) r = 0;
})

range_value_G.addEventListener("input",()=>{
    g = range_value_G.value;
    colorChage(r,g,b);
    rgbValue(r,g,b);
    fontColor(r,g,b);
    if( g>255 ) g = 0;
})
range_value_B.addEventListener("input",()=>{
    b = range_value_B.value;
    colorChage(r,g,b);
    rgbValue(r,g,b);
    fontColor(r,g,b);
    if( b>255 ) b = 0;

    // range_value_B.style.backgroundColor = `rgb(0,0,${range_value_B.value})`;
})

function colorChage(r,g,b){
    color.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function rgbValue(r,g,b){
    console.log(child);
    child.innerText = `rgb(${r} ${g} ,${b})`
}


function fontColor(r,g,b){
    child.style.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`
}

// console.log(count);