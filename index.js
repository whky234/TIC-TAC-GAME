let newbtn=document.getElementById('new-btn');
let msg=document.getElementById('msg');
let boxes=document.querySelectorAll('.boxes')
let turn0=true;
let reset=document.querySelector('.reset');
let count=0;
let winningpoints=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,4,6],
[0,4,8]

]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
     if(turn0){
        box.innerText="o";
        turn0=false
     }
     else{
        box.innerText="x"
        turn0=true
     }
     checkwinner();
     count++;
    })
});


const checkwinner=()=>{
    for ( let pattern of winningpoints){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
       if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 &&pos2===pos3){
            msg.innerText=`${pos1} won`
            boxes.forEach((box)=>{
                box.disabled=true
            })
            return true;
        }
        
       }
    
    }
    if (count === 8) {
        msg.innerText = 'It\'s a draw!';
        boxes.forEach((box)=>{
            box.disabled=true
        })
        return true;
    }
    return false;
}



reset.addEventListener('click',()=>{
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    msg.innerText = "Play";
    turn0 = true;
    count = 0;
})

newbtn.addEventListener('click',()=>{
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    msg.innerText = "Play";
    turn0 = true;
    count = 0;
})