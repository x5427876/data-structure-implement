// 聯集
const union = (set1, set2) => {
    return new Set([...set1, ...set2]);
}

// 交集
const intersection = (set1, set2) => {
    let intersectionSet = new Set();

    set1.forEach(i => {
        if (set2.has(i) == true) {
            intersectionSet.add(i)
        }
    })
    return intersectionSet;
}

// 對稱差
const difference = (set1, set2) => {
    let differenceSet = union(set1, set2);
    let intersectionSet = intersection(set1, set2);

    // 聯集 - 交集 = 對稱差
    differenceSet.forEach(i => {
        if (intersectionSet.has(i) == true) {
            differenceSet.delete(i)
        }
    })

    return differenceSet;
}

// 差集
const subtracting = (set1, set2) => {
    let subtractingSet = new Set([...set1]);

    // 集合1 - 集合2
    set2.forEach(i => {
        if(subtractingSet.has(i) == true){
            subtractingSet.delete(i)
        }
    })
    return subtractingSet;
}
