const axios = require('axios');

const getExchangeRate = async (from, to) => {
    try {
        const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);
        const rate = response.data.rates[to];
        if (rate) {
            return rate;
        } else {
            throw new Error(`Rate does not exist from ${from} to ${to}`);
        }
    } catch (e) {
        throw new Error(`Unable to get exchange rate for ${from} to ${to}`);
    }
};

getCountries = async (currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map((country) => country.name);
    } catch (e) {
        throw new Error(`Unabled to get countries that use ${currencyCode}`);
    }
}

// getCountries('CAD').then((countries) => {
//     console.log(countries);
// });

// create async - await
const convertCurrencyAA = async (from, to, amount) => {
    const countries = await getCountries(to);
    const rate = await getExchangeRate(from, to);
    const exchangedAmount = amount * rate;
    return `${amount} ${from} is worth ${exchangedAmount} ${to} can be used in the following countries: ${countries.join(', ')}`;
};

convertCurrencyAA('CAzzD', 'USD', 100).then((status) => {
    console.log(status);
}).catch((e) => {
    console.log(e.message);
});