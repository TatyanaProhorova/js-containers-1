import Team from '../class/Team';
import { chDaemon1, chDaemon2, chDaemon3 } from '../class/Daemon';

test('testing add to team', () => {
  const t = (new Team()).add(chDaemon1);
  const expected = (new Set()).add(chDaemon1);
  expect(t.members).toEqual(expected);
});

test('testing add throw error', () => {
  const t = new Team();
  expect(() => { t.add(chDaemon1).add(chDaemon1); })
    .toThrow('Персонаж уже добавлен в команду');
});

test('testing toArray', () => {
  const t = (new Team().add(chDaemon1).add(chDaemon2)).toArray();
  const expected = [chDaemon1, chDaemon2];
  expect(t).toEqual(expected);
});

test('testing addAll', () => {
  const a = (new Team().addAll(chDaemon1, chDaemon2, chDaemon3)).members;
  const expected = new Set([chDaemon1, chDaemon2, chDaemon3]);
  expect(a).toEqual(expected);
});
