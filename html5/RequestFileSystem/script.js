/**
 * Created by asus on 2016/11/30.
 */
window.requestFileSystem = window.requestFileSystem||window.webkitRequestFileSystem;

var fs = null;
if(window.requestFileSystem)
    initFS();
function initFS() {
    window.requestFileSystem(window.TEMPORARY,1024*1024,
    function (filesystem) {
        fs = filesystem;
    },errorHandler);
}
function errorHandler(e) {
    var msg = '';
    switch (e.code){
        case  FileError.QUOTA_EXCEEDED_ERR:
            msg = 'The file system used by the storage space overflow';
            break;
        case FileError.NOT_FOUND_ERR:
            msg = 'Not found way';
            break;
        case FileErrror.SECURITY_ERR:
            msg = 'Security error caused by improper operations';
            break;
        case FileError.INVALID_MODIFICATION_ERR:
            msg = 'Unable to perform this operation';
            break;
        case FileError.INVALID_START_ERR:
            msg = 'The state of the specified is invalid';
            break;
    };
    document.getElementById('result').innerHTML = 'The current operation error:'+ msg;
}