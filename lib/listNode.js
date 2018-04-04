module.exports = {
  Node: class Node {
    constructor(val,nextn){
      this.val = val
      this.nextn = nextn
    }
  },

  reverseList: function reverse(list) {
    if (list.nextn === null) {return list}
    prev = reverse(list.nextn)
    prev.nextn = list
    list.nextn = null
    return list
  }
}
