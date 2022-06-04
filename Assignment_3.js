function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // merge the components
    return [...arr, ...left, ...right]
}

function mergeSort(array) {
    const half = array.length / 2

    // base case
    if (array.length < 2) {
        return array
    }

    // divide the array into left & right (current array)
    const left = array.splice(0, half)

    // Recursion
    return merge(mergeSort(left), mergeSort(array))
}

array = mergeSort([6, 5, 233, 43, 90, 434])
console.log(array)