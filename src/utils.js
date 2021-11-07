function sortArrayByName(arr) {
    arr.sort(function (a, b) {
        return a.localeCompare(b);
    });
    return arr;
}

export { sortArrayByName };