import Character from './Character';

export default class Swardsman extends Character {
  constructor(name, type = 'Swardsman') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
