(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{oCyA:function(t,e,n){"use strict";n.r(e),n.d(e,"TicketRoutesListModule",(function(){return _}));var o=n("ofXK"),r=n("3Pt+"),i=n("0IaG"),a=n("tk/3"),c=n("tyNb"),s=n("MH+I"),l=n("fXoL"),p=n("0LFj"),d=n("2Vo4"),g={load:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"//api-maps.yandex.ru/2.1/?lang=en_RU",e=function(){var e=t.match(/[\\?&]ns=([^&#]*)/);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))};return this.promise||(this.promise=new Promise((function(e,n){var o=document.createElement("script");o.onload=e,o.onerror=n,o.type="text/javascript",o.src=t,document.body.appendChild(o)})).then((function(){var t=e();return t&&"ymaps"!==t&&(0,eval)("var ymaps = ".concat(t,";")),new Promise((function(t){return ymaps.ready(t)}))}))),this.promise}};let u=(()=>{class t{constructor(){this.yMapsLoaded=new d.a(!1),g.load("https://api-maps.yandex.ru/2.1/?apikey=4463c279-01bd-46d9-8914-d54b7f053704&lang=ru_RU").then(t=>{this.map=t,this.yMapsLoaded.next(!0)}).catch(t=>{this.yMapsLoaded.next(!1)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l.Hb({token:t,factory:t.\u0275fac}),t})(),m=(()=>{class t{constructor(){this.message="\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Fb({type:t,selectors:[["app-ui-loader"]],inputs:{message:"message"},decls:5,vars:1,consts:[[1,"loading-wrapper"],[1,"loading"],[1,"loader"]],template:function(t,e){1&t&&(l.Qb(0,"div",0),l.Qb(1,"div",1),l.Qb(2,"div",2),l.Mb(3,"div"),l.Pb(),l.Pb(),l.sc(4),l.Pb()),2&t&&(l.Ab(4),l.uc(" ",e.message," "))},styles:[".loading-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;width:100%;height:100%;background-color:rgba(1,114,183,.1);font-size:1.5rem;color:#21425c}.loading-wrapper[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{width:200px;height:200px;display:inline-block;overflow:hidden}.loading-wrapper[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;transform:translateZ(0) scale(1);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:0 0}.loading-wrapper[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;animation:loader 1s linear infinite;width:160px;height:160px;top:20px;left:20px;border-radius:50%;box-shadow:0 4px 0 0 #e15b64;transform-origin:80px 82px;box-sizing:initial}@keyframes loader{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}"]}),t})();const b=["yamaps"];function f(t,e){1&t&&l.Mb(0,"app-ui-loader")}let h=(()=>{class t{constructor(t,e,n,o){this.mapService=t,this.ticketsService=e,this.dialog=n,this.data=o,this.routesForMark=[]}ngOnInit(){this.routesForMark=this.data,this.loading=!0,this.mapService.yMapsLoaded.subscribe(t=>{t&&(this.loading=!1,this.map=new this.mapService.map.Map(this.yandexMap.nativeElement,{center:[55.76,37.64],zoom:3,controls:["geolocationControl","zoomControl","fullscreenControl"]}),this.map.container.events.add("fullscreenenter",()=>{this.dialog.closeAll()}),this.loadPlacemark())})}loadPlacemark(){const t=[],e=[];this.routesForMark.forEach(n=>{const o=this.ticketsService.mapOfCities.get(n).cityData.address,r=[o.latitude,o.longitude];t.push(r),e.push(new this.mapService.map.Placemark(r,{iconContent:o.name,hintContent:"\u0413\u043e\u0440\u043e\u0434 "+o.name},{preset:"islands#nightIcon"}))});const n=new this.mapService.map.Polyline([...t],{},{strokeColor:"#FF008888",hasBalloon:!0});this.map.geoObjects.add(n),e.forEach(t=>{this.map.geoObjects.add(t)})}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(u),l.Lb(p.a),l.Lb(i.b),l.Lb(i.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-route-map"]],viewQuery:function(t,e){var n;1&t&&l.pc(b,!0),2&t&&l.ic(n=l.Yb())&&(e.yandexMap=n.first)},features:[l.zb([u])],decls:6,vars:1,consts:[["mat-button","","mat-dialog-close","",1,"close"],["mat-dialog-title","",1,"title"],[1,"yamaps"],["yamaps",""],[4,"ngIf"]],template:function(t,e){1&t&&(l.Mb(0,"a",0),l.Qb(1,"h2",1),l.sc(2,"\u041c\u0430\u0440\u0448\u0440\u0443\u0442 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"),l.Pb(),l.Qb(3,"div",2,3),l.rc(5,f,1,0,"app-ui-loader",4),l.Pb()),2&t&&(l.Ab(5),l.fc("ngIf",e.loading))},directives:[i.c,i.e,o.k,m],styles:[".yamaps[_ngcontent-%COMP%]{width:100%;height:500px}"]}),t})();function M(t,e){if(1&t&&(l.Qb(0,"div",11),l.sc(1," \u0412\u0440\u0435\u043c\u044f \u0432\u044b\u043b\u0435\u0442\u0430: "),l.Mb(2,"br"),l.sc(3),l.Mb(4,"br"),l.sc(5," \u0412\u0440\u0435\u043c\u044f \u043f\u0440\u0438\u043b\u0451\u0442\u0430: "),l.Mb(6,"br"),l.sc(7),l.Mb(8,"br"),l.Pb()),2&t){const t=l.ac().$implicit,e=l.ac();l.Ab(3),l.uc(" ",e.getTimeFrom(t)," "),l.Ab(4),l.uc(" ",e.getTimeArrival(t)," ")}}function P(t,e){if(1&t&&(l.Qb(0,"div",4),l.Qb(1,"div",5),l.Qb(2,"div",6),l.sc(3),l.Pb(),l.Mb(4,"div",7),l.Pb(),l.Qb(5,"div",8),l.Qb(6,"div",9),l.sc(7),l.Pb(),l.rc(8,M,9,2,"div",10),l.Pb(),l.Pb()),2&t){const t=e.$implicit,n=e.index,o=e.last,r=l.ac();l.Ab(3),l.uc(" ",n+1," "),l.Ab(4),l.uc(" ",r.getCityName(t)," "),l.Ab(1),l.fc("ngIf",!o)}}let C=(()=>{class t{constructor(t,e){this.ticketsService=t,this.dialog=e,this.ticketRoute=[]}ngOnInit(){}openMap(){this.dialog.open(h,{closeOnNavigation:!0,data:this.ticketRoute,width:"100%",panelClass:"my-dialog"}).afterClosed().subscribe(t=>{console.log("Dialog result: "+t)}),this.open=!0}getCityName(t){return this.ticketsService.mapOfCities.get(t).cityData.address.name}getTimeFrom(t){return this.ticketsService.mapOfCities.get(t).fromTime}getTimeArrival(t){return this.ticketsService.mapOfCities.get(t).arrivalTime}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(p.a),l.Lb(i.b))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-city-routes"]],inputs:{ticketRoute:"ticketRoute"},decls:5,vars:1,consts:[[1,"routes-wrapper"],[1,"route-item-container"],["class","route-item",4,"ngFor","ngForOf"],[1,"base-btn",3,"click"],[1,"route-item"],[1,"route-img"],[1,"cicle"],[1,"line"],[1,"route-content"],[1,"header"],["class","time",4,"ngIf"],[1,"time"]],template:function(t,e){1&t&&(l.Qb(0,"div",0),l.Qb(1,"div",1),l.rc(2,P,9,3,"div",2),l.Pb(),l.Qb(3,"button",3),l.Xb("click",(function(){return e.openMap()})),l.sc(4,"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"),l.Pb(),l.Pb()),2&t&&(l.Ab(2),l.fc("ngForOf",e.ticketRoute))},directives:[o.j,o.k],styles:[".routes-wrapper[_ngcontent-%COMP%]{background:#21425c;padding:3rem}.routes-wrapper[_ngcontent-%COMP%]   .route-item-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:row}.routes-wrapper[_ngcontent-%COMP%]   .route-item[_ngcontent-%COMP%]{flex:1 1 85rem;margin-left:1rem;margin-right:1rem}.routes-wrapper[_ngcontent-%COMP%]   .route-item[_ngcontent-%COMP%]:last-child   .line[_ngcontent-%COMP%]{display:none}.routes-wrapper[_ngcontent-%COMP%]   .route-img[_ngcontent-%COMP%]{position:relative}.routes-wrapper[_ngcontent-%COMP%]   .route-img[_ngcontent-%COMP%]   .cicle[_ngcontent-%COMP%]{font-size:1.6rem;font-weight:600;position:relative;z-index:1;width:3rem;height:3rem;border-radius:50%;background-color:#fff;color:#000;display:flex;justify-content:center;align-items:center;flex-direction:row}.routes-wrapper[_ngcontent-%COMP%]   .route-img[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:row;position:absolute;top:50%;left:2px;right:-40px;height:1px;background-color:#000}.routes-wrapper[_ngcontent-%COMP%]   .route-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-size:1.8rem;color:#fff;margin-top:2rem}.routes-wrapper[_ngcontent-%COMP%]   .route-content[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;flex-direction:row;margin-top:1.6rem;font-size:1.4rem;color:#a0b0b9}.routes-wrapper[_ngcontent-%COMP%]   .base-btn[_ngcontent-%COMP%]{background-color:#21425c;border-radius:.5rem;text-align:center;width:320px;padding:1.5rem;border:none;cursor:pointer;background-color:#f17c06;color:#fff;margin-top:5rem;min-width:220px}@media screen and (max-width:948px){.routes-wrapper[_ngcontent-%COMP%]   .base-btn[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width:948px){.routes-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.routes-wrapper[_ngcontent-%COMP%]   .route-item-container[_ngcontent-%COMP%]{display:block}.routes-wrapper[_ngcontent-%COMP%]   .route-item[_ngcontent-%COMP%]{display:flex;flex:none;margin:2rem 0}.routes-wrapper[_ngcontent-%COMP%]   .route-img[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{height:auto;right:0;width:2px;bottom:-2rem;top:2px;left:50%}.routes-wrapper[_ngcontent-%COMP%]   .route-content[_ngcontent-%COMP%]{margin-left:2rem}.routes-wrapper[_ngcontent-%COMP%]   .route-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{margin-top:0}.routes-wrapper[_ngcontent-%COMP%]   .route-content[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{margin-top:1rem}.routes-wrapper[_ngcontent-%COMP%]   .base-btn[_ngcontent-%COMP%]{min-width:100%}}"]}),t})();function O(t,e){if(1&t&&(l.Qb(0,"div",1),l.Mb(1,"app-city-routes",2),l.Pb()),2&t){const t=e.$implicit;l.Ab(1),l.fc("ticketRoute",t)}}let w=(()=>{class t{constructor(t){this.ticketsService=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(p.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-ticket-routes-list"]],decls:1,vars:1,consts:[["class","router-list-container",4,"ngFor","ngForOf"],[1,"router-list-container"],[3,"ticketRoute"]],template:function(t,e){1&t&&l.rc(0,O,2,1,"div",0),2&t&&l.fc("ngForOf",e.ticketsService.cityRoutes)},directives:[o.j,C],styles:[".router-list-container[_ngcontent-%COMP%]{margin:4rem auto}"]}),t})();var v=n("rtyx");const y=[{path:"",component:w}];let _=(()=>{class t{}return t.routes=y,t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[o.c,r.i,r.q,v.a,i.d,a.b,s.a,c.c.forChild(y)]]}),t})()}}]);