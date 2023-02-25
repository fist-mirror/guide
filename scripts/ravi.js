	$( "#hh_raviicon" ).click(function( event ) {
		event.preventDefault();
		$('#hh_raviicon').addClass("selected");
		$('.raviGearing:not(#hh_raviicon)').removeClass("selected");
		
		$("#ravi_hhset").show();
		$(".gearingtable:not(#ravi_hhset)").hide();
		
	});		
	$( "#ds_raviicon" ).click(function( event ) {
		event.preventDefault();
		$('#ds_raviicon').addClass("selected");
		$('.raviGearing:not(#ds_raviicon)').removeClass("selected");

		$("#ravi_dsset").show();
		$(".gearingtable:not(#ravi_dsset)").hide();
		
	});		
	$( "#hammer_raviicon" ).click(function( event ) {
		event.preventDefault();
		$('#hammer_raviicon').addClass("selected");
		$('.raviGearing:not(#hammer_raviicon)').removeClass("selected");

		$("#ravi_hammerset").show();
		$(".gearingtable:not(#ravi_hammerset)").hide();
	});		
	$( "#lbg_raviicon" ).click(function( event ) {
		event.preventDefault();
		$('#lbg_raviicon').addClass("selected");
		$('.raviGearing:not(#lbg_raviicon)').removeClass("selected");

		$("#ravi_lbgset").show();
		$(".gearingtable:not(#ravi_lbgset)").hide();
	});		
	
	$( "#others_raviicon" ).click(function( event ) {
		event.preventDefault();
		$('#others_raviicon').addClass("selected");
		$('.raviGearing:not(#others_raviicon)').removeClass("selected");

		$("#ravi_othersset").show();
		$(".gearingtable:not(#ravi_othersset)").hide();
	});		