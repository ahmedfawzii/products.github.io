
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',x11='rgba(255,255,255,1)',x6='rgba(192,192,192,0.00)',xc='rgba(0,0,0,1)',g='image',i='none';var g7='1.jpg',g8='2.jpg',g10='4.jpg',g5='colors.jpg',g9='3.jpg';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'colors',t:g,r:['63px','436px','274px','64px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'blueb',t:'ellipse',r:['93px','446px','46px','42px','auto','auto'],br:["50%","50%","50%","50%"],o:'1',f:[x6],s:[0,xc,i]},{id:'greenb',t:'ellipse',r:['148px','448px','46px','42px','auto','auto'],br:["50%","50%","50%","50%"],f:[x6],s:[0,xc,i]},{id:'beegb',t:'ellipse',r:['208px','449px','48px','42px','auto','auto'],br:["50%","50%","50%","50%"],f:[x6],s:[0,xc,i]},{id:'grayb',t:'ellipse',r:['265px','448px','47px','42px','auto','auto'],br:["50%","50%","50%","50%"],f:[x6],s:[0,xc,i]},{id:'blue',t:g,r:['26px','14px','350px','413px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'green',t:g,r:['26px','14px','350px','413px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'beeg',t:g,r:['26px','14px','350px','413px','auto','auto'],f:[x4,im+g9,'0px','0px']},{id:'gray',t:g,r:['26px','14px','350px','414px','auto','auto'],f:[x4,im+g10,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','400px','500px','auto','auto'],overflow:'hidden',f:[x11]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-307522075");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${blueb}","click",function(sym,e){sym.$("beeg").hide();sym.$("gray").hide();sym.$("green").hide();sym.$("blue").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${greenb}","click",function(sym,e){sym.$("green").show();sym.$("gray").hide();sym.$("beeg").hide();sym.$("blue").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${beegb}","click",function(sym,e){sym.$("beeg").show();sym.$("green").hide();sym.$("gray").hide();sym.$("blue").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${grayb}","click",function(sym,e){sym.$("gray").show();sym.$("green").hide();sym.$("beeg").hide();sym.$("blue").hide();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-307522075");