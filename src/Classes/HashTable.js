/* Hash Table */

class HashTable
{
    constructor()
    {
        this.data = []
        this.limit = 64
    }

    ouput()
    {
        console.log(this.data)
    }

    hash(string, max)
    {
        let hash = 0
        for (let i = 0; i < string.length; i++) {
            hash += string.charCodeAt(i)
        }
        return hash % max
    }

    add(key, value)
    {
        const index = this.hash(key, this.limit);
        if (this.data[index] === undefined) {
            this.data[index] = [
                [key, value]
            ]
        } else {
            let inserted = false;
            for (let i = 0; i < this.data[index].length; i++) {
                if (this.data[index][i][0] === key) {
                    this.data[index][i][1] = value
                    inserted = true
                }
            }
            if (inserted === false) {
                this.data[index].push([key, value])
            }
        }
    }

    remove(key)
    {
        const index = this.hash(key, this.limit)
        if (this.data[index].length === 1 && this.data[index][0][0] === key) {
            delete this.data[index]
        } else {
            for (let i = 0; i < this.data[index].length; i++) {
                if (this.data[index][i][0] === key) {
                    delete this.data[index][i]
                }
            }
        }
    }

    get(key)
    {
        let index = this.hash(key, this.limit)
        if (this.data[index] === undefined) {
            return undefined;
        } else {
            for (let i = 0; i < this.data[index].length; i++) {
                if (this.data[index][i][0] === key) {
                    return this.data[index][i][1]
                }
            }
        }
    }

}





