# Attivare login e cloud (Supabase) — guida rapida

Senza configurazione l'hub funziona già in **modalità locale** (i progressi
restano sul dispositivo). Per avere **login con username/password** e
**progressi salvati nel cloud** (con XP assegnati automaticamente al superamento
del modulo), segui questi passaggi. Bastano ~10 minuti.

## 1. Crea un progetto Supabase
1. Vai su https://supabase.com e crea un account (piano gratuito sufficiente).
2. "New project": scegli nome, password del database e regione (es. Frankfurt).
3. Attendi che il progetto sia pronto.

## 2. Crea le tabelle
1. Nel menu a sinistra: **SQL Editor → New query**.
2. Apri il file `supabase_schema.sql` (incluso nel progetto), copia tutto,
   incollalo nell'editor e premi **Run**.
3. Dovresti vedere "Success". Sono state create le tabelle `profiles` e
   `user_progress`, le policy di sicurezza e il trigger di registrazione.

## 3. Disattiva la conferma via email (IMPORTANTE)
Lo username viene mappato a un'email tecnica (es. `mrossi@learninghub.local`)
che non riceve posta: se la conferma email è attiva, il login non funziona.
1. Menu: **Authentication → Sign In / Providers → Email**.
2. Disattiva **"Confirm email"** (o attiva l'auto-conferma) e salva.

> In alternativa, se vuoi usare email vere, di' pure: adatto il login a email+password.

## 4. Copia URL e chiave
1. Menu: **Project Settings → API**.
2. Copia **Project URL** e la chiave **anon public** (NON la `service_role`).

## 5. Incolla le credenziali
### Versione HTML autonoma (`LearningHub.html`)
Apri il file con un editor di testo e, in cima, trova il blocco
`window.HUB_CONFIG`:

```js
window.HUB_CONFIG = {
  SUPABASE_URL: "https://xxxxxxxx.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGci...la-tua-chiave-anon...",
  USERNAME_DOMAIN: "learninghub.local"
};
```

Salva. Riaprendo il file comparirà la **schermata di accesso**.

### Progetto React/Vite
Crea un file `.env` nella cartella del progetto (vedi `.env.example`):

```
VITE_SUPABASE_URL=https://xxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
```

Il client è in `src/lib/supabaseClient.js`. (Le schermate di login nell'app
React vanno ancora collegate: la versione HTML autonoma è il riferimento
completo del flusso di autenticazione.)

## Come funziona
- **Registrazione/Login**: l'utente inserisce username e password. Supabase Auth
  gestisce in sicurezza hashing e sessioni; lo username è mappato a un'email
  tecnica interna.
- **Tracciamento**: ad ogni evento (modulo completato, quiz, badge) lo stato
  viene salvato nella riga `user_progress` dell'utente (campo `state` + `xp`).
- **XP automatici**: il modulo si completa **superando il quiz (≥ 60%)**; in quel
  momento gli XP del modulo vengono assegnati e salvati nel cloud, senza alcun
  pulsante manuale.
- **Sicurezza**: con la Row Level Security ogni utente accede solo ai propri dati.

## Note
- La chiave `anon public` è pensata per stare nel client: è sicura da esporre,
  perché l'accesso ai dati è limitato dalle policy RLS. Non usare mai la chiave
  `service_role` nel front-end.
- Per una **classifica** tra utenti, lo schema include una vista `leaderboard`
  (di default privata): vedi le note nel file SQL per renderla condivisa.
