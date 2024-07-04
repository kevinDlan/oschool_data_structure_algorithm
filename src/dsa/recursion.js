export default class Recursion
{
    static  factoriel(n) 
    {
        if(n === 0 || n === 1)
        {
            return 1;
        }

        return n * Recursion.factoriel(n-1);
    }

    static fibonacci(n) 
    {
        if( n <= 1)
        {
            return n
        }
        
        return Recursion.fibonacci(n - 1) + Recursion.fibonacci(n - 2)
    }
}