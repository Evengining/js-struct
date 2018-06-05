'use strict'

class MyType
{
    constructor(data = [])
    {
        Array.isArray(data) ? this.data = Object.assign([], data) : this.data = []
    }

    size()
    {
        return this.data.length
    }

    values()
    {
        return this.data
    }

    search(value)
    {
        return (this.data.indexOf(value) !== -1) ? true : false
    }
}