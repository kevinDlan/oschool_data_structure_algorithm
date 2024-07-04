import Queue from "../src/dsa/queue";


describe('Test Queue class', () =>
{
    let queue;

    beforeEach(() => 
    {
        queue = new Queue();
    });

    test('Initialy the queue is empty', () => 
    {
        expect(queue.isEmpty()).toBe(true);
    });
    

    test('Enqueue add element in queue', () => 
    {
       queue.enqueue(10);
       expect(queue.isEmpty()).toBe(false);
       expect(queue.front()).toBe(10);
    });

    test('Dequeue remove and return  the element on the top queue when the queue is not empty otherwise return null', () =>
    {
        const dequeueEmptyQueue = queue.dequeue();
        expect(dequeueEmptyQueue).toBeNull();
        queue.enqueue(60);
        queue.enqueue(1);
        const dequeueElt = queue.dequeue();

        expect(dequeueElt).toBe(60);
        expect(queue.front()).toBe(1);
    });

    test('Front return the element of the top of queue when the queue is not empty otherwise return null', () => 
    {
        expect(queue.front()).toBeNull();
        queue.enqueue(10);
        queue.enqueue(50);
        expect(queue.front()).toBe(10);
    });

    test('IsEmpty return true when the queue is empty and false otherwise',() => 
    {
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(10);
        queue.enqueue(0);
        expect(queue.isEmpty()).toBe(false);
    });


    
});