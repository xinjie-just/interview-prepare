// 创建链表
function createLinkTable(arr) {
    if (!arr) {
        throw new Error("必须传入一个数组！");
    }
    const len = arr.length;
    if (!len) {
        return {};
    }
    if (len === 1) {
        return {value: arr[0]}
    }
    // len >= 2, 假设为 3
    let curNode = {
            value: arr.at(-1)
        };
    // 时间复杂度 O(n)
    // 空间复杂度 O(1)，就是将数组转换，没有占用多余空间
    for (let i = len - 2; i >= 0; i--) {
        curNode = {
            value: arr[i], 
            next: curNode
        }
    }
    return curNode;
}

// 反转链表
function reserveLinkTable(node) {
    // 以链表中第一个元素为 nextNode 为基准，定义 3 个指针
    let prevNode = undefined;
    let curNode = undefined;
    let nextNode = node;

    if (!node) {
        throw new Error("链表至少一个节点！");
    }

    while(nextNode) {
        // 第一个元素，删除 next，防止循环引用
        if (curNode && !prevNode) {
            delete curNode.next;
        }

        // 反转指针，箭头方向改变
        if (curNode && prevNode) {
            curNode.next = prevNode;
        }

        // 指针整体向后移动
        prevNode = curNode;
        curNode = nextNode;
        nextNode = nextNode.next;
    }

    // 当 nextNode 无值（undefined）时
    curNode.next = prevNode;
    return curNode;
}


let list = createLinkTable([100, 200, 300, 400]);
console.log("list", list);
let list1 = reserveLinkTable(list);
console.log("list1", list1);