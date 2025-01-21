let userscore =0;
let compscore =0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genratecomputerchoice =()=>{
    const options =["rock", "paper","scissor"];
   const randomidx= Math.floor(Math.random()*3);
    return options[randomidx];

}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw, Play Again";
}
const showWinner=(userwin)=>{
    if(userwin){
        console.log(" You Win");
        msg.innerText ="You Win";
        msg.style.background="green";
    }else{
        console.log("You Lost");
        msg.innerText ="You Lose";
        msg.style.background="red";

    }
};

const playgame=(userchoice)=>{
 const comchoice = genratecomputerchoice();
 console.log(comchoice);
 console.log(userchoice);
 let userwin =true;

 if (userchoice===comchoice){
    drawgame();

 }else{
   
    if(userchoice==="rock"){
        userwin=comchoice==="paper"?false:true;
    }else if(userchoice==="paper"){
        userwin = comchoice==="scissors"?false:true;
    
    }else{
        userwin = comchoice==="rock"?false:true;
    }
    showWinner(userwin);
 }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
