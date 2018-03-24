 $(".myDiv").ready(function() {
    //$(".anotherDiv").toggleClass("dark");
    //$(this).toggleClass("fill");
  // });
setTimeout (function(){

	$(".wakeup").addClass("alarming");
	$(".button").addClass("alarming2");
},10000);


$(".wakeup,.button").click(function(){

	$(".wakeup").removeClass("alarming");
	$(".button, .wakeup").removeClass("alarming2");
 });
 });
 // $(".myDiv").click(function() {
    //$(".anotherDiv").toggleClass("dark");
    //$(this).toggleClass("fill");
  // });
  //});