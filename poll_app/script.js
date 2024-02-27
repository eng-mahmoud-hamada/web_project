        
  const options=[
  {id:"option1",text:"option1",votes:0},
  {id:"option2",text:"option2",votes:0},
  {id:"option3",text:"option3",votes:0},
  {id:"option4",text:"option4",votes:0},
  ];    
              
function submitVote(){
 const selectedOption=document.querySelector('input[name="poll"]:checked');
 //console.log(selectedOption.value);
  if(!selectedOption){
alert("please select any option");
   return;

  }
  const optionId = selectedOption.value;
  const selectedElement=options.find((option)=>option.id===optionId);
 if(selectedElement){
 selectedElement.votes++;
 displayResult();
 }

}

function displayResult(){
    const result=document.getElementById('result');
    result.innerHTML="";
   options.forEach((option)=>{
    const percentage=((option.votes/getTotalVotes())*100).toFixed(2) || 0;
    const barWidth = percentage > 0 ? percentage+"%":"0%";
    const optionResult = document.createElement("div");
    optionResult.className ="option-result";
    optionResult.innerHTML =`
    <span class="option-text">${option.text}</span>
    <div class="bar-container">
    <div class="bar" style="width:${barWidth};"></div>
    </div>
    <span class="percentage">${percentage}</span>

    `;
    result.appendChild(optionResult);
   });




}
function getTotalVotes(){
return options.reduce((total,option)=>total +option.votes,0);

}

displayResult();