import { test } from 'node:test';
import assert from 'node:assert/strict';
import { listPoliticians, searchPoliticians } from '../server/db/politicians.js';

test('the guide lists Nashville, the governor race, and the Senate race', () => {
  const people = listPoliticians();
  assert.deepEqual(people.map((person) => person.id), ['oconnell', 'blackburn', 'green', 'hagerty', 'bradshaw']);
  for (const person of people) {
    assert.ok(person.positions.length > 0, `${person.name} needs at least one sourced view`);
    for (const position of person.positions) {
      assert.match(position.sourceUrl, /^https:\/\//, position.sourceUrl);
      assert.ok(position.summary.length > 40, position.issue);
    }
  }
});

test('office and issue filters keep only matching sourced views', () => {
  const governors = listPoliticians({ office: 'governor' });
  assert.deepEqual(governors.map((person) => person.id), ['blackburn', 'green']);

  const housing = listPoliticians({ issue: 'housing' });
  assert.ok(housing.every((person) => person.positions.length === 1 && person.positions[0].issue === 'housing'));
  assert.ok(housing.some((person) => person.id === 'oconnell'));
});

test('search finds a mayor position without inventing a match', () => {
  const grocery = listPoliticians({ search: 'grocery tax' });
  assert.ok(grocery.some((person) => person.id === 'oconnell'));
  assert.equal(listPoliticians({ search: 'zzzz-no-such-bill' }).length, 0);
});

test('the agent lookup ranks a named politician first', () => {
  const matches = searchPoliticians("What does Freddie O'Connell say about housing?");
  assert.equal(matches[0].id, 'oconnell');
  assert.ok(matches[0].positions.some((position) => position.issue === 'housing'));
});
