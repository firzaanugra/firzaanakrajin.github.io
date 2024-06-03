// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/toolbars/navigation":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/Color dojo/has ../kernel ./_toolbar ../undoManager ../OperationBase ../geometry/Extent ../geometry/Rect ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ../graphic".split(" "),function(k,h,e,c,m,n,l,q,r,g,t,u,v,x){var f=k(l,{declaredClass:"esri.toolbars.Navigation",_eventMap:{"extent-history-change":!0},constructor:function(a){this.zoomSymbol=new v(v.STYLE_SOLID,new u(u.STYLE_SOLID,
new c([255,0,0]),2),new c([0,0,0,.25]));e.connect(a,"onUnload",this,"_cleanUp");this.map=a;this._undoManager=new q({maxOperations:-1});this._normalizeRect=h.hitch(this,this._normalizeRect);this._onMouseDownHandler=h.hitch(this,this._onMouseDownHandler);this._onMouseUpHandler=h.hitch(this,this._onMouseUpHandler);this._onMouseDragHandler=h.hitch(this,this._onMouseDragHandler);this._swipeCheck=m("esri-pointer");this._onExtentChangeHandler_connect=e.connect(a,"onExtentChange",this,"_extentChangeHandler");
this._onMapLoad_connect=e.connect(a,"onLoad",this,"_mapLoadHandler");a.loaded&&a.extent&&(this._currentExtent=a.extent)},_mapLoadHandler:function(){this._currentExtent=this.map.extent},_navType:null,_start:null,_graphic:null,_prevExtent:!1,_currentExtent:null,_preExtent:null,_cleanUp:function(a){e.disconnect(this._onExtentChangeHandler_connect);e.disconnect(this._onMapLoad_connect)},activate:function(a){var b=this.map;this._graphic||(this._deactivateMapTools(!0,!1,!1,!0),this._graphic=new x(null,
this.zoomSymbol));switch(a){case f.ZOOM_IN:case f.ZOOM_OUT:this._deactivate();this._swipeCheck?(this._onMouseDownHandler_connect=e.connect(b,"onSwipeStart",this,"_onMouseDownHandler"),this._onMouseDragHandler_connect=e.connect(b,"onSwipeMove",this,"_onMouseDragHandler"),this._onMouseUpHandler_connect=e.connect(b,"onSwipeEnd",this,"_onMouseUpHandler")):(this._onMouseDownHandler_connect=e.connect(b,"onMouseDown",this,"_onMouseDownHandler"),this._onMouseDragHandler_connect=e.connect(b,"onMouseDrag",
this,"_onMouseDragHandler"),this._onMouseUpHandler_connect=e.connect(b,"onMouseUp",this,"_onMouseUpHandler"));this._navType=a;break;case f.PAN:this._deactivate(),b.enablePan(),this._navType=a}},_extentChangeHandler:function(a){this._prevExtent||this._nextExtent?this._currentExtent=a:(this._preExtent=this._currentExtent,this._currentExtent=a,this._preExtent&&this._currentExtent&&(a=new f.MapExtent({map:this.map,preExtent:this._preExtent,currentExtent:this._currentExtent}),this._undoManager.add(a)));
this._prevExtent=this._nextExtent=!1;this.onExtentHistoryChange()},_deactivate:function(){var a=this._navType;if(a===f.PAN)this.map.disablePan();else if(a===f.ZOOM_IN||a===f.ZOOM_OUT)e.disconnect(this._onMouseDownHandler_connect),e.disconnect(this._onMouseDragHandler_connect),e.disconnect(this._onMouseUpHandler_connect)},_normalizeRect:function(a,b,d){var p=a.x;a=a.y;var w=b.x;b=b.y;return{x:Math.min(p,w),y:Math.max(a,b),width:Math.abs(p-w),height:Math.abs(a-b),spatialReference:d}},_onMouseDownHandler:function(a){this._start=
a.mapPoint},_onMouseDragHandler:function(a){var b=this._graphic,d=this.map.graphics;d.remove(b,!0);b.setGeometry(new t(this._normalizeRect(this._start,a.mapPoint,this.map.spatialReference)));d.add(b,!0)},_onMouseUpHandler:function(a){var b=this.map,d=this._normalizeRect(this._start,a.mapPoint,b.spatialReference);b.graphics.remove(this._graphic,!0);if(0!==d.width||0!==d.height)if(this._navType===f.ZOOM_IN)b.setExtent((new t(d)).getExtent());else{a=b.toScreen(d);d=b.toScreen({x:d.x+d.width,y:d.y,spatialReference:b.spatialReference});
var p=b.extent.getWidth();a=(p*b.width/Math.abs(d.x-a.x)-p)/2;d=b.extent;b.setExtent(new g(d.xmin-a,d.ymin-a,d.xmax+a,d.ymax+a,d.spatialReference))}},deactivate:function(){this._deactivate();this._graphic&&this.map.graphics.remove(this._graphic,!0);this._navType=this._start=this._graphic=null;this._activateMapTools(!0,!1,!1,!0)},setZoomSymbol:function(a){this.zoomSymbol=a},isFirstExtent:function(){return!this._undoManager.canUndo},isLastExtent:function(){return!this._undoManager.canRedo},zoomToFullExtent:function(){var a=
this.map;a.setExtent(a.getLayer(a.layerIds[0]).initialExtent)},zoomToPrevExtent:function(){this._undoManager.canUndo&&(this._prevExtent=!0,this._undoManager.undo())},zoomToNextExtent:function(){this._undoManager.canRedo&&(this._nextExtent=!0,this._undoManager.redo())},onExtentHistoryChange:function(){}});h.mixin(f,{ZOOM_IN:"zoomin",ZOOM_OUT:"zoomout",PAN:"pan"});f.MapExtent=k(r,{declaredClass:"esri.toolbars.MapExtent",label:"extent changes",constructor:function(a){this.map=a.map;this.preExtent=a.preExtent;
this.currentExtent=a.currentExtent},performRedo:function(){this.map.setExtent(this.currentExtent)},performUndo:function(){this.map.setExtent(this.preExtent)}});m("extend-esri")&&(h.setObject("toolbars.Navigation",f,n),h.setObject("toolbars.MapExtent",f.MapExtent,n));return f})},"widgets/ExtentNavigate/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/ExtentNavigate/Widget.html":'\x3cdiv class\x3d"jimu-corner-all"\x3e\r\n\x3cdiv class\x3d"operation previous firstFocusNode" data-dojo-attach-point\x3d"btnPrevious" data-dojo-attach-event\x3d"onclick:_onBtnPreviousClicked, onkeydown:_onBtnPreviousKeyDown"\r\n  role\x3d"button" title\x3d"${nls.previousExtent}" aria-label\x3d"${nls.previousExtent}" tabindex\x3d"0"\x3e\x3c/div\x3e\r\n\x3cdiv class\x3d"operation next lastFocusNode" data-dojo-attach-point\x3d"btnNext" data-dojo-attach-event\x3d"onclick:_onBtnNextClicked, onkeydown:_onBtnNextKeyDown"\r\n  role\x3d"button" title\x3d"${nls.nextExtent}" aria-label\x3d"${nls.nextExtent}" tabindex\x3d"0"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/ExtentNavigate/css/style.css":'.jimu-widget-extent-navigate{background-color: #555; border: 1px solid #999; cursor: pointer; font-size: 24px; line-height: 25px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; color: #fff; text-align: center;}.jimu-widget-extent-navigate .operation{width: 30px; height: 30px; font-size: 16px; line-height: 30px; background-color: #555;}.jimu-widget-extent-navigate .operation:hover{background-color: #333;}.jimu-widget-extent-navigate .operation.jimu-state-disabled{color: rgba(255,255,255,0.3);}.jimu-widget-extent-navigate .operation.jimu-state-disabled:hover{background-color: #555;}.jimu-widget-extent-navigate .previous::before{font-family: wab_2d; content: "\\ea2f";}.jimu-widget-extent-navigate .next::before{font-family: wab_2d; content: "\\ea27";}.jimu-widget-extent-navigate.vertical .previous{border-bottom: 1px solid #57585A;}.jimu-widget-extent-navigate.horizontal .previous{border-right: 1px solid #57585A;}',
"*now":function(k){k(['dojo/i18n!*preload*widgets/ExtentNavigate/nls/Widget*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/on dojo/_base/declare dojo/_base/lang dojo/_base/html jimu/utils dijit/Tooltip dojo/keys jimu/BaseWidget esri/toolbars/navigation".split(" "),function(k,h,e,c,m,n,l,q,r){return h([q],{name:"ExtentNavigate",navToolbar:null,baseClass:"jimu-widget-extent-navigate",_disabledClass:"jimu-state-disabled",_verticalClass:"vertical",_horizontalClass:"horizontal",_floatClass:"jimu-float-leading",_cornerTop:"jimu-corner-top",_cornerBottom:"jimu-corner-bottom",_cornerLeading:"jimu-corner-leading",
_cornerTrailing:"jimu-corner-trailing",moveTopOnActive:!1,postCreate:function(){this.inherited(arguments);this.navToolbar=new r(this.map);this.own(k(this.navToolbar,"extent-history-change",e.hitch(this,this._onExtentHistoryChange)));this.btnPrevious.title=this.nls.previousExtent;this.btnNext.title=this.nls.nextExtent;this._onExtentHistoryChange();m.addTooltipByDomNode(n,this.btnPrevious,this.nls.previousExtent);m.addTooltipByDomNode(n,this.btnNext,this.nls.nextExtent)},_onExtentHistoryChange:function(){this.navToolbar.isFirstExtent()?
c.addClass(this.btnPrevious,this._disabledClass):c.removeClass(this.btnPrevious,this._disabledClass);this.navToolbar.isLastExtent()?c.addClass(this.btnNext,this._disabledClass):c.removeClass(this.btnNext,this._disabledClass)},_onBtnPreviousClicked:function(){this.navToolbar.zoomToPrevExtent()},_onBtnPreviousKeyDown:function(g){g.keyCode!==l.ENTER&&g.keyCode!==l.SPACE||this._onBtnPreviousClicked()},_onBtnNextClicked:function(){this.navToolbar.zoomToNextExtent()},_onBtnNextKeyDown:function(g){g.keyCode!==
l.ENTER&&g.keyCode!==l.SPACE||this._onBtnNextClicked()},setPosition:function(g){this.inherited(arguments);"number"===typeof g.height&&30>=g.height?this.setOrientation(!1):this.setOrientation(!0)},setOrientation:function(g){c.removeClass(this.domNode,this._horizontalClass);c.removeClass(this.domNode,this._verticalClass);c.removeClass(this.btnPrevious,this._floatClass);c.removeClass(this.btnPrevious,this._cornerTop);c.removeClass(this.btnPrevious,this._cornerLeading);c.removeClass(this.btnNext,this._floatClass);
c.removeClass(this.btnNext,this._cornerBottom);c.removeClass(this.btnNext,this._cornerTrailing);g?(c.addClass(this.domNode,this._verticalClass),c.addClass(this.btnPrevious,this._cornerTop),c.addClass(this.btnNext,this._cornerBottom)):(c.addClass(this.domNode,this._horizontalClass),c.addClass(this.btnPrevious,this._floatClass),c.addClass(this.btnNext,this._floatClass),c.addClass(this.btnPrevious,this._cornerLeading),c.addClass(this.btnNext,this._cornerTrailing))}})});