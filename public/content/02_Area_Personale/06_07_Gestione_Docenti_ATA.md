# Area Personale — Gestione del Personale Docente e ATA

![Gestione Personale](/content/images/personale.png)

La gestione del personale è il **cuore della segreteria amministrativa**: presa di servizio, contratti, fascicolo, anno di prova, comunicazioni obbligatorie. Sono procedimenti normati, con scadenze stringenti e ricadute economiche e giuridiche.

## Inquadramento del settore
L'area Personale cura lo **stato giuridico ed economico** di docenti e personale ATA, dalla nomina alla cessazione, in raccordo con il DSGA e con le piattaforme ministeriali. La normativa di riferimento principale è il **D.Lgs. 165/2001** (lavoro alle dipendenze delle PA), il **D.Lgs. 297/1994** e il **CCNL Istruzione e Ricerca** vigente.

## I compiti tipici
- **Assunzioni e contratti**: presa di servizio, dichiarazioni di rito, contratto a tempo determinato/indeterminato, eventuali proroghe.
- **Stato giuridico**: ferie, permessi (L. 104/1992, permessi studio, congedi parentali, malattie), aspettative, decreti.
- **Fascicolo personale**: tenuta cartacea/digitale, ricostruzioni di carriera, trasferimenti.
- **Anno di prova e formazione**: monitoraggi, certificazioni, supporto al Comitato di Valutazione.
- **Cessazioni e pensioni**: pratiche con INPS, certificazioni di servizio.
- **Adempimenti previdenziali e contributivi**: in raccordo con NoiPA per gli aspetti economici.

## Dove vivono i dati (e dove l'IA NON entra)
- **SIDI** — Sistema Informativo dell'Istruzione: graduatorie d'istituto, convocazioni telematiche, contratti, fascicolo strutturato, flussi verso il MIM.
- **NoiPA** — stato giuridico-economico, stipendi, cedolini, comunicazioni obbligatorie economiche.
- **Gestionali scolastici** (Argo, Spaggiari/Classeviva, Madisoft Nuvola) — gestione interna del personale, decreti, assenze.

> L'IA **non sostituisce** queste piattaforme: non assegna supplenze, non emette stipendi, non protocolla atti. L'IA aiuta intorno: bozze, sintesi, traduzioni, checklist.

## Preparazione delle comunicazioni formali
Spesso occorre inviare comunicazioni formali ai docenti o al personale ATA: presa di servizio, decreti, assegnazioni di plesso, convocazioni interne. L'IA aiuta a costruire **bozze** coerenti e prive del classico "errore di copia-incolla" del documento dell'anno scorso.

**Prompt per assegnazione plesso (Personale ATA):**
> "Agisci come DSGA. Crea una disposizione di servizio formale per assegnare un Collaboratore Scolastico al Plesso 'Verdi' a partire dal 1 settembre. Specifica orario (7:30–14:42, lun–ven), compiti base (apertura/chiusura locali, vigilanza, pulizie ordinarie) e riferimenti CCNL. Lascia segnaposti [nome] e [cognome]."

**Prompt per comunicazione anno di prova (Docenti):**
> "Scrivi una circolare interna ai docenti neoassunti per ricordare la scadenza del portfolio su INDIRE e la convocazione del Comitato di Valutazione. Tono istituzionale, elenco puntato, [data] come segnaposto."

## Analisi dati anonimizzati
Spesso il DS chiede sintesi: scadenze contratti, distribuzione per profilo, ore residue. Esporta i dati dal gestionale, **anonimizzali** (rimuovi nome, cognome, CF), poi chiedi all'IA.

**Prompt:**
> "Analizza questi dati contrattuali (Profilo, Data Inizio, Data Fine). Dimmi quanti contratti di Collaboratore Scolastico scadono prima del 30/06 e fornisci l'elenco delle date esatte di scadenza."

## Checklist di controllo del fascicolo
La tenuta del fascicolo personale è normata e si presta perfettamente a una checklist.

**Prompt:**
> "Crea una checklist [ ] per l'Assistente Amministrativo con tutti i documenti obbligatori nel fascicolo personale digitale di un docente a tempo indeterminato appena assunto: documenti d'identità, titoli, casellario giudiziale, dichiarazioni di rito, codice IBAN, dichiarazioni TFR/Fondo, altro."

## Adempimenti periodici
| Cadenza | Adempimento | Piattaforma |
|---|---|---|
| Inizio anno | Presa di servizio, contratti di lavoro | SIDI, gestionale |
| Settembre/Ottobre | Comunicazioni obbligatorie nuove assunzioni | NoiPA |
| Mensile | Stipendi, cedolini, ritenute | NoiPA |
| Annuale | Anno di prova: portfolio, valutazione | INDIRE, Comitato |
| Annuale | Comunicazioni fiscali (CU, ritenute) | NoiPA |

## Riferimenti normativi
- **D.Lgs. 165/2001** — Norme generali sul lavoro alle dipendenze delle PA.
- **D.Lgs. 297/1994** — Testo Unico sull'istruzione.
- **CCNL Istruzione e Ricerca** — disciplina dei rapporti di lavoro.
- **L. 104/1992**, **D.Lgs. 151/2001** — permessi e congedi.
- **GDPR** — trattamento dei dati del personale.

---
### CONTROLLI DA EFFETTUARE SEMPRE (REVISIONE UMANA)
- [ ] La normativa richiamata dall'IA è coerente con l'ultimo CCNL?
- [ ] Ho rimosso ogni dato sensibile (es. motivi di salute) prima di usare l'IA?
- [ ] L'atto è stato siglato dal DSGA/Dirigente prima dell'invio?
- [ ] Le date e i riferimenti normativi sono stati verificati?
