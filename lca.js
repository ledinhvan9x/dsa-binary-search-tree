const lowestCommonAncestor = (root, p, q) => {
    if (root === null) return null;

    if (p.value < root.value && q.value < root.value) {
        return lowestCommonAncestor(root.left, p, q);
    }

    if (p.value > root.value && q.value > root.value) {
        return lowestCommonAncestor(root.right, p, q);
    }

    return root;
};

const lowestCommonAncestor = (root, p, q) => {
    let curr = root;

    while (curr !== null) {
        if (p.value < curr.value && q.value < curr.value) {
            curr = curr.left;
        } else if (p.value > curr.value && q.value > curr.value) {
            curr = curr.right;
        } else {
            return curr;
        }
    }

    return null;
};
