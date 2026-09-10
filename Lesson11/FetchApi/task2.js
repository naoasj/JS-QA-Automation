function toDo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(function(response) {
            return response.json();
        })
        .catch(function(error) {
            console.log('Помилка:', error.message);
        });
}

function user() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(function(response) {
            return response.json();
        })
        .catch(function(error) {
            console.log('Помилка:', error.message);
        });
}

const allData = Promise.all([toDo(), user()])
    .then(function(results) {
        console.log('Результат Promise.all:', results);
    });

const fastestData = Promise.race([toDo(), user()])
    .then(function(result) {
        console.log('Найшвидший результат Promise.race:', result);
    });