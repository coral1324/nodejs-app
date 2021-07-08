const axios = require("axios");

const getCoinPriceForTimesatmp = async (coinName, timestamp) => {
    const result = await axios
        .get(`${process.env.BASE_URL}/data/pricehistorical?fsym=${coinName}&tsyms=USD&ts=${timestamp}`
            , {
                headers: {
                    Apikey: process.env.API_KEY
                }
            }
        );
    if (result.data != null && result.data.Response != null) {
        let error = new Error(result.data.Message);
        error.status = 400;
        throw error;
    }
    return result.data[coinName].USD;
}

module.exports = { getCoinPriceForTimesatmp }