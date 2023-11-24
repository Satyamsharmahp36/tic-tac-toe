let boxelement=document.querySelectorAll('.box')
console.log(boxelement)

boxelement.forEach((xyz)=>{
    xyz.addEventListener('click',handleClick)
})
let gameResult=document.getElementById('result')
let message=document.getElementById('message')
let wonTheGame=0

let xattempts=[]
let oattempts=[]


let winningcombinations=[
    
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]


var click=0

function handleClick(e){
    console.log(e.target.getAttribute('Id'))
    //to get the id of our clicked function which is at top 
    let i=e.target.getAttribute('Id')
    console.log(i-1)
    
    let p=document.createElement('p')
    let box=boxelement[i-1]
    //this -1 because index are less than our given id's
    box.append(p)
    p.setAttribute('id','text')
    p.style.color="black"
    //there we are inserting the p tag with some specifications 

    if(click%2==0){
        xattempts.push(i-1)
        p.innerText='X'
        result(winningcombinations,xattempts,'x')

        //as we have already make a click function and also wwe are inrementing so when ever its vale is 0,,2,4 
        //means which are divisible by 2 then x will work other than thqt o will work
    
        
    }
    else{
        oattempts.push(i-1)
        p.innerText="O"
        result(winningcombinations,oattempts,'o')
    }
    click++
//condition for tie as max clicks will be 9 only
if(click==9 && wonTheGame ==0){
    gameResult.style.visibility="visible"
    message.innerHTML="Its's a tie"
}
    console.log(xattempts)
    console.log(oattempts)
}


//main function

function result(winningcombinations,attempts,playername){

    let check=[];
    let flag=0;

for(let i=0;i<winningcombinations.length;i++){
    if(Array.isArray(winningcombinations[i])){
        result(winningcombinations[i],attempts,playername)
    }
    else{
        if(attempts.includes(winningcombinations[i])){
            check.push(true)
            flag++
        }
        else{
            check.push(false)
        }
    }

}
if(check.every(el=>el===true)&&flag>2){
    gameResult.style.visibility="visible";
    message.innerHTML="'"+ playername + "'" + " Won the game!";
    wonTheGame=1;
}
} 



let again =document.getElementById('button')
again.addEventListener("click",()=>{
    console.log('hi')
    location.href="./index.html"

})
//there we are just making our button function .


// let arr=[true,true,false]

// arr.every((check)=>{
//     return check==true
// })

































// function result(attempts, player) {
//     for (let i = 0; i < winningcombinations.length; i++) {
//         const win = winningcombinations[i]
//         if (win.every(position => attempts.includes(position))) {
//             popup.style.visibility = "visible"
//             result.innerHTML = "'" + player + "'" + "You won the game!";
//             return;
//         }
//         else {
//             if (moves === 9) {
//                 popup.style.visibility = "visible"
//                 result.innerHTML = "It is a  draw!";
//                 return
//             }
//         }
//     }





 



