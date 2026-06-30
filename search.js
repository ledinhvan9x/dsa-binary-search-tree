class Node {
    constructor(value, left =null,right = null) {
        this.value =value
        this.left = left
        this.right = right
    }
}

const findWithRecursive = (node, target) => {
    if (node === null) return false
    let curr = node
    if (curr.value === target) return true
        return findWithRecursive(curr.value > target ? curr.left : curr.right, target)
}

const find = (node, target) => {
    if (node === null) return false

    let curr = node

    while (curr !== null) {
    if (curr.value === target) {
        return true
    } else if (curr.value > target) {
        curr = curr.left
    } else {
        curr = curr.right
    }
    }
    return false
}
