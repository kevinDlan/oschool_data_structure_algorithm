import Recursion from "../src/dsa/recursion"

test('factoriel of 5 return 120', () => 
    {
        expect(Recursion.factoriel(5)).toBe(120);
    });

test('factoriel of 0 return 1', () => 
    {
        expect(Recursion.factoriel(0)).toBe(1);
    });

test('factoriel of 1 return 1', () => 
    {
        expect(Recursion.factoriel(1)).toBe(1);
    });

test('fibonacci of 0 return 0', () => 
    {
       expect(Recursion.fibonacci(0)).toBe(0);
    });

test('fibonacci of 1 return 1', () => 
    {
       expect(Recursion.fibonacci(1)).toBe(1);
    });

test('fibonacci of 6 return 8', () => 
    {
       expect(Recursion.fibonacci(6)).toBe(8);
    });


