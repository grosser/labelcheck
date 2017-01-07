/* Copyright (c) 2007 Michael Grosser (grosser.michael@gmail.com || http://pragmatiker.net)
 * Licensed under the GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 0.2
 * Requires jQuery 1.1.3+
 * 
 * Behaviour:
 * 	- will make a checkbox or radiobutton be checked when the corresponding label is clicked
 *  - will do nothing if there is not exactly 1 radio/checkbox in the row 
 *  - will handel a label surrounding a checkbox
 * 
 * Html:
 	<div class="row">
 		<label>Description</label> 
 		<input type="radio" name="test" value="test">
	</div>
 	<div class="row">
 		<label>Description</label> 
 		<input type="checkbox" name="test" value="test">
	</div>
 	<div class="row">
 		<label>
 			Description 
 			<input type="checkbox" name="test" value="test">
 			Text 
 		</label>
	</div>
 	<tr>
 		<td class="label">Description</td> 
 		<td><input type="checkbox" name="test" value="test"></td>
 		<td class="label">Description 2<td> 
	</div>
	
 * Usage:
 * 	$('.row').labelcheck();
 * 	$('.row').labelcheck({'click':function(){alert('Checkbox clicked or label clicked')}});
 * 	$('tr').labelcheck({'label_selector':'.label'});
 * 
 * IDEAS:
 *	- what to do with multiple checkboxes in one row ? 
 *	- make selection drag-sensitive, so that many boxes could be checked just by dragging over them 
 */



(function($) {
/**
 * @param {Hash} options
 * 		'click' - function to be executed when label OR checkbox/radio is clicked
 * 		'check_selector' -  default: 'input[@type=checkbox], input[@type=radio]' - can be '.checkbox' or '#check_id' 
 * 		'label_selector' - default: 'label' - can be '.my_label' or 'div' or '#label_id' to select the label
 */
$.fn.labelcheck = function(options){
	var rows = $(this);
	
	//sanitize options  
	if(!options)options={};
	options = $.extend({
		'click': function(){},
		'check_selector':'input[@type=checkbox], input[@type=radio]',
		'label_selector':'label'
	},options);
	
	rows.each(function(){
		var row = $(this);
		new $.labelcheck(row,options);
	});
	
	//continue chain..
	return rows;
}

/**
 * Constructor
 * @param {Object} row - a row selected by jQuery = $(-row-)
 * @param options see $.fn.labelcheck
 */
$.labelcheck = function(row,options){
	this.row = row;
	this.options = options;
	
	this.labels = $(this.options.label_selector,this.row);
	this.toCheck = $(this.options.check_selector,this.row);
	this.labelWrapsCheck = !!$(this.options.check_selector,this.labels).size();
	
	if(this.toCheck.size()==1){
		this.buildClickEvents();
	}
}

$.extend($.labelcheck.prototype,{
	buildClickEvents : function(){
		var row=this;
		if(!this.labelWrapsCheck){
			this.labels.click(function(){
				row.check();
				row.options.click();
			});
		}
		this.toCheck.click(function(){
			row.options.click();
		});
	},
	
	check:function(){
		var checked = this.toCheck.attr('checked');
		
		//do not allow deselecting of a radio-group
		if(this.toCheck.attr('type')=='radio' && checked)return;
		
		this.toCheck.attr('checked',!checked);
	}
});

})(jQuery);