const isValidBST = (node, min = -Infinity, max = Infinity) => {
    if (node === null) return true;

    if (node.value <= min || node.value >= max) {
        return false;
    }

    return (
        isValidBST(node.left, min, node.value) &&
        isValidBST(node.right, node.value, max)
    );
};
