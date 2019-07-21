var swiper1 = new Swiper('.lunbo', {
	pagination: '.lunbo',
	pagination: {
		el: '.swiper-pagination',
	},
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 1000,
	},
});

var swiper2 = new Swiper('.centers', {
	pagination: '.centers',
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 1000,
	},
	direction: 'vertical',
});

var swiper3 = new Swiper('.goods', {
	pagination: '.goods',
	slidesPerView: "auto",
});

$(document).scroll(function() {
	if($(this).scrollTop() != 0) {
		$(".header").css("background-color", "red");
	} else {
		$(".header").css("background-color", "");
	}
	if($(this).scrollTop() >= 500) {
		$(".top").show();
	} else {
		$(".top").hide();
	}
})
$(".top").click(function() {
	$(document).scrollTop(0);
});

function time() {
	var date1 = new Date("2019/4/29 18:00:00");
	var date2 = new Date();
	var hs = date1 - date2;
	var hf = hs / (1000 * 60 * 60);
	var h = parseInt(hf);
	var mf = (hf - h) * 60;
	var m = parseInt(mf);
	var s = parseInt((mf - m) * 60);
	if(h <= 9) {
		h = "0" + h;
	}
	if(m <= 9) {
		m = "0" + m;
	}
	if(s <= 9) {
		s = "0" + s;
	}
	$(".time span").eq(0).text(h);
	$(".time span").eq(1).text(m);
	$(".time span").eq(2).text(s);
}
setInterval(time, 1000);