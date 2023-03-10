
function comparator(value, targetValue) {
    switch(targetValue.constructor) {
        case RegExp:
            return targetValue.test(value);
        case String:
        default:
            return value === targetValue;
    }
}

export function getByKeyName(tree, key, type="*") {
    return tree.subTree(type, e => comparator(e.key, key));
}