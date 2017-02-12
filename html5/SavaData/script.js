/**
 * Created by asus on 2016/11/26.
 */
window.indexDB = window.indexDB||window.webkitIndexedDB||window.mozIndexedDB||window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction||window.webkitIDBTransaction||window.mozIDBTransaction||window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange||window.webkitIDBKeyRange||window.mozIDBKeyRange||window.msIDBKeyRange;
window.IDBCursor = window.IDBCursor||window.webkitIDBCursor||window.mozIDBCursor||window.msIDBCursor;

function SaveData() {
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

        //start
        var tx = idb.transaction(['Users'],"readwrite");
        var store = tx.objectStore('Users');
        var value ={
            userId: 1,
            userName: '张三',
            address: '住址1'
        };
        var req = store.put(value);
        req.onsuccess = function (e) {
            alert('SaveData successful!');
        };
        req.onerror = function (e) {
            alert('SaveData failed');
        };
    };
    dbConnect.onerror = function () {
        alert('Database link failed');
    }
}