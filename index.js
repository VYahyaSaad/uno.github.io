const computer_cards = document.getElementById('comp')
let rand_color = ()=>{
    let random = Math.floor(Math.random() * 4);
    let a = ''
    if(random == 1){
      a = 'B'
    }
    else if (random == 2) {
      a = "R";
    }
    else if (random == 3) {
    a = "G";
    }
    else if(random == 4){
      a = 'Y'
    }
    else{
      a = 'Y'
    }
    return a;

}




let cardsBtn=(id , no, col)=>{

// var id = null;
//   var elem = document.getElementById(id);
//   var pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
  let ele = document.getElementById('card-'+id)
  // ele.style.top = 400+'px'
  // ele.style.left = 250 + "px";
  // ele.style.zIndex = id;
  // ele.style.transform = `rotate(${id*10}deg)`
};

for(let i = 0; i<11; i++){
    let rand = Math.floor(Math.random() * 10);
    let randColor = rand_color();

    computer_cards.innerHTML += `    
    <img src="./Images/${randColor}/${randColor}${rand}.svg" onclick="cardsBtn('${i}','${rand}','${randColor}')" id="card-${i}" style="left: ${
      i * 50
    }px;" class="cards-img" alt="" />
    `;
  }