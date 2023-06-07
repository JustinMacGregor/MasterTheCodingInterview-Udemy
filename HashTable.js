// Define a class called HashTable
class HashTable {
    // Constructor function that initializes a HashTable object with a given size
    constructor(size){
        // Create an array with the specified size to store data
        this.data = new Array(size);
        // Alternatively, you can use an empty array:
        // this.data = [];
    }

    // Private method to hash the given key and return a hash value
    _hash(key) {
        let hash = 0;
        // Iterate over each character in the key
        for (let i =0; i < key.length; i++){
            // Calculate the hash by multiplying the ASCII value of the character with its index, and then taking the modulo of the array size
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        // Return the hash value
        return hash;
    }

    // Method to set a key-value pair in the hash table
    set(key, value) {
        // Get the hash value for the key
        let address = this._hash(key);
        // If the address is empty, create an empty array at that address
        if (!this.data[address]) {
            this.data[address] = [];
        }
        // Push the key-value pair into the bucket at the address
        this.data[address].push([key, value]);
        // Return the updated data array
        return this.data;
    }

    // Method to get the value associated with a given key in the hash table
    get(key){
        // Get the hash value for the key
        const address = this._hash(key);
        // Get the bucket at the address
        const currentBucket = this.data[address];
        // If the bucket exists, iterate over its elements
        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++){
                // Check if the current key in the bucket matches the given key
                if(currentBucket[i][0] === key) {
                    // Return the corresponding value
                    return currentBucket[i][1];
                }
            }
        }
        // If the key is not found, return undefined
        return undefined;
    }

    // Method to retrieve all keys in the hash table
    keys(){
        const keysArray = [];
        // Log the length of the data array (for debugging purposes)
        console.log(this.data.length);
        // Iterate over each element in the data array
        for (let i = 0; i < this.data.length; i++){
            // If the current element is not empty (i.e., a bucket exists)
            if(this.data[i]){
                // Push the first key in the bucket into the keysArray
                keysArray.push(this.data[i][0][0]);
            }
        }
        // Return the keysArray
        return keysArray;
    }
}

// Create a new instance of the HashTable class with a size of 50
const myHashTable = new HashTable(50);
// Set a key-value pair 'grapes' and 10000 in the hash table
myHashTable.set('grapes', 10000);
// Set the same key-value pair again (overwriting the previous value)
myHashTable.set('grapes', 10000);
// Retrieve the value associated with the key 'grapes'
myHashTable.get('grapes');
// Set a key-value pair 'apples' and 9 in the hash table
myHashTable.set('apples', 9);
// Retrieve the value associated with the key 'apples'
myHashTable.get('apples');
// Retrieve all the keys in the hash table
myHashTable.keys();
