import { Node, Empty, node, empty } from 'tree'

console.log(`empty: ${empty}`)

const leaf = empty.insert(15)
console.log(`leaf: ${leaf}`)

const tree =
  leaf
    .insert(29)
    .insert(12)
    .insert(5)
    .insert(-3)
    .insert(4)
    .insert(9)
    .insert(18)

console.log(`tree: ${tree}`)

console.log(`tree (as list): ${tree.toList()}`)
