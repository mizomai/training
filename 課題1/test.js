$(function(){
    $("#all").on("click", function(){
	$(".photoBox").removeClass("active");//消す
	$(".photoBox").addClass("active");
    });  


    $("#action").on("click", function(){
	$(".photoBox").removeClass("active");//消す
	$(".action").addClass("active");
    });
    $("#sf").on("click", function(){
	$(".photoBox").removeClass("active");//消す
	$(".sf").addClass("active");
    });
    $("#romance").on("click", function(){
	$(".photoBox").removeClass("active");//消す
	$(".romance").addClass("active");
    });
    $("#comedy").on("click", function(){
	$(".photoBox").removeClass("active");//消す
	$(".comedy").addClass("active");
    });
    
}); 