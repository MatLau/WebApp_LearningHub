# MODULO 3 - Prompt Engineering per Assistenti Amministrativi e DSGA

![Immagine Modulo](/content/images/intro.png)


## 3.1 Cos'è un Prompt
Il "Prompt" è l'istruzione, il comando o la domanda che scrivi all'Intelligenza Artificiale. Più il prompt è preciso, dettagliato e strutturato, migliore e più professionale sarà la risposta dell'IA. Fare "Prompt Engineering" significa imparare a "parlare" con l'IA per ottenere esattamente il documento amministrativo che desideri.

## 3.2 La struttura del Prompt Perfetto (Il Metodo R.O.C.C.O.)
Per ottenere risultati eccellenti in segreteria, segui questo schema per i tuoi prompt:
1. **R - Ruolo**: Chi deve essere l'IA? (es. "Agisci come un esperto Assistente Amministrativo di una scuola statale italiana...")
2. **O - Obiettivo**: Cosa vuoi che faccia? (es. "...scrivi una circolare rivolta ai genitori...")
3. **C - Contesto**: Qual è la situazione? (es. "...per comunicare che il plesso chiuderà alle 12:00 per un'assemblea sindacale il giorno 15 Novembre...")
4. **C - Costrizioni/Regole**: Cosa non deve fare? (es. "...usa un tono formale ma rassicurante. Sii breve, massimo 150 parole.")
5. **O - Output**: In che formato lo vuoi? (es. "...restituisci il testo in formato elenco puntato, pronto per il copia-incolla.")

## 3.3 Prompt Base vs Prompt Avanzato
**Prompt Base (Pessimo):**
> "Scrivi una mail per un supplente che non si è presentato."
*(Risultato probabile: Una mail troppo colloquiale, senza i riferimenti normativi, inadatta a una PA).*

**Prompt Avanzato (Ottimo):**
> "Agisci come DSGA di un Istituto Comprensivo. Redigi una formale lettera di diffida a un docente supplente breve che non ha preso servizio nel giorno stabilito senza giustificato motivo. Richiama brevemente le sanzioni previste dall'Ordinanza Ministeriale sulle supplenze (decadenza). Il tono deve essere perentorio, istituzionale e burocratico. Predisponi gli spazi vuoti [Nome], [Data], [Classe di Concorso] per il mio successivo inserimento."

## 3.4 Errori Comuni da Evitare
- **Richieste troppo vaghe**: L'IA riempirà i vuoti informativi con supposizioni.
- **Inserimento di Dati Personali (Violazione GDPR)**: Non scrivere "Diffida a Mario Bianchi nato a Roma". Scrivi "Diffida a [Nome Cognome]".
- **Mancanza di verifica**: Fidarsi ciecamente dei riferimenti di legge citati dall'IA (spesso inventa i numeri delle circolari ministeriali). Verifica sempre le fonti normative!

## 3.5 Esempi di Prompt per Aree Operative
Di seguito un assaggio di prompt utili. Ne troverai molti altri nei Moduli specifici.

**Per il Personale (Assenze):**
> "Agisci come assistente area personale. Prepara un modello di circolare interna in cui si ricorda ai docenti la procedura tassativa per comunicare un'assenza per malattia (orario limite ore 7:30, invio certificato medico telematico). Sii conciso e istituzionale."

**Per l'Area Alunni (Iscrizioni):**
> "Redigi una comunicazione da inviare ai genitori degli alunni delle classi terze della scuola secondaria di I grado per ricordare le scadenze delle iscrizioni alla scuola superiore. Metti in evidenza in grassetto le date cruciali e la necessità di avere le credenziali SPID."

**Per il Protocollo (Sintesi):**
> "Ti fornirò di seguito il testo anonimizzato di una circolare ministeriale di 10 pagine. Leggila e produci: 1) Un riassunto di 5 righe. 2) Un elenco puntato degli adempimenti a carico della segreteria. 3) Le scadenze temporali menzionate. Testo: [INCOLLA TESTO]"

---
### CHECKLIST OPERATIVA PER IL PROMPT
- [ ] Ho definito il Ruolo (es. DSGA, Assistente)?
- [ ] L'Obiettivo è chiaro e inequivocabile?
- [ ] Ho fornito il Contesto adeguato (date, motivi)?
- [ ] Ho specificato il Tono di voce (formale, istituzionale, rassicurante)?
- [ ] I Dati Sensibili sono stati rimossi?
