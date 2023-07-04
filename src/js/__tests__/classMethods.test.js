import Daemon from '../class/Daemon';

// testing damaged-a-little: health to 94
test('not total damage', () => {
  const ch = new Daemon('Daemon');
  ch.damage(10);
  expect(ch.health).toBe(94);
});

// testing of "damege" , health = 0
test('health-to-0', () => {
  const ch = new Daemon('Python');
  ch.damage(1200);
  expect(ch.health).toBe(0);
});

// testing levelUp
test('levelUp: level ++ 1 to 2', () => {
  const ch = new Daemon('Daemon').levelUp();
  expect(ch.level).toBe(2);
});

// dead error
test('damagedBadly', () => {
  const ch = new Daemon('Python');
  ch.health = 0;
  expect(() => {
    const a = ch.levelUp();
    return a;
  }).toThrow();
});
