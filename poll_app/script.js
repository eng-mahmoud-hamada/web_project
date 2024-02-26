        
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

 }

}