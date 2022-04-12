const data = [
  { name: 'foo', age: 16, city: 'shanghai' },
  { name: 'bar', age: 24, city: 'hangzhou' },
  { name: 'fiz', age: 22, city: 'shanghai' },
  { name: 'baz', age: 19, city: 'hangzhou' }
];

query(data)
    .where(item => item.age > 18)
  .orderBy('age')
  .groupBy('city')
  .execute();


// 结果返回
// [
//   [
//     { name: 'baz', age: 19, city: 'hangzhou' },
//     { name: 'bar', age: 24, city: 'hangzhou' },
//   ],
//   [
//     { name: 'fiz', age: 22, city: 'shanghai' },
//   ]
// ]

let index = 0;
let stack = [];
function next(){
    let fn = stack[index];
    index++;
    if(typeof fn === 'function') {
        fn();
    }
}
function T(name) {
    stack.push(function () {
        
        next();
    })
}

function task(name) {
    return new T(name)
}

T.prototype.sleep = function(delay) {
    stack.push(function() {
        setTimeout(() => {
        console.log('sleep have run end')
        next()
        },delay)
    })
    return this
}

T.prototype.where = function(filterFn) {
    stack.push(function () {
        
        next()
    })
    return this;
}

task('zhangsan').sleep(1000).eat().sleep(1000).eat()
next()
 

