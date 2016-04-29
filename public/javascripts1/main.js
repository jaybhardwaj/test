// JavaScript Document

$(document).ready(function() {


	function setUsedField(e, flag){
	    // check if the input has any value (if we've typed into it)
	    if (flag){
	    	e.addClass('used');
	    }else
	    	e.removeClass('used');
	}
	

	// Starts all selects
	// if ($('select')[0].selectedIndex == 0) {
	// 	$('select').val('');
	// }

	$('input').val('');

	$('body').on('click', function(event) { // Multi Select Input
		ele = $(event.target)
		// console.log(ele.attr('class'));

		if (ele.attr('class') != 'chosen-choices') {
			if($('.chosen-choices li').size() < 2){
				var elem = $('.chosen-choices li'),
				upelem = elem.closest('.md-input-container')

				upelem.children('.chosen-select').removeClass('used');
			}
		};
	});
	
	$('.chosen-choices').on('click', function(event) {
		event.preventDefault();
		$(this).closest('.md-input-container').children('.chosen-select').addClass('used');
	});
	if($('.chosen-choices li').size() > 1){
		var elem = $('.chosen-choices li'),
		upelem = elem.closest('.md-input-container')

		upelem.children('.chosen-select').addClass('used');
	}
	$('select').on('change', function(event) {
		el = $(this);
		setUsedField(el, el[0].selectedIndex > 0);

		if (el[0].selectedIndex == 0) {
			el.val('');
		};
	});

	// CHOSEN 
   var config = {
      '.chosen-select'           : {},
      '.chosen-select-deselect'  : {allow_single_deselect:true},
      '.chosen-select-no-single' : {disable_search_threshold:10},
      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
      '.chosen-select-width'     : {width:"95%"}
    }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }

	$('input').blur(function() {
		setUsedField($(this), $(this).val());
	});

	$('#toggle-mem-details').click(function() {
		$('.toggle-mem-details').slideToggle('fast');
		return false;
	});

	$('#toggle-adv-search').click(function() {
        if ($(this).data('clickState')) {
			$(this).html('<i class="fa fa-search"></i> ADVANCED SEARCH');	
        }
        else {
			$(this).html('<i class="fa fa-search"></i> BACK TO QUICK SEARCH');
        }
        $(this).data('clickState', !$(this).data('clickState'));

		$('.toggle-adv-search').slideToggle('fast', function () {
					
		});
		$('.quick-search').toggleClass('diagonals');
		return false;
	});

	// Datepicker Control

		$('#dateRange').daterangepicker({
			clearButtonText: 'Clear',
			presetRanges: [
							{text: 'Today', dateStart: function() { return moment() }, dateEnd: function() { return moment() } },
							],
			// buttonImageOnly: true,
			// buttonImage: "calendar.gif",
			buttonText: "Calendar",
	     	applyOnMenuSelect: false,
			initialText: '&nbsp;',
			datepickerOptions: { // object containing datepicker options. See http://api.jqueryui.com/datepicker/#options
				numberOfMonths: 3,
				minDate:0,
				maxDate: null // the maximum selectable date is today (also current month is displayed on the last position)
			},
			onChange: function(){ 
				var field = $('#dateRange');
					console.log(field.val());
				if(field.val()){
					field.addClass('used');
					console.log	("usou");
				}else{
					field.removeClass('used');
				}
			}
		});

		$( "#from" ).datepicker({
		  defaultDate: "+1w",
		  showCurrentAtPos:1,
		  numberOfMonths: 3,
		  onClose: function( selectedDate ) {
		    $( "#to" ).datepicker( "option", "minDate", selectedDate );
		    if (selectedDate != null) $('#from').addClass('used');
		  }
		});
		$( "#to" ).datepicker({
		  defaultDate: "+1w",
		  showCurrentAtPos:1,
		  numberOfMonths: 3,
		  onClose: function( selectedDate ) {
		    $( "#from" ).datepicker( "option", "maxDate", selectedDate );
		    if (selectedDate != null) $('#to').addClass('used');
		  }
		});

	// Checkboxes
		$('body').on('click', 'label.checkbox' ,function(event) {
			var tLabel = $(this),
				tCheckbox = $('#'+tLabel.attr('for'));


			// console.log('before');
			// console.log(tCheckbox.is( ":checked" ));


			tCheckbox.data('checked', tCheckbox.is( ":checked" ));

			// console.log('after');
			// console.log(tCheckbox.is( ":checked" ));


			// console.log('----------------------');

			// console.log(tCheckbox.is( ":checked" ));
		});

	// Menu Controller 
	$('#main-menu').on('click', '.menu_lock', function(event) {
		event.preventDefault();
		$('#main-menu').toggleClass('opened');
	});
});