var users = [{
    name: 'Zack',
    age: 3
}, {
    name: 'Hanna',
    age: 5
}, {
    name: 'Mike',
    age: 29
}, {
    name: 'Hela',
    age: 2
}, {
    name: 'Ela',
    age: 6
}];

// names list
var names = [];
names = users.map((user, index, array) => {
    return user.name;
});

// user under 26 year old
var under26 = users.filter((user) => user.age < 26);
var under26name = under26.map((user) => user.name);
var under26age = under26.map((user) => user.age);

// total age of under-26 users + 2
var totalUnder26 = under26age.reduce((pre, cur, index, array) => pre + cur, 2);


// console.log('Users:', users);
// console.log('Names:', names);
console.log('Under 26:', under26);
console.log('Unser 26 name:', under26name);
console.log('Under 26 age:', under26age);
console.log('Under 26 total age:', totalUnder26);