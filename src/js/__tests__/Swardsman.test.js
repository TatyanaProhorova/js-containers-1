import Swardsman from '../class/Swardsman';

test('Правильно создается объект', () => {
  const swardsman = new Swardsman('Swardsman');
  const correct = {
    attack: 40, defence: 10, health: 100, level: 1, name: 'Swardsman', type: 'Swardsman',
  };

  expect(swardsman).toEqual(correct);
});
