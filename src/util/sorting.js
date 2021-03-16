
export const sortByPropertyAndDirection = (array, property, direction) => {
    return array.sort((a, b) => {
        if (a[property] > b[property]) {
            return (direction === 'asc' ? 1 : -1);
        }
        if (a[property] < b[property]) {
            return (direction === 'asc' ? - 1 : 1);
        }
        return 0;
    })
}