$("button, a").click(function(){
	var $this = $(this);
	console.log($this, $this.context);
})


/*
test1234();
function test1234(){
	var $ui_header_page = $(".ui_page .ui_header");
	var $btn_fixed_page = $(".ui_page .btn_fixed");
	var $btn_fixed_page_list = $(".ui_page .btn_fixed > span");

	if($btn_fixed_page_list.length > 1) {
		$btn_fixed_page.css("padding-bottom", "10px")
	}

	if($ui_header_page.length > 0 || $btn_fixed_page.length > 0 ){
		$(".ui_page .section").css({
			"top" : $ui_header_page.outerHeight(),
			"bottom" : $btn_fixed_page.outerHeight()
		});
	}


	var $ui_header_popup = $(".ui_popup .ui_header");
	var $btn_fixed_popup = $(".ui_popup .btn_fixed");
	var $btn_fixed_popup_list = $(".ui_popup .btn_fixed > span");

	if($btn_fixed_popup_list.length > 1) {
		$btn_fixed_popup.css("padding-bottom", "10px")
	}

	if($ui_header_popup.length > 0 || $btn_fixed_popup.length > 0 ){
		$(".ui_popup .section").css({
			"top" : $ui_header_popup.outerHeight(),
			"bottom" : $btn_fixed_popup.outerHeight()
		});
	}
}
*/


$(".navi ul li").click(function(){
	$(".navi ul li").each(function(){
		$(this).removeClass("on");
	})
	$(this).addClass("on");
})

$(".search-list .tab div").click(function(){
	$(".search-list .tab div").each(function(){
		$(this).removeClass("on");
	})
	$(this).addClass("on");
})

test1234();
function test1234(){
	console.log()
	var $btn_fixed_page = $(".ui_page .btn_fixed");
	var $btn_fixed_page_list = $(".ui_page .btn_fixed > span");
	var $ui_page_section = $(".ui_page .section");
	var $body = $("body");
	var $ui_header = $(".ui_header");


	if($btn_fixed_page_list.length > 1) {
		$btn_fixed_page.css("padding-bottom", "10px")
	}

	if($btn_fixed_page.length > 0 ){
		$(".ui_page .section").css({
			"padding-bottom" : $btn_fixed_page.outerHeight() + 20
		});
	}

	/*
	if($btn_fixed_page.length > 0 ){
		if($ui_page_section.outerHeight() > xxx){		
			$(".ui_page .section").css({
				"padding-bottom" : $ui_page_section.outerHeight() - xxx
			});
		}
	}
	*/


	var $btn_fixed_popup = $(".ui_popup .btn_fixed");
	var $btn_fixed_popup_list = $(".ui_popup .btn_fixed > span");

	if($btn_fixed_popup_list.length > 1) {
		$btn_fixed_popup.css("padding-bottom", "10px")
	}

	if($btn_fixed_popup.length > 0 ){
		$(".ui_popup .section").css({
			"padding-bottom" : $btn_fixed_popup.outerHeight() + 20
		});
	}
}

/*
var hh = $(".btn_fixed2 .inner").outerHeight();
$(".btn_fixed2").css({
	"height" : hh
})
*/

// let btnFixed2 = document.querySelector(".btn_fixed2");
// if(btnFixed2 != null) {
// 	let inner = btnFixed2.querySelector(".inner");
// 	btnFixed2.style.height = inner.offsetHeight + "px";
// }



$("input, textarea").focus(function(){
  console.log("focus");
});

function compare(){
	var body_h_d = $("body").outerHeight();
	var body_h_n;
	$(window).resize(function() {
		body_h_n = $("body").outerHeight();
		if(body_h_d > body_h_n){
			$(".txt111").html("키보드 나왔다. 또는 틀이 나왔다.")
			$(".btn_fixed2 .inner").addClass("off");
		} else if(body_h_d <= body_h_n){
			$(".txt111").html("키보드 들어갔다. 또는 틀이 들어갔다.")
			$(".btn_fixed2 .inner").removeClass("off");
		}
	});
}
compare();