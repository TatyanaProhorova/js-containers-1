export default class Team {
  constructor() {
    this.members = new Set();
  }

  // конвертация set в массив
  toArray() {
    this.members = [...this.members];
    return this.members;
  }

  // добавляет в Team всех без дублирования, ошибка не генерируется
  addAll(...allMembers) {
    // for (const item in allMembers) this.members.add(allMembers[item]);
    for (let i = 0; i < allMembers.length; i += 1) {
      this.members.add(allMembers[i]);
    }
    return this;
  }

  // добавляет в team без дублирования (с генерацией ошибки дублирования)
  add(uniqMember) {
    if (this.members.has(uniqMember)) {
      throw new Error('Персонаж уже добавлен в команду');
    } else {
      this.members.add(uniqMember);
      return this;
    }
  }
}
