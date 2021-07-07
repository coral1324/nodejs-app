const calcPercentage = (start, end)=> {
    return Math.floor(((end-start)/start)*100);
}

const sortObject = (obj) => {
    return Object.keys(obj).sort().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
}
module.exports = {calcPercentage, sortObject}