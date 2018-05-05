$(document).ready(function(){
	var bgprev = $("#bg_top");
	var bg = $("#bg_top");
	var bgs = $("#bg_top, #bg_about, #bg_menu, #bg_news, #bg_join");
	var links = $("#link_top, #link_about, #link_menu, #link_news, #link_join")	

	$('[data-spy="scroll"]').on('activate.bs.scrollspy', function(){
		links.each(function(index, item){
			if ($(item).hasClass("active")){				
				$(bgs[index]).fadeTo(600, 1, function() {});
				if (!(bgprev == $(bgs[index]))){
					bgprev.fadeTo(600, 0, function() {});
				}
				console.log(bgprev);
				console.log($(bgs[index]));
				bgprev = $(bgs[index]);
			}
		})
	});	
});

