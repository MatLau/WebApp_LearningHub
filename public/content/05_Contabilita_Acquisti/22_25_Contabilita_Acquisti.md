# Contabilità e Acquisti

La contabilità scolastica è un'area ad **alto rigore formale**: ogni atto è tracciato e ogni pagamento risponde a regole stringenti. L'IA può aiutare a spiegare procedure, redigere atti istruttori e produrre checklist, ma non sostituisce il software contabile.

## Inquadramento
Il riferimento principale è il **D.I. 129/2018** (Regolamento di contabilità delle istituzioni scolastiche). Il **DSGA** ha la responsabilità diretta della gestione finanziaria e contabile; l'Assistente Amministrativo del settore lavora in raccordo con lui.

## I compiti tipici
- **Programma Annuale (P.A.)** e **Conto Consuntivo**: predisposizione e variazioni.
- **Impegni, liquidazioni, ordinativi di pagamento e reversali**.
- **Fatturazione elettronica** verso la PA (Sistema di Interscambio - SdI) e gestione del **ciclo passivo**.
- **Adempimenti fiscali**: ritenute, F24, Certificazione Unica.
- **Acquisti**: indagini di mercato, ordini su **MEPA**, verifica di **CIG** e **DURC** prima del pagamento.
- **Pago In Rete / PagoPA** per i contributi delle famiglie.
- **Liquidazione del FIS** (Fondo per il miglioramento dell'offerta formativa).

## Dove vivono i dati (e dove l'IA non entra)
- **Gestionale di contabilità** (es. Argo, Spaggiari, Madisoft Bilancio): scritture, mandati, reversali, registro inventario.
- **SdI (Sistema di Interscambio)**: fatturazione elettronica.
- **MEPA / Acquistinretepa**: acquisti pubblici.
- **PagoPA / Pago In Rete**: pagamenti delle famiglie.
- **NoiPA**: stipendi e compensi accessori.

> L'IA non emette mandati, non invia fatture allo SdI, non aggiorna il bilancio. Il valore aggiunto è altrove: bozze, checklist, spiegazioni, sintesi.

## Determine e ordini: bozze con l'IA
Una determina o un ordine si compongono di parti ripetitive (riferimenti normativi, struttura) e di parti specifiche (oggetto, importo, fornitore). L'IA è eccellente sulla parte "ripetitiva".

**Prompt per una determina di affidamento:**
> "Agisci come Assistente Amministrativo della contabilità. Scrivi la bozza di una determina di affidamento diretto, art. 50 del D.Lgs. 36/2023, per l'acquisto di materiale di facile consumo. Struttura: visti e considerato che, premesso, dispositivo, copertura finanziaria (segnaposto capitolo), CIG (segnaposto), tempi consegna, modalità di pagamento. Lascia [Fornitore], [Importo], [Capitolo]."

**Prompt per una lettera al fornitore:**
> "Scrivi un sollecito cortese a un fornitore per una consegna in ritardo (giorni: 15). Tono istituzionale, riferimento all'ordine [n.], invito a comunicare nuova data, contatto della segreteria."

## Spiegazioni per il personale e le famiglie
La contabilità è opaca per chi non la fa. Una buona segreteria spiega.

**Prompt per la formazione interna:**
> "Spiega in 8 righe a un nuovo collega cos'è il **principio di competenza** in contabilità scolastica, con un esempio pratico tratto da una scuola."

**Prompt per le famiglie (Pago In Rete):**
> "Scrivi una guida in 5 punti per le famiglie su come pagare il contributo volontario tramite Pago In Rete: accesso con SPID/CIE, ricerca dell'avviso, scelta del canale di pagamento, conferma, ricevuta. Tono cortese."

## Tracciabilità: CIG e DURC
La **tracciabilità dei flussi finanziari** (L. 136/2010) è un pilastro della contabilità pubblica.
- **CIG (Codice Identificativo di Gara)**: ANAC.
- **DURC (Documento Unico di Regolarità Contributiva)**: INPS/INAIL.

**Prompt per una checklist:**
> "Crea una checklist [ ] dei controlli da fare prima di liquidare una fattura nella PA: verifica fattura elettronica, congruenza con ordine, CIG, DURC in corso di validità, congruenza dell'oggetto, eventuale tracciabilità del conto corrente dedicato, IVA split payment."

## Adempimenti periodici
| Cadenza | Adempimento | Piattaforma |
|---|---|---|
| Mensile | Liquidazioni e mandati ricorrenti | Gestionale |
| Mensile | F24 (ritenute) | F24 Entratel/gestionale |
| Periodica | Acquisti tramite MEPA | MEPA |
| Annuale | Programma Annuale (P.A.) | Gestionale + atti CdI |
| Annuale | Conto Consuntivo | Gestionale + atti |
| Annuale | Certificazione Unica (CU) | NoiPA / SOGEI |

## Riferimenti normativi
- **D.I. 129/2018** — Regolamento contabilità scolastica.
- **D.Lgs. 36/2023** — Codice dei contratti pubblici.
- **L. 136/2010** — Tracciabilità dei flussi finanziari.
- **D.Lgs. 82/2005 (CAD)** — Amministrazione digitale.
- **D.Lgs. 33/2013** — Trasparenza (Amministrazione trasparente).

---
### CONTROLLI DA EFFETTUARE SEMPRE (REVISIONE UMANA)
- [ ] CIG e DURC verificati prima del pagamento?
- [ ] Importi e capitoli di bilancio coerenti con i documenti istruttori?
- [ ] Le scadenze fiscali (F24, CU) sono rispettate?
- [ ] L'IA è stata usata solo per bozze/spiegazioni, mai con dati riservati?
