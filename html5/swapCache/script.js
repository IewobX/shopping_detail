/**
 * Created by asus on 2016/11/20.
 */
function init(){
    setInterval(function () {
        applicationCache.Update();
    },5000);
    applicationCache.addEventListener('updateready',function () {
        if(confirm('本地缓存已被更新，需要刷新画面来获取应用程序最新版本，是否刷新？')){
            applicationCache.swapCache();
            location.reload();
        }
    },true);
}