# Area Personale — Assenze e Supplenze

La gestione delle assenze e delle supplenze è una delle attività più dense della segreteria: scadenze brevi, ricadute economiche dirette e flussi telematici obbligatori. È il terreno classico dove l'IA **non** può sostituire SIDI/NoiPA, ma può velocizzare le comunicazioni e i controlli.

## Inquadramento
Il personale scolastico ha diritto a vari tipi di assenza, ciascuno con la sua disciplina:
- **malattia** (con visite fiscali e certificazione INPS);
- **permessi retribuiti** (L. 300/1970, CCNL): lutto, matrimonio, motivi personali/familiari;
- **L. 104/1992**: permessi mensili e congedi straordinari;
- **congedi parentali** (D.Lgs. 151/2001);
- **aspettative** (per motivi familiari, studio, dottorato, ecc.);
- **assenze per sciopero** (con effetti su stipendio e servizi minimi).

## Il flusso tipico
1. Il dipendente comunica l'assenza (PEC, mail, gestionale).
2. La segreteria registra l'assenza nel **gestionale del personale**.
3. Se servono, si producono i **decreti** e si effettuano le **comunicazioni obbligatorie**.
4. Per i supplenti, si attiva la procedura di **convocazione su SIDI**.
5. I dati economici fluiscono su **NoiPA**.

## Le convocazioni telematiche (l'IA NON entra)
Per i docenti, le supplenze annuali sono assegnate dall'**algoritmo provinciale** sulle GPS (USP/ATP). Per le supplenze brevi da **graduatorie d'istituto** la scuola usa **SIDI** (Applicazioni SIDI → Reclutamento → Convocazioni): la segreteria invia la convocazione elettronica e l'aspirante risponde tramite il link che lo porta su **Istanze OnLine**.

> Niente prompt: la procedura è chiusa e tracciata. L'IA serve, semmai, per **scrivere la comunicazione informativa** che accompagna o segue la convocazione.

## Dove l'IA agevola
**Bozze di decreti e comunicazioni**
> "Scrivi un decreto di concessione di permesso retribuito per lutto (3 giorni), riferimenti al CCNL Istruzione, struttura: intestazione, premessa, dispositivo, copia conforme. Lascia segnaposti per [nome], [date], [parentela]."

**Riepiloghi e sintesi**
> "Riassumi in 6 punti le scadenze del congedo parentale per un dipendente del comparto Istruzione (D.Lgs. 151/2001), con riferimento all'art. 32 e seguenti. Output: elenco puntato per circolare interna."

**Analisi anonime delle assenze**
Esporta i dati senza nomi:
> "Analizza l'andamento mensile delle assenze (solo conteggi per tipologia: malattia, L. 104, permessi). Quali mesi presentano picchi? Suggerisci 3 azioni organizzative."

## Casi particolari da maneggiare con cura
- **Visite fiscali**: orari e fasce di reperibilità sono normati; la convocazione la richiede la segreteria, non l'IA.
- **L. 104 e congedi straordinari**: contengono dati di salute (cat. particolari art. 9 GDPR) → non inserire i dati reali nei tool IA.
- **Sciopero**: la rilevazione segue le procedure ministeriali; gli effetti economici li applica NoiPA.

## Adempimenti periodici
| Cadenza | Adempimento | Piattaforma |
|---|---|---|
| Quotidiana | Registrazione assenze, sostituzioni interne | Gestionale |
| All'occorrenza | Convocazione supplenti da grad. d'istituto | SIDI / Istanze OnLine |
| Mensile | Quadratura assenze ai fini economici | NoiPA |
| Annuale | Riepilogo permessi residui (es. L. 104) | Gestionale |

## Riferimenti normativi
- **CCNL Istruzione e Ricerca** — assenze e permessi del personale scolastico.
- **L. 104/1992**, **D.Lgs. 151/2001** — permessi e congedi.
- **D.Lgs. 165/2001** — disciplina del rapporto di lavoro.
- **Decreto MIUR sulla disciplina delle convocazioni** (graduatorie d'istituto).

---
### CONTROLLI DA EFFETTUARE SEMPRE (REVISIONE UMANA)
- [ ] I dati di salute restano fuori dai tool IA?
- [ ] La convocazione è stata effettuata sulla piattaforma ministeriale, non con email libere?
- [ ] Le bozze dell'IA sono state riviste su quantità, scadenze e riferimenti normativi?
- [ ] Le ricadute economiche sono state riportate correttamente su NoiPA?
