//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
// var access = $.cookie('access')
// if(!access){
//   flag = true;
//   $.cookie('access', false);
// }else{
//   flag = false  
// }

//テキストを含む一般的なモーダル
$(".itemDescriptionLink").modaal({
	overlay_close:true,//モーダル背景クリック時に閉じるか
  background: '#5C8EAB', // 背景色
  overlay_opacity:0.8, // 透過具合
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
});


// 動画のモーダル
$(".video-open").modaal({
    start_open: false, // ページロード時に表示するか
    overlay_close:true,//モーダル背景クリック時に閉じるか
    type: 'video',
    background: '#5C8EAB', // 背景色
    overlay_opacity:0.8, // 透過具合
    before_open:function(){// モーダルが開く前に行う動作
      $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
    },
    after_close:function(){// モーダルが閉じた後に行う動作
      $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
    }
});

// ページ内遷移
$('#g-navi a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top;	//idの上部の距離を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});