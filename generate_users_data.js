const faker = require('faker');
const fs = require('fs')

function generateUsers() {

    let users = []

    for (let id=1; id <= 100; id++) {

        const data = {
            user_id: faker.datatype.uuid(),
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraph()
        };

        users.push(data);
    }

    return { "data": users }
}

let dataObj = generateUsers();

fs.writeFileSync('dataUsers.json', JSON.stringify(dataObj, null, '\t'));