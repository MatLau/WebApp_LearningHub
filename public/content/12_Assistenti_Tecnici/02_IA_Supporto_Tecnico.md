# Assistenti Tecnici — IA per il supporto tecnico e la didattica

Per l'assistente tecnico l'IA generativa è un'ottima **assistente di troubleshooting e documentazione**: fa risparmiare tempo sulle attività ricorrenti, ma — come per i medici — la diagnosi proposta va sempre **verificata** prima di "operare" sul paziente.

## Troubleshooting assistito
Quando un PC, un proiettore o una stampante non funziona, l'IA può aiutare a generare un **elenco ragionato di ipotesi e passi di verifica**.

**Prompt esempio:**
> "Sono un assistente tecnico scolastico. Un monitor interattivo Android non si connette al Wi-Fi della scuola: vede la rete ma non si autentica. Indicami una checklist di verifiche da fare, in ordine, dalla più semplice (controllo password, orario di sistema, MAC filtering) alla più complessa, con i comandi/menù tipici di un dispositivo Android."

> **Regola d'oro:** verifica le risposte in un ambiente di **test** prima di applicarle ai sistemi in produzione. Mai eseguire alla cieca comandi suggeriti dall'IA, soprattutto su server, reti o configurazioni del registro elettronico.

## Generare documentazione e procedure
Le procedure scritte fanno la differenza: l'IA è ottima per produrne una **bozza** che poi rifinisci.

**Prompt esempio (mini-guida per i docenti):**
> "Scrivi una mini-guida in 6 passaggi, con linguaggio semplice e immagini suggerite, per consentire a un docente di connettere il proprio notebook al monitor interattivo dell'aula tramite cavo HDMI. Aggiungi una sezione 'Cosa fare se non vedo l'immagine'."

**Prompt esempio (registro tecnico interventi):**
> "Crea un modello di registro degli interventi tecnici (campi: data, aula/laboratorio, segnalante, descrizione del problema, intervento, esito, tempo impiegato, ricambi usati). Pensato per essere compilato anche su tablet."

## Supporto ai docenti nell'uso dell'IA
Il docente decide la didattica; l'assistente tecnico è il **facilitatore** che rende possibile usare strumenti IA in modo corretto e sicuro.
- Aiuto nella **configurazione** di un account di lavoro o di una classe virtuale.
- Verifica della **conformità** dello strumento alle linee della scuola e del DPO.
- Predisposizione di workstation con i tool valutati e approvati.

## Configurazioni privacy-aware
Quando configuri un servizio IA per uso scolastico, **disattiva di default** ciò che non serve:
- cronologia delle conversazioni;
- uso dei dati per l'**addestramento** del modello;
- profilazione e funzionalità accessorie non necessarie.

Le Linee guida MIM raccomandano l'**uso di account dedicati di lavoro** (non quelli personali del docente o dello studente) e configurazioni che impediscano la conservazione dei prompt.

## Inventario tecnologico e ciclo di vita
L'IA può aiutare a tenere ordinata la documentazione del parco tecnologico.

**Prompt esempio:**
> "Aiutami a strutturare una scheda di vita del dispositivo per i monitor interattivi della scuola, con campi: codice inventario, aula, data acquisto, garanzia, firmware, interventi tecnici, accessori. Pensato per essere replicabile su 30 dispositivi."

I dati reali andranno poi inseriti nel **gestionale di patrimonio** (l'inventario ufficiale resta lì).

## Cosa NON chiedere all'IA
- Decisioni di acquisto o capitolati definitivi (richiedono procedure e responsabilità del DS/DSGA).
- Operazioni su dati personali reali del personale o degli alunni (vanno trattati nei sistemi titolari).
- Pareri legali o decisioni vincolanti su procedure GDPR (è il DPO).

---
### CONTROLLI DA EFFETTUARE SEMPRE
- [ ] Ho verificato in test la soluzione proposta dall'IA prima di applicarla in produzione?
- [ ] Sto usando account di lavoro, non personali?
- [ ] Ho rimosso o evitato dati reali del personale e degli alunni nei prompt?
- [ ] Le decisioni finali (acquisti, modifiche di rete) passano dal DSGA?
