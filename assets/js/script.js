$(function() {
	$(".nano").nanoScroller();
	window.prettyPrint && prettyPrint();
	$("#main_focus").focus();
	
	$("#main_menu_cell a").live('click',function()
	{
		$('#aside_container').removeAttr('style');
		$('#main_menu_cell svg').css('fill','#707070');
		
		var target_menu = $(this).data("target");
		var target_menu_visibility = $('#'+target_menu).css('display');
		
		var device_type = '';
		if($('#mobile_logo').css('display')=='block'){ device_type='mobile'; }
		if($('#tablet_logo').css('display')=='block'){ device_type='tablet'; }
		if($('#desktop_logo').css('display')=='block'){ device_type='desktop'; }
		
		if(device_type!='desktop')
		{
			$('#aside_container .side_unit').hide();
			$('.menu_arrow').remove();
			
			if(target_menu_visibility=='none')
			{
				$(this).find('svg').css('fill','#CCCCCC');
				$('#'+target_menu).css('display','inline-block');
				
				$('#modal_overlay').show();
				$('#aside_container').show();
				set_height(target_menu);
				$(".nano").nanoScroller();
				$(this).after('<div class="menu_arrow"></div>');
				//set_height($('#'+target_menu).height(),$('html').height(),$('html').width());
				
			}
			else
			{
				$('#aside_container').removeAttr('style');
				$('#modal_overlay').removeAttr('style');
			}
			
		}else{
			$('.widget_content').removeClass('highlight');
			$('#'+target_menu+' .widget_content').addClass('highlight');
		}
	});
	
	$("#menu_launcher a").live('click',function(){
		var menu_visibility = $('#main_menu_cell').css('display');
		if(menu_visibility=='none'){
			$('#title_cell').hide();
			$('#main_menu_cell').css('display','inline-block');
			$('#show_menu').hide();
			$('#hide_menu').show();
		}else{
			reset_view_Menu();
			/*$('#title_cell').css('display','inline-block');
			$('#main_menu_cell').removeAttr('style');
			$('#show_menu').show();
			$('#hide_menu').hide();*/
		}
		
	});
	
	$(window).resize(function() {
		reset_view_Menu();
	});
	
	$("#modal_overlay").live('click',function(){
		reset_view_Menu();
	});
	
	$('.pagination').jqPagination({
		paged: function(page) {
			// do something with the page variable
		}
	});
	
});

function to_top() {
	$(".nano").nanoScroller({scroll:'top'});
}

function set_height(target_menu){
	var menu_height = $('#'+target_menu).height();
	var doc_height = $('html').height();
	var doc_width = $('html').width();
	
	$('#aside_container').height('');
	if(doc_height>(menu_height+62)){
		$('#aside_container').css('height',menu_height+48);
		//$('#aside_container').css('width','340px');
	}else{
		$('#aside_container').css('width',doc_width-24+'px');
		var resized_menu_height = $('#'+target_menu).height();
		if(doc_height>(resized_menu_height+62)){
			$('#aside_container').css('height',resized_menu_height+48);
		}else{
			$('#aside_container').css('bottom','12px');
		}
	}
}

function reset_view_Menu() {
  $('#aside_container').removeAttr('style');
  $('#main_menu_cell svg').css('fill','#707070');
	$('#modal_overlay').removeAttr('style');
	$('.side_unit').removeAttr('style');
	$('.menu_arrow').remove();
	$('#title_cell').removeAttr('style');
	$('#main_menu_cell').removeAttr('style');
	$('#menu_launcher a').removeAttr('style');
	$(".nano").nanoScroller();
}
