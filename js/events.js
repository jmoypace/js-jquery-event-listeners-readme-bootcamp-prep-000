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

// call functions here
//load event that adds the class tasty to the image to add a red frame to the image.
$('img').on('load', function(){
  //actions you want to happen
  //img.attr("class")).toEqual("tasty");
  $('img').addClass("tasty");
});
});
}
 function PressIt(){
$(document).ready(function(){

$('#typing').on('keydown', function() {
  if (key.which === "71") {
    alert('G was pressed');
}
});
});
}
 function submitIt(){
$(document).ready(function(){

// call functions here

});
}