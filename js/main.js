window.onload = function() {
    skrollr.init({
    	//smoothScrolling:true,
    	//smoothScrollingDuration:'100'
    });
}
		
$(window).load(function(){
	
	$('.icon').mouseover(function() {
		
		doIconStuff($(this));
	});
	
	
	$('.icon').mouseout(function() {
	
		var txt = $(this).attr('txt');
		var icon = $(this).attr('icon');
		$('.icon-rollover').fadeOut();
	});
	
	
	
	$('.icon').bind( "touchstart", function(e){
	
		doIconStuff($(this));
   	});
   	
   	function doIconStuff(t){
   	
   		var txt = t.attr('txt');
		var icon = t.attr('icon');
		
		$('.icon-rollover .icon-img').attr( "src", "img/"+icon );
		$('.icon-rollover .icon-txt').html(txt);
		
		var position = t.position();
		var myleft = position.left-70;
		var mytop = position.top+50;
		
		$('.icon-rollover').css({
			"top": mytop,
			"left": myleft
		});
		
		
		$('.icon-rollover').fadeIn();

   	
   	}
	
	
	
	$('.icon').bind( "touchend", function(e){
	  /*
   	 	var txt = $(this).attr('txt');
		var icon = $(this).attr('icon');
		$('.icon-rollover').fadeOut();
	*/
	});
	

	$('#intro').click(function() {
		doScroll(1, 600);
	});
	
	
	$('.first.navdot').click(function() {
		doScroll(3, 600);
	});
	
	$('.second.navdot').click(function() {
		doScroll(3, 2004);
	});
	
	$('.third.navdot').click(function() {
		doScroll(3, 3889);
	});
	
	
	$('.backtotop').click(function() {
		doScroll(5, 0);
	});
	
	
	function doScroll(time, y){
		TweenMax.to($('html, body'), time, {scrollTop:y, ease:Power2.easeOut });
	}
	
	
	$('#facebook').click(function() {
		window.open('http://www.facebook.com/PrimaLoft');
	});
	
	$('#twitter').click(function() {
		window.open('http://www.twitter.com/PrimaLoft');
	});
	
	$('#instagram').click(function() {
		window.open('http://www.instagram.com/PrimaLoft')
	});
	
	$('.video-thumb').click(function() {
		window.open('http://vimeo.com/84702077')
	});

	$('#gold, #silver').hover(
		function() {
	
			if($(this).is("#gold")){
				if ($(this).hasClass('inactive')) goldOn();
		
			}else{
				if ($(this).hasClass('inactive')) silverOn();			
			}

		}, function() {
			
			if($(this).is("#gold")){
				if ($(this).hasClass('inactive')) goldOff();
			}else{
				if ($(this).hasClass('inactive')) silverOff();
			}
			

		}
	);
	
	var rolltimer = .3;
	function goldOn(){
	
		$('#gold').css('background-position','0 -105px');

		TweenMax.to('#gold', rolltimer, {backgroundPosition: '0px -70px', ease:Power2.easeOut});

	}
	
	function goldOff(){
		
		TweenMax.to('#gold', rolltimer, {backgroundPosition: '0px -105px', ease:Power2.easeOut});

	}
	
	function silverOn(){
		$('#silver').css('background-position','0 -35px');
		TweenMax.to('#silver', rolltimer, {backgroundPosition: '0px -70px', ease:Power2.easeOut});
	}
	
	function silverOff(){
		
		TweenMax.to('#silver', rolltimer, {backgroundPosition: '0px -35px', ease:Power2.easeOut});
	}
	
	$('#gold').click(function() {
		
		$(this).addClass('active').removeClass('inactive');
		$('#silver').addClass('inactive').removeClass('active');
		$('.goldbox').css('background','#ae8b55');
		$('#section3 .headline').css('color','#ae8b55');
		
		$('#downandfeather').addClass('gold').removeClass('silver');
		$('#goosedown').addClass('gold').removeClass('silver');
		$('#polyester').addClass('gold').removeClass('silver');
		
		$('#greygoosedown').html('700+fp White Goose Down');
		$('#DRYCLO').html('1.23 clo/oz/yd<sup>2</sup>');
		$('#WETCLO').html('1.18 clo/oz/yd<sup>2</sup>');
		$('#goldorsilver').html('PrimaLoft® Gold Insulation Down Blend');
		$('#benefits').html('Warmth equivalent to 750 fill power down');
		$('#bars').removeClass('silverbar').addClass('goldbar');
		$('#primagoldsilver').html('PrimaLoft® Gold');
		$('#downtype').html('Goose Down');				
		TweenMax.to('#gold', 0, {backgroundPosition: '0px 0px', color: '#000000', ease:Power2.easeOut});
		TweenMax.to('#silver', 0, {backgroundPosition: '0px 35px', color: '#ffffff', ease:Power2.easeOut});


	});
	
	$('#silver').click(function() {
		
		$(this).addClass('active').removeClass('inactive');
		$('#gold').addClass('inactive').removeClass('active');

		$('#section3 .headline').css('color','#aaaaaa');
		$('.goldbox').css('background','#aaaaaa');
		
		$('#downandfeather').addClass('silver').removeClass('gold');
		$('#goosedown').addClass('silver').removeClass('gold');
		$('#polyester').addClass('silver').removeClass('gold');
	
		$('#primagoldsilver').html('PrimaLoft® Silver');
	
	
		$('#greygoosedown').html('650+fp White Duck Down');
		
		$('#DRYCLO').html('1.14 clo/oz/yd<sup>2</sup>');
		$('#WETCLO').html('1.07 clo/oz/yd<sup>2</sup>');
		
		$('#goldorsilver').html('PrimaLoft® Silver Insulation Down Blend');
		$('#benefits').html('Warmth equivalent to 650 fill power down');
		$('#bars').removeClass('goldbar').addClass('silverbar');
		$('#downtype').html('White Duck Down');	
		TweenMax.to('#gold', 0, {backgroundPosition: '0px -35px', color: '#ffffff', ease:Power2.easeOut});
		TweenMax.to('#silver', 0, {backgroundPosition: '0px 0px', color: '#000000', ease:Power2.easeOut});

		
	});
	
	
});
