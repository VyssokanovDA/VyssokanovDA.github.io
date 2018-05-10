$(document).ready(function(){
	var bgprev = $("#bg_top");	
	var bgs = $("#bg_top, #bg_about, #bg_menu, #bg_news, #bg_join"); // набор фоновых рисунков
	var links = $("#link_top, #link_about, #link_menu, #link_news, #link_join"); // набор линков навбара, меняющих фон
	var at;
	var targettop;
	var prevtargettop;

	// плавная прокрутка контейнера по внутренней ссылке

	$('.nav-link').click(function(){
		prevtargettop = $('#v-pills-tabcontent').scroll(function(){}).scrollTop();
		at = $('.nav-link:hover').attr("href");
		targettop = $(at).offset().top;		
		$('#v-pills-tabcontent').animate({scrollTop: targettop + prevtargettop}, 500);		
		prevtargettop = prevtargettop + targettop;
    	return false;
	})

	// смена фона при активации линков скруллспая
	
	$('[data-spy="scroll"]').on('activate.bs.scrollspy', function(){
		links.each(function(index, item){
			if ($(item).hasClass("active")){				
				$(bgs[index]).fadeTo(600, 1, function() {});
				if ($(bgprev)[0] !== $(bgs)[index]){
					bgprev.fadeTo(600, 0, function() {});
				}
				//console.log(bgprev);
				//console.log($(bgs[index]));
				bgprev = $(bgs[index]);
			}
		})
	});	

	//отслеживание появления верха, тормозит

	/*$('#v-pills-tabcontent').scroll(function() {
    	if ($(this).scrollTop() < 80) {   		
        	$("#bg_top").fadeTo(600, 1, function() {});
        	$("#bg_about").fadeTo(600, 0, function() {});
    	}
	});*/ 
});

