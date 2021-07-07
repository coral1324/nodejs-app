const calcPercentage = (start, end)=> {
    return Math.floor(((end-start)/start)*100);
}

const sortObject = (obj) => {
    return Object.keys(obj).sort().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
}

const getTimestampFromDate = (strDate) => {
    return Math.floor(new Date(strDate).getTime()/1000);
}
module.exports = {calcPercentage, sortObject, getTimestampFromDate}