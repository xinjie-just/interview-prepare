"use strict";
// 实现一个数组的深度扁平化
exports.__esModule = true;
exports.flattenDeep2 = void 0;
// concat 实现
// export function flattenDeep1(ele: any[]): any[] {
//   let arr = [];
//   ele.forEach((item) => {
//     if (Array.isArray(item)) {
//       const formatArr = flattenDeep1(item);
//       arr = arr.concat(formatArr);
//     } else {
//       arr = arr.concat(item);
//     }
//   });
//   return arr;
// }
// const arr = [1, 2, [3, 4, ["a", [true], "b"]], 5];
// console.info(flattenDeep1(arr));
// push 实现
function flattenDeep2(ele) {
    var res = [];
    ele.forEach(function (item) {
        if (Array.isArray(item)) {
            var formatArr = flattenDeep2(item);
            formatArr.forEach(function (n) { return res.push(n); });
        }
        else {
            res.push(item);
        }
    });
    return res;
}
exports.flattenDeep2 = flattenDeep2;
var arr = [1, 2, [3, 4, ["a", [true], "b"]], 5];
console.info(flattenDeep2(arr));
