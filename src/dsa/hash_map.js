export default class HashMap{
    constructor(size)
    {
        this.size = size;
        this.buckets = Array(size).fill(null).map(() => []);
    }

    hash(key)
    {
        return `${key}`.split('').reduce((acc, char) => acc + char.charCodeAt(0) , 0) % this.size;
    }

    set(key, value)
    {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const existing = bucket.find(item => item[key] === key);

        if(existing != null)
        {
            existing.value = value
        }else
        {
            bucket.push({[key] : value});
        }
    }

    get(key)
    {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const found = bucket.find( item => item.key === key );
        return found ? found : null;
    }

    remove(key)
    {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const itemIndex = bucket.findIndex( item => item.key === key);

        if(itemIndex !== -1 )
        {
            bucket.splice(itemIndex, 1)
        }
    }
}