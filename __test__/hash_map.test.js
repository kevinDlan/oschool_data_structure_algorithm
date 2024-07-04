import HashMap from "../src/dsa/hash_map.js";

describe('Test Hashmap class', () =>
{
    let hashMap;

    beforeEach(() => {
        hashMap = new HashMap(10);
    });

    test('initialy, all buckets are empty', () => {
        for (let i = 0; i < hashMap.size; i++) {
            expect(hashMap.buckets[i]).toEqual([]);
        }
    });

    test('set adds a new key-value to the appropriate bucket', () => {
        hashMap.set('key1', 'value1');
        const index = hashMap.hash('key1');
        expect(hashMap.buckets[index]).toEqual([{ key1:'value1' }]);
    });
    
    test('set updates the value if the key already exists', () => 
    {
        hashMap.set('key1', 'value1');
        hashMap.set('key1', 'value2');
        const index = hashMap.hash('key1');
        console.log(hashMap.buckets[index]);
        expect(hashMap.buckets[index]).toEqual([{ key:'value2' }]);
    });
})