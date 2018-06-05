'use strict'

class Stack extends MyType
{
    add(elem)
    {
        this.data.unshift(elem)
    }

    dell()
    {
        this.data.shift()
    }

    get()
    {
        return this.data[0]
    }
}
