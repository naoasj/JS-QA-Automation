const users = [
    { name: "John", age: 19, email: "smartjohn@gmail.com" },
    { name: "Jane", age: 25, email: "janedoe@gmail.com"  },
    { name: "Mike", age: 13, email: "mikestar67@gmail.com"  },
    { name: "Шінджі", age: 20, email: "шінджі@gmail.com"  }
]

for (const { name, age , email} of users) {
    console.log(`${name} is ${age} years old.`)
    console.log(`${email} is ${name} email.`)
}