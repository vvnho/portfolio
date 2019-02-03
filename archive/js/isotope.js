/***BASIC***/
$(function() {

	/***INITIALIZE ISOTOPE***/
	var $container = $('.isotope').isotope({
	  // options
	  itemSelector : '.item',
	  layoutMode : 'fitRows'
	});

	/***FILTERS***/  
	// bind filter button click
	  $('#filters').on( 'click', 'button', function() {
		var filterValue = $( this ).attr('data-filter');
		// use filterFn if matches value
		//filterValue = filterFns[ filterValue ] || filterValue;
		$container.isotope({ filter: filterValue });
	  });
	  
	  // change is-checked class on buttons
	  $('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
		  $buttonGroup.find('.is-checked').removeClass('is-checked');
		  $( this ).addClass('is-checked');
		});
	  });
	  
});
  