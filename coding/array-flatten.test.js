// import { faltten1 } from './array-faltten';

const faltten1 = require('./array-faltten1.js');

test('空数组', () => {
  expect(faltten1([])).toBe([]);
});

test('扁平数组', () => {
  expect(faltten1([1, 2, 3])).toBe([1, 2, 3]);
});

test('一次嵌套数组', () => {
  expect(faltten1([1, 2, 3, [4], 5])).toBe([1, 2, 3, 4, 5]);
});

test('两次嵌套数组', () => {
  expect(faltten1([1, 2, 3, [4, [6]], 5])).toBe([1, 2, 3, 4, [6], 5]);
});