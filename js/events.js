//define functions here
 function getIt(){
$(document).ready(function(){

// call functions here
//should bind a click event to the p tag. When the paragraph is clicked, the function should //alert "Hey!".
$( "p" ).click(function() {
  alert( "Hey!" );
});
});
}
 function frameIt(){
$(document).ready(function(){
$('img').on('load', function(){
  $('img').addClass("tasty");
});
});
}
 function PressIt(){
$(document).ready(function(){
$('#typing').on('keydown', function(key) {
  if(key.which == 71){
      alert('G was pressed');
  }
});
});
}
 function submitIt(){
$(document).ready(function(){

// call functions here
$("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('Your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});
});
}