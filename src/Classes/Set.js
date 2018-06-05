'use strict'

class TypeSet extends MyType
{
    constructor(data = [])
    {
        super()
        if(Array.isArray(data)) {
            this.data = []
            data.forEach(value => {
                if(!(this.search(value)))
                    this.data.push(value)
            })
        } else {
            this.data = []
        }
    }

    add(value)
    {
        if(this.search(value))
            return false
        else
            this.data.push(value)
    }

    dell(value)
    {
        if(this.search(value)) {
            const index = this.data.indexOf(value)
            this.data.splice(index, 1)
            return true
        } else
            return false
    }

    union(data)
    {
        const externalSet = data.values(),
              set = new TypeSet(this.data)

        externalSet.forEach(value => {
            set.add(value)
        })

        return set
    }

    intersection(data)
    {
        const externalSet = data.values(),
            set = new TypeSet()

        externalSet.forEach(value => {
            if(this.search(value))
                set.add(value)
        })

        return set
    }

    subset(data)
    {
        return this.values().every(value => {
            return data.search(value)
        })
    }
}
