const deleteWithRecursive = (node, target) => {
    if (node === null) return null
    if (node.value > target) {
        node.left = deleteWithRecursive(node.left, target)
    } else if (node.value < target) {
        node.right = deleteWithRecursive(node.right, target)
    } else {
        // case 1
        if (node.left === null && node.right === null) return null

        // case 2
        if (node.left === null) {
            return node.right
        } 

        if (node.right === null) {
            return node.left
        }

        // case 3
        let successor = node.right;

        while (successor.left !== null) {
            successor = successor.left;
        }

        node.value = successor.value;
        node.right = deleteWithRecursive(node.right, successor.value);
    }
    return node
}














