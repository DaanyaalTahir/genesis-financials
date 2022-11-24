export const filterData = data => formatter => data.map(item => ({
    text: formatter(item),
    value: formatter(item)
}));