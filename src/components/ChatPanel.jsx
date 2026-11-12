import { useRef, useState } from 'react';
import { api } from '../api.js';
import { project } from '../../shared/project.config.js';

export default function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const logRef = useRef(null);

  const skill = 'voter-guide';

  async function send(event) {
    event.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    setError('');
    setInput('');
    const history = messages.slice(-6).map((m) => ({ role: m.role, text: m.text }));
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setBusy(true);
    try {
      const data = await api.chat({ message: text, skill, history });
      setMessages((prev) => [...prev, { role: 'assistant', text: data.reply, meta: data }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
      requestAnimationFrame(() => logRef.current?.scrollTo({ top: logRef.current.scrollHeight }));
    }
  }

  return (
    <section className="card chat" aria-labelledby="chat-title">
      <div className="card-head">
        <h2 id="chat-title">Ask {project.agent.name}</h2>
        <span className="count">voter-guide</span>
      </div>

      <ul className="chat-log" ref={logRef} aria-live="polite">
        {messages.length === 0 && (
          <li className="empty">
            Try: "Where does the mayor stand on housing?" or "Compare Blackburn and Green on schools."
          </li>
        )}
        {messages.map((m, i) => (
          <li key={i} className={`bubble ${m.role}`}>
            <p><RichText text={m.text} /></p>
            {m.meta && (
              <small>
                skill: <b>{m.meta.skill}</b> · picked by {m.meta.routedBy}
                {m.meta.flags?.length ? ` · flags: ${m.meta.flags.join(', ')}` : ''}
              </small>
            )}
          </li>
        ))}
        {busy && <li className="bubble assistant thinking">{project.agent.name} is thinking...</li>}
      </ul>

      <form className="chat-form" onSubmit={send}>
        <label htmlFor="chat-input" className="sr-only">Your question</label>
        <input
          id="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about a politician or an issue..."
          maxLength={2000}
          autoComplete="off"
        />
        <button type="submit" disabled={busy}>Send</button>
      </form>
      {error && <p className="error" role="alert">{error}</p>}
    </section>
  );
}

function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
  );
}