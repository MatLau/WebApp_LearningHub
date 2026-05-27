import React, { useState, useRef, useEffect } from 'react';
import { PROMPT_TEMPLATES } from '../data/courseData';
import { FlaskConical, Send, Sparkles, Copy, Check } from 'lucide-react';

export default function AIPlayground() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Ciao! Sono il tuo Tutor AI per la segreteria scolastica. Scrivi un prompt o seleziona un modello qui sotto per iniziare. 🎓' }
  ]);
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const simulateResponse = (prompt) => {
    // Simulated AI response for demonstration
    const responses = {
      circolare: `**AVVISO URGENTE N. ___/2026**\n\nOggetto: Sospensione delle attività didattiche — Plesso [NOME]\n\nSi comunica alle SS.LL. che, a causa di [MOTIVO], le attività didattiche presso il plesso [NOME] saranno sospese nei giorni [DATE].\n\nLe attività riprenderanno regolarmente il giorno [DATA RIENTRO].\n\nSi prega di prendere le necessarie disposizioni.\n\nIl Dirigente Scolastico\n[Firma]`,
      verbale: `**VERBALE DEL COLLEGIO DEI DOCENTI**\n**Seduta del [DATA]**\n\nIl giorno [DATA], alle ore [ORA], si è riunito il Collegio dei Docenti dell'[ISTITUTO] per discutere il seguente ordine del giorno:\n\n1. [Punto 1]\n2. [Punto 2]\n\nPresenti: [N] docenti su [N] aventi diritto.\n\n[CONTENUTO APPUNTI RIELABORATO]\n\nLetto, approvato e sottoscritto.\n\nIl Segretario verbalizzante — Il Presidente`,
      default: `Ecco un esempio di risposta per il tuo prompt:\n\n---\n\nHo analizzato la tua richiesta. Ecco una bozza strutturata che puoi personalizzare:\n\n• **Intestazione**: [Inserisci dati della scuola]\n• **Oggetto**: [Descrivi brevemente]\n• **Corpo**: [Dettagli operativi]\n• **Firma**: [Responsabile]\n\n---\n\n*Ricorda: verifica sempre i dati e le normative citate prima di inviare qualsiasi documento.*`
    };

    const lower = prompt.toLowerCase();
    if (lower.includes('circolar') || lower.includes('avviso') || lower.includes('urgente')) return responses.circolare;
    if (lower.includes('verbal') || lower.includes('collegio')) return responses.verbale;
    return responses.default;
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');

    // Simulate typing delay
    setTimeout(() => {
      const response = simulateResponse(trimmed);
      setMessages((prev) => [...prev, { role: 'assistant', text: response }]);
    }, 800);
  };

  const handleTemplate = (prompt) => {
    setInput(prompt);
  };

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopied(idx);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="content-area">
      <div className="welcome-section">
        <h1>
          <FlaskConical size={28} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
          Playground AI
        </h1>
        <p>Testa i tuoi prompt in un ambiente simulato. Seleziona un modello o scrivi il tuo prompt personalizzato.</p>
      </div>

      <div className="ai-playground">
        <div className="ai-playground-header">
          <div className="ai-dot" />
          <h3>Tutor AI — Simulatore</h3>
          <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
            Demo (risposte simulate)
          </span>
        </div>

        {/* Prompt templates */}
        <div className="prompt-templates">
          {PROMPT_TEMPLATES.map((t, i) => (
            <button key={i} className="prompt-chip" onClick={() => handleTemplate(t.prompt)}>
              <Sparkles size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div className="ai-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`ai-message ${msg.role}`}>
              {msg.text.split('\n').map((line, j) => (
                <React.Fragment key={j}>
                  {line}
                  {j < msg.text.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
              {msg.role === 'assistant' && i > 0 && (
                <button
                  onClick={() => handleCopy(msg.text, i)}
                  style={{
                    display: 'block', marginTop: '0.5rem', background: 'none', border: 'none',
                    color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '0.7rem',
                    padding: 0, fontFamily: 'var(--font-primary)'
                  }}
                  aria-label="Copia risposta"
                >
                  {copied === i ? <><Check size={12} /> Copiato!</> : <><Copy size={12} /> Copia</>}
                </button>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="ai-input-area">
          <input
            className="ai-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Scrivi il tuo prompt…"
            aria-label="Input prompt AI"
          />
          <button className="btn btn-primary" onClick={handleSend} aria-label="Invia prompt">
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
