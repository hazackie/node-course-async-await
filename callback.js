var mylocation = (a, b, callback) => {
    var total = a + b;

    if (total < 10) {
        callback('This value < 10', total);
    } else {
        callback('This value is greater than 10', total);
    }
};

mylocation(10, 5, (total) => {
    console.log(`This is my total: ${total}`);
});
