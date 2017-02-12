/**
 * Created by asus on 2016/11/26.
 */
window.indexDB = window.indexDB||window.webkitIndexedDB||window.mozIndexedDB||window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction||window.webkitIDBTransaction||window.mozIDBTransaction||window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange||window.webkitIDBKeyRange||window.mozIDBKeyRange||window.msIDBKeyRange;
window.IDBCursor = window.IDBCursor||window.webkitIDBCursor||window.mozIDBCursor||window.msIDBCursor;

var dbName = 'indexedDBTest';
var dbVersion = 20161204;
var idb;
function window_onload() {
    document.getElementById('btnSaveData').disabled = true;
    document.getElementById('btnSearchData').disabled = true;
}
function ConnectDataBase() {
    var dbConnect = indexedDB.open(dbName,dbVersion);
    dbConnect.onsuccess = function (e) {
        idb = e.target.result;
        alert('link datebase success!');
        document.getElementById('btnSaveData').disabled = false;
    };
    dbConnect.onerror = function () {
        alert('link datebase fail!');
    };
}
function SaveData() {
    var tx = idb.transaction(['Users'],'readwrite');
    tx.oncomplete = function () {
        alert('save the data success!');
        document.getElementById('btnSearchData').disabled = false;
    }
    tx.onabort = function () {
        alert('save the data fail!');
    }
    var store = tx.objectStore('Users');
    var value = {
        userId: 1,
        userName:'张三',
        address:'住址1'
    };
    store.put(value);
    var value = {
        userId: 2,
        userName:'李四',
        address:'住址2'
    };
    store.put(value);var value = {
        userId: 3,
        userName:'王五',
        address:'住址3'
    };
    store.put(value);var value = {
        userId: 4,
        userName:'赵六',
        address:'住址4'
    };
    store.put(value);
}
function SearchData() {
    var tx = idb.transaction(['Users'],'readonly');
    var store = tx.objectStore('Users');
    var range = IDBKeyRange.bound(1,4);
    var direvtion = 'next';
    var req = store.openCursor(range,direvtion);
    req.onsuccess = function () {
        var cursor = this.result;
        if(cursor){
            alert('retrieve one data, user name is :'+ cursor.value.userName);
            cursor.continue();
        }
        else{
            alert('stop retrieve!');
        }
    }
    req.onerror = function () {
        alert('retrieve data failed!');
    }
}