"use strict";
// 实现一个数组的扁平化，一次扁平处理
exports.__esModule = true;
exports.flatten2 = exports.flatten1 = void 0;
// concat 实现
function flatten1(ele) {
    var arr = [];
    ele.forEach(function (item) {
        arr = arr.concat(item);
    });
    return arr;
}
exports.flatten1 = flatten1;
// const arr = [1, 2, [3, 4], 5];
// console.info(flatten1(arr));
// push 实现
function flatten2(ele) {
    var res = [];
    ele.forEach(function (item) {
        if (Array.isArray(item)) {
            item.forEach(function (n) { return res.push(n); });
        }
        else {
            res.push(item);
        }
    });
    return res;
}
exports.flatten2 = flatten2;
var arr = [1, 2, [3, 4], 5];
console.info(flatten2(arr));
