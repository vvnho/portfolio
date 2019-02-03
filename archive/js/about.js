// ABOUT PAGE: CONTACT ICON HOVERS

$(document).ready(function(){
	$('#email').hover(function(){
		$('#ecap').css('visibility', 'visible');
		},function(){
		$('#ecap').css('visibility', 'hidden');
		}
	);
	
	$('#cv').hover(function(){
		$('#ccap').css('visibility', 'visible');
		},function(){
		$('#ccap').css('visibility', 'hidden');
		}
	);
	
	$('#linkedin').hover(function(){
		$('#lcap').css('visibility', 'visible');
		},function(){
		$('#lcap').css('visibility', 'hidden');
		}
	);
	
	$('#behance').hover(function(){
		$('#bcap').css('visibility', 'visible');
		},function(){
		$('#bcap').css('visibility', 'hidden');
		}
	);
	
	$('#dribbble').hover(function(){
		$('#dcap').css('visibility', 'visible');
		},function(){
		$('#dcap').css('visibility', 'hidden');
		}
	);
	
	$('#instagram').hover(function(){
		$('#icap').css('visibility', 'visible');
		},function(){
		$('#icap').css('visibility', 'hidden');
		}
	);
});