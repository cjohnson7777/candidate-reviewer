import { searchPoliticians } from '../../server/db/politicians.js';

const ISSUE_LABELS = {
  housing: 'Housing',
  cost: 'Cost of living',
  schools: 'Schools',
  transit: 'Getting around',
  health: 'Health care',
  safety: 'Public safety',
  immigration: 'Immigration',
};

// Looks up sourced politician records before the model writes an answer.
export async function run({ message }) {
  const matches = searchPoliticians(message, 4);
  if (!matches.length) {
    return { context: 'Sourced records: none found. Say you do not have a sourced statement on that.', data: [] };
  }
  const lines = matches.map((person) => {
    const views = person.positions.map((position) => `  - ${ISSUE_LABELS[position.issue]}: ${position.summary} (Source: ${position.sourceName}, ${position.sourceUrl})`).join('\n');
    return `- ${person.name} | ${person.party} | ${person.office} | ${person.status}\n  ${person.summary}\n${views}`;
  });
  return {
    context: `Sourced records (use only these):\n${lines.join('\n')}`,
    data: matches.map((person) => ({ id: person.id, name: person.name })),
  };
}
