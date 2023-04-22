$(document).ready(function(){

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