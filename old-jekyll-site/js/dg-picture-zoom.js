/************************************************************************************************************
Picture Zoom
Copyright (C) September 2010  DTHMLGoodies.com, Alf Magne Kalleland

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA

Dhtmlgoodies.com., hereby disclaims all copyright interest in this script
written by Alf Magne Kalleland.

Alf Magne Kalleland, 2010
Owner of DHTMLgoodies.com

************************************************************************************************************/

if(!window.DG) {
  window.DG = {};
};

DG.PictureZoom = new Class({
	config: {
        border : true
    },
    currentZIndex : 100,

	initialize: function(config){

        config = config || {};
        if(config.border != undefined){
            this.config.border = config.border;
        }

	},
	images: {},

	internal : {
		isBusy : false,
		currentWidth : 0,
		currentHeight : 0,
		currentZIndex : 1
	},

    clearImages : function(){
        this.images = {};
    },

	addPicture: function(el){
        if(this.images[el]){
            return;
        }
        if(!this._hasUrlToLargePicture(el)){
            return;
        }
		this._setImageProperties(el);
		document.id(el).addEvent('click', this._initZoom.bind(this));
	},

	_setImageProperties: function(el){
		var id = document.id(el).id;
		var url = this._getUrlToLargePicture(el);

		var img = new Element('img');
		img.setProperty('src', url);
		img.setProperty('refId', id);
		img.addClass('dg-picture-zoom-large');
		document.id(document.body).adopt(img);

		var coordinates = document.id(el).getCoordinates();
		this.images[id] = {
			small: {
				x: coordinates.left,
				y: coordinates.top,
				width : coordinates.width,
				height : coordinates.height
			},
			large: {
				img: img,
				width: 0,
				height: 0,
				sizeRatio : 0,
				xRatio : 0,
				yRatio : 0
			}
		}

		img.setStyles( {
			display : 'none',
			position : 'absolute',
            'z-index' : 500,
			top : coordinates.top,
			left : coordinates.left
		});

		document.id(img).addEvent('click', this._initZoomOut.bind(this));
	},

	_getSizeOfLargeImage : function(id) {
		var obj = this.images[id];
		if(obj.large.width) {
			return {
				x : obj.large.width,
				y : obj.large.height
			}
		}else{
			var size = obj.large.img.measure(function(){
				return this.getSize();
			});
			return size;
		}

	},

	_setResizeProperties: function(el){
		var id = document.id(el).id;
		var obj = this.images[id];
		var size = this._getSizeOfLargeImage(id);

		obj.large.width = size.x;
		obj.large.height = size.y;
		obj.large.sizeRatio = size.x / size.y;
		obj.large.xRatio = obj.large.yRatio = 0.5;

		if(obj.large.height/2 > obj.small.y) {
			obj.large.yRatio *= (obj.small.y / (obj.large.height/2));
		}
		if(obj.large.width/2 > obj.small.x) {
			obj.large.xRatio *= (obj.small.x / (obj.large.width/2));
		}

	},

	_initZoom: function(e){

		if(this.internal.isBusy) {
			return;
		}

		this.internal.isBusy = true;
		var el = e.target;
        var id = document.id(el).id;

        this.createBorderContainerForLargePicture();

		var coordinates = document.id(el).getCoordinates();
		this.images[id].small = {
            x: coordinates.left,
            y: coordinates.top,
            width : coordinates.width,
            height : coordinates.height
        }
        
		this._setResizeProperties(el);
		this._setInitialCssProperties(el);


		var obj = this.images[id];
		this.internal.currentWidth = obj.small.width;
		this.internal.currentHeight = obj.small.height;
		this._increaseZIndex(id);

		this._zoom(id, 'out');

	},

	_zoom : function(id, direction) {
		var obj = this.images[id];
		var multiply = 1;
		if (direction == 'in') {
			multiply = -1;
		}

        this.hideBorderContainer(id);

        var coords = {
            'small' : document.id(id).getCoordinates(),
            'large' : document.id(obj.large.img).getCoordinates()
        }
        var ratio = coords.large.width / coords.large.height;

        if(direction == 'in'){
            var from = coords.large;
            var to = {
                'left' : coords.small.left,
                'top' : coords.small.top  ,
                'width': coords.small.width,
                'height' : Math.round(coords.small.width / ratio )
            };
        }else{
            var from = coords.small;
            var to = {
                'left' : Math.max(8, Math.round(coords.small.left - (obj.large.width /2) + coords.small.height/2) ),
                'top' : Math.max(8, Math.round(coords.small.top - (obj.large.height /2) + coords.small.width/2) ),
                'width' : obj.large.width,
                'height' : obj.large.height
            }

            var coords = document.id(document.body).getScrollSize();

            coords.x -= 8;
            coords.y -= 8;
            if(to.left + to.width > coords.x){
                to.left -= ( (to.left + to.width) - coords.x );
                to.left = Math.max(8, to.left);
            }
            if(to.top + to.height > coords.y){
                to.top -= ( (to.top + to.height) - coords.y );
                to.top = Math.max(8, to.top);
            }
        }

        obj.large.img.setStyle('z-index', this.getNewZIndex());

        var myFx = new Fx.Morph(obj.large.img, {
            duration : 200,
            unit : 'px'
        });
        myFx.start({
            'left' : [ from.left , to.left ],
            'top' : [ from.top , to.top ],
            'width' :[from.width, to.width],
            'height' : [from.height, to.height]
        });
        this._zoomComplete.delay(250, this, [id, obj, direction]);
	},

    _zoomComplete : function(id, obj, direction) {
        
        if(direction == 'in') {
            obj.large.img.setStyle('display','none');
        }else{
            this.createBorderContainerForLargePicture(id);
            this.positionBorderContainer(id, obj.large.img);

        }
        this.internal.isBusy = false;
    },

    positionBorderContainer : function(id, largeImage) {
        if(!this.config.border){
            return;
        }
        var arrayKey = 'borderContainer-' + id;
        var coords = largeImage.getCoordinates();
        var borderLeft = this.images[arrayKey].getStyle('border-left-width').replace(/[^0-9]/g,'');
        var borderTop = this.images[arrayKey].getStyle('border-top-width').replace(/[^0-9]/g,'');

        this.images[arrayKey].setStyles({
            'display' : '',
            'z-index' : this.getNewZIndex(),
            'left' : coords.left - borderLeft,
            'top' : coords.top - borderTop,
            'width' : coords.width,
            'height' : coords.height
        });

        largeImage.setStyle('z-index', this.getNewZIndex());
    },

    createBorderContainerForLargePicture : function(id) {
        var arrayKey = 'borderContainer-' + id;

        if(!this.config.border || this.images[arrayKey]){
            return;
        }
        this.images[arrayKey] = new Element('div');
        this.images[arrayKey].setStyles({
             'display' : 'none',
             'position': 'absolute',
             'z-index' : 100
         });
        this.images[arrayKey].addClass('dg-picture-zoom-border-container')
         document.id(document.body).adopt(this.images[arrayKey]);
    } ,
    getNewZIndex : function() {
        this.currentZIndex++;
        return this.currentZIndex;
    },
    hideBorderContainer : function(id) {
        if(!this.config.border || !this.images['borderContainer-' + id]){
            return;
        }
        this.images['borderContainer-' + id].setStyle('display','none');
    },

	_initZoomOut : function(e) {
		var id = document.id(e.target).getProperty('refId');
		if(this.internal.isBusy) {
			return;
		}
		this._increaseZIndex(id);
		var obj = this.images[id];
        
        var size = obj.large.img.getSize();
        this.internal.currentWidth = size.x;
		this.internal.currentHeight = size.y;
		this._zoom(id, 'in');
	},

	_increaseZIndex : function(id) {
		this.internal.currentZIndex ++;
		this.images[id].large.img.setStyle('z-index', this.internal.currentZIndex);
	},

	_setInitialCssProperties : function(el) {
		var id = document.id(el).id;
		var obj = this.images[id];

		obj.large.img.setStyles({
			display : '',
			width : obj.small.width,
			height : obj.small.height
		});

		var coordinates = document.id(el).getPosition();
		obj.small.x = coordinates.x;
		obj.small.y = coordinates.y;

	},

    _hasUrlToLargePicture : function(el){
        var url = this._getUrlToLargePicture(el);
        return url ? true : false;
    },

	_getUrlToLargePicture: function(el){
        if(document.id(el).getProperty('url')){
            return document.id(el).getProperty('url');
        }
		var src = document.id(el).getProperty('src');
		if(src.indexOf('?url') <0){
            return '';
        }
        var url = src.replace(/^.*?url=(.*?)/gi, '$1');
		url = url.replace(/(.*?)(&.*$)/gi, '$1');

		return url;
	}
});

