webpackJsonp([1],{"+bwW":function(t,e){},C4tt:function(t,e){},FdMf:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};s.d(n,"registerMove",function(){return V}),s.d(n,"updateColor",function(){return U}),s.d(n,"resetMoves",function(){return $});var r={};s.d(r,"currentMoveId",function(){return z});var a={};s.d(a,"setData",function(){return P});var o,i,c=s("7+uW"),l=s("Dd8w"),u=s.n(l),d=s("NYxO"),v=s("bOdI"),h=s.n(v),p="light",f="dark",m=(o={},h()(o,p,"#efd9b7"),h()(o,f,"#b48866"),o),C=(i={},h()(i,p,[m[p],"#EF9A9A","#F48FB1","#CE93D8","#B39DDB","#9FA8DA","#90CAF9","#81D4FA","#80DEEA","#80CBC4","#A5D6A7","#C5E1A5","#E6EE9C","#FFF59D","#FFE082","#FFCC80","#FFAB91","#BCAAA4","#EEEEEE","#B0BEC5"]),h()(i,f,[m[f],"#D32F2F","#C2185B","#7B1FA2","#512DA8","#303F9F","#1976D2","#0288D1","#0097A7","#00796B","#388E3C","#689F38","#AFB42B","#FBC02D","#FFA000","#F57C00","#E64A19","#5D4037","#616161","#455A64"]),i),k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"feather feather-check-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}}),this._v(" "),e("polyline",{attrs:{points:"22 4 12 14.01 9 11.01"}})])},staticRenderFns:[]},_=s("VU/8")({name:"checkmark-icon"},k,!1,null,null,null).exports,g={name:"square",props:{rank:Number,file:String},components:{CheckmarkIcon:_},computed:u()({},Object(d.d)(["colors"]),Object(d.c)(["currentMoveId"]),{isCurrentMove:function(){return this.currentMoveId===""+this.file+this.rank},isDark:function(){return(this.file.charCodeAt(0)+this.rank)%2==0},displayRank:function(){return"a"===this.file},displayFile:function(){return 1===this.rank},rankFileStyles:function(){var t=this.colors,e=t.dark,s=t.light;return{color:this.isDark?s:e}},squareColorType:function(){return this.isDark?f:p},squareClasses:function(){return["square",{"current-move":this.isCurrentMove}]},squareStyles:function(){var t=this.colors,e=t.dark,s=t.light;return{background:this.isDark?e:s}}}),methods:u()({},Object(d.b)(["registerMove"]),{handleSquareClick:function(){this.registerMove({id:""+this.file+this.rank,colorType:this.squareColorType})}})},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.squareClasses,style:t.squareStyles,on:{click:t.handleSquareClick}},[s("transition",{attrs:{name:"current-icon",appear:""}},[s("div",{staticClass:"current-icon",style:t.rankFileStyles},[t.isCurrentMove?s("checkmark-icon"):t._e()],1)]),t._v(" "),t.displayFile?s("div",{staticClass:"file",style:t.rankFileStyles},[t._v("\n    "+t._s(t.file)+"\n  ")]):t._e(),t._v(" "),t.displayRank?s("div",{staticClass:"rank",style:t.rankFileStyles},[t._v("\n    "+t._s(t.rank)+"\n  ")]):t._e()],1)},staticRenderFns:[]};var F={name:"board",components:{Square:s("VU/8")(g,y,!1,function(t){s("ydXg")},"data-v-5d6f80e8",null).exports},data:function(){return{files:["a","b","c","d","e","f","g","h"],ranks:[8,7,6,5,4,3,2,1]}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"board"},t._l(t.files,function(e,n){return s("div",{key:n,staticClass:"ranks"},t._l(t.ranks,function(t,r){return s("square",{key:n+r,attrs:{file:e,rank:t}})}))}))},staticRenderFns:[]};var S=s("VU/8")(F,b,!1,function(t){s("+bwW")},"data-v-507ab094",null).exports,w={name:"move",props:{id:String,colorType:String},computed:u()({},Object(d.d)(["colors"]),{moveColorStyles:function(){return{background:this.colors[this.colorType]}}})},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"move"},[e("div",{staticClass:"move-color",style:this.moveColorStyles}),this._v(" "),e("div",{staticClass:"move-id"},[this._v(this._s(this.id))])])},staticRenderFns:[]};var A=s("VU/8")(w,D,!1,function(t){s("C4tt")},"data-v-3081c4ca",null).exports,E=s("gQ/s"),M={name:"settings",components:{Swatches:s.n(E).a},data:function(){return{swatchSettings:{inline:!0,shapes:"circles",size:"24"},colorPaletteLight:C[p],colorPaletteDark:C[f]}},computed:u()({},Object(d.d)(["colors"])),methods:u()({},Object(d.b)(["updateSetting","updateColor"]),{handleColorInput:function(t,e){var s="dark"===e?f:p;this.updateColor(h()({},s,t))}})},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"settings"},[s("div",{staticClass:"colors-select-wrapper"},[s("div",{staticClass:"color-select"},[s("header",[t._v("\n        Light Square Color\n      ")]),t._v(" "),s("swatches",{attrs:{colors:t.colorPaletteLight,value:t.colors.light,inline:t.swatchSettings.inline,shapes:t.swatchSettings.shapes,"swatch-size":t.swatchSettings.size},on:{input:function(e){t.handleColorInput(e,"light")}}})],1),t._v(" "),s("div",{staticClass:"color-select"},[s("header",[t._v("\n        Dark Square Color\n      ")]),t._v(" "),s("swatches",{attrs:{colors:t.colorPaletteDark,value:t.colors.dark,inline:t.swatchSettings.inline,shapes:t.swatchSettings.shapes,"swatch-size":t.swatchSettings.size},on:{input:function(e){t.handleColorInput(e,"dark")}}})],1)])])},staticRenderFns:[]};var q={name:"sidebar",components:{Move:A,Settings:s("VU/8")(M,B,!1,function(t){s("yK0R")},"data-v-2e920a42",null).exports},computed:u()({},Object(d.d)(["moves","colors"]),{hasMoves:function(){return this.moves.length>0},movesWrapperClasses:function(){return{"has-moves":this.hasMoves}},headerStyles:function(){return{backgroundColor:this.colors[f]}}}),methods:u()({},Object(d.b)(["resetMoves"]))},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"sidebar"},[s("header",{style:t.headerStyles},[t._v("\n    Move Tracker\n  ")]),t._v(" "),s("article",{class:t.movesWrapperClasses},[s("transition-group",{attrs:{name:"moves",tag:"figure"}},t._l(t.moves,function(t,e){return s("move",{key:e,attrs:{id:t.id,colorType:t.colorType}})})),t._v(" "),s("transition",{attrs:{name:"moves-animate",appear:""}},[t.hasMoves?t._e():s("div",{staticClass:"moves-empty"},[t._v("\n        Make a move and you'll see it appear here!\n      ")])]),t._v(" "),s("transition",{attrs:{name:"moves-animate",appear:""}},[t.hasMoves?s("a",{staticClass:"moves-reset",on:{click:t.resetMoves}},[t._v("\n        Reset\n      ")]):t._e()])],1),t._v(" "),s("settings")],1)},staticRenderFns:[]};var O={name:"App",components:{Board:S,Sidebar:s("VU/8")(q,R,!1,function(t){s("FdMf")},"data-v-793991d3",null).exports}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("board"),this._v(" "),e("sidebar")],1)])},staticRenderFns:[]};var x=s("VU/8")(O,j,!1,function(t){s("yXh+")},null,null).exports,T=s("Gu7T"),I=s.n(T),V=function(t,e){var s=t.commit,n=t.state;s("setData",{type:"moves",data:[].concat(I()(n.moves),[e])})},U=function(t,e){var s=t.commit,n=t.state;s("setData",{type:"colors",data:u()({},n.colors,e)})},$=function(t){(0,t.commit)("setData",{type:"moves",data:[]})},z=function(t){var e=t.moves,s=e[e.length-1];return s&&s.id},P=function(t,e){t[e.type]=e.data};c.a.use(d.a);var W={colors:m,moves:[]},N=new d.a.Store({state:W,getters:r,actions:n,mutations:a});c.a.config.productionTip=!1,new c.a({el:"#app",store:N,components:{App:x},template:"<App/>"})},yK0R:function(t,e){},"yXh+":function(t,e){},ydXg:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c5c470d134d55bdb5681.js.map