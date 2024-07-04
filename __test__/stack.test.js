import Stack from "../src/dsa/stack.js";

describe('Test Stack class', ()=>
    {
        let stack;

        beforeEach(() => {
            stack = new Stack();
        });

        test('Intialy the stack is empty', () => 
        {
          expect(stack.isEmpty()).toBe(true);
        });

        test('Push method add element in stack', () => 
        {
          stack.push(10);
          stack.push(20);
          expect(stack.isEmpty()).toBe(false);
          expect(stack.peek()).toBe(20);
        });


        test('Pop on an empty stack return null', () => 
        {
            const elt = stack.pop();
            expect(elt).toBeNull();
        });
        
        test('Pop method remove and return the element on top of the stack', () =>
        {
          stack.push(10);
          stack.push(20);
          const elt = stack.pop();
          expect(elt).toBe(20);
          expect(stack.peek()).toBe(10);
        });


        test('Peek on an empty stack return null', () => 
        {
            const elt = stack.peek();
            expect(elt).toBeNull();
        });


        test('isEmpty return true for an empty stack and false for a not empty stack', () => 
            {
                expect(stack.isEmpty()).toBe(true);
                stack.push(50);
                expect(stack.isEmpty()).toBe(false);
            });
    });
