async function toDo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const todo = await response.json();
        return todo;
    } catch (error) {
        console.log('Помилка в getTodo:', error.message);
    }
}

async function uSer() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        return user;
    } catch (error) {
        console.log('Помилка в getUser:', error.message);
    }
}

async function main() {
    const allData = await Promise.all([toDo(), uSer()]);
    console.log('Результат Promise.all:', allData);

    const fastestData = await Promise.race([toDo(), uSer()]);
    console.log('Найшвидший результат Promise.race:', fastestData);
}

main();