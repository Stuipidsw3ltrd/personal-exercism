class LinkedList {
    constructor() {
        this.headNode = {
            val: undefined,
            prev: undefined,
            next: undefined,
        };
        this.tailNode = this.headNode;
        this.nodeCount = 0;
    }
    push(element) {
        let elementNode = {
            val: element,
            prev: undefined,
            next: undefined,
        };
        if (this.nodeCount === 0) {
            this.headNode.next = elementNode;
            elementNode.prev = this.headNode;
            this.tailNode = elementNode;
            this.nodeCount += 1;
            return;
        }
        if (!!this.tailNode) {
            this.tailNode.next = elementNode;
            elementNode.prev = this.tailNode;
            this.tailNode = elementNode;
        }
        this.nodeCount += 1;
    }
    pop() {
        if (this.nodeCount === 0) {
            return;
        }
        if (!!this.tailNode) {
            let tailPrevNode = this.tailNode.prev;
            tailPrevNode.next = undefined;
            this.tailNode.prev = undefined;
            let popValue = this.tailNode.val;
            this.tailNode = tailPrevNode;
            this.nodeCount -= 1;
            return popValue;
        }
    }
    shift() {
        if (this.nodeCount === 0) {
            return;
        }
        if (!!this.headNode) {
            let headNextNode = this.headNode.next;
            this.headNode.next = headNextNode.next;
            if (!!headNextNode.next) {
                headNextNode.next.prev = this.headNode;
            }
            headNextNode.prev = undefined;
            headNextNode.next = undefined;
            this.nodeCount -= 1;
            return headNextNode.val;
        }
    }
    unshift(element) {
        let elementNode = {
            val: element,
            prev: undefined,
            next: undefined,
        };
        if (this.nodeCount === 0) {
            this.headNode.next = elementNode;
            elementNode.prev = this.headNode;
            this.tailNode = elementNode;
        }
        else {
            let headNextNode = this.headNode.next;
            this.headNode.next = elementNode;
            elementNode.prev = this.headNode;
            headNextNode.prev = elementNode;
            elementNode.next = headNextNode;
        }
        this.nodeCount += 1;
    }
    delete(element) {
        if (this.nodeCount === 0) {
            return;
        }
        let currentNode = this.headNode;
        while (!!currentNode) {
            if (currentNode.val === element) {
                let currentNodePrev = currentNode.prev;
                let currentNodeNext = currentNode.next;
                currentNodePrev.next = currentNodeNext;
                if (!!currentNodeNext) {
                    currentNodeNext.prev = currentNodePrev;
                }
                currentNode.prev = undefined;
                currentNode.next = undefined;
                this.nodeCount -= 1;
                return;
            }
            currentNode = currentNode.next;
        }
        return;
    }
    count() {
        return this.nodeCount;
    }
}
const list = new LinkedList();
list.push(10);
// console.log(list.pop());
list.push(20);
// list.push(3);
// list.push(4);
// console.log(list.shift())
// list.push(5);
console.log(list.pop());
console.log(list.pop());
// console.log(list.count())
