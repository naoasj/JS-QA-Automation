import axios from 'axios';

describe.skip('Тестування API метод POST', () => {
  test('Перший тест аксіосе ', async () => {
    const body = {
      firstName: 'Петрик',
      lastName: 'Петренко',
    };

    const response = await axios.post('https://dummyjson.com/users/add', body);

    expect(response.data).toHaveProperty('id');
    expect(response.data.firstName).toBe('Петрик');
    expect(response.data.lastName).toBe(body.lastName);
    expect(response.status).toBe(201);
  });
});
