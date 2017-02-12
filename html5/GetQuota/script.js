/**
 * Created by asus on 2016/11/30.
 */
function getQuota(){
    var size = document.getElementById('capacity').value;
    window.webkitStorageInfo.requestQuota(TEMPORARY,size,
    function (grantedBytes) {
        var text = 'get Quota successful!<br />quota size:';
        var strBytes,intBytes;
        if(grantedBytes>= 1024*1024*1024){
            intBytes = Math.floor(grantedBytes/(1024*1024*1024));
            text+=intBytes+'GB';
            grantedBytes = grantedBytes%(1024*1024*1024);
        }
        if(grantedBytes>=1024*1024){
            intBytes = Math.floor(grantedBytes/(1024*1024));
            text+=intBytes+'MB';
            grantedBytes = grantedBytes%(1024*1024);
        }
        if(grantedBytes>1024){
            intBytes = Math.floor(grantedBytes/1024);
            text+=intBytes+'KB';
            grantedBytes = grantedBytes%(1024);
        }
        text+=grantedBytes+'Bytes';
        document.getElementById('result').innerHTML = text;alert(size);
        },errorHandler);
}
function errorHandler() {
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