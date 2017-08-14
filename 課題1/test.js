$(function(){
    $("#all").on("click", function(){
	$(".photoBox").removeClass("active");//è¡Ç∑
	$(".photoBox").addClass("active");
    });  


    $("#action").on("click", function(){
	$(".photoBox").removeClass("active");//è¡Ç∑
	$(".action").addClass("active");
    });
    $("#sf").on("click", function(){
	$(".photoBox").removeClass("active");//è¡Ç∑
	$(".sf").addClass("active");
    });
    $("#romance").on("click", function(){
	$(".photoBox").removeClass("active");//è¡Ç∑
	$(".romance").addClass("active");
    });
    $("#comedy").on("click", function(){
	$(".photoBox").removeClass("active");//è¡Ç∑
	$(".comedy").addClass("active");
    });
    
}); 