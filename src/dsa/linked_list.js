export class LinkedListNode {
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

export default  class LinkedList {
    constructor()
    {
        this.head = null;
    }

    append(value) 
    {
        const newNode = new LinkedListNode(value);

        if(!this.head)
        {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next)
        {
            current = current.next;
        }

        current.next = newNode;
    }

    prepend(value) 
    {
        const newNode = new LinkedListNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(value)
    {
        if(!this.head) return;

        if(this.head.value === value)
        {
            this.head = this.head.next;
            return;
        }

        let current = this.head;

        while(current.next && current.next.value !== value)
        {
            current = current.next;
        }

        if(current.next)
        {
            current.next = current.next.next;
        }
    }

    find(value)
    {
        let current = this.head;
        while(current && current.value !== value)
        {
            current = current.next;
        }

        return current.next;
    }

}