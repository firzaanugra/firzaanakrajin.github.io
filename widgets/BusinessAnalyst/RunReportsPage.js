// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/BusinessAnalyst/RunReportsPage.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"business-analyst-run-reports-page" style\x3d"width: 350 px; height: 150px"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"runReportTabContainer" style\x3d"width: 100%; height: 155px;"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"infographicsContentPane" title\x3d"${nls.infographics}" style\x3d"overflow-y: hidden"\x3e\r\n\t\t\t\t\x3cdiv style\x3d"margin-top: 15px;"\x3e\r\n\t\t\t\t\t\x3cdiv style\x3d"height: 40px;" data-dojo-attach-point\x3d"infographicDropDownContainer"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cbr /\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"jimu-btn runReportButton jimu-state-disabled" data-dojo-attach-point\x3d"runInfographicBtn" data-dojo-attach-event\x3d"onclick:runInfographic"\x3e${nls.runInfographic}\x3c/div\x3e\r\n\t\t\t\t\t\x3ca href\x3d"https://doc.arcgis.com/en/arcgis-online/reference/credits.htm" target\x3d"_blank" class\x3d"esriFloatTrailing esriSmallFont"\x3e${nls.creditInformation}\x3c/a\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"reportsContentPane" title\x3d"${nls.reports}" style\x3d"overflow-y: hidden"\x3e\r\n\t\t\t\t\x3cdiv style\x3d"margin-top: 15px;"\x3e\r\n\t\t\t\t\t\x3cdiv style\x3d"height: 40px;" data-dojo-attach-point\x3d"reportFilteringSelectDropDownContainer"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cbr /\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"jimu-btn runReportButton jimu-state-disabled" data-dojo-attach-point\x3d"runReportBtn" data-dojo-attach-event\x3d"onclick:runReport"\x3e${nls.runReport}\x3c/div\x3e\r\n\t\t\t\t\t\x3ca href\x3d"https://doc.arcgis.com/en/arcgis-online/reference/credits.htm" target\x3d"_blank" class\x3d"esriFloatTrailing esriSmallFont"\x3e${nls.creditInformation}\x3c/a\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cbr\x3e\r\n\t\x3cdiv class\x3d"jimu-btn jimu-btn-vacation" data-dojo-attach-point\x3d"backBtn" data-dojo-attach-event\x3d"onclick:backOnClick"\x3e${nls.back}\x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/dom-style dojo/query dojo/when dijit/_TemplatedMixin dijit/_WidgetBase dijit/_WidgetsInTemplateMixin esri/geometry/webMercatorUtils esri/dijit/geoenrichment/SelectableTree esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/GEUtil esri/dijit/geoenrichment/ReportPlayer/ReportPlayer esri/dijit/geoenrichment/ReportPlayer/PlayerResizeModes esri/dijit/geoenrichment/ReportPlayer/PlayerThemes esri/dijit/geoenrichment/ReportPlayer/DataProviderGE esri/dijit/geoenrichment/ReportPlayer/PlayerCommands esri/dijit/geoenrichment/_WizardPage esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ReportTemplateTypes ./utils/GEUtil ./utils/ReportUtil ./esriAnalystX/widgets/Selects/FilteringSelectTree dojo/text!./RunReportsPage.html jimu/dijit/TabContainer3 jimu/utils".split(" "),
function(f,A,B,g,r,C,D,t,E,F,G,H,m,x,I,J,y,K,p,L,M,u,z,v,N,O,P){return A([F,E,L,G],{templateString:N,infographicsTabHidden:!1,reportsTabHidden:!1,_infograpicReports:null,_configForLightTheme:[{name:"DashboardTheme",style:"light"}],postCreate:function(){this.inherited(arguments);this.tab=new O({tabs:[{title:this.nls.infographics,content:this.infographicsContentPane},{title:this.nls.reports,content:this.reportsContentPane}],selected:this.nls.infographics});this.tab.placeAt(this.runReportTabContainer);
this.tab.startup()},startup:function(){this.inherited(arguments)},loadReportsInfographicsForCountry:function(a){var b=this;t(z.getAvailableClassicReports(a,this.config),function(c){var d=b._getSingleReportID(c),e=b._getCountryConfig(b.config,a);e&&e.defaultReportID&&(d=e.defaultReportID);b.filteredReportDropDown?b.filteredReportDropDown.set("tree",new m(c)):(b.filteredReportDropDown=new v({name:"filteredReportSelect",tree:new m(c),defaultExpand:d?b._getDefaultExpandedTreeForSelectedReport(c,d):b._getDefaultExpandedTree(c),
placeHolder:b.nls.selectReport,onChange:function(l){b._enableDisableButton(b.runReportBtn,l)}},b.reportFilteringSelectDropDownContainer),b.filteredReportDropDown.startup());d&&b.filteredReportDropDown.set("value",d);b.reportsTabHidden=b.config.reportsDisabled||!b._areReportsAvailable(c)});t(z.getAvailableInfographicReports(a,this.config),function(c){var d=b._getSingleReportID(c),e=b._getCountryConfig(b.config,a);e&&e.defaultInfographicID&&(d=e.defaultInfographicID);b.infographicDropDown?b.infographicDropDown.set("tree",
new m(c)):(b.infographicDropDown=new v({name:"filteredInfographicReportSelect",tree:new m(c),defaultExpand:d?b._getDefaultExpandedTreeForSelectedReport(c,d):b._getDefaultExpandedTree(c),placeHolder:b.nls.selectTemplate,onChange:function(l){b._enableDisableButton(b.runInfographicBtn,l)}},b.infographicDropDownContainer),b.infographicDropDown.startup());d&&b.infographicDropDown.set("value",d);b.infographicsTabHidden=b.config.infographicsDisabled||!b._areReportsAvailable(c);b._infograpicReports=c})},
_getCountryConfig:function(a,b){var c=-1;f.forEach(a.countryConfig,function(d,e){d.countryID==b&&(c=e)});return-1!=c?a.countryConfig[c]:null},_areReportsAvailable:function(a){if(0==a.length)return!1;var b=!1;f.forEach(a,function(c){0<c.children.length&&(b=!0)});return b},_getDefaultExpandedTree:function(a){if(0==a.length)return{esriReports:!0};var b={};b[a[0].value]=!0;return b},_getDefaultExpandedTreeForSelectedReport:function(a,b){if(0==a.length)return{esriReports:!0};returnVal={};f.forEach(a,function(c){f.forEach(c.children,
function(d){d.value===b&&(returnVal[c.value]=!0)})});return returnVal},_getSingleReportID:function(a){if(1!=a.length)return!1;var b=!1;f.forEach(a,function(c){1===c.children.length&&(b=c.children[0].value)});return b},refresh:function(){this._hideOrShowTabs()},_hideOrShowTabs:function(){this._hideOrShowTab(this.nls.infographics,this.infographicsTabHidden);this._hideOrShowTab(this.nls.reports,this.reportsTabHidden);this.infographicsTabHidden?this.tab.selectTab(this.nls.reports):this.tab.selectTab(this.nls.infographics)},
_hideOrShowTab:function(a,b){var c=D("td",this.tab.tabTr),d;f.some(c,function(e){if(e.label===a)return d=e,!0})&&C.set(d,"display",b?"none":"")},runInfographic:function(){if(!g.contains(this.runInfographicBtn,"jimu-state-disabled")){var a=this,b=this.infographicDropDown.get("value");this.reportPlayer&&this.reportPlayer.destroy();this.playerDiv&&r.destroy(this.playerDiv);this.playerDiv=r.create("div",null,document.body);var c=new K;this.config.exportInfographicsPrintOption&&c.registerCommand(p.PRINT);
this.config.exportInfographicsPDFOption&&c.registerCommand(p.PDF);this.config.exportInfographicsImageOption&&c.registerCommand(p.IMAGE);this.config.exportInfographicsDynamicHTMLOption&&c.registerCommand(p.DYNAMIC_HTML);var d=P.isMobileUa();this.reportPlayer=(new I({isSlidesView:d?!0:!1,theme:this._useLightTheme()?y.LIGHT:y.DARK,dataProvider:c,resizeMode:J.FIT_WINDOW,showCloseButton:!0,config:{esriDijitCssUrl:"https://js.arcgis.com/3.37/dijit/themes/claro/claro.css",esriCssUrl:"https://js.arcgis.com/3.37/esri/css/esri.css",
playerSourceRootUrl:"https://js.arcgis.com/3.37/"},onClose:function(){a.reportPlayer.destroy();r.destroy(a.playerDiv)}})).placeAt(this.playerDiv);var e=!0;c=new v({name:"filteredInfographicReportSelect",tree:new m(this._infograpicReports),defaultExpand:a._getDefaultExpandedTreeForSelectedReport(this._infograpicReports,b),placeHolder:a.nls.selectTemplate,value:b,onChange:function(k){e?e=!1:(a.infographicDropDown.set("value",k),l(k))}});this._useLightTheme()||g.add(this.reportPlayer.playerToolbar.domNode,
"jimu-main-background");c.startup();c.set("value",b);this.reportPlayer.playerToolbar.addInfographicsSelect(c);var l=function(k){var q=[];if(a.wizard.selectedPoint.long)f.forEach(a.wizard.selectedPoint.tradeAreas,function(w,Q){var h={};h.name=w.name;h.shortName=w.shortName;h.feature=w.graphic;"undefined"===typeof h.feature.attributes&&(h.feature.attributes="undefined"!==typeof a.wizard.selectedPoint.attributes?a.wizard.selectedPoint.attributes:{});h.feature.attributes.STORE_LONG=a.wizard.selectedPoint.long;
h.feature.attributes.STORE_LAT=a.wizard.selectedPoint.lat;h.feature.attributes.radiusIndex=Q;q.push(h)});else if(a.wizard.selectedPolygon.geometry){q=[];var n={};a.isPolygonFIPS(a.wizard.selectedPolygon)?n=a.GetFIPSAnalysisArea(a.wizard.selectedPolygon):(n.name=a.wizard.selectedPolygon.locationName,n.shortName=a.wizard.selectedPolygon.locationName,n.feature=a.wizard.selectedPolygon.feature);q.push(n)}a.reportPlayer.playReport({portalUrl:portalUrl,countryID:a.wizard.selectedCountryID,reportID:k,reverseAnalysisAreasOnMap:!0,
analysisAreas:q})};t(u.getGEProxyUrl(this.appConfig),function(k){k&&(x.setGeoenrichmentUrl(k),x.getClient());l(b)})}},isPolygonFIPS:function(a){return a&&a.feature&&a.feature.attributes&&a.feature.attributes.FIPS||a&&a.feature&&a.feature.attributes&&a.feature.attributes.STATE_FIPS?!0:!1},GetFIPSAnalysisArea:function(a){var b={geographies:[]},c={sourceCountry:"US"},d="";if(a.feature.attributes.FIPS)switch(a.feature.attributes.FIPS.length){case 2:d="US.States";break;case 5:d="US.Counties";break;case 11:d=
"US.Tracts"}else a.feature.attributes.STATE_FIPS&&(d="US.States");c.levelId=d;c.id=a.feature.attributes.FIPS?a.feature.attributes.FIPS.toString():a.feature.attributes.STATE_FIPS.toString();c.attributes=a.feature.attributes;a=a.geometry.getCentroid();a=H.xyToLngLat(a.x,a.y);c.attributes.STORE_ID="0";c.attributes.STORE_LONG=a[0].toString();c.attributes.STORE_LAT=a[1].toString();b.geographies.push(c);return b},GetFIPSStudyArea:function(a){var b={sourceCountry:"US"},c="";if(a.feature.attributes.FIPS)switch(a.feature.attributes.FIPS.length){case 2:c=
"US.States";break;case 5:c="US.Counties";break;case 11:c="US.Tracts"}else a.feature.attributes.STATE_FIPS&&(c="US.States");b.layer=c;b.ids=[a.feature.attributes.FIPS?a.feature.attributes.FIPS.toString():a.feature.attributes.STATE_FIPS.toString()];b.attributes=a.feature.attributes;return b},_useLightTheme:function(){var a=!1,b=self.getAppConfig();f.forEach(this._configForLightTheme,function(c){b&&b.theme&&b.theme.name==c.name&&b.theme.styles&&0<b.theme.styles.length&&f.forEach(b.theme.styles,function(d){d==
c.style&&(a=!0)})});b&&b.theme&&b.theme.customStyles&&b.theme.customStyles.mainBackgroundColor&&"#FFFFFF"==b.theme.customStyles.mainBackgroundColor.toUpperCase()&&(a=!0);return a},runReport:function(){if(!g.contains(this.runReportBtn,"jimu-state-disabled")){g.add(this.runReportBtn,"jimu-state-disabled");this.shelter.show();var a=this;this.wizard.selectedPoint.long?this.runReportForPoint().then(function(){a.shelter.hide();g.remove(a.runReportBtn,"jimu-state-disabled")}).otherwise(function(){a.shelter.hide();
g.remove(a.runReportBtn,"jimu-state-disabled")}):this.wizard.selectedPolygon.geometry&&this.runReportForPolygon().then(function(){a.shelter.hide();g.remove(a.runReportBtn,"jimu-state-disabled")}).otherwise(function(){a.shelter.hide();g.remove(a.runReportBtn,"jimu-state-disabled")})}},_enableDisableButton:function(a,b){"string"===typeof b&&"None"!==b?g.remove(a,"jimu-state-disabled"):g.add(a,"jimu-state-disabled")},runReportForPoint:function(){var a=this,b={studyAreas:[]},c={featureSet:{fields:[{name:"OBJECTID",
alias:"Object ID",type:"esriFieldTypeOID"},{name:"STORE_ID",alias:"STORE_ID",type:"esriFieldTypeString",length:1,nullable:!0},{name:"STORE_LONG",alias:"STORE_LONG",type:"esriFieldTypeDouble"},{name:"STORE_LAT",alias:"STORE_LAT",type:"esriFieldTypeDouble"},{name:"AREA_DESC",alias:"AREA_DESC",type:"esriFieldTypeString",length:7,nullable:!0},{name:"AREA_DESC2",alias:"AREA_DESC2",type:"esriFieldTypeString",length:19,nullable:!0}],spatialReference:this.map.spatialReference.toJson(),geometryType:"esriGeometryPolygon",
features:[]}};f.forEach(this.wizard.selectedPoint.tradeAreas,function(d){var e={};e.geometry=d.graphic.geometry;d.graphic.attributes?e.attributes=d.graphic.attributes:a.wizard.selectedPoint.attributes&&(e.attributes=B.clone(a.wizard.selectedPoint.attributes));e.attributes||(e.attributes={});e.attributes.OBJECTID=1;e.attributes.STORE_ID="1";e.attributes.STORE_LONG=a.wizard.selectedPoint.long;e.attributes.STORE_LAT=a.wizard.selectedPoint.lat;e.attributes.AREA_DESC=d.AREA_DESC;e.attributes.AREA_DESC2=
d.AREA_DESC2;c.featureSet.features.push(e)});b.studyAreas.push(c);this.filteredReportDropDown.getSelectedItem().reportType!=M.STANDARD&&(b.areadesc2=this.wizard.selectedPoint.areadesc2);b.locationName=this.wizard.selectedPoint.locationName;b.lat=this.wizard.selectedPoint.lat;b.long=this.wizard.selectedPoint.long;b.sourceCountry=this.wizard.selectedCountryID;b.report=this.filteredReportDropDown.getSelectedItem().item?this.filteredReportDropDown.getSelectedItem().item:this.filteredReportDropDown.getSelectedItem().value;
b.reportDownloadName=this.filteredReportDropDown.getSelectedItem().label;return u.createReport(b)},runReportForPolygon:function(){var a={studyAreas:[]},b={};b=this.isPolygonFIPS(this.wizard.selectedPolygon)?this.GetFIPSStudyArea(this.wizard.selectedPolygon):{geometry:this.wizard.selectedPolygon.geometry.toJson()};this.wizard.selectedPolygon.feature&&this.wizard.selectedPolygon.feature.attributes&&(b.attributes=this.wizard.selectedPolygon.feature.attributes);a.studyAreas.push(b);a.locationName=this.wizard.selectedPolygon.locationName;
a.sourceCountry=this.wizard.selectedCountryID;a.report=this.filteredReportDropDown.getSelectedItem().item?this.filteredReportDropDown.getSelectedItem().item:this.filteredReportDropDown.getSelectedItem().value;a.reportDownloadName=this.filteredReportDropDown.getSelectedItem().label;return u.createReport(a)},backOnClick:function(){this.onBack()}})});