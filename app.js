const test = require('./listNode.js')

const Node = test.Node
const node1 = new Node('1',null)
const node2 = new Node('2',node1)
const node3 = new Node('3',node2)
const node4 = new Node('4',node3)
const head = new Node('5',node4)

console.log(head)
test.reverseList(head)
console.log(node1)
