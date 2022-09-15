interface ListNode<T> {
  val: T | undefined;
  prev: ListNode<T> | undefined;
  next: ListNode<T> | undefined;
}

class LinkedList<TElement> {
  private headNode: ListNode<TElement> = {
    val: undefined,
    prev: undefined,
    next: undefined,
  };
  private tailNode: ListNode<TElement> | undefined = this.headNode;
  private nodeCount = 0;

  public push(element: TElement) {
    let elementNode: ListNode<TElement> = {
      val: element,
      prev: undefined,
      next: undefined,
    };
    if (this.nodeCount === 0) {
      this.headNode.next = elementNode;
      elementNode.prev = this.headNode;
      this.tailNode = elementNode;
      this.nodeCount += 1;
      return
    }
    if (!!this.tailNode) {
      this.tailNode.next = elementNode;
      elementNode.prev = this.tailNode;
      this.tailNode = elementNode;
    }
    this.nodeCount += 1;
  }

  public pop(): TElement | void {
    if (this.nodeCount === 0) {
      return;
    }
    if (!!this.tailNode) {
      let tailPrevNode = this.tailNode.prev as ListNode<TElement>;
      tailPrevNode.next = undefined;
      this.tailNode.prev = undefined;
      let popValue = this.tailNode.val;
      this.tailNode = tailPrevNode;
      this.nodeCount -= 1;
      return popValue;
    }
  }

  public shift(): TElement | void {
    if (this.nodeCount === 0) {
      return;
    }

    if (!!this.headNode) {
      let headNextNode = this.headNode.next as ListNode<TElement>;
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

  public unshift(element: TElement) {
    let elementNode: ListNode<TElement> = {
      val: element,
      prev: undefined,
      next: undefined,
    };
    if (this.nodeCount === 0) {
      this.headNode.next = elementNode;
      elementNode.prev = this.headNode;
      this.tailNode = elementNode;
    } else {
      let headNextNode = this.headNode.next as ListNode<TElement>;
      this.headNode.next = elementNode;
      elementNode.prev = this.headNode;
      headNextNode.prev = elementNode;
      elementNode.next = headNextNode;
    }
    this.nodeCount += 1;
  }

  public delete(element: TElement) {
    if (this.nodeCount === 0) {
      return;
    }
    let currentNode: ListNode<TElement> | undefined = this.headNode;
    while (!!currentNode) {
      if (currentNode.val === element) {
        let currentNodePrev = currentNode.prev as ListNode<TElement>;
        let currentNodeNext = currentNode.next as ListNode<TElement>;
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

  public count(): number {
    return this.nodeCount;
  }
}

const list = new LinkedList<number>();
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