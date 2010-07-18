YUI.add("scrollview-scrollbars",function(C){var A=C.ScrollView.CLASS_NAMES,B=C.TransitionNative.supported;function D(){D.superclass.constructor.apply(this,arguments);}D.NAME="scrollbars-plugin";D.NS="scrollbars";D.SCROLLBAR_TEMPLATE=["<div>",'<span class="'+A.child+" "+A.top+'"></span>','<span class="'+A.child+" "+A.middle+'"></span>','<span class="'+A.child+" "+A.bottom+'"></span>',"</div>"].join("");D.ATTRS={verticalNode:{setter:"_setVerticalNode",value:C.Node.create(D.SCROLLBAR_TEMPLATE)},horizontalNode:{setter:"_setHorizontalNode",value:C.Node.create(D.SCROLLBAR_TEMPLATE)}};C.namespace("Plugin").ScrollViewScrollbars=C.extend(D,C.Plugin.Base,{initializer:function(){this.afterHostMethod("_uiScrollY",this._update);this.afterHostMethod("_uiScrollX",this._update);this.afterHostMethod("_uiDimensionsChange",this._hostDimensionsChange);this.doAfter("scrollEnd",this.flash);},_hostDimensionsChange:function(){var I=this.get("host"),G=this.get("host").get("boundingBox"),F=this.get("verticalNode"),J=this.get("horizontalNode"),H=F.inDoc(),E=J.inDoc();if(I._scrollsVertical&&!H){G.append(F);}else{if(!I._scrollsVertical&&H){F.remove();}}if(I._scrollsHorizontal&&!E){G.append(J);}else{if(!I._scrollsHorizontal&&E){J.remove();}}this._update();C.later(500,this,"flash",true);},_update:function(U,E,M){var L=this.get("host").get("contentBox"),G=0,R=1,J,W,V,T,K=this.get("host").get("height"),N=this.get("host").get("width"),S=L.get("scrollHeight"),I=L.get("scrollWidth"),F=this.get("verticalNode"),H=this.get("horizontalNode"),Q=this.get("host").get("scrollX")*-1,P=this.get("host").get("scrollY")*-1,O;if(!this._showingScrollBars){this.show();}if(H&&S<=K){this.hide();return;}if(F){G=Math.floor(K*(K/S));R=Math.floor((P/(S-K))*(K-G))*-1;if(G>K){G=1;}if(B){J="translate(0, "+R+"px)";}else{W=0;V=R;}if(R>(K-G)){G=G-(R-(K-G));}if(R<0){if(B){J="translate(0,0)";}else{W=0;V=0;}G=G+R;}E=E||0;if(this.verticalScrollSize!=(G-8)){this.verticalScrollSize=(G-8);O=F.get("children").item(1);T={duration:E/1000};if(B){T.transform="translate(0,0) scaleY("+(G-8)+")";}else{T.top=0;T.right=0;T.height=(G-8);}O.transition(T);}T={duration:E/1000};if(B){T.transform=J;}else{T.right=W;T.top=V;}F.transition(T);T={duration:E/1000};if(B){T.transform="translate(0,"+(G-10)+"px)";}else{T.right=0;T.top=G-10;}F.get("children").item(2).transition(T);}if(H){G=Math.floor(N*(N/I));R=Math.floor((Q/(I-N))*(N-G))*-1;if(G>N){G=1;}if(B){J="translate("+R+"px, 0)";}else{W=R;V=0;}if(R>(N-G)){G=G-(R-(N-G));}if(R<0){if(B){J="translate(0,0)";}else{W=0;V=0;}G=G+R;}E=E||0;if(this.horizontalScrollSize!=(G-16)){this.horizontalScrollSize=(G-16);O=H.get("children").item(1);T={duration:E/1000};if(B){T.transform="translate(0,0) scaleX("+(G-16)+")";}else{T.bottom=0;T.left=4;T.width=(G-16);}O.transition(T);}T={duration:E/1000};if(B){T.transform=J;}else{T.bottom=V;T.left=W;}H.transition(T);T={duration:E/1000};if(B){T.transform="translate("+(G-12)+"px,0)";}else{T.bottom=0;T.left=G-12;}H.get("children").item(2).transition(T);}},show:function(E){this._show(true,E);},hide:function(E){this._show(false,E);},_show:function(E,G){var F=this.get("verticalNode"),H=this.get("horizontalNode"),I={duration:(G)?0.6:0,opacity:(E)?1:0};this._showingScrollBars=E;if(this._flashTimer){this._flashTimer.cancel();}if(F){F.transition(I);}if(H){H.transition(I);}},flash:function(){var E=false;if(this.get("host")._scrollsVertical&&this.get("host").get("contentBox").get("scrollHeight")>this.get("host").get("height")){E=true;}if(this.get("host")._scrollsHorizontal&&this.get("host").get("contentBox").get("scrollWidth")>this.get("host").get("width")){E=true;}if(E){this.show(true);this._flashTimer=C.later(800,this,"hide",true);}},_setVerticalNode:function(E){E=C.one(E);if(E){E.addClass(A.scrollbar);E.addClass(A.vertical);}return E;},_setHorizontalNode:function(E){E=C.one(E);if(E){E.addClass(A.scrollbar);E.addClass(A.horizontal);}return E;}});},"@VERSION@",{skinnable:true,requires:["plugin"]});