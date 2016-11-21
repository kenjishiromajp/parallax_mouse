function $(q) {
    return document.querySelector(q);
};
function $a(q) {
    return document.querySelectorAll(q);
};
function css(el, prop) {
    var style = window.getComputedStyle(element);
    return style[prop];
}
function setStyle(el,props){
    for(key in props){
        el.style[key] = props[key];
    }
    return el;
}
function sa(el,atr,va){
    el.setAttribute(atr,va);
}
function offset(el) {
    return el.getBoundingClientRect();
}
function foreach(collection,callback){
    if(!(collection instanceof NodeList || collection instanceof Array) && collection instanceof String)
        collection = $a(collection);
    for (var index = 0; index < collection.length; index++) {
        var element = collection[index];
        callback(element,index);
    }
}

function calcViewport(){
    var scale = window.innerHeight/1140;
    setStyle($("#main .container"),{ transform: "translate(-50%,-50%) scale("+scale+")" });
}

function showButterflies(){
    $("#main").classList.remove("hidden-butterflies");
}
$("#main").classList.add("hidden-butterflies");

window.onresize= function(){
    calcViewport();
}
window.onload = function () {
    $("body").addEventListener("mousemove", function (ev){
        
        var x = ev.pageX - parseInt(offset(this).left);
        var y = ev.pageY - parseInt(offset(this).top);
        var cWidth = this.offsetWidth;
        var cHeight = this.offsetHeight;

        function calcPosition(porcentagemX,porcentagemY){
            var calc;
            return {
                x: ((cWidth / 2) - x) / porcentagemX,
                y: ((cHeight / 2) - y) / porcentagemY,
            };
        }

        function setPosition(collection,porcentagemX,porcentagemY){
            if(!(collection instanceof NodeList || collection instanceof Array) && collection instanceof String)
                collection = $a(collection);
            if(collection instanceof NodeList){
                foreach(collection,(el,index)=>{
                    var pos = calcPosition(porcentagemX,porcentagemY);
                    setStyle(el,{ transform: "translate(" + pos.x + "px," + pos.y + "px)" });
                });
            }else{
                if(collection instanceof Node)
                    var el = collection;
                var pos = calcPosition(porcentagemX,porcentagemY);
                setStyle(el,{ transform: "translate(" + pos.x + "px," + pos.y + "px)" });
            }

        }

        foreach($a("#main .container > *"),el=>{
            sa(el,"style", "");
        });



        setPosition($("#shadow_path1"),4,6);
        setPosition($("#shadow_row2"),6,8);
        setPosition($("#shadow_row3"),4,6);

         setPosition($("#content_path1"),10,12);
        setPosition($("#content_row2"),8,10);
        setPosition($("#content_row3"),10,12);

        setPosition($("#escafandro"),15,100);
        setPosition($("#cadeira"),12,-20);

        if($a(".hidden-butterflies").length)
            return;

        setPosition($a("#b1,#b5"),5,5);
        setPosition($("#b2"),3,5);
        setPosition($("#b3"),10,10);
        setPosition($("#b4"),7,7);
        setPosition($("#b6"),12,11);
        setPosition($("#b7"),18,18);
        setPosition($("#b8"),12,12);
        setPosition($("#b9"),9,9);
        setPosition($("#b10"),18,18);
        setPosition($("#b11"),12,18);


    });
    calcViewport();
    new Vivus('lettering', { duration: 200, type: "sync", animTimingFunction: Vivus.EASE_OUT }).play(_=>{
        showButterflies();
    });
};