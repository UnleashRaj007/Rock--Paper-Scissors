let userscore =0;
let compscore =0;


const choices = document.querySelectorAll(".choice");

const genratecomputerchoice =()=>{
    const options =["rock", "paper","scissor"];
   const randomidx= Math.floor(Math.random()*3);
    return options[randomidx];

}
const drawgame=()=>{
    console.log("game was draw");
}
const showWinner=()=>{
    if(userwin){
        console.log(" You Win");
    }else{
        console.log("You Lost");
    }
};

const playgame=(userchoice)=>{
 const comchoice = genratecomputerchoice();
 console.log(comchoice);
 console.log(userchoice);

 if (userchoice===comchoice){
    drawgame();

 }else{
    let userwin =true;
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