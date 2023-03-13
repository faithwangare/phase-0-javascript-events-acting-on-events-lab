// Your code here
// Your code here
let dodger=document.getElementById("dodger");
document.addEventListener("keydown",function(e){
    if(e.key==="ArrowLeft"){
        moveDodgerLeft();
    }
    if(e.key==="ArrowRight"){
        moveDodgerRight();
    }
})
function moveDodgerLeft(){
            const leftNumber=dodger.style.left.replace("pr","");
            const left=parseInt(leftNumber,10)
        if(left > 0){
            dodger.style.left=`${left - 1}px`;
        }
    }
function moveDodgerRight(){
    const leftNumber=dodger.style.left.replace("pr","");
    const left=parseInt(leftNumber,10)
    if(left < 360){
        dodger.style.left=`${left + 1 }px`;
    }
}