// a list node contains two items: the data and the pointer to the next node.
class listNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class linkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = null
    }

    // this method push data in linkedlist
    push(data) {
        let newNode = new listNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode
    }

    // return true or false if the element in linkedlist
    search(data) {
        if (!this.head) return null;
        if (this.head.data === data) return true;
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.data === data) return true;
            currentNode = currentNode.next
        }
        return false
    }

    // delete element from linkedlist
    deleteElemet(data) {
        if (!this.head) return null;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        };
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.data === data) {
                currentNode.next = currentNode.next.next
                if (currentNode.next === null) this.tail = currentNode;
                return;
            }
            currentNode = currentNode.next;
        }
    }

    // returns the number of nodes present in the linked list.
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    // This method empties out the list.
    clear() {

        this.head = null
    }

    // This method returns the last node of the linked list.
    getLast() {
        return this.tail
    }

    // This method returns the first node of the linked list.
    getFirst() {
        return this.head;
    }

    // print all data from linkedlist
    print() {
        if (!this.head) return null;
        let currentNode = this.head;
        while (currentNode.next) {
            console.log(currentNode.data);
            currentNode = currentNode.next
        }
        console.log(currentNode.data);
    }
}

let node = new linkedList();
node.push(1);
node.push(2);
node.push(3);

let search = node.search(1);
let getFirstElem = node.getFirst().data
let getLastElem = node.getLast().data
let numberOfNodes = node.size()

node.print() // 1 2 3

console.log(search); // true
console.log(getFirstElem); // 1
console.log(getLastElem); // 3
console.log(numberOfNodes); // 3

node.deleteElemet(1);

node.print() // 2 3