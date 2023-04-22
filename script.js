

$(document).ready(function(){
	$(".submit").click(function(){
		var zero = parseFloat($("#in0").val())
		var one = parseFloat($("#in1").val())
		var two = parseFloat($("#in2").val())
		var three = parseFloat($("#in3").val())
		var four = parseFloat($("#in4").val())
		var five = parseFloat($("#in5").val())
		var six = parseFloat($("#in6").val())
		var seven = parseFloat($("#in7").val())
		var eight = parseFloat($("#in8").val())
		console.log(zero,one,two,three,four,five,six,seven,eight)
	});

	$(".scroll1").waypoint(function(dir){
	if (dir == "down"){
	         console.log("firstdown")
	         $(".intro").animate({
	         	"opacity":"0"
	         })

	      } else if (dir == "up"){
	         console.log("firstup")
	         $(".intro").animate({
	         	"opacity":"1"
	         })
	      }
	   });
	$(".scroll2").waypoint(function(dir){
	if (dir == "down"){
	         console.log("firstdown")
	         $(".interactive").animate({
	         	"opacity":"1"
	         })
	         
	      } else if (dir == "up"){
	         console.log("firstup")
	        $(".interactive").animate({
	         	"opacity":"0"
	         })
	      }
	   });
}); 