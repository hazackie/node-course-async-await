var isMomHappy = true;

var willGetNewPhone = (point) => {
    return new Promise((resolve, reject) => {
        if (point >= 8) {
            let phone = {
                brand: 'Pixel XL',
                color: 'black'
            };
            resolve(phone);
        } else {
            reject('Month does not happy');
        }
    });
};

var askMom = () => {
    willGetNewPhone(9)
    .then((phone) => {
        console.log(`Mom is happy and you get a ${phone.brand} ${phone.color}`);
    })
    .catch((e) => {
        console.log('Rejected: ', e);
    });
};

var showTime = (phone) => {
    return new Promise((resolve, reject) => {
        var message = `Hey friends! My mom just gave me a new phone. It's  ${phone.color} ${phone.brand}`;
        resolve(message);
    });
};

var askMom2 = () => {
    willGetNewPhone(9)
    .then(showTime)
    .then((message) => console.log(message))
    .catch((e) =>  console.log('Recjected ', e));
}

askMom2();

