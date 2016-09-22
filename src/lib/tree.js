import { cons, nil } from 'list'

class Tree {

}

export class Empty extends Tree {
  get value () {
    throw new TypeError('Cannot call `value` on an empty tree')
  }

  get left () {
    throw new TypeError('Cannot call `left` on an empty tree')
  }

  get right () {
    throw new TypeError('Cannot call `right` on an empty tree')
  }

  get size () {
    return 0
  }

  insert (n) {
    return node(n)
  }

  toList () {
    return nil
  }

  toString () {
    return '∅'
  }
}

export class Node extends Tree {
  constructor (_value, _left = empty, _right = empty) {
    super()
    this._value = _value
    this._left = _left
    this._right = _right
  }

  get value () {
    return this._value
  }

  get left () {
    return this._left
  }

  get right () {
    return this._right
  }

  get size () {
    return 1 + this.left.size + this.right.size
  }

  insert (n) {
    if (n === this.value) {
      return this
    } else if (n < this.value) {
      return node(this.value, this.left.insert(n), this.right)
    } else if (n > this.value) {
      return node(this.value, this.left, this.right.insert(n))
    }
  }

  toList () {
    return this.left.toList().concat(
      cons(this.value, this.right.toList())
    )
  }

  toString () {
    return `(${this.left}, ${this.value}, ${this.right})`
  }
}

export const node = (value, left, right) => new Node(value, left, right)
export const empty = new Empty()
