class twoStackOneQueue {
    constructor(stack1, stack2) {
        this.stack1 = stack1;
        this.stack2 = stack2;
    }
    // O(1)
    add(item) {
        this.stack1.push(item);
    }
    // O(n)
    delete() {
        let res = [];
        while(this.stack1.length) {
            const item = this.stack1.pop();
            this.stack2.push(item);
        }
        res = this.stack2.pop();
        while(this.stack2.length) {
            const item = this.stack2.pop();
            this.stack1.push(item);
        }
        return res;
    }
    get stack() {
        return this.stack1;
    }
    get length() {
        return this.stack1.length;
    }
}

let queue = new twoStackOneQueue([], []);
queue.add(100);
queue.add(200);
queue.add(300);
console.log(queue.length);
console.log(queue.stack);
console.log(queue.delete());
console.log(queue.stack);
console.log(queue.length);