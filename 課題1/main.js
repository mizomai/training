$(function(){
    //クリックでイベント実行
    $(".movie_btn_list li").on("click", function(){  
     var idname = $(this).attr("id"); //id取得          
	$(".movie_img").removeClass("active");//項目非表示にする
	$("."+idname).addClass("active");//項目を表示する
    });  
  
}); 

//*********カテゴリボタンのhover追加*********
$(function(){
    //イベント実行_マウスon
    $(".movie_btn_list li").on("mouseenter", function(){  
    $(this).addClass("btn_on");      
    });  
    
    //イベント実行_マウスoff
    $(".movie_btn_list li").on("mouseleave", function(){  
    $(this).removeClass("btn_on");      
    });  
  
}); 

//【参考】　http://www.flatflag.nir87.com/hover-1691
//【メモ】cssStyleを追加しようとしたが、背景色のみで文字色のstyleが効かなかった
//2個書きの時はどうすればよかったのか？？→$(this).css('background', '#c00');