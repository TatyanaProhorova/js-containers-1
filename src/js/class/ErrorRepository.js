export const errorMap = new Map([
  [1, 'В имени должно быть от 2 до 10 символов'],
  [2, 'Неизвестное существо'],
  [3, 'Резерв'],
  [4, 'Герой убит'],
]);

export class ErrorRepository {
  constructor(appErrors) {
    this.errors = appErrors;
  }

  translate(code) {
    const result = this.errors.get(code) || 'Unknown error';
    return result;
  }
}
// из code получает текст ошибки, если (числовой код ?) ошибкa отсутствует -
// возвращает строку 'Unknown error'
