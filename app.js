let form = document.getElementById('form');
let input = document.getElementById('input');
let button = document.getElementById('button');

// ----------------CSS------------------------------------------------------


let box = document.querySelector('.container');
box.style.maxWidth = "700px"
box.style.margin = "0 auto"
form.style.display = "flex"
form.style.gap = "50px"
form.style.marginLeft = "150px"
let q = document.querySelector('.heading');
q.style.textAlign = "center"
input.style.height = "30px"
input.style.fontSize = "large"
input.style.marginTop = "15px"
button.style.height = "35px"
button.style.marginTop = "15px"
let w = document.querySelector('.list');
w.style.listStyle = "none";
w.style.display = "flex";
w.style.gap = "50px";
let item = document.querySelector('.item');
item.style.width = "200px";
item.style.border = "1px solid black";
item.style.borderRadius = "20px";
item.style.textAlign = "center";
item.style.paddingTop = "30px";
item.style.paddingBottom = "30px";
let item1 = document.querySelector('.item1');
item1.style.width = "200px";
item1.style.border = "1px solid black";
item1.style.borderRadius = "20px";
item1.style.textAlign = "center";
item1.style.paddingTop = "30px";
item1.style.paddingBottom = "30px";
let item2 = document.querySelector('.item2');
item2.style.width = "200px";
item2.style.border = "1px solid black";
item2.style.borderRadius = "20px";
item2.style.textAlign = "center";
item2.style.paddingTop = "30px";
item1.style.paddingBottom = "30px";
let item3 = document.querySelector('.item3');
item3.style.width = "200px";
item3.style.border = "1px solid black";
item3.style.borderRadius = "20px";
item3.style.textAlign = "center";
item3.style.paddingTop = "30px";
item3.style.paddingBottom = "30px";


// ---------------------------END CSS-------------------------------------------



form.addEventListener('submit', (evt) => {
    let Piyoda = document.getElementById('Piyoda');
    let Velosaped = document.getElementById('Velosaped');
    let Mashina = document.getElementById('Mashina');
    let Samalyot = document.getElementById('Samalyot');
    evt.preventDefault();
    let amal = input.value;
    let a = amal / 3.6;
    let b = amal / 20.1;
    let s = amal / 70;
    let c = amal / 800;
    input.value = "";
    Piyoda.textContent = a.toFixed(1) + " soatda";
    Velosaped.textContent = b.toFixed(1) + " soatda";
    Mashina.textContent = s.toFixed(1) + " soatda";
    Samalyot.textContent = c.toFixed(1) + " soatda";
    // console.log(amal);
})


