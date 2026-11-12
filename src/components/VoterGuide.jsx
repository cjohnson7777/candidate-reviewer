import { useEffect, useState } from 'react';
import { api } from '../api.js';

export default function VoterGuide() {
  const [guide, setGuide] = useState(null);
  const [office, setOffice] = useState('');
  const [issue, setIssue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    api.politicians().then(setGuide).catch((err) => setError(err.message));
  }, []);

  const people = (guide?.politicians ?? []).filter((person) => {
    if (office && person.officeGroup !== office) return false;
    if (issue && !person.positions.some((position) => position.issue === issue)) return false;
    return true;
  });

  return (
    <section className="card guide" aria-labelledby="guide-title">
      <div className="card-head">
        <h2 id="guide-title">Compare their views</h2>
        <span className="count">{people.length} {people.length === 1 ? 'person' : 'people'}</span>
      </div>
      <p className="guide-lead">
        Nashville voters share one mayor, one governor, and two U.S. senators. Pick an issue to read what each person has said in public. This page does not tell you who to vote for.
      </p>

      <div className="guide-filters">
        <label className="office-pick">
          Office
          <select value={office} onChange={(e) => setOffice(e.target.value)} aria-label="Office">
            <option value="">All offices</option>
            {(guide?.offices ?? []).map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </label>
        <div className="issue-row" role="group" aria-label="Issue">
          <FilterChip pressed={issue === ''} onClick={() => setIssue('')}>All issues</FilterChip>
          {(guide?.issues ?? []).map((item) => (
            <FilterChip key={item.id} pressed={issue === item.id} onClick={() => setIssue(item.id)}>
              {item.label}
            </FilterChip>
          ))}
        </div>
      </div>

      {error && <p className="notice error" role="alert">{error}</p>}
      {!guide && !error && <p className="result-count">Loading the guide…</p>}

      {guide && people.length === 0 && (
        <p className="result-count">No sourced statement on that issue for this office yet.</p>
      )}

      <ul className="politician-grid">
        {people.map((person) => (
          <li key={person.id} className="politician">
            <div className="politician-top">
              <p className={`party party-${person.party.toLowerCase()}`}>{person.party}</p>
              <p className="status">{person.status}</p>
            </div>
            <h3>{person.name}</h3>
            <p className="office-line">{person.office}</p>
            <p className="person-summary">{person.summary}</p>
            <p className="person-detail">{person.detail}</p>
            {person.partyNote && <p className="person-detail">{person.partyNote}</p>}
            <ul className="positions">
              {person.positions
                .filter((position) => !issue || position.issue === issue)
                .map((position) => {
                  const label = guide.issues.find((item) => item.id === position.issue)?.label ?? position.issue;
                  return (
                    <li key={position.issue}>
                      <h4>{label}</h4>
                      <p>{position.summary}</p>
                      <a href={position.sourceUrl} target="_blank" rel="noreferrer">
                        {position.sourceName}{position.sourceDate ? ` · ${position.sourceDate}` : ''}
                      </a>
                    </li>
                  );
                })}
            </ul>
            <a className="profile-link" href={person.website} target="_blank" rel="noreferrer">Official page</a>
          </li>
        ))}
      </ul>

      {guide && (
        <p className="guide-note">
          Updated {guide.updated}. Each note is a short summary of the linked source, not a full voting record. U.S. House districts that split Nashville are not in this guide yet. Results from Nov. 3, 2026 are as reported by WPLN and can still be certified.
        </p>
      )}
    </section>
  );
}

function FilterChip({ pressed, onClick, children }) {
  return (
    <button type="button" className={`chip ${pressed ? 'on' : ''}`} aria-pressed={pressed} onClick={onClick}>
      {children}
    </button>
  );
}
