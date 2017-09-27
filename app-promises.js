const users = [{
    id: 1,
    name: 'Zack',
    schoolId: 101
}, {
    id: 2,
    name: 'Jack',
    schoolId: 999
}];
const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
}, {
    id: 2,
    schoolId: 999,
    grade: 100
}, {
    id: 3,
    schoolId: 101,
    grade: 80
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);
        if (user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id of ${id}`);
        }
    });
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
};

const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempuser) => {
        user = tempuser;
        return getGrades(user.schoolId);
    }).then((grades) => {
        let average = 0;
        if (grades.length > 0) {
            average = grades.map((grade) => grade.grade).reduce((previous, current) => previous + current) / grades.length;
        }
        return `${user.name} has a ${average} in the class.`
        // console.log(average);
    });
};

getStatusAlt = async (userId) => {
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);
    let average = 0;
    if (grades.length > 0) { 
        avarage = grades.map((grade) => grade.grade).reduce((pre, cur) => pre + cur) / grades.length;
    }
    return `${user.name} has a ${average} in the class`;
};

getStatusAlt(2)
    .then((message) => console.log(message))
    .catch((e) => {
        console.log(e);
    });

// console.log(getStatusAlt());

// getUser(2).then((user) => {
//     console.log(user);
// }).catch((e) => {
//     console.log(e);
// });

// getGrades(12).then((grade) => {
//     console.log(grade);
// }).catch((e) => {
//     console.log(e);
// });

// getStatus(2).then((status) => {
//     console.log(status);
// }).catch((e) => {
//     console.log(e);
// });