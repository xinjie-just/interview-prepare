# JS 实现数字千分位格式化

数字千分位格式化，比如：12345678 -> '12,345,678'。

```javascript
function format(number) {
    let res = '';
    if (typeof number !== 'number') return;
    let s = String(number);
    let len = s.length;
    if (len < 4) {
        return s;
    }
    // 12345678
    for (let i = len - 1; i >= 0; i--) {
        // len 8
        // i 5 
        // j 3
        const j = len - i;

        if (j % 3 === 0) { // 6、9、12位
            if (i === 0) {
                res = s[i] + res;
            } else {
                res = ',' + s[i] + res;
            }
        } else {
            res = s[i] + res;
        }
    }
    return res;
}

console.log(format(12345678));  // '12,345,678'
```

还有一种方式：Number.prototype.toLocaleString() 方式。