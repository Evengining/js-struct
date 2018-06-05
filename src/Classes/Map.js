'use strict'

class TypeMap extends MyType
{
    constructor()
    {
        super()
        this.data = {}
        this.counter = 0
    }

    get(key)
    {
        return (this.search(key)) ? (this.data[key]) : undefined
    }

    set(key, value)
    {
        if(this.search(key)) {
            return false
        } else {
            this.data[key] = value
            this.counter++
        }
    }

    size()
    {
        return this.counter
    }

    search(key)
    {
        return (key in this.data) ? true : false
    }

    dell(key)
    {
        if(this.search(key)) {
            delete this.data[key]
            this.counter--
        } else {
            return false
        }
    }
}
