class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insert(position, ele) {
        // 判斷極限值
        if (position > -1 && position <= this.length) {
            let newNode = new Node(ele)
            let current = this.head; // 從頭開始

            // 判斷是否為 head
            if (position == 0) {
                newNode.next = current; // 插在現有第一個 node 之前，新 node 指向現有第一個
                this.head = newNode;
            } else {
                // 不為 head
                let previous;
                let index = 0;
                while (index != position) { // 遍歷直到 index = position
                    index++;
                    previous = current; // previous + 1
                    current = current.next; // current + 1
                }
                newNode.next = current;
                previous.next = newNode;
            }
            this.length++; // 總長度 +1
            return true;
        } else {
            return false;
        }
    }

    append(ele) {
        let newNode = new LinkedListNode(ele);

        // 判斷 nodelist 是不是空的
        if (this.head == null) {
            // 空
            this.head = newNode
        } else {
            // 不是空的
            // loop nodelist 到最後一個然後加進去 
            // 最後一個就是 current.next == null
            let current = this.head; // 從頭開始遍歷
            while (current.next != null) {
                current = current.next
            }
            current.next = newNode
        }
        this.length++;
    }

    removeAt(position) {
        // 判斷極限值
        if (position > -1 && position < nodelist.length) {
            let current = this.head
            if (position == 0) {
                // 砍第一個 node，第二個當 head
                this.head = current.next
            } else {
                let index = 0;
                let previous;

                // loop 到 position 然後
                while (position != index) {
                    index++;
                    previous = current;
                    current = current.next;
                }
                previos.next = current.next // 前一個 node next 跳過自己指向下一個 node
            }
            this.length--;
            return current.ele;

        } else {
            // 不能執行這個方法
            return false
        }
    }

    remove(ele) {
        let index = this.indexOf(ele)
        return this.removeAt(index)
    }

    indexOf(ele) {
        // 慢慢找，找到回傳 index
        let index = -1;
        let current = this.head
        while (current) {  // 不知道 link list 長度，不斷遍歷 node 直到最後一個為止 
            index++;
            if (current.ele == ele) {
                return index;
            }
            current = current.next
        }
        return -1;  // 找不到這個 node
    }

    // toString 會透過 while 迴圈把 LinkedList 物件內容轉換成字串
    toString() {
        let current = this.head
        let string = ''
        while (current) {
            string += current.ele
            current = current.next
        }
        return string
    }

    size() {
        return this.length;
    }
}












