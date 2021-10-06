
$(".item") .each(function(i, itemDOMElement){
let rowline = i + 1;

$(itemDOMElement).css("grid-row" , rowline);

if(rowline % 2 == 0) {

  $(itemDOMElement).css("grid-column", 2);
  $(itemDOMElement).css("justify-self", "start");
  $(itemDOMElement).text("woooooo so cool! click on the right boxes");

} //evens
else{

$(itemDOMElement).css("grid-column", 1);
$(itemDOMElement).css("justify-self", "end");
$(itemDOMElement).click(function(){
$(itemDOMElement).text("hello! im row" + rowline);

});

} //odds

});
 AOS.init();
