$(function(){
    //クリックでイベント実行
    $(".movie_btn_list li").on("click", function(){  
     var idname = $(this).attr("id"); //id取得          
	$(".movie_img").removeClass("active");//項目非表示にする
	$("."+idname).addClass("active");//項目を表示する
    });  
  
}); 