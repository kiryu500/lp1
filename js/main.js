//画面に入ってから表示させる
// BBBが選ばれる理由（スライド左）
(function() {
$('.slide-L').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-leftクラスを追加
      $(this).stop().addClass('fade-left');
    }
  });
  // BBBが選ばれる理由（スライド右）
  $('.slide-R').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-rightクラスを追加
      $(this).stop().addClass('fade-right');
    }
  });
  // 受講生の声（ふきだし）
  $('.review-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらballoonクラスを追加
      $(this).stop().addClass('fade-left');
    }
  });
});


//TOP切り替え
(function(){
// 設定
var interval =3000; // 切り替わりの間隔（ミリ秒）
var fade_speed = 1000;// フェード処理の早さ（ミリ秒）
$(".fade-img-box img").hide();
$(".fade-img-box img:first").addClass("active").show();

var changeImage = function(){
		var $active = $(".fade-img-box img.active");
		var $next = $active.next("img").length?$active.next("img"):$(".fade-img-box img:first");

		$active.fadeOut(fade_speed).removeClass("active");
		$next.fadeIn(fade_speed).addClass("active");
}


setInterval(changeImage,interval);
}());

(function($) {
    $(function() {
        var $header = $('#header');
        // Nav Fixed
        $(window).scroll(function() {
            if ($(window).scrollTop() > 350) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(function(){
            $header.toggleClass('open');
        });
    });
})(jQuery);

$(function(){
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $('.nav_toggle').on('click', function() {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });
  // メニューのリンクをクリックした時
  $('.nav a').on('click', function() {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });


	function hamburger() {
  // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる
  $('.nav_toggle').toggleClass('active');

  if ($('.nav_toggle').hasClass('active')) {
    // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
    $('.nav').addClass('active');
  } else {
    // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
    $('.nav').removeClass('active');
  }
}})

