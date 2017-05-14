/**
 * Created by asus on 2017/5/5.
 */
function createCookie(name,value,days) {
    if (days) {
        let date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        let expires = "; expires="+date.toGMTString();
    }
    else
        var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}
let img1 = $('.contain')[0].getElementsByTagName('img')[0].src;
let img2 = $('.contain')[0].getElementsByTagName('img')[1].src;
createCookie('firstimg',img1,new Date());
createCookie('secondimg',img2,new Date());



$(document).ready(
    function () {
        let commodityId = 3;
        let url = 'http://duolaimon.cn/';
        $.ajax({
            url: url+'shop/commodities/'+commodityId,
            type: "GET",
            // contentType: "application/json",
            // data: "",
            // crossDomain: true,
            success: function (result) {
                console.log('success!');
                $('.price')[0].getElementsByTagName("b")[0].innerHTML = '￥' + result.commodityPrice;
                $('.price')[0].getElementsByTagName('i')[0].innerHTML= result.commodityLeavenum;
                $('.integral')[0].getElementsByTagName('span')[0].innerHTML = result.commodityPrice/10;
                $(".detail_left")[0].getElementsByTagName("img")[0].src = url + result.commodityPicture;
                $('[data-cloudzoom]').data('CloudZoom').T = url + result.commodityPicture;
                $('.spec')[0].getElementsByTagName('a')[0].innerHTML = result.commodityStandard+'kg';
            },
            error: function () {
                console.log('ajax error');
            },

        });
    }
);


/*@xboy
 * 规格选择
 * */





/*@xboy
 * detail轮播图
 */
// let DetailUl = $('.detail_ul')[0];
// let DetailUlItem = DetailUl.getElementsByTagName("li");
// let n = 0;
// DetailUlItem[n].style.border = "solid #8fc320 2px";
// function prev() {
//     n--;
//     if(n<0){
//         n=DetailUlItem.length-1;
//         DetailUlItem[0].style.border = "solid #DFDFDF 1px";
//     }
//     for(let i=0;i<DetailUlItem.length-1;i++){
//         DetailUlItem[i].class = "";
//     }
//     DetailUlItem[n].style.border = "solid #8fc320 2px";
//     if(DetailUlItem[n+1]){
//         DetailUlItem[n+1].style.border = "solid #DFDFDF 1px";
//     }
//
// }
// function next() {
//     n++;
//     if(n>DetailUlItem.length-1){
//         n=0;
//         DetailUlItem[DetailUlItem.length-1].style.border = "solid #DFDFDF 1px";
//     }
//     for(let i=0;i<DetailUlItem.length-1;i++){
//         DetailUlItem[i].class = "";
//     }
//     DetailUlItem[n].style.border = "solid #8fc320 2px";
//     if(DetailUlItem[n-1]){
//         DetailUlItem[n-1].style.border = "solid #DFDFDF 1px";
//     }
// }
/*@kboy
 * 购买数量增减
 */
function sub() {
    let goodsValue = parseInt($('#num')[0].value);
    if (goodsValue > 0) {
        goodsValue -= 1;
    }
    else {
        goodsValue = 0;
    }
    $('#num')[0].value = goodsValue;
}
function add() {
    let goodsValue = parseInt($('#num')[0].value);
    if (goodsValue || goodsValue === 0) {
        goodsValue += 1;
    }
    else {
        goodsValue = 0;
    }
    $('#num')[0].value = goodsValue;
}

/*@xboy
 * 商品详情选项卡
 */
// let goodsMainLi = $('.goods_main')[0].getElementsByTagName("a");
// function change1() {
//     goodsMainLi[0].className += " " + "a_active";
//     goodsMainLi[1].className = null;
//     goodsMainLi[2].className = null;
//     $('.interduce')[0].className = 'text interduce show';
//     $('.parameter')[0].className = 'text parameter hidden';
//     $('.discuss')[0].className = 'text discuss hidden';
// }
// function change2() {
//     goodsMainLi[0].className = null;
//     goodsMainLi[1].className += " " + "a_active";
//     goodsMainLi[2].className = null;
//     $('.interduce')[0].className = 'text interduce hidden';
//     $('.parameter')[0].className = 'text parameter show';
//     $('.discuss')[0].className = 'text discuss hidden';
// }
// function change3() {
//     goodsMainLi[0].className = null;
//     goodsMainLi[1].className = null;
//     goodsMainLi[2].className += " " + "a_active";
//     $('.interduce')[0].className = 'text interduce hidden';
//     $('.parameter')[0].className = 'text parameter hidden';
//     $('.discuss')[0].className = 'text discuss show';
// }

/*recent*/

/*ajax*/