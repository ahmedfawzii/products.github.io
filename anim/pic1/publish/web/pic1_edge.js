
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',x7='rgba(255,255,255,1)',g='image',e8='${price}',d='display',i='none';var g5='pic1.jpg',g6='price.jpg';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'pic1',t:g,r:['0px','0px','400px','500px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'price',v:i,t:g,r:['50px','400px','300px','100px','auto','auto'],f:[x4,im+g6,'0px','0px']}],style:{'${Stage}':{isStage:true,r:[undefined,undefined,'400px','500px'],overflow:'hidden',f:[x7]}}},tt:{d:0,a:y,data:[["eid1",d,0,0,"linear",e8,i,i]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-161554647");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${pic1}","click",function(sym,e){if(sym.$("price").is(":visible")){sym.$("price").hide();}else{sym.$("price").show();}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-161554647");