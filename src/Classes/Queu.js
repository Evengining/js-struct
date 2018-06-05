'use strict'

class Queu extends MyType
{
    add(elem)
    {
        this.data.push(elem)
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