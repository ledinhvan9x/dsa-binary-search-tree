class Node {
    constructor(value, left =null,right = null) {
        this.value =value
        this.left = left
        this.right = right
    }
}

const insert = (node, target) => {
    if (node === null) return new Node(target)
    if (node.value === target) return node
    let curr = node
    while (curr !== null) {
        if (curr.value === target) return node
        if (curr.value > target) {
            if (curr.left === null) {
                curr.left = new Node(target)
                break
            }
            curr = curr.left
        } else {
               if (curr.right === null) {
                curr.right = new Node(target)
                break
            }
            curr = curr.right
        }
    }
    return node
}


const insertWithRecursive = (node, target) => {
    if (node === null) return new Node(target)
    if (node.value === target) return node
    let curr = node
    if (curr.value > target) {
        curr.left = insertWithRecursive(curr.left, target)
    } else {
        curr.right = insertWithRecursive(curr.right, target)
    }
    return node
}














