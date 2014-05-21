/*
 * @kcire87
 * Simple Paging controls for scrollable view Titanium Appcelerator
 */

var PagingControls = function(total, activeIndex, position){
	var controls = Ti.UI.createView({
		width:Titanium.UI.SIZE,
		height:'20dp',
		layout:'horizontal'
	});
	
	if(position == 'top'){
		controls.top = '10dp';
	}
	else if(position == 'bottom'){
		controls.bottom = '10dp';
	}

	var item;
	
	for(var i=0; i<total; i++){
		item = Ti.UI.createView({
			width:'10dp',
			height:'10dp',
			borderRadius:15,
			opacity:0.6,
			left:'7dp',
			right:'7dp'
		});
		
		if(i == activeIndex){
			item.backgroundColor = '#000000';
		}else{
			item.backgroundColor = '#BDBDBD';
		}
		
		controls.add(item);
	}
	
	return controls;
};

module.exports = PagingControls;