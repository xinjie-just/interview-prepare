# 把一个数组旋转 k 步

例如：
一个数组 a 是 [1, 2, 3, 4, 5, 6, 7]，旋转 3 步结果是 [5, 6, 7, 1, 2, 3, 4]。

- 第一步，把最后一个数 7 放置于数组最前面。变成 [7, 1, 2, 3, 4, 5, 6]。
- 第二步，把最后一个数 6 放置于数组最前面。变成 [6，7, 1, 2, 3, 4, 5]。
- 第三步，把最后一个数 5 放置于数组最前面。变成 [5, 6, 7, 1, 2, 3, 4]。

有两种方法：

1. 数组拆分再组合

- 第一步，将其拆为 b 数组 [1, 2, 3, 4] 和 c 数组 [5, 6, 7] 两个数组
- 第二步，将两个数组 c.concat(b) 组合。

2. 数组删除最后一个元素再添加到头部。

- 将数组最后一个元素 7 删除 pop()，返回的是删除的元素 7，添加 unshift() 到数组的最前面。第一次返回 [7, 1, 2, 3, 4, 5, 6]。
- 重复 k 步。

```javascript
// 第一种方法
function rotate1(arr, k) {
    if (!arr) {
        console.log("数组是必须的");
        return;
    }
    const len = arr.length;
    if (!len) return [];
    if (!k) return arr; 
    if (typeof k !== 'number') {
        console.log("k 必须是一个数字");
        return;
    }
    const step = Math.abs(k % len); // 考虑 k 值大于数组长度情况
    const start = arr.slice(-step);
    const end = arr.slice(0, len - step);
    return start.concat(end);
}

```

```javascript
// 第二种方法
function rotate2(arr, k) {
    if (!arr) {
        console.log("数组是必须的");
        return;
    }
    const len = arr.length;
    if (!len) return [];
    if (!k) return arr; 
    if (typeof k !== 'number') {
        console.log("k 必须是一个数字");
        return;
    }
    const step = Math.abs(k % len); // 考虑 k 值大于数组长度情况
    for (let i = 0; i < step; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

```
