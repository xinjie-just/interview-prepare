// 实现一个数组的扁平化，一次扁平处理

// concat 实现
export function flatten1(ele: any[]): any[] {
  let arr = [];
  ele.forEach((item) => {
    arr = arr.concat(item);
  });
  return arr;
}

// const arr = [1, 2, [3, 4], 5];
// console.info(flatten1(arr));

// push 实现
export function flatten2(ele: any[]): any[] {
  const res = [];

  ele.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((n) => res.push(n));
    } else {
      res.push(item);
    }
  });

  return res;
}

const arr = [1, 2, [3, 4], 5];
console.info(flatten2(arr));
