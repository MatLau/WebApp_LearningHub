# Learning Hub IA — Innovazione digitale scolastica

Percorso di formazione **interattivo e gamificato** sull'uso dell'Intelligenza
Artificiale nel lavoro di segreteria scolastica (personale ATA e docenti),
nel rispetto di **GDPR** e **AI Act**.

Questo progetto è stato **arricchito** fondendo tre fonti:

1. Il progetto React/Vite originale (struttura per aree, lettore a slide, sistema XP).
2. Il corso di autoapprendimento `corso-autoapprendimento.html` (moduli, quiz,
   test finale, libreria prompt con basi normative, glossario, risorse).
3. Il *Manuale dei compiti e dei doveri degli assistenti amministrativi*
   (compiti per settore: Alunni, Personale, Contabilità, Protocollo, Patrimonio).

---

## Due modi di usare il materiale

### 1) `LearningHub.html` — versione completa, pronta all'uso (consigliata)
Un **unico file HTML autonomo**: si apre con un doppio clic in qualsiasi browser,
**senza installazione e senza connessione**. Contiene tutto il percorso fuso e
gamificato:

- **Due percorsi in un unico hub**: *Fondamenti comuni*, *Percorso Segreteria/ATA*
  e *Percorso Docenti* (didattica, valutazione, rischi e uso responsabile,
  inclusione e BES, guidare gli studenti all'uso critico dell'IA)
- 7+3 moduli formativi con contenuti ricchi, esercizi "Prova tu" e checklist
- Quiz per ogni modulo + **Test Finale** (20 domande, soglia 70%)
- **Compiti per settore** (dal manuale) con i punti in cui l'IA aiuta
- **IA vs piattaforme/gestionali**: una sezione "chi fa cosa" che distingue il
  lavoro gestito da SIDI, NoiPA, Pago In Rete e dai gestionali (Argo, Spaggiari,
  Nuvola) — dove l'IA non entra — dallo strato comunicativo dove l'IA agevola
- **Linee guida MIM (DM 166/2025)**: pilastri, principi, ruoli (deployer/DPIA/FRIA),
  fasi di progetto e casi d'uso per il personale amministrativo
- **Libreria Prompt** (20 prompt con base normativa, filtrabili e copiabili)
- **Glossario e Norme** ricercabile, **Risorse Utili**
- Gamification: **XP, livelli, traguardi/badge, attestato stampabile**
- Salvataggio dei progressi in localStorage

E' la "reference implementation" di tutte le nuove funzionalita'.

### 2) Progetto Vite/React (questa cartella) — per chi vuole sviluppare
App modulare React. Con questo aggiornamento i **dati** sono stati ampliati in
`src/data/courseData.js`:

- `QUIZZES`: ora **ogni modulo** ha un quiz (35 domande totali, distribuite per
  tema senza duplicati) — prima erano solo 2 moduli.
- `FINAL_TEST`: 20 domande del test finale (nuovo export).
- `PROMPT_TEMPLATES`: la **libreria completa** di 20 prompt con `cat` e `role`.
- `GLOSSARY` e `RESOURCES`: nuovi export pronti da usare.

I componenti esistenti (`QuizPage`, `AIPlayground`) usano gia' questi dati, quindi
quiz e libreria sono immediatamente piu' ricchi. Per portare nel React anche
**test finale, glossario, risorse, traguardi e attestato**, usa `LearningHub.html`
come riferimento di comportamento e UI.

---

## Avvio del progetto React

    npm install      # reinstalla le dipendenze (binari corretti per il tuo OS)
    npm run dev      # sviluppo
    npm run build    # build di produzione in dist/
    npm run preview  # anteprima della build

> Nota: `node_modules` non e' incluso nell'archivio (era stato installato su
> Windows). `npm install` rigenera le dipendenze corrette per la tua piattaforma.

I contenuti dei moduli sono in `public/content/**.md` e vengono caricati a runtime.

---

## Struttura

    src/
      data/courseData.js     <- dati del corso (quiz, prompt, glossario, risorse, test finale)
      context/ProgressContext.jsx
      components/            <- Dashboard, AreaView, QuizPage, AIPlayground, Sidebar, Header
    public/content/          <- moduli in markdown, per area
    LearningHub.html         <- versione autonoma completa e gamificata (fuori da src/)

---

## Login e progressi nel cloud (Supabase)

L'hub può funzionare in due modi:

- **Modalità locale** (predefinita): nessuna configurazione, i progressi e gli XP
  restano sul dispositivo (localStorage). La topbar mostra l'indicatore "💾 Locale".
- **Modalità cloud**: con un progetto **Supabase** configurato, l'app mostra una
  **schermata di accesso (username/password)**, salva i progressi per utente nel
  database e assegna gli **XP automaticamente al superamento del quiz del modulo
  (≥ 60%)** — senza pulsante manuale. La topbar mostra "☁️ Cloud".

Per attivarla segui **`SETUP_SUPABASE.md`**: crei un progetto Supabase, esegui
`supabase_schema.sql` (tabelle + sicurezza RLS + trigger), disattivi la conferma
email e incolli URL e chiave `anon` nel blocco `window.HUB_CONFIG` in cima a
`LearningHub.html` (per il React: file `.env`, vedi `.env.example`, e
`src/lib/supabaseClient.js`).

L'autenticazione usa **Supabase Auth** (hashing e sessioni gestiti dal servizio):
lo username è mappato a un'email tecnica interna, così l'utente digita solo
username e password. La Row Level Security garantisce che ciascuno acceda solo ai
propri dati.

## Avvertenza sull'uso dell'IA

Negli strumenti IA pubblici **non inserire mai dati personali reali** di alunni o
personale: usa dati fittizi o anonimizzati e completa i documenti offline. La firma
e la responsabilita' degli atti restano sempre umane (GDPR art. 22, AI Act art. 14).
