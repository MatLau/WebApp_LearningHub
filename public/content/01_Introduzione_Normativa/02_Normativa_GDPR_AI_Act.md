# MODULO 2 - GDPR, AI Act, CAD e Trasparenza

![Immagine Modulo](/content/images/intro.png)


## 2.1 Perché la normativa è vitale quando si usa l'IA
La scuola tratta ogni giorno una mole immensa di dati personali, spesso riguardanti minori, che rientrano nelle categorie "particolari" (ex dati sensibili) come stato di salute (BES, DSA, 104), convinzioni religiose o situazioni socio-economiche. 
L'uso dell'Intelligenza Artificiale accelera il lavoro, ma se non governato, può esporre la scuola a sanzioni gravissime e violazioni della privacy.

## 2.2 Il GDPR: La regola d'oro dell'Anonimizzazione
Il Regolamento Europeo sulla Privacy (GDPR) impone che i dati personali siano trattati in modo lecito, corretto e trasparente.
**La regola assoluta per la segreteria:** Qualsiasi prompt (istruzione) inviato a una piattaforma IA esterna non deve **MAI** contenere:
- Nomi e cognomi reali (usare "Mario Rossi" fittizio o "Alunno A").
- Codici Fiscali.
- Indirizzi, numeri di telefono, e-mail reali.
- Dettagli clinici, certificazioni mediche o diagnosi (sostituire con "[Dato Omissis]").

## 2.3 Il principio di minimizzazione
Il GDPR stabilisce il principio di minimizzazione: si devono trattare solo i dati strettamente necessari. 
Se chiedi all'IA di aiutarti a riassumere le motivazioni di un ricorso, all'IA non serve sapere chi è il ricorrente. Sostituisci il nome con "Il Ricorrente".

## 2.4 L'AI Act (Il regolamento sull'Intelligenza Artificiale)
L'Europa ha recentemente approvato l'AI Act, che classifica i sistemi di IA in base al rischio. I sistemi di IA generativa usati in segreteria rientrano nei sistemi a "rischio limitato", che richiedono **Trasparenza** e **Supervisione Umana**.
Questo si traduce operativamente in:
- Sapere sempre quando si sta interagendo o utilizzando un output generato da IA.
- Assicurarsi che le decisioni amministrative, specialmente se impattano su docenti o alunni (es. graduatorie), siano sempre validate da un umano.

## 2.5 Il Codice dell'Amministrazione Digitale (CAD)
Il CAD impone l'efficienza, l'efficacia e l'economicità dell'azione amministrativa, oltre alla gestione documentale informatica. L'IA è uno strumento perfetto per supportare gli obiettivi del CAD:
- Permette di redigere più rapidamente gli atti amministrativi.
- Aiuta nella sintesi e nella protocollazione informatica (estrazione dei metadati).

## 2.6 Trasparenza, Accesso Civico e IA
Quando si pubblica un documento in Amministrazione Trasparente, esso non deve contenere dati personali eccedenti. L'IA può essere utilizzata per "bonificare" i testi, ad esempio creando un prompt del tipo: *"Analizza questa delibera e rimuovi tutti i riferimenti a nomi, cognomi e dati personali, sostituendoli con gli OMISSIS di legge, prima della sua pubblicazione."*

---

### CASO PRATICO GUIDATO
**Situazione:** Una graduatoria interna d'istituto per il personale ATA deve essere pubblicata all'albo. 
**Errore Comune:** Dare il file Excel in pasto all'IA chiedendo di "fare una tabella bella per il sito", includendo nomi e codici fiscali.
**Azione Corretta con IA:** L'assistente amministrativo rimuove (o nasconde) manualmente la colonna dei Codici Fiscali e degli indirizzi dal gestionale. Invia all'IA solo i dati anonimi o necessari (Cognome, Iniziale Nome, Punteggio) e chiede di formattarli in HTML o in una tabella ordinata per la pubblicazione.

---
### CHECKLIST OPERATIVA DI SICUREZZA
- [ ] Ho rimosso i Codici Fiscali dal testo prima di inserirlo nell'IA?
- [ ] Ho rimosso nomi, cognomi, recapiti e indirizzi?
- [ ] Ci sono riferimenti a patologie o situazioni personali? Se sì, li ho omessi?
- [ ] Ho riletto l'output dell'IA per assicurarmi che non abbia "inventato" dati o normative (Allucinazioni)?
- [ ] Il documento finale è firmato e approvato da me/DSGA, assumendomene la responsabilità?
