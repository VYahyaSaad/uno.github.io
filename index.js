const computer_cards = document.getElementById("comp");
const human_cards = document.getElementById("human");
const add = document.getElementById("center");


let last = 0;
let lastcol = "";
let lastno = 0;
let rand_color = () => {
  let random = Math.floor(Math.random() * 4);
  let a = "";
  if (random == 1) {
    a = "B";
  } else if (random == 2) {
    a = "R";
  } else if (random == 3) {
    a = "G";
  } else if (random == 4) {
    a = "Y";
  } else {
    a = "Y";
  }
  return a;
};
let rc = rand_color()
let rn = Math.floor(Math.random() * 10);
lastcol = rc
lastno = rn
add.innerHTML = `<img src="./Images/${rc}/${rc}${rn}.svg" style="left: 250px; top:200px;" class="cards-img" alt="" />`;


let cardsBtn = (id, no, col, fid) => {
  let ele = document.getElementById(fid);

  if (last == 0) {
    if (fid.slice(0, 1) == "h") {
      console.log(col);
      if (col == lastcol || no == lastno) {
        add.innerHTML += `
        <img src="./Images/${col}/${col}${no}.svg" id="card-${id}" style="left: 250px; top:200px;" class="cards-img" alt="" />
        `;
        document.getElementById("h-card-" + id).parentNode.removeChild(ele);
        last = 1;
        lastcol = col;
        lastno = no;
      }
    }
  } else {
    if (fid.slice(0, 1) == "m") {
      if (col == lastcol || no == lastno) {
        add.innerHTML += `
        <img src="./Images/${col}/${col}${no}.svg" id="card-${id}" style="left: 250px; top:200px;" class="cards-img" alt="" />
        `;
        document.getElementById("m-card-" + id).parentNode.removeChild(ele);
        last = 0;
        lastcol = col;
        lastno = no;
      }
    }
  }
};

for (let i = 0; i < 11; i++) {
  let rand = Math.floor(Math.random() * 10);
  let randColor = rand_color();

  computer_cards.innerHTML += `    
    <img src="./Images/${randColor}/${randColor}${rand}.svg" onclick="cardsBtn('${i}','${rand}','${randColor}','m-card-${i}')" id="m-card-${i}" style="left: ${
    i * 50
  }px;" class="cards-img" alt="" />
    `;
}
for (let i = 0; i < 11; i++) {
  let rand = Math.floor(Math.random() * 10);
  let randColor = rand_color();

  human_cards.innerHTML += `    
    <img src="./Images/${randColor}/${randColor}${rand}.svg" onclick="cardsBtn('${i}','${rand}','${randColor}','h-card-${i}')" id="h-card-${i}" style="left: ${
    i * 50
  }px;" class="cards-img-humn" alt="" />
    `;
}
