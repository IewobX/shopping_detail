/**
 * Created by asus on 2017/1/13.
 */
window.requestFileSystem = window.requestFileSystem||window.webkitRequestFileSystem;

function createFile() {
    var size = document.getElementById('FileSize').value;

    window.requestFileSystem(
        PERSISTENT,
        size,
        function (fs) {
            var filename = document.getElementById('FileName').value;
            fs.root.getFile(
                filename,
                {create: true},
                function (fileEntry) {
                    //alert(1);
                    var text = "All Path of File:"+fileEntry.fullPath+"<br />";
                    text += "File Name:"+fileEntry.name+"<br />";
                    document.getElementById('result').innerHTML = text;
                },
                errorHandler
            );
        },
        errorHandler
    );
}
function errorHandler(e) {
    //代码略
}