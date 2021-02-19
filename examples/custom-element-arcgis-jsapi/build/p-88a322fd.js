import"./p-476cf7c4.js";import{y as e,z as t,Z as s,m as i,D as a,E as l,K as r,bi as n,C as o,b as u,O as p,U as d,t as g}from"./p-ab028778.js";import{b as h,l as y}from"./p-1ff061ae.js";import"./p-8fc84c2d.js";import{l as c}from"./p-1cce98ff.js";import{x as m}from"./p-8a0d1aa6.js";import{t as b}from"./p-48626aa9.js";import{o as v}from"./p-f53b64f4.js";import{s as f}from"./p-b9c578c1.js";const w={id:"0/0/0",level:0,row:0,col:0,extent:null};let j=class extends(b(f(v(h)))){constructor(){super(...arguments),this.tileInfo=m.create({spatialReference:e.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new t(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,e.WebMercator),this.spatialReference=e.WebMercator}getTileBounds(e,t,s,i){const a=i||n();return w.level=e,w.row=t,w.col=s,w.extent=a,this.tileInfo.updateTileInfo(w),w.extent=null,a}fetchTile(e,t,i,a={}){const{signal:l,timestamp:r}=a,n=this.getTileUrl(e,t,i),o={responseType:"image",signal:l};return null!=r&&(o.query={_ts:a.timestamp}),s(n,o).then((e=>e.data))}getTileUrl(){throw new i("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};a([l({type:m})],j.prototype,"tileInfo",void 0),a([l({type:["show","hide"]})],j.prototype,"listMode",void 0),a([l({readOnly:!0,value:"base-tile"})],j.prototype,"type",void 0),a([l()],j.prototype,"fullExtent",void 0),a([l()],j.prototype,"spatialReference",void 0),j=a([r("esri.layers.BaseTileLayer")],j);var M=j;const T=new o({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let B=class extends(b(c(y(M)))){constructor(t){super(t),this.type="bing-maps",this.tileInfo=new m({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:e.WebMercator},spatialReference:e.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return u(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return T.toJSON(this.style)}get bingLogo(){return u(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(e){return this.addResolvingPromise(this.key?this._getMetadata():this.portalUrl?this._getPortalBingKey().then((()=>this._getMetadata())):p(new i("bingmapslayer:load","Bing layer must have bing key."))),d(this)}getTileUrl(e,t,s){if(!this.loaded||g(this.bingMetadata))return null;const i=this.bingMetadata.resourceSets[0].resources[0],a=i.imageUrlSubdomains[t%i.imageUrlSubdomains.length],l=this._getQuadKey(e,t,s);return i.imageUrl.replace("{subdomain}",a).replace("{quadkey}",l)}async fetchAttributionData(){return this.load().then((()=>g(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){return s(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${{road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style]}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new i("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new i("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new i("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new i("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return s(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new i("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new i("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,s){let i="";for(let a=e;a>0;a--){let e=0;const l=1<<a-1;0!=(s&l)&&(e+=1),0!=(t&l)&&(e+=2),i+=e.toString()}return i}};a([l({json:{read:!1,write:!1},value:null})],B.prototype,"bingMetadata",null),a([l({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],B.prototype,"type",void 0),a([l({type:m})],B.prototype,"tileInfo",void 0),a([l({type:String,readOnly:!0,dependsOn:["bingMetadata"],json:{read:!1,write:!1}})],B.prototype,"copyright",null),a([l({type:String,json:{write:!1,read:!1}})],B.prototype,"key",void 0),a([l({type:T.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:T.read}}})],B.prototype,"style",void 0),a([l({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"],dependsOn:["style"]})],B.prototype,"operationalLayerType",null),a([l({type:String,json:{write:!1,read:!1}})],B.prototype,"culture",void 0),a([l({type:String,json:{write:!1,read:!1}})],B.prototype,"region",void 0),a([l({type:String,json:{write:!0,read:!0}})],B.prototype,"portalUrl",void 0),a([l({type:Boolean,json:{write:!1,read:!1}})],B.prototype,"hasAttributionData",void 0),a([l({type:String,readOnly:!0,dependsOn:["bingMetadata"]})],B.prototype,"bingLogo",null),B=a([r("esri.layers.BingMapsLayer")],B);var S=B;export default S;