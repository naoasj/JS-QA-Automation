import { faker } from '@faker-js/faker';

// const firstName = faker.name.firstName();
const lastName = faker.internet.displayName();
const email = faker.internet.email();
const password = faker.internet.password();

//console.log(firstName);
console.log(lastName);
console.log(email);
console.log(password);
