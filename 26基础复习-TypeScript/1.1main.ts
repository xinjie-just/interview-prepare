// console.log("Hello World");

// let x: [number, string] = [1, "2"];
// // x[1] = 3;  // 不能将类型“number”分配给类型“string”。
// x.push(1); //  通过 push 改变了元祖的长度。这是一个 bug。

// console.log(x);

// // 联合类型
// let b: number | string;
// console.log(typeof b);

// function merge(
//   value1: number | string,
//   value2: number | string
// ): number | string {
//   if (typeof value1 === "string" || typeof value2 === "string") {
//     return value1.toString() + value2.toString();
//   } else {
//     return value1 + value2;
//   }
// }
// let total = merge(1, 2);
// let joint = merge("1", "2");
// console.log(total);
// console.log(joint);

// let n: 1 | "2" | true;
// n = 4; // 不能将类型“4”分配给类型“true | 1 | "2"”

// 枚举类型

// enum Color {
//   red,
//   green,
//   blue,
// }
// console.log(Color.red);

// enum Color2 {
//   red = 2,
//   green = 4,
//   blue = "4",
// }
// console.log(Color2.blue);

// any 和 unknown 类型

// let a: any = 1;
// a = "1";
// a = true;
// a = [1];
// a();  // 报错 a is not a function
// a.toUpperCase();

let a: unknown = 1;
a = "1";
a = true;
a = [1];
a(); // 报错 a is not a function
a.toUpperCase();
