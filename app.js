let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice")
let msg=document.querySelector("#msg")
let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score");
const gencompchoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
    //rock,paer,scissors
}
const drawgame=()=>{
    console.log("game was draw.");
    msg.innerText="Game Draw play again ";
    msg.style.backgroundColor="black"
}
const showwin=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you Win the Game");
        msg.innerText=`You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you Loss the Game");
        msg.innerText=`You Lose. ${compchoice} beats your ${userchoice} `;
        msg.style.backgroundColor="red"
    }
}
const playGame= (userchoice)=>{
    console.log("user choice",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice",compchoice);
    if(userchoice==compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissors,paper
            userwin= compchoice==="paper"?false:true;

        }
        else if(userchoice==="paper"){
            //rock,scissors
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userwin=compchoice==="rock"?false:true;
        }
        showwin(userwin,userchoice,compchoice);

       
    }

}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);

    })
}) 