/* asynchronous */
$.ajaxPrefilter(function( options, original_Options, jqXHR ) {
    options.async = true;
});

/* click to alert titles */
$('.img-show-title').on('click', function() {
if ($(this).attr('title') !== undefined) {
    alert($(this).attr('title'));
}
});





/*

$('.show-weapon').on('click', function() {
if ($(this).attr('spawn') !== undefined) {
//   alert($(this).attr('spawn'));
	divtoshow = '#' + $(this).attr('spawn');
	alert(divtoshow);

	$("#spanhovering").hover(function(event) {
	
    $(divtoshow).css({top: event.clientY, left: event.clientX}).show();
	}, function() {
		$(divtoshow).hide();
	});

}
});

*/
/* actual things */


	$(".premele").bind("click touchstart", function(e) {
		$('p.extradetails').html("<span class=\"smallbold\">Even with the below points, all normal content can be cleared without spending extra money.</span>.<br/>The game has a good amount of equipment locked behind pay and gambling walls.<br/><b>Both JP and TW</b> heavily favour premium and lottery armour pieces to for endgame minmaxing to the extent that having a 4-5 premium piece mixset is almost always your best choice.<br/>TW has extra options for getting N Point gear over JP (which is incredibly expensive or needs you to physically visit a netcafe).<br/>JP recently got (and TW will eventually get) booster packs of 10,000NP for subscribing past 21 months. You can only subscribe 6 months in advance so this is mostly just an eventual nice bonus and not viable.<br/><b>Both JP and TW</b> have N Point weapons that are always best in slot, foreigners can only reasonably get them on TW or if they've subscribed forever for the above boosters.<br/>Premium wise, TW has much cheaper courses than JP but only has the NetCafe course on 24/7 availability which is roughly matched to JP's full premium course price after exchange rates but with much greater benefits."); 
	});

	
	

	$(".floaty-overlay,#floaty_img,#floaty_text").bind("click touchstart", function(e) {
		$('#floaty-overlay').fadeToggle(500); 
	});

	$(".floaty-overlay-top,#floaty_img_top,#floaty_text_top").bind("click touchstart", function(e) {
		$('#floaty-overlay-top').fadeToggle(500); 
	});
	
	$( "a#festiextension" ).bind("click touchstart", function(e) {
		$('span.festiextended').fadeToggle(500); 
	});

	$("#shownote1").bind("click touchstart", function(e) {
		$("#note1mainpage").show();
		$("#note2mainpage").hide();
		$("#note3mainpage").hide();
		$("#note4mainpage").hide();
	});
	
	$("#shownote2").bind("click touchstart", function(e) {
		$("#note2mainpage").show();
		$("#note1mainpage").hide();
		$("#note3mainpage").hide();
		$("#note4mainpage").hide();
	});
	
	$(".shownote3").bind("click touchstart", function(e) {
		$("#note3mainpage").show();
		$("#note1mainpage").hide();
		$("#note2mainpage").hide();
		$("#note4mainpage").hide();
	});
	$("#shownote4").bind("click touchstart", function(e) {
		$("#note4mainpage").show();
		$("#note1mainpage").hide();
		$("#note2mainpage").hide();
		$("#note3mainpage").hide();
	});
	
	
	$("#raviente").bind("click touchstart", function(e) {
		$('div.mainContent:not(#ravienteMain)').hide(); 
		$("#ravienteMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#ravienteholder:not(:empty)").length) {
		setTimeout(function(){
        $('#ravienteholder').load('./raviente.html');
		},170); 
		}

		
	});
	$("#transcend").bind("click touchstart", function(e) {
		$('div.mainContent:not(#transcendMain)').hide(); 
		$("#transcendMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#transcendholder:not(:empty)").length) {
		setTimeout(function(){
        $('#transcendholder').load('./transcend.html');
		},170); 
		}

	});
	$("#house,.mainhouse").bind("click touchstart", function(e) {
		$('div.mainContent:not(#houseMain)').hide(); 
		$("#houseMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#householder:not(:empty)").length) {
		setTimeout(function(){
        $('#householder').load('./housesection.html');
		},170); 
		}
	});

	$("#guild").bind("click touchstart", function(e) {
		$('div.mainContent:not(#guildMain)').hide(); 
		$("#guildMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#guildholder:not(:empty)").length) {
		setTimeout(function(){
        $('#guildholder').load('./guild.html');
		},170); 
		}
	});

	
	$("#about").bind("click touchstart", function(e) {
		$('div.mainContent:not(#aboutMain)').hide(); 
		$("#aboutMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	});

	$("#basics").bind("click touchstart", function(e) {
		$('div.mainContent:not(#basicsMain)').hide(); 
		$("#basicsMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	});

	$("#notplayed").bind("click touchstart", function(e) {
		$('div.mainContent:not(#notplayedMain)').hide(); 
		$("#notplayedMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	});
	
	$("#items").bind("click touchstart", function(e) {
		$('div.mainContent:not(#itemsMain)').hide(); 
		$("#itemsMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#itemsholder:not(:empty)").length) {
		setTimeout(function(){
		$('#itemsholder').load('./itemsection.html');
		},170); 
		}
	});
	
	
	$("#equipment").bind("click touchstart", function(e) {
		$('div.mainContent:not(#equipmentMain)').hide(); 
		$("#equipmentMain").show();
		$('html, body').animate({ scrollTop: 0 }, '0');
	});	
	
	$("#npcs").bind("click touchstart", function(e) {
		$('div.mainContent:not(#npcsMain)').hide(); 
		$("#npcsMain").show();
		$('html, body').animate({ scrollTop: 0 }, '0');
		
		if ($('#npcsholder').children().length == 0 ) {
		setTimeout(function(){
		$('#npcsholder').load('./npcsmenus.html');
		},170); 
		}
	});	
	$("#weapons").bind("click touchstart", function(e) {
		$('div.mainContent:not(#weaponsMain)').hide(); 
		$("#weaponsMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#weaponsholder:not(:empty)").length) {
		setTimeout(function(){
		$('#weaponsholder').load('./weaponssection.html');
		},170); 
		}
		 if (!$("#huntinghornsongs:not(:empty)").length) {
		setTimeout(function(){
		$('#huntinghornsongs').load('./huntinghornDiv.html', function() {   
			$.getScript('./scripts/hunting.js');
        });
		},170); 
		};
	});	
	
	$(".weaponlist").bind("click touchstart", function(e) {
		$('div.mainContent:not(#weaponsMain)').hide(); 
		$("#weaponsMain").show();
	});	
	
	$(".tonfaSection,#TONF").bind("click touchstart", function(e) {	
		$('div.mainContent:not(#tonfadiv)').hide(); 
		$("#tonfadiv").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#tonfadiv:not(:empty)").length) {
		setTimeout(function(){
		$('#tonfadiv').load('./tonfa_new.html');
		},170); 
		}
	});	
	
	$('.partnyaaskills,#partnyaaskills').bind("click touchstart", function(e) {
		$('div.mainContent:not(#partnyaaskilldiv)').hide(); 
		$("#partnyaaskilldiv").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#partnyaaskilldiv:not(:empty)").length) {
		setTimeout(function(){
		$('#partnyaaskilldiv').load('./partnyaa.html');
		},170); 
		}
	});	
	
	$('.partnerskills,#partnerskills').bind("click touchstart", function(e) {
		$('div.mainContent:not(#partnerskilldiv)').hide(); 
		$("#partnerskilldiv").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#partnerskilldiv:not(:empty)").length) {
		setTimeout(function(){
		$('#partnerskilldiv').load('./partner.html');
		},170); 
		}
	});	
	
	
	$(".toolsSection").bind("click touchstart", function(e) {
		$('div.mainContent:not(#toolsMain)').hide(); 		
		$("#toolsMain").show();
	});	
	
	$(".maineventsSection,#festivals").bind("click touchstart", function(e) {
		$('div.mainContent:not(#festivalsMain)').hide(); 		
		$("#festivalsMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#festiholder:not(:empty)").length) {
		setTimeout(function(){
		$('#festiholder').load('./festis.html');
		},170); 
		}
	});	
	$(".towerSection").bind("click touchstart", function(e) {
		$('div.mainContent:not(#towerMain)').hide(); 		
		$("#towerMain").show();
	});	
	
	$(".mapsSection").bind("click touchstart", function(e) {
		$('div.mainContent:not(#gatheringMain)').hide(); 		
		$("#gatheringMain").show();
	});	
	
	$(".swaxeSection").bind("click touchstart", function(e) {	
		$('div.mainContent:not(#swaxediv)').hide(); 
		$("#swaxediv").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#swaxediv:not(:empty)").length) {
		setTimeout(function(){
		$('#swaxediv').load('./switch_axe.html');
		},170); 
		}
	});	
	
		
	$(".genweaponSection").bind("click touchstart", function(e) {
		$('div.mainContent:not(#genweapondiv)').hide(); 
		$("#genweapondiv").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#genweapondiv:not(:empty)").length) {
		setTimeout(function(){
		$('#genweapondiv').load('./other_weapons.html');
		},170); 
		}
	});	
	
	
	$("#armour").bind("click touchstart", function(e) {		
		$('div.mainContent:not(#armourMain)').hide(); 
		$("#armourMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#armoursetsholder:not(:empty)").length) {
		setTimeout(function(){
		$('#armoursetsholder').load('./armsets.html');
		},170); 
		}
	});	
	$("#quests").bind("click touchstart", function(e) {
		$('div.mainContent:not(#questsMain)').hide(); 
		$("#questsMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	});	
	
	$("#buyingsubmenu li").bind("click touchstart", function(e) {
		 if (!$("#buyingholder:not(:empty)").length) {
			setTimeout(function(){
			$('#buyingholder').load('./buyingsection.html',function(){}).hide().fadeIn();
			},170); 
		}
	});
	$("#buying").bind("click touchstart", function(e) {
		$('div.mainContent:not(#buyingMain)').hide(); 
		$("#buyingMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#buyingholder:not(:empty)").length) {
		setTimeout(function(){
		$('#buyingholder').load('./buyingsection.html',function(){}).hide().fadeIn();
		},170); 
		}
	});	

// Hunter Rank
	$("#hunterrank").bind("click touchstart", function(e) {
		$('div.mainContent:not(#hunterrankMain)').hide(); 
		$("#hunterrankMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#hunterrankholder:not(:empty)").length) {
		setTimeout(function(){
		$('#hunterrankholder').load('./hunterrank.html',function(){}).hide().fadeIn();
		},170); 
		}
	});	
	$("#stylerank").bind("click touchstart", function(e) {
		$('div.mainContent:not(#stylerankMain)').hide(); 
		$("#stylerankMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#stylerankholder:not(:empty)").length) {
		setTimeout(function(){
		$('#stylerankholder').load('./stylerank.html',function(){}).hide().fadeIn();
		},170); 
		}
	});	
	$("#grank,.granksection").bind("click touchstart", function(e) {
		$('div.mainContent:not(#grankMain)').hide(); 
		$("#grankMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#grankholder:not(:empty)").length) {
		setTimeout(function(){
        $('#grankholder').load('./grank.html');
		},170); 
		}
	});	
	$("#gstart,.gstart").bind("click touchstart", function(e) {
		$('div.mainContent:not(#gstartMain)').hide(); 
		$("#gstartMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#gstartholder:not(:empty)").length) {
		setTimeout(function(){
        $('#gstartholder').load('./gstart.html');
		},170); 
		}
	});	
	$("#conquests,.conquestssection").bind("click touchstart", function(e) {
		$('div.mainContent:not(#conquestsMain)').hide(); 
		$("#conquestsMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#conquestsholder:not(:empty)").length) {
		setTimeout(function(){
        $('#conquestsholder').load('./conquests.html');
		},170); 
		}
	});	
	$("#tools").bind("click touchstart", function(e) {
		$('div.mainContent:not(#toolsMain)').hide(); 
		$("#toolsMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	});
	$("#gathering").bind("click touchstart", function(e) {
		$('div.mainContent:not(#gatheringMain)').hide(); 
		$("#gatheringMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#gatheringmapsholder:not(:empty)").length) {
		setTimeout(function(){
        $('#gatheringmapsholder').load('./gatherinmaps.html');
		},170); 
		}
		
	});
	$("#caravan").bind("click touchstart", function(e) {
		$('div.mainContent:not(#caravanMain)').hide(); 
		$("#caravanMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#caravanholder:not(:empty)").length) {
		setTimeout(function(){
        $('#caravanholder').load('./caravan.html');
		},170); 
		}
	});
	$("#cgem").bind("click touchstart", function(e) {
		$('div.mainContent:not(#cgemMain)').hide(); 
		$("#cgemMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#cgemholder:not(:empty)").length) {
		setTimeout(function(){
        $('#cgemholder').load('./caravangem.html');
		},170); 
		}
	});
	$("#monsters").bind("click touchstart", function(e) {
		$('div.mainContent:not(#monstersMain)').hide(); 
		$("#monstersMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#monsternamestable:not(:empty)").length) {
		setTimeout(function(){
		$('#monsternamestable').load('./monsters.html');
		},185); 
		}
	});
	$("#skills,.skillsmain").bind("click touchstart", function(e) {
		$('div.mainContent:not(#skillsMain)').hide(); 
		$("#skillsMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#skillstable:not(:empty)").length) {
		setTimeout(function(){
		$('#skillstable').load('./skills.html');
		},170); 
		}
	});
	$("#sigilskills,.sigilskills").bind("click touchstart", function(e) {
		$('div.mainContent:not(#sigilskillsMain)').hide(); 
		$("#sigilskillsMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#sigilskillstable:not(:empty)").length) {
		setTimeout(function(){
		$('#sigilskillstable').load('./sigils.html');
		},170); 
		}
	});
	$("#sigilrecipes,.sigilrecipes").bind("click touchstart", function(e) {
		$('div.mainContent:not(#sigilrecipesMain)').hide(); 
		$("#sigilrecipesMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#sigilrecipestable:not(:empty)").length) {
		setTimeout(function(){
		$('#sigilrecipestable').load('./sigilrecipes.html');
		},170); 
		}
	});
	$("#tower").bind("click touchstart", function(e) {
		$('div.mainContent:not(#towerMain)').hide(); 
		$("#towerMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#towerholder:not(:empty)").length) {
		setTimeout(function(){
		$('#towerholder').load('./tower.html');
		},170); 
		}
	});
	$("#huntersroad,.huntersroad").bind("click touchstart", function(e) {
		$('div.mainContent:not(#roadMain)').hide(); 
		$("#roadMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#roadholder:not(:empty)").length) {
		setTimeout(function(){
		$('#roadholder').load('./huntersroad.html');
		},170); 
		}
	});
	$("#zenith").bind("click touchstart", function(e) {
		$('div.mainContent:not(#zenithMain)').hide(); 
		$("#zenithMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#zenithholder:not(:empty)").length) {
		setTimeout(function(){
		$('#zenithholder').load('./zenith.html');
		},170); 
		}
	});
	$("#contact").bind("click touchstart", function(e) {
		$('div.mainContent:not(#contactMain)').hide(); 
		$("#contactMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	});
	$("#decorations").bind("click touchstart", function(e) {
		$('div.mainContent:not(#decorationsMain)').hide(); 
		$("#decorationsMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
	});
	
	$("#divadefense,.divadefense").bind("click touchstart", function(e) {
		$('div.mainContent:not(#divadefenseMain)').hide(); 
		$("#divadefenseMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#divadefenseholder:not(:empty)").length) {
		setTimeout(function(){
		$('#divadefenseholder').load('./divadefense.html');
		},170); 
		}
	});
	
	
	$("#carnival,.carnival").bind("click touchstart", function(e) {
		$('div.mainContent:not(#carnivalMain)').hide(); 
		$("#carnivalMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#carnivalholder:not(:empty)").length) {
		setTimeout(function(){
		$('#carnivalholder').load('./carnival.html');
		},170); 
		}
	});
	
	$("#futurecontent").bind("click touchstart", function(e) {
		$('div.mainContent:not(#futurecontentMain)').hide(); 
		$("#futurecontentMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#futurecontentMain:not(:empty)").length) {
		setTimeout(function(){
		$('#futurecontentMain').load('./futuresection.html');
		},170); 
		}
	});
	
	$("#cheatsheet").bind("click touchstart", function(e) {
		$('div.mainContent:not(#cheatsheetMain)').hide(); 
		$("#cheatsheetMain").show();
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		
		 if (!$("#cheatsheetholder:not(:empty)").length) {
		setTimeout(function(){
		$('#cheatsheetholder').load('./cheatsheet.html');
		},170); 
		}
	});
	
	$( "a#imgtown1" ).bind("click touchstart", function(e) {
		event.preventDefault();
		$('#townguide').load('./townguide.html');
		$("#townguide").show();
	});	
	
	$( "a#imgtown2" ).bind("click touchstart", function(e) {
		event.preventDefault();
		$("#townguide").hide('100');
	});	
	
	$( "a#imgtownTemp1" ).bind("click touchstart", function(e) {
		event.preventDefault();
		$("#townguideTemp").show('100');
		$("img.imgtownload").unveil();
	});	
	
	$( "a#imgtownTemp2" ).bind("click touchstart", function(e) {
		event.preventDefault();
		$("#townguideTemp").hide('100');
	});	
	
	$('a').click(function(){
		
//	if(window.location.hash) {


	if ($.attr(this, 'href') == "#" || $.attr(this, 'href') == ""){
		} else {
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 250);
		}
/*	} else {
	// Fragment doesn't exist
	}*/
		
});
	

 	$(document).ready(function() {
		/* floaty */
		 if ($("#floaty_text:not(:empty)").length) {
		setTimeout(function(){
			$('#floaty-overlay').delay(2200).fadeToggle(500); 
		},170); 
		}
		/* floaty */
	
		if (window.location.href.indexOf('#02') != - 1) {
			$( '#basics' ).click ();
		}
		else if (window.location.href.indexOf('#03') != - 1) {
			$( '#items' ).click ();
		}
		else if (window.location.href.indexOf('#04') != - 1) {
			$( '#equipment' ).click ();
		}
		else if (window.location.href.indexOf('#05') != - 1) {
			$( '#weapons' ).click ();
		}
		else if (window.location.href.indexOf('#06') != - 1) {
			$( '#armour' ).click ();
		}
		else if (window.location.href.indexOf('#07') != - 1) {
			$( '#quests' ).click ();
		}
		else if (window.location.href.indexOf('#08') != - 1) {
			$( '#house' ).click ();
		}
		else if (window.location.href.indexOf('#09') != - 1) {
			$( '#buying' ).click ();
		}
		else if (window.location.href.indexOf('#10') != - 1) {
			$( '#hunterrank' ).click ();
		}
		else if (window.location.href.indexOf('#11') != - 1) {
			$( '#stylerank' ).click ();
		}
		else if (window.location.href.indexOf('#12') != - 1) {
			$( '#grank' ).click ();
		}
		else if (window.location.href.indexOf('#GS') != - 1) {
			$( '#gstart' ).click ();
		}
		else if (window.location.href.indexOf('#13') != - 1) {
			$( '#hunterrank' ).click ();
		}
		else if (window.location.href.indexOf('#14') != - 1) {
			$( '#tools' ).click ();
		}
		else if (window.location.href.indexOf('#tools') != - 1) {
			$( '#tools' ).click ();
		}
		else if (window.location.href.indexOf('#15') != - 1) {
			$( '#guild' ).click ();
		}
		else if (window.location.href.indexOf('#16') != - 1) {
			$( '#tower' ).click ();
		}
		else if (window.location.href.indexOf('#17') != - 1) {
			$( '#npcs,.npcsmenu' ).click ();
		}
		else if (window.location.href.indexOf('#18') != - 1) {
			$( '#festivals' ).click ();
		}
		else if (window.location.href.indexOf('#CRN') != - 1) {
			$( '#carnival' ).click ();
		}
		else if (window.location.href.indexOf('#19') != - 1) {
			$( '#monsters' ).click ();
		}
		else if (window.location.href.indexOf('#20') != - 1) {
			$( '#skills' ).click ();
		}
		else if (window.location.href.indexOf('#skills') != - 1) {
			$( '#skills' ).click ();
		}
		else if (window.location.href.indexOf('#21') != - 1) {
			$( '#gathering' ).click ();
		}
		else if (window.location.href.indexOf('#ROAD') != - 1) {
			$( '#huntersroad' ).click ();
		}
		else if (window.location.href.indexOf('#ZENI') != - 1) {
			$( '#zenith' ).click ();
		}
		else if (window.location.href.indexOf('#22') != - 1) {

		}
		else if (window.location.href.indexOf('#26') != - 1) {
			$( '#raviente' ).click ();

		}
		else if (window.location.href.indexOf('#PTNY') != - 1) {
			$( '.partnyaaskills' ).click ();

		}
		else if (window.location.href.indexOf('#PTNR') != - 1) {
			$( '.partnerskills' ).click ();

		}
		else if (window.location.href.indexOf('#23') != - 1) {

		}
		else if (window.location.href.indexOf('#DECO') != - 1) {
			$( '#decorations' ).click ();

		}
		else if (window.location.href.indexOf('#24') != - 1) {
			$( '#transcend' ).click ();
		}
		else if (window.location.href.indexOf('#25') != - 1) {
			$( '#caravan' ).click ();
		}
		else if (window.location.href.indexOf('#CGEM') != - 1) {
			$( '#cgem' ).click ();
		}
		else if (window.location.href.indexOf('#FUTURE') != - 1) {
			$( '#futurecontent' ).click ();
		}
		else if (window.location.href.indexOf('#CSHEET') != - 1) {
			$( '#cheatsheet' ).click ();
		}
		else if (window.location.href.indexOf('#DIVA') != - 1) {
			$( '#divadefense' ).click ();
		}
		else if (window.location.href.indexOf('#TONFA') != - 1) {
			$( '#tonfas' ).click ();
		}
		else if (window.location.href.indexOf('#SIGILS') != - 1) {
			$( '#sigilskills' ).click ();
		}
		else if (window.location.href.indexOf('#RECIPES') != - 1) {
			$( '.sigilrecipes' ).click ();
		};
		
	});
	
	
	
	
	
	function anchorfind() {
		location.href = location.hash;
	}

	if (location.hash) {
		setTimeout(anchorfind, 850);
        
    }
	
	$(document).ajaxStart(function(){
	$(".loadingoverlay").css({ "display" : "flex"})
    $(".monhunbody-index").LoadingOverlay("show", {
		image       : "",
	    fontawesome : "fa fa-spinner fa-spin",
		color 		: "0,0,0,0"
	});
	});
	$(document).ajaxStop(function(){
		$.LoadingOverlay("hide", true);
		$(".loadingoverlay").css({ "display" : "none"})
	});