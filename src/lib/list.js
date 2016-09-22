// [1, 2, 3]
// (1, [2, 3])
// (1, (2, (3, Nil)))
// recursive list decomposition

class List {
  insert (elem, i = 0) {
    if (i < 0) {
      return this
    } else if (i === 0) {
      return cons(elem, this)
    } else {
      throw new TypeError('Cannot call `insert` with i > 0 on an abstract list')
    }
  }
}

// non-empty list
export class Cons extends List {
  constructor (_head, _tail) {
    super()
    this._head = _head
    this._tail = _tail
  }

  get head () {
    return this._head
  }

  get tail () {
    return this._tail
  }

  get length () {
    return 1 + this.tail.length
  }

  atIndex (i) {
    if (i < 0) {
      return undefined
    } else if (i > 0) {
      return this.tail.atIndex(i - 1)
    } else {
      return this.head
    }
  }

  insert (elem, i = 0) {
    if (i > 0) {
      return cons(this.head, this.tail.insert(elem, i - 1))
    } else {
      return super.insert(elem, i)
    }
  }

  concat (that) {
    return cons(this.head, this.tail.concat(that))
  }

  toString () {
    return `(${this.head}, ${this.tail})`
  }
}

// empty list
export class Nil extends List {
  get head () {
    throw new TypeError('Cannot call `head` on an empty list')
  }

  get tail () {
    throw new TypeError('Cannot call `tail` on an empty list')
  }

  get length () {
    return 0
  }

  atIndex (i) {
    return undefined
  }

  insert (elem, i = 0) {
    if (i > 0) {
      return cons(undefined, nil.insert(elem, i - 1))
    } else {
      return super.insert(elem, i)
    }
  }

  concat (that) {
    return that
  }

  toString () {
    return '∅'
  }
}

export const cons = (head, tail) => new Cons(head, tail)
export const nil = new Nil()
