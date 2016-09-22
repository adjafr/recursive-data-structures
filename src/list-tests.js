import { Cons, Nil, cons, nil } from 'list'

const list = cons(1, cons(2, cons(3, nil)))

console.log(`${list}`)

// external implementation
const length = (list) => {
  const loop = (list, n = 0) => {
    if (list instanceof Nil) {
      return n
    } else if (list instanceof Cons) {
      return loop(list.tail, n + 1)
    }
  }

  return loop(list)
}

console.log(`(external) length of ${list}: ${length(list)}`)

console.log(`(internal) length of ${list}: ${list.length}`)

const atIndex = (list, i) => {
  if (list instanceof Nil) {
    return undefined
  } else if (list instanceof Cons) {
    if (i === 0) {
      return list.head
    } else if (i < 0) {
      return undefined
    } else if (i > 0) {
      return atIndex(list.tail, i - 1)
    }
  }
}

console.log(`(external) atIndex of ${list} at ${-20}: ${atIndex(list, -20)}`)
console.log(`(external) atIndex of ${list} at ${0}: ${atIndex(list, 0)}`)
console.log(`(external) atIndex of ${list} at ${2}: ${atIndex(list, 2)}`)
console.log(`(external) atIndex of ${list} at ${4}: ${atIndex(list, 4)}`)

console.log(`(internal) atIndex of ${list} at ${-20}: ${list.atIndex(-20)}`)
console.log(`(internal) atIndex of ${list} at ${0}: ${list.atIndex(0)}`)
console.log(`(internal) atIndex of ${list} at ${2}: ${list.atIndex(2)}`)
console.log(`(internal) atIndex of ${list} at ${4}: ${list.atIndex(4)}`)

const insert = (list, elem, i) => {
  if (i < 0) {
    return list
  } else if (i === 0) {
    return cons(elem, list)
  } else if (i > 0) {
    if (list instanceof Nil) {
      return cons(undefined, insert(nil, elem, i - 1))
    } else if (list instanceof Cons) {
      return cons(list.head, insert(list.tail, elem, i - 1))
    }
  }
}

const weird = cons(1, cons(nil, cons(nil, cons(nil, cons(3, nil)))))

console.log(`(external) insert into ${nil} elem ${1} at ${3}: ${insert(nil, 1, 3)}`)
console.log(`(external) insert into ${weird} elem ${2} at ${2}: ${insert(weird, 2, 2)}`)

console.log(`(internal) insert into ${nil} elem ${1} at ${3}: ${nil.insert(1, 3)}`)
console.log(`(internal) insert into ${weird} elem ${2} at ${2}: ${weird.insert(2, 2)}`)
