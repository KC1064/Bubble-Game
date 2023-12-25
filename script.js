var bubbles='';

for(i=1;i<=240;i++){
    var num = Math.floor(Math.random()*10);
    bubbles+=`<div class="bubble">${num}</div>`;
}

document.querySelector(".bottom").innerHTML = bubbles;