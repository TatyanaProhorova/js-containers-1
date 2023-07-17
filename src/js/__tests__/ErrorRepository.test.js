import { ErrorRepository, errorMap } from '../class/ErrorRepository';

test('testing unknown error', () => {
  const er1 = new ErrorRepository(errorMap);
  expect(er1.translate(12)).toBe('Unknown error');
});

test('testing definite error', () => {
  const er2 = new ErrorRepository(errorMap);
  expect(er2.translate(2)).toBe('Неизвестное существо');
});
