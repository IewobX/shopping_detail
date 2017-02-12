/**
 * Created by asus on 2016/11/26.
 */
window.indexDB = window.indexDB||window.webkitIndexedDB||window.mozIndexedDB||window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction||window.webkitIDBTransaction||window.mozIDBTransaction||window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange||window.webkitIDBKeyRange||window.mozIDBKeyRange||window.msIDBKeyRange;
window.IDBCursor = window.IDBCursor||window.webkitIDBCursor||window.mozIDBCursor||window.msIDBCursor;

function GetData() {
    //Database name
    var dbName = 'indexedDBTest';
    //Database version
    var dbVersion = 20161204;
    //Database link
    var idb;
    var dbConnect = indexedDB.open(dbName,dbVersion);
    dbConnect.onsuccess = function (e) {
        //linked successful
        idb = e.target.result;

        //start transaction
        var tx = idb.transaction(['Users'],"readonly");
        var store = tx.objectStore('Users');
        var req = store.get(1);
        req.onsuccess = function () {
            if(this.result == undefined){
                alert('No qualified data!');
            }
            else{
                alert('GetData successful,user name is' + this.result.userName);
            }
        }
        req.onerror = function () {
            alert('GetData failed!');
        }
    };
    dbConnect.onerror = function () {
        alert('Database link failed!');
    }
}