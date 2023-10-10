function gethistory()
 {
   return  document.getElementById('history-value').innerText;
 }
// alert(gethistory())

 function printhistory(nbr)
 {
    document.getElementById('history-value').innerText=nbr;
 }
 //printhistory('9*9+898')
 function getoutput()
 {
   return  document.getElementById('output-value').innerText;
 }
 function printoutput(nbr)
{
  if(nbr==""){
    document.getElementById('output-value').innerText=nbr;
  }
  else{
    document.getElementById('output-value').innerText=getformatednbr(nbr);

  }
}
//comas separtes numbers function
function getformatednbr(nbr){
  if(nbr=="-") return "";
  var n = Number(nbr);
  return n.toLocaleString("en");
  
}
//printoutput('7575');
//removing coms
function reverseformatednumber(nbr){
  return Number(nbr.replace(/,/g,''));
}
//alert(reverseformatednumber(getoutput()))
//adding eventlisterns for operators

var operators = document.getElementsByClassName("operator");
for(var i=0;i<operators.length;i++){
  operators[i].addEventListener("click",function(){
if(this.id=="clear"){
  printhistory("");
  printoutput("");
}  
else if(this.id=="backspace"){
  var output=reverseformatednumber(getoutput()).toString();
  if(output){
              output  = output.substr(0,output.length-1);
              printoutput(output);
            }
}
else{
  var output=getoutput();
  var history=gethistory();

  //if 9*9- ani unte - ni dlt chesi result istadi
  if(output=="" && history!==""){
    if(isNaN(history[history.length-1])){
      history= history.substr(0,history.length-1);
    }
  }


  if(output!="" || history!=""){
    output= output==""?output:reverseformatednumber(output);
    history=history+output;
    if(this.id=="="){
      var result=eval(history);
      printoutput(result);
      printhistory("");
    }
    else{
      history=history+this.id;
      printhistory(history);
      printoutput("");
    }
  }
}
}


)
}

//adding eventlisterners for numbers
var numbers = document.getElementsByClassName("number");
for(var i=0;i<numbers.length;i++){
  numbers[i].addEventListener("click",function(){
    var output= reverseformatednumber(getoutput());
    if(output!=NaN){
      output= output+this.id;
    }
    printoutput(output);

  })
}