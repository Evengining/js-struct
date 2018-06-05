
const testingArr = [12, 'Bay', 'TestInJS', 'bay']

const map = new TypeMap()

const queu = new Queu(testingArr)

const stack = new Stack(testingArr)

let set = new TypeSet(testingArr)

const hashTable = new HashTable()

/**
 * Map testing
 */

map.set('Bay', 'ES5')
map.set('Hello', 'Guest')

console.log(map.get('Bay'))

console.log(map.size())
console.log(map.search('Bay'))

map.dell('Bay')

console.log(map.get('Bay'))

console.log(map.size())
console.log(map.search('Bay'))

/**
 * Queue testing
 */

queu.add('Bay')
queu.add('Hello')

console.log(queu.get())

console.log(queu.values())
console.log(queu.size())
console.log(queu.search('Bay'))

queu.dell()

console.log(queu.get())

console.log(queu.values())
console.log(queu.size())
console.log(queu.search('Bay'))

/**
 * Stack testing
 */

stack.add('ES5')
stack.add('Guest')

console.log(stack.get())

console.log(stack.size())
console.log(stack.values())
console.log(stack.search('ES5'))

stack.dell()

console.log(stack.get())

console.log(stack.values())
console.log(stack.size())
console.log(stack.search('ES5'))

/**
 * Set testing
 */

set.add('Bay')
set.add('Hello')


console.log(set.values())
console.log(set.size())
console.log(set.search('Bay'))

set.dell('Bay')


console.log(set.values())
console.log(set.size())
console.log(set.search('Bay'))

/****************************************/

let setTwo = new TypeSet([12, 'Hello', 'Good'])

const setFri = set.union(setTwo)

console.log(setFri.values())
console.log(setFri.size())
console.log(setFri.search('Good'))

setFri.dell(12)


console.log(setFri.values())
console.log(setFri.size())
console.log(setFri.search('Good'))

/******************************************/


set = new TypeSet(testingArr)

setTwo = new TypeSet([12, 'Hello', 'Good'])

set.add('Hello')

const setFour = set.intersection(setTwo)

console.log(setFour.values())
console.log(setFour.size())
console.log(setFour.search(12))

setFour.dell(12)

console.log(setFour.values())
console.log(setFour.size())
console.log(setFour.search(12))


/*
 * hashTable Testing
 */

hashTable.add('hello', 'bay')
hashTable.add('Test', 'ES6')
hashTable.ouput()

console.log(hashTable.get('hello'))

hashTable.remove('hello')

hashTable.ouput()

console.log(hashTable.get('hello'))
