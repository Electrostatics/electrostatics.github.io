// JavaScript Document

jQuery(document).ready(function(){

	jQuery('.nav > li ul').mouseover(function(){
	
	    if(! jQuery(this).parent().hasClass('current_page_item')){
	    	jQuery(this).parent().addClass('current_page_item').addClass('fake');
	    }
	    
	});
	jQuery('.nav > li ul').mouseleave(function(){
	
	    if(jQuery(this).parent().hasClass('fake')){
	    	jQuery(this).parent().removeClass('current_page_item').removeClass('fake');
	    }
	});
	
});