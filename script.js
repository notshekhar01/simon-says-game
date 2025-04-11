//event bubbling
// let div=document.querySelector('div');
// let ul=document.querySelector('ul');
// let lis= document.querySelectorAll('li');
// div.addEventListener('click',function(event){
//     console.log('div was clicked');
//     event.stopPropagation();
// });
// ul.addEventListener('click',function(event){
//     console.log('ul was clicked');
//     event.stopPropagation();
// });
// for(li of lis){
// li.addEventListener('click',function(event){
//     console.log('li was clicked');
//     event.stopPropagation();
// });
// };

// //todo list
// let btn= document.querySelector('button');
// let inp= document.querySelector('input');
// let ul= document.querySelector('ul');
// btn.addEventListener('click',function(){
//    let item= document.createElement('li');
//    item.innerText = inp.value;
//    ul.appendChild(item);
//     inp.value='';
//     let delbtn =document.createElement('button');
//     delbtn.innerText="delete";
//     delbtn.classList.add('delete');
//     item.appendChild(delbtn);

//     ul.addEventListener('click',function(event){//this
// if(event.target.nodeName=="BUTTON"){
//     let par= event.target.parentElement;
//     par.remove();
//     console.log('deleted');
// };
//     })
    
//     //or// let delbtns= document.querySelectorAll('.delete');
//     // for(delbtn of delbtns){
//     //     delbtn.addEventListener('click',function(){
//     //         let par= this.parentElement;
//     //         console.log(par);
//     //         par.remove();
//     //     });
//     // }
// })

//Simon says
let h2= document.querySelector('h2');
let btn= document.querySelector('.btn')
let gameSeq=[];
let userSeq=[];
let btns= ["yellow","red","purple","green"];
let started= false;
let level=0;


document.addEventListener('keypress',function(){
    if(started== false){
        console.log('game started');
        started= true;
        levelup();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){btn.classList.remove("flash");},250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){btn.classList.remove("userflash");},250);
} 
 function levelup(){
    userSeq=[];
    level++;
    h2.innerText=` Level ${level}`;
    let randIdx= Math.floor(Math.random()*3);
    let randColor= btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
   gameFlash(randBtn);
    
 }

 function checkAns(idx){
    // console.log("curr level:",level);
    // let idx= level-1;
    if (userSeq[idx]=== gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length==gameSeq.length){
          setTimeout(levelup, 1000);
        }

    }else{
        h2.innerHTML= `Game over! your score was <b>${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
    
            
        }, 150);
        reset();
    }
 }

 function btnPress(){
    let btn= this
    // console.log(this);
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
   
 }
let allBtns = document.querySelectorAll('.btn')
for (btn of allBtns) {
    btn.addEventListener("click" , btnPress);
} 

function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

































