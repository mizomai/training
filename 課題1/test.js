$(function(){
    $("#all").on("click", function(){
	$(".photoBox").removeClass("active");//����
	$(".photoBox").addClass("active");
    });  


    $("#action").on("click", function(){
	$(".photoBox").removeClass("active");//����
	$(".action").addClass("active");
    });
    $("#sf").on("click", function(){
	$(".photoBox").removeClass("active");//����
	$(".sf").addClass("active");
    });
    $("#romance").on("click", function(){
	$(".photoBox").removeClass("active");//����
	$(".romance").addClass("active");
    });
    $("#comedy").on("click", function(){
	$(".photoBox").removeClass("active");//����
	$(".comedy").addClass("active");
    });
    
}); 