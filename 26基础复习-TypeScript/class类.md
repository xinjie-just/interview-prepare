# class 类

```typescript
interface IPoint {
    x: number;
    y: number;
    getDistance: (p: IPoint) => number;
}

class point implements IPoint {
    x: number;
    y: number;
    constructor(x?: number; y?: number) {
        this.x = x;
        this.y = y;
    }
    getDistance(p: IPoint) {
        return Math.sqrt(Math.pow(p.x - this.x) + Math.pow(p.y - this.y));
    }
}
```

**JavaScript 构造函数不可以重载（overload）。也就是说一个类有且仅有一个 constructor。constructor 中的参数使用可选参数，或者设置默认值就变得尤为重要。**