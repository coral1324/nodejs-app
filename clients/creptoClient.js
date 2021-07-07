const axios = require("axios");

const getCoinPriceForTimesatmp = async (coinName, timestamp) => {
    const result = await axios
    .get(`${process.env.BASE_URL}/data/pricehistorical?fsym=${coinName}&tsyms=USD&ts=${new Date(timestamp).getTime()}`
        , {
            headers: {
                Apikey : process.env.API_KEY
            }
           }
           );
    if(result.data !=null && result.data.Response != null) {
        throw {error: {message: result.Message , type: "validation"} }
    }
    return result.data[coinName].USD;
} 

module.exports = {getCoinPriceForTimesatmp}