document.addEventListener('DOMContentLoaded', ()=>{
    let input = '';
    const keyArray = document.querySelectorAll(".num")
    const screen = document.getElementById("screen")
    function inputAppend(){
        screen.textContent += this.textContent;
        screen.style.color = 'white';
    }
    for(let i=0; i<keyArray.length; i++){
        keyArray[i].addEventListener('click', inputAppend);
    }
    document.getElementById("all-clr").addEventListener('click', ()=>{screen.textContent = ''; })
    document.getElementById("bkspc").addEventListener('click', ()=>{screen.textContent = screen.textContent.toString().slice(0, -1)})
    document.getElementById("ans").addEventListener('click', ()=>{
        try{
            screen.textContent = eval(screen.textContent);
            screen.style.color='white';}
            catch(error){
                screen.textContent = "Invalid Expression!";
                screen.style.color = 'red';
            } 
    })
})