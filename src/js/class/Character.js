export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swardsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('В имени должно быть от 2 до 10 символов');
    } else {
      this.name = name;
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Неизвестное существо');
    }

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  damage(points) {
    const worsening = points * (1 - this.defence / 100);
    if (worsening > this.health) {
      this.health = 0;
    } else {
      this.health -= worsening;
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack = Number((this.attack * 1.2).toFixed(0));
      this.defence = Number((this.defence * 1.2).toFixed(0));
      this.health = 100;
      return this;
    }
    throw new Error('Герой убит');
  }
}

// console.log('******');
// const ch1 = new Character('Python', 'Daemon');
// console.log(ch1);
// const a = ch1.levelUp();
// console.log(a);
// console.log('******');

// console.log('======');
// ch1.damage(7);
// console.log(ch1.health);
// ch1.damage(1200);
// console.log(ch1.health);
// ch1.levelUp();
// console.log(ch1);
// console.log('======');
