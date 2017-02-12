/**
 * Created by asus on 2016/11/27.
 */

var result = document.getElementById('result');
var file = document.getElementById('file');
if(typeof FileReader == undefined){
    result.innerHTML = "<p>sorry your brows do not support FileReader</p>";
    file.setAttribute('disabled','disabled');
}
function readAsDataURL() {
    //if img
    var file = document.getElementById('file').files[0];
    if(!/image\/\w+/.test(file.type)){
        alert('please store the file as image!');
        return false;
    }
    var reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function (e) {
        var result = document.getElementById("result");
        result.innerHTML =  '<img src="'+this.result+'" alt="" />'
    }
}
function readerAsBinaryString() {
    var file = document.getElementById('file').files[0];
    var reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function (f) {
        var result = document.getElementById('result');
        result.innerHTML = this.result;
    }
}
function readerAsText() {
    var file = document.getElementById('file').files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (f) {
        var result = document.getElementById('result');
        result.innerHTML = this.result;
    }
}