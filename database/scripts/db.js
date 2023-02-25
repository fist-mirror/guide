/* asynchronous */
$.ajaxPrefilter(function( options, original_Options, jqXHR ) {
    options.async = true;
});

jQuery(window).load(function(){
jQuery('#overlay').fadeOut();
});

		
$('.sectionIcon').mousedown(function(event) {
	if(event.which == 2) { // right click
	var sect = $(this).attr('id');
	  window.open('/database#' + sect,'_newtab');
	return false;
	}
	
});
		
		
$('.sectionIcon').on('click touchstart', function() {
	var sect = $(this).attr('id');
	// Check if already clicked to avoid spam loads
	if(!$('#' + sect).hasClass('Active')){
		// Set proper icon
		$('.sectionIcon').removeClass('Active');
		$('#' + sect).addClass('Active');
		// Load Actual Content
		$('#contentHolder').html('<div style="text-align:center;margin-left:auto;margin-right:auto;">Loading...</div>');
		$('#contentHolder').load('./' + sect + '.html');
	};
});
$('#DamageCalc').on('click touchstart', function() {
		if(confirm("Go to damage calculator page?")) document.location = 'http://mh.fist.moe/damagecalc.html';
});


$('#HidenCalc').on('click touchstart', function() {
		if(confirm("Go to hiden materials calculator page?")) document.location = 'http://mh.fist.moe/hiden.html';
});

if (window.location.href.indexOf('#DBsection') != - 1) {

var clicksection = window.location.hash + ".sectionIcon"
			$(clicksection).click();
		};

		
		
