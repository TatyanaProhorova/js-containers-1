import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export const chDaemon1 = new Daemon('Dae1');
export const chDaemon2 = new Daemon('Dae2');
export const chDaemon3 = new Daemon('Dae3');
