// Code by Me

// var timer = 50;
// var score = 0;
// var rand_val = 0;
// function scoreCount(){
//     score +=10;
//     document.querySelector("#score_cnt").textContent = score;
// }
// function hitmarker(){
//     rand_val = Math.floor(Math.random()*10);
//     document.querySelector(".hit").textContent=rand_val;
// }
// function makebubble(){
// var bubbles='';
// for(i=1;i<=240;i++){
//     var num = Math.floor(Math.random()*10);
//     bubbles+=`<div class="bubble">${num}</div>`;
// }
// document.querySelector(".bottom").innerHTML = bubbles;
// }

// function runTimer(){
//     var timerint = setInterval(function(){
//         if(timer > 0 ) {
//             timer--;
//             document.querySelector("#time").textContent = timer;

//         }
//         else {
//             clearInterval(timerint);
//             document.querySelector(".bottom").innerHTML = "";
//         }
//     },1000);
// }

// document.querySelector("bottom").addEventListener("click",function(dets){
//     var clicked = Number(dets.target.textContent);
//     if(rand_val===clicked){
//         scoreCount();
//         makebubble();
//         hitmarker();

//     }
// });

// makebubble();
// runTimer();
// hitmarker();


// Optimised by ChatGPT

(function () {
    let timer = 50;
    let score = 0;
    let rand_val = 0;

    const scoreCount = () => {
        score += 10;
        document.querySelector("#score_cnt").textContent = score;
    };

    const hitmarker = () => {
        rand_val = Math.floor(Math.random() * 10);
        document.querySelector(".hit").textContent = rand_val;
    };

    const makebubble = () => {
        let bubbles = '';
        for (let i = 1; i <= 119; i++) {
            const num = Math.floor(Math.random() * 10);
            bubbles += `<div class="bubble">${num}</div>`;
        }
        document.querySelector(".bottom").innerHTML = bubbles;
    };

    const runTimer = () => {
        const timerint = setInterval(() => {
            if (timer > 0) {
                timer--;
                document.querySelector("#time").textContent = timer;
            } else {
                clearInterval(timerint);
                document.querySelector(".bottom").innerHTML = "";
            }
        }, 1000);
    };

    document.querySelector(".bottom").addEventListener("click", function (dets) {
        const clicked = Number(dets.target.textContent);
        if (rand_val === clicked) {
            scoreCount();
            makebubble();
            hitmarker();
        }
    });

    window.addEventListener('resize', makebubble);

    makebubble();
    runTimer();
    hitmarker();
})();
