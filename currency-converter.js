const axios = require('axios');

const getExchangeRate = (from, to) => {
    return axios.get(`http://api.fixer.io/latest?base=${from}`)
        .then((response) => {
            return response.data.rates[to];
        });
};

getCountries = (currencyCode) => {
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
        .then((response) => {
            return response.data.map((country) => country.name);
        })
}

getCountries('CAD').then((countries) => {
    console.log(countries);
});

const convertCurrency = (from, to, amount) => {
    let countries;
    return getCountries(to).then((tempCountries) => {
        countries = tempCountries;
        return getExchangeRate(from, to);
    }).then((rate) => {
        const exchangedAmount = amount * rate;
        return `${amount} ${from} is worth ${exchangedAmount} ${to} can be used in the following countries: ${countries.join(', ')}`;
    }).catch((e) => {
        console.log('Something went wrong!');
    });
};

// create async - await
const convertCurrencyAA = async (from, to, amount) => {
    const countries = await getCountries(to);
    const rate = await getExchangeRate(from, to);
    const exchangedAmount = amount * rate;
    return `${amount} ${from} is worth ${exchangedAmount} ${to} can be used in the following countries: ${countries.join(', ')}`;
};

convertCurrencyAA('CAD', 'USD', 100).then((status) => {
    console.log(status);
});