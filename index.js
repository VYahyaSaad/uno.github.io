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
let ele = document.getElementById('card-'+id)
computer_cards.removeChild(ele)

  document.getElementById("center").innerHTML += `
    <img src="./Images/${col}/${col}${no}.svg" id="card-${id}" style="left: 250px; top:200px;" class="cards-img" alt="" />
  `;
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