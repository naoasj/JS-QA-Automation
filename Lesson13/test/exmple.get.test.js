import apiClient from '../API/apiClient';

describe('тестування', () => {
  test('Перший тест аксіосе ', async () => {
    const response = await apiClient.get('https://dummyjson.com/users/1');

    console.log(response.status);
    console.log(response.data);

    expect(response.status).toBe(200);
  });
});
