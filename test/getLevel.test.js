import getLevel from '../src/js/getLevel';
import fetchData from '../src/js/http';

jest.mock('../src/js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('test getLevel userId=1', () => {
  fetchData.mockReturnValue({});
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('test getLevel success', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1 });
  const level = getLevel(1);
  expect(level).toBe('Ваш текущий уровень: 1');
});

test('test getLevel error', () => {
  fetchData.mockReturnValue({});
  const level = getLevel(1);
  expect(level).toBe('Информация об уровне временно недоступна');
});
