# Assistenti Tecnici — Sicurezza, privacy e gestione dei dati

L'assistente tecnico è una figura chiave per la **sicurezza pratica** della scuola: account, postazioni, reti, backup, dispositivi mobili. Lavora a fianco del DSGA, del DPO e — quando previsto — del Responsabile della Transizione Digitale.

## Principi di base (Linee guida MIM e GDPR)
- **Privacy by design e by default**: nelle configurazioni iniziali, attiva solo ciò che serve.
- **Minimizzazione**: meno dati raccogli, meno rischi corri.
- **Sorveglianza umana**: i sistemi automatici (compresi quelli IA) devono sempre poter essere fermati o corretti da una persona.
- **Documentazione**: lasciare traccia delle configurazioni e dei cambiamenti.

## Gestione di account e postazioni
- **Mai** account condivisi senza password o con password banali.
- Utenze nominative; **disattivazione tempestiva** alla cessazione del servizio.
- Schermi che si bloccano automaticamente; uso del lucchetto fisico ove serve.
- Aggiornamenti di sistema e software regolari (su pianificazione).

## Wi-Fi e rete
- Separazione tra Wi-Fi **didattico**, **uffici** e ospiti (SSID/VLAN distinti).
- Filtri di contenuto adeguati all'utenza scolastica.
- Log di rete trattati con riservatezza, accessibili solo a personale autorizzato.

## Backup e continuità
- Backup regolari e **testati** dei dati critici (in accordo col DSGA e con la policy).
- Conservazione separata (almeno una copia off-line o off-site).
- Verifica periodica del ripristino: un backup mai testato vale poco.

## Strumenti IA: scelta e configurazione
Quando si valuta un servizio IA per la scuola, l'assistente tecnico supporta DSGA e DPO con verifiche pratiche.
- **Certificazioni** del fornitore (es. ISO/IEC 27001, qualificazioni AgID per SaaS).
- Adesione al **Data Privacy Framework** o garanzie equivalenti per i trasferimenti extra-UE.
- **Contratto** che includa gli elementi dell'**art. 28 GDPR** (responsabile del trattamento).
- Disattivazione delle funzionalità non necessarie (cronologia, addestramento).

> Il **diritto di non partecipazione** all'addestramento dei modelli per studenti e famiglie va garantito anche tecnicamente: scegli configurazioni che lo permettano.

## Incidenti e data breach
Se sospetti un incidente di sicurezza che coinvolge dati personali:
1. **Contieni** subito l'incidente (isolare la macchina, cambiare credenziali).
2. **Avvisa** il DSGA e il DPO senza ritardo.
3. **Documenta** orario, sistemi coinvolti e azioni intraprese.
4. La scuola, come titolare, valuta la **notifica al Garante entro 72 ore** (art. 33 GDPR) e l'eventuale **comunicazione agli interessati** (art. 34).

> Non aspettare per "vedere se passa": il tempo è un fattore critico.

## Cosa NON fare
- Usare l'**account personale** del docente o dello studente per attività di servizio.
- Salvare password in chiaro nei PC o nei cassetti.
- Inviare per email file contenenti dati personali senza protezione (cifratura/zip con password).
- Inserire dati reali del personale o degli alunni in chatbot IA pubblici.

## Riferimenti
- **GDPR (Reg. UE 2016/679)** — artt. 5, 25, 28, 32, 33, 34.
- **Linee guida MIM (DM 166/2025)** — requisiti tecnici e gestione dei dati.
- **AgID — Linee guida tecniche** e **ACN — Cybersicurezza nazionale**.

---
### CONTROLLI DA EFFETTUARE SEMPRE
- [ ] Le credenziali del personale sono individuali e non condivise?
- [ ] I backup vengono testati periodicamente?
- [ ] Gli strumenti IA in uso hanno una configurazione privacy adeguata?
- [ ] In caso di incidente, so chi avvisare e in quanti minuti?
