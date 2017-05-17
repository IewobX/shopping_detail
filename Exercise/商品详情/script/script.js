/**
 * Created by asus on 2017/5/5.
 */
// var imgUrl = $('.detail_left')[0].getElementsByTagName('img')[0].src;
// var img1 = $('.contain')[0].getElementsByTagName('img')[0];
// var img2 = $('.contain')[0].getElementsByTagName('img')[1];
$(function () {
        let commodityId = 2;
        let url = 'http://duolaimon.cn/';
        $.ajax({
            url: url + 'shop/commodities/' + commodityId,
            type: "GET",
            // contentType: "application/json",
            // data: "",
            // crossDomain: true,
            success: function (result) {
                console.log('success!');
                $('.price')[0].getElementsByTagName("b")[0].innerHTML = '￥' + result.commodityPrice;
                $('.price')[0].getElementsByTagName('i')[0].innerHTML = result.commodityLeavenum;
                $('.integral')[0].getElementsByTagName('span')[0].innerHTML = result.commodityPrice / 10;
                $(".detail_left")[0].getElementsByTagName("img")[0].src = url + result.commodityPicture;
                $('.detail_left')[0].getElementsByTagName('a')[0].href = url + result.commodityPicture;
                $('.spec')[0].getElementsByTagName('a')[0].innerHTML = result.commodityStandard + 'kg';
                /*
                 * sessionStorage 最近浏览
                 **/

                let imgUrl = $('.detail_left')[0].getElementsByTagName('img')[0].src;
                let img1 = $('.contain')[0].getElementsByTagName('img')[0];
                let img2 = $('.contain')[0].getElementsByTagName('img')[1];
                if (sessionStorage.length) {
                    sessionStorage[1] = sessionStorage[0];
                }
                sessionStorage[0] = imgUrl;
                img1.src = sessionStorage[0];
                img2.src = sessionStorage[1];


            },
            error: function () {
                console.log('ajax error');
            },

        });
    }
);


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
