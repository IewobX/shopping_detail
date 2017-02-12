/**
 * Created by asus on 2016/12/5.
 */
var n,rotXINT,rotYINT,rotZINT;
var div = document.getElementById('div');
//重写rotate方法
function rotateX() {
    n = 0;
    clearInterval(rotXINT);
    rotXINT = setInterval('startXRotate()',10);
}
function startXRotate() {
    n = n + 1;
    div.style.transform = "rotateX("+ n + "deg)";
    if(n == 180){
        clearInterval(rotXINT);
        n = 0;
    }
}

function rotateY() {
    n = 0;
    clearInterval(rotYINT);
    rotYINT = setInterval('startYRotate()',10);
}
function startYRotate() {
    n = n + 1;
    div.style.transform = "rotateY("+ n + "deg)";
    if(n == 180){
        clearInterval(rotYINT);
        n = 0;
    }
}

function rotateZ() {
    n = 0;
    clearInterval(rotZINT);
    rotZINT = setInterval('startZRotate()',10);
}
function startZRotate() {
    n = n + 1;
    div.style.transform = "rotateZ("+ n + "deg)";
    if(n == 180){
        clearInterval(rotZINT);
        n = 0;
    }
}
