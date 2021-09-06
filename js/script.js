function EasyPeasyParallax() {
	scrollPos = $(this).scrollTop();
	$('#banner').css({
		'background-position' : '50% ' + (-scrollPos*0.3) + "px"
	});
	$('#bannertext').css({
		'margin-top': (-scrollPos*.25)+"px",
		'opacity': 1-(scrollPos*0.0015)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyPeasyParallax();
	});
});

function initMap() {
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
	  center: {lat: 42.025567, lng: -93.650557},
	  zoom: 18
	});
}
 