const numberInput = document.getElementById("input");
const checkButton = document.getElementById("check-button");
const randomNumber = Math.floor(Math.random()*100);
const output = document.getElementById("output");
console.log(randomNumber);
const counter = document.getElementById("counter");
const container = document.getElementById("container");
const replay=document.getElementById("replay");
checkButton.addEventListener("click", ()=>{
  guessing()
})
let count = 0;

const guessing= ()=>{
  var prediction = numberInput.value;
  prediction = Number(prediction);

  if(prediction>100 || prediction<0 || isNaN(prediction) || prediction ==""){
    output.innerHTML=`Please enter a valid number between 1 and 100
`;
  }else{
    count++
    counter.innerHTML=`Number of tries : ${count}`;
    if(prediction==randomNumber) {
      // output.innerHTML=`Congratulations!`
      output.innerHTML="<img src=\'./img/genius.gif' width=\'400px\' height=\'250px\'>";

      checkButton.style.display="none";
      container.innerHTML+=`<button id="replay" class="replay" style=padding:"5px";>Replay</button>`
      const replay=document.getElementById("replay");
      replay.addEventListener("click",()=>{
      location.reload()
  })
    }
    else if (prediction>randomNumber) {
      output.innerHTML=`Enter a smaller number`
      
    }
    else if (prediction<randomNumber) {
      output.innerHTML=`Enter a bigger number`
      
    }
  }
 
}