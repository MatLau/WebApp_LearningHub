// Course structure & content — merged from the self-study HTML course, the
// "Manuale dei compiti degli assistenti amministrativi" and the MIM guidelines
// for AI in schools (DM 166/2025). Quizzes cover every module; the full prompt
// library, glossary, resources, a 20-question final test, the platform map
// ("who does what") and the MIM principles are included.

export const COURSE_AREAS = [
  {
    id: 'intro',
    label: 'Introduzione & Normativa',
    icon: 'BookOpen',
    colorClass: 'intro',
    modules: [
      { id: 'mod01', title: 'Introduzione all\'IA', file: '01_Introduzione_Normativa/01_Introduzione_IA.md' },
      { id: 'mod02', title: 'Normativa GDPR & AI Act', file: '01_Introduzione_Normativa/02_Normativa_GDPR_AI_Act.md' },
      { id: 'mod03', title: 'Prompt Engineering', file: '01_Introduzione_Normativa/03_Prompt_Engineering.md' },
      { id: 'mod04', title: 'Software e Piattaforme', file: '01_Introduzione_Normativa/04_05_Software_e_Piattaforme.md' },
    ],
  },
  {
    id: 'personale',
    label: 'Area Personale',
    icon: 'Users',
    colorClass: 'personale',
    modules: [
      { id: 'mod06', title: 'Gestione Docenti e ATA', file: '02_Area_Personale/06_07_Gestione_Docenti_ATA.md' },
      { id: 'mod08', title: 'Assenze e Supplenze', file: '02_Area_Personale/08_09_Assenze_Supplenze.md' },
      { id: 'mod10', title: 'Graduatorie e Ferie', file: '02_Area_Personale/10_11_12_Graduatorie_Ferie.md' },
    ],
  },
  {
    id: 'alunni',
    label: 'Area Alunni',
    icon: 'GraduationCap',
    colorClass: 'alunni',
    modules: [
      { id: 'mod13', title: 'Iscrizioni ed Esami', file: '03_Area_Alunni/13_14_15_Iscrizioni_Esami.md' },
      { id: 'mod16', title: 'Inclusione e Comunicazioni', file: '03_Area_Alunni/16_17_Inclusione_Comunicazioni.md' },
    ],
  },
  {
    id: 'protocollo',
    label: 'Protocollo & Archiviazione',
    icon: 'FileText',
    colorClass: 'protocollo',
    modules: [
      { id: 'mod18', title: 'Protocollo e PEC', file: '04_Protocollo_Archiviazione/18_19_Protocollo_PEC.md' },
      { id: 'mod20', title: 'Archiviazione e Accesso', file: '04_Protocollo_Archiviazione/20_21_Archiviazione_Accesso.md' },
    ],
  },
  {
    id: 'contabilita',
    label: 'Contabilità & Acquisti',
    icon: 'Calculator',
    colorClass: 'contab',
    modules: [
      { id: 'mod22', title: 'Contabilità e Acquisti', file: '05_Contabilita_Acquisti/22_25_Contabilita_Acquisti.md' },
    ],
  },
  {
    id: 'progetti',
    label: 'Progetti & PNRR',
    icon: 'FolderKanban',
    colorClass: 'progetti',
    modules: [
      { id: 'mod26', title: 'Progetti e PNRR', file: '06_Progetti_PNRR/26_30_Progetti_PNRR.md' },
    ],
  },
  {
    id: 'piattaforme',
    label: 'Piattaforme Avanzate',
    icon: 'Monitor',
    colorClass: 'piattaforme',
    modules: [
      { id: 'mod31', title: 'SIDI e NoiPA', file: '07_Piattaforme_Avanzate/31_33_SIDI_NoiPA.md' },
    ],
  },
  {
    id: 'organizzazione',
    label: 'Organizzazione & Agenti',
    icon: 'CalendarClock',
    colorClass: 'org',
    modules: [
      { id: 'mod34', title: 'Organizzazione e Agenti AI', file: '08_Organizzazione_Scadenze/34_37_Organizzazione_Agenti.md' },
    ],
  },
  {
    id: 'laboratorio',
    label: 'Laboratorio Prompt',
    icon: 'FlaskConical',
    colorClass: 'lab',
    modules: [
      { id: 'mod38', title: 'Allegati e Laboratorio', file: '09_Laboratorio_Prompt/38_40_Allegati_Laboratorio.md' },
    ],
  },
  {
    id: 'docenti',
    label: 'Area Docenti',
    icon: 'Presentation',
    colorClass: 'docenti',
    modules: [
      { id: 'mod_doc1', title: 'Didattica e materiali con l\'IA', file: '10_Docenti/01_Didattica_Materiali.md' },
      { id: 'mod_doc2', title: 'Valutazione, rischi e uso responsabile', file: '10_Docenti/02_Valutazione_Rischi.md' },
      { id: 'mod_doc3', title: 'Inclusione, BES e multilingue', file: '10_Docenti/03_Inclusione_BES.md' },
      { id: 'mod_doc4', title: 'Guidare gli studenti all\'uso critico', file: '10_Docenti/04_Studenti_Uso_Critico.md' },
      { id: 'mod_doc5', title: 'Governance, ruoli e implementazione', file: '10_Docenti/05_Governance_Implementazione.md' },
    ],
  },
  {
    id: 'collaboratori',
    label: 'Collaboratori Scolastici',
    icon: 'DoorOpen',
    colorClass: 'collaboratori',
    modules: [
      { id: 'mod_cs1', title: 'Ruolo, compiti e doveri', file: '11_Collaboratori_Scolastici/01_Ruolo_Compiti.md' },
      { id: 'mod_cs2', title: 'Alfabetizzazione digitale e IA di base', file: '11_Collaboratori_Scolastici/02_Alfabetizzazione_IA.md' },
    ],
  },
  {
    id: 'tecnici',
    label: 'Assistenti Tecnici',
    icon: 'Cpu',
    colorClass: 'tecnici',
    modules: [
      { id: 'mod_at1', title: 'Ruolo, laboratori e patrimonio tecnologico', file: '12_Assistenti_Tecnici/01_Ruolo_Laboratori.md' },
      { id: 'mod_at2', title: 'IA per il supporto tecnico e la didattica', file: '12_Assistenti_Tecnici/02_IA_Supporto_Tecnico.md' },
      { id: 'mod_at3', title: 'Sicurezza, privacy e gestione dei dati', file: '12_Assistenti_Tecnici/03_Sicurezza_Privacy.md' },
    ],
  },
];

// Per-module quizzes (incl. MIM principles in mod02 and platform/SIDI questions in mod31)
export const QUIZZES = {
  "mod_doc1": [
    { "question": "Qual è un uso appropriato dell'IA nella progettazione didattica?", "options": ["Far valutare i compiti dall'IA al posto del docente", "Generare bozze di UDA ed esercizi differenziati da rivedere", "Sostituire la programmazione del consiglio di classe", "Decidere i voti finali"], "correct": 1, "explanation": "L'IA produce bozze e materiali differenziati; la regia didattica e le decisioni restano del docente." },
    { "question": "Perché non inserire dati reali degli studenti nei tool IA pubblici?", "options": ["Perché rallenta il PC", "Per rispettare GDPR e privacy degli studenti", "Perché è vietato usare l'IA a scuola", "Non è un problema"], "correct": 1, "explanation": "I dati personali degli studenti sono protetti dal GDPR: si usano esempi fittizi o anonimizzati." },
    { "question": "Un buon prompt per materiali didattici dovrebbe specificare…", "options": ["Solo l'argomento", "Classe, obiettivi, livello e formato desiderato", "Il nome degli studenti", "Nulla, l'IA capisce da sola"], "correct": 1, "explanation": "Più il contesto è chiaro (classe, obiettivi, livello, formato), migliore è l'output." }
  ],
  "mod_doc2": [
    { "question": "L'AI Act considera la valutazione degli apprendimenti tramite IA…", "options": ["un uso a rischio minimo", "un uso ad alto rischio", "sempre obbligatorio", "irrilevante"], "correct": 1, "explanation": "È ad alto rischio: richiede DPIA/FRIA e non va comunque delegata; il voto resta del docente." },
    { "question": "Quale approccio raccomandano le Linee guida MIM per introdurre l'IA?", "options": ["Immediato e generalizzato", "Prudenziale e graduale, a basso rischio", "Solo nelle superiori", "Vietarla"], "correct": 1, "explanation": "Si parte da pratiche a basso rischio educativo e giuridico, con sperimentazione e monitoraggio." },
    { "question": "A scuola l'AI Act vieta espressamente i sistemi che…", "options": ["generano esercizi", "riconoscono le emozioni degli studenti", "traducono testi", "creano mappe concettuali"], "correct": 1, "explanation": "Il riconoscimento delle emozioni in ambito educativo è vietato (salvo motivi medici o di sicurezza)." },
    { "question": "Cosa si intende per «sistemi ibridi»?", "options": ["Due chatbot insieme", "Automatizzare il ripetitivo lasciando al docente decisioni e relazione", "Sostituire il docente", "Vietare il lavoro di gruppo"], "correct": 1, "explanation": "L'IA arricchisce, non sostituisce l'insegnamento diretto e la sorveglianza umana." }
  ],
  "mod_doc3": [
    { "question": "Gli adattamenti prodotti con l'IA per uno studente con DSA devono…", "options": ["sostituire il PDP", "essere coerenti con PDP/PEI", "essere decisi dall'IA", "ignorare le misure dispensative"], "correct": 1, "explanation": "L'IA supporta, ma gli adattamenti integrano PDP/PEI a tutela dello studente." },
    { "question": "Quali dati NON vanno mai inseriti in un tool IA pubblico?", "options": ["Un brano del libro", "Diagnosi e dati di salute reali di uno studente", "Una consegna generica", "Il titolo di un'UDA"], "correct": 1, "explanation": "Salute e disabilità sono categorie particolari (art. 9 GDPR): si usano esempi fittizi." },
    { "question": "Un uso inclusivo tipico dell'IA è…", "options": ["riconoscere le emozioni", "produrre materiali multilingue e semplificati", "assegnare i voti", "profilare gli studenti"], "correct": 1, "explanation": "Materiali multilingue e accessibili sono casi d'uso inclusivi raccomandati." }
  ],
  "mod_doc4": [
    { "question": "Cosa sono le «allucinazioni» dell'IA?", "options": ["Errori di battitura", "Output plausibili ma falsi o con fonti inventate", "Immagini generate", "Virus"], "correct": 1, "explanation": "Vanno sempre verificate: è un'occasione per educare al pensiero critico." },
    { "question": "L'obiettivo nell'uso dell'IA con gli studenti è renderli…", "options": ["utilizzatori passivi", "co-creatori consapevoli e critici", "dipendenti dall'IA", "valutatori automatici"], "correct": 1, "explanation": "L'IA non deve sostituire lo sforzo cognitivo: si promuove un uso critico e responsabile." },
    { "question": "Le scelte sull'uso dell'IA in classe vanno…", "options": ["tenute riservate", "condivise con trasparenza con studenti e famiglie", "decise dall'IA", "imposte senza spiegazioni"], "correct": 1, "explanation": "Trasparenza e coinvolgimento (anche via organi collegiali) creano fiducia." }
  ],
  "mod_doc5": [
    { "question": "Quale nuova figura è stata introdotta dal DM 166/2025 in ogni istituto?", "options": ["Il valutatore algoritmi", "Il Referente IA d'istituto", "Il tecnico di laboratorio digitale", "Il DPO esterno obbligatorio"], "correct": 1, "explanation": "Il DM 166/2025 prevede che il DS nomini un Referente IA d'istituto che coordina le iniziative AI e collabora con DSGA e docenti." },
    { "question": "Quante fasi prevede il framework operativo del DM 166/2025?", "options": ["3 (Analisi, Adozione, Verifica)", "4 (Analisi, Pianificazione, Monitoraggio, Revisione)", "5 (Analisi, Pianificazione, Adozione, Monitoraggio, Consolidamento)", "2 (Sperimentazione, Consolidamento)"], "correct": 2, "explanation": "Le cinque fasi sono: Analisi preliminare → Pianificazione → Adozione e sperimentazione → Monitoraggio e valutazione → Consolidamento e revisione." },
    { "question": "La policy IA d'istituto è…", "options": ["Facoltativa, su iniziativa del DS", "Obbligatoria: deliberata dal CdI e inserita nel PTOF", "Riservata al solo personale ATA", "Gestita autonomamente da ogni docente"], "correct": 1, "explanation": "La policy è obbligatoria (non opzionale): va deliberata dal Consiglio di Istituto e inserita nel PTOF, e aggiornata almeno annualmente." },
    { "question": "Entro quanto tempo dall'avvio di un progetto IA la scuola deve registrarlo sulla Piattaforma Unica MIM?", "options": ["7 giorni", "15 giorni", "30 giorni", "90 giorni"], "correct": 2, "explanation": "Ogni scuola che adotta sistemi IA deve registrare il proprio progetto sulla Piattaforma Unica MIM entro 30 giorni dall'avvio (DM 166/2025)." }
  ],
  "mod_cs1": [
    { "question": "Tra i compiti del collaboratore scolastico rientra…", "options": ["la protocollazione degli atti", "l'accoglienza, la vigilanza e la pulizia dei locali", "la gestione del bilancio", "la valutazione dei docenti"], "correct": 1, "explanation": "Vigilanza su alunni e locali, accoglienza, pulizia e supporto sono i compiti tipici (CCNL, Area dei Collaboratori)." },
    { "question": "Il supporto del collaboratore agli alunni con disabilità riguarda…", "options": ["la didattica", "l'assistenza di base alla persona", "la valutazione", "la diagnosi"], "correct": 1, "explanation": "Comprende l'ausilio materiale e l'assistenza di base, non compiti didattici o sanitari." },
    { "question": "I dati personali di cui il collaboratore può venire a conoscenza…", "options": ["si possono raccontare ai colleghi", "vanno trattati con riservatezza", "si possono pubblicare", "non esistono"], "correct": 1, "explanation": "Vale il dovere di riservatezza: anche il collaboratore è autorizzato al trattamento sotto la responsabilità del Dirigente." }
  ],
  "mod_cs2": [
    { "question": "Per il collaboratore scolastico, l'alfabetizzazione all'IA serve soprattutto a…", "options": ["programmare software", "riconoscere informazioni e contenuti falsi o manipolati", "gestire SIDI", "valutare gli studenti"], "correct": 1, "explanation": "Le indicazioni puntano su alfabetizzazione di base e capacità di riconoscere fake news e contenuti generati." },
    { "question": "Un contenuto sospetto (foto/audio/video) ricevuto su un gruppo della scuola…", "options": ["va inoltrato subito a tutti", "va verificato e segnalato prima di diffonderlo", "è sempre vero", "va ignorato sempre"], "correct": 1, "explanation": "Meglio verificare la fonte e segnalare: l'IA rende più facili falsi realistici (deepfake)." },
    { "question": "Per il collaboratore, l'IA generativa è utile ad esempio per…", "options": ["aprire e chiudere i locali", "farsi spiegare una procedura o tradurre un avviso semplice", "gestire l'inventario ufficiale", "sostituire la vigilanza"], "correct": 1, "explanation": "Può aiutare a comprendere comunicazioni o tradurre, restando un supporto e non una sostituzione dei compiti." }
  ],
  "mod_at1": [
    { "question": "L'assistente tecnico si occupa principalmente di…", "options": ["contabilità", "laboratori, attrezzature informatiche e supporto tecnico", "graduatorie", "protocollo"], "correct": 1, "explanation": "Cura il funzionamento dei laboratori e delle dotazioni tecnologiche, supportando didattica e uffici." },
    { "question": "Nella gestione del patrimonio tecnologico, l'assistente tecnico…", "options": ["decide gli acquisti da solo", "collabora con DSGA/uffici alla manutenzione e all'inventario delle dotazioni", "ignora l'inventario", "valuta i docenti"], "correct": 1, "explanation": "Collabora alla manutenzione e alla corretta tenuta delle attrezzature, in raccordo con la segreteria." },
    { "question": "Il registro/inventario ufficiale delle attrezzature è gestito…", "options": ["con ChatGPT", "nel gestionale di patrimonio/segreteria", "su un foglio personale", "non è gestito"], "correct": 1, "explanation": "L'inventario ufficiale vive nel gestionale: l'IA non lo aggiorna." }
  ],
  "mod_at2": [
    { "question": "Un uso utile dell'IA per l'assistente tecnico è…", "options": ["inserire i dati reali degli alunni", "ottenere ipotesi di troubleshooting e bozze di documentazione/guide", "valutare gli studenti", "firmare gli atti"], "correct": 1, "explanation": "L'IA aiuta a diagnosticare problemi tecnici, scrivere guide e procedure, sempre con verifica." },
    { "question": "Quando l'IA propone una soluzione tecnica (es. un comando), occorre…", "options": ["eseguirla subito sui server", "verificarla in ambiente di test prima di applicarla", "ignorarla", "pubblicarla"], "correct": 1, "explanation": "Gli output vanno verificati: meglio testare prima di intervenire su sistemi in produzione." },
    { "question": "Nel supportare i docenti con strumenti IA, l'assistente tecnico…", "options": ["sceglie i contenuti didattici", "configura strumenti e cura impostazioni di privacy/sicurezza", "valuta gli studenti", "gestisce gli stipendi"], "correct": 1, "explanation": "Il suo ruolo è abilitante e tecnico: configurazione e sicurezza, non la didattica." }
  ],
  "mod_at3": [
    { "question": "Per ridurre i rischi privacy nei laboratori, è buona pratica…", "options": ["usare account condivisi senza password", "disattivare la cronologia/allenamento nei tool e non inserire dati personali reali", "lasciare i PC sempre sbloccati", "salvare le password in chiaro"], "correct": 1, "explanation": "Configurazioni che evitano conservazione dei prompt e profilazione riducono i rischi (cfr. Linee guida MIM)." },
    { "question": "La scelta di un fornitore di servizi IA dovrebbe considerare…", "options": ["solo il prezzo", "standard di sicurezza (es. ISO/IEC 27001) e conformità GDPR", "il colore dell'interfaccia", "la popolarità sui social"], "correct": 1, "explanation": "Le Linee guida indicano certificazioni e garanzie sul trattamento dei dati." },
    { "question": "In caso di incidente di sicurezza con dati personali, la scuola…", "options": ["non fa nulla", "valuta la notifica al Garante (entro 72 ore) e la comunicazione agli interessati", "cancella tutto di nascosto", "aspetta un anno"], "correct": 1, "explanation": "Il GDPR (artt. 33-34) prevede la notifica del data breach senza ingiustificato ritardo." }
  ],
  "mod01": [
    {
      "question": "Qual è la differenza fondamentale tra programmazione tradizionale e Machine Learning?",
      "options": [
        "Il ML è molto più veloce nei calcoli",
        "La PT usa regole fisse; il ML impara i pattern dai dati",
        "Il ML funziona solo con connessione internet veloce",
        "Non esiste differenza sostanziale tra i due"
      ],
      "correct": 1,
      "explanation": "Nel Machine Learning il sistema trova autonomamente le regole analizzando i dati — nella PT le regole sono scritte dal programmatore. Questa differenza spiega sia la potenza (flessibilità, linguaggio naturale) che i limiti (allucinazioni) dell'IA generativa."
    },
    {
      "question": "Cosa sono le 'allucinazioni' dell'IA e quale norma richiede la verifica umana?",
      "options": [
        "Immagini distorte — vietate dall'AI Act art. 5",
        "Informazioni false prodotte con sicurezza — l'AI Act impone verifica umana per output con effetti giuridici",
        "Risposte offensive — regolate dal GDPR art. 9",
        "Errori di formattazione — risolti con il riavvio"
      ],
      "correct": 1,
      "explanation": "Le allucinazioni sono informazioni false ma plausibili prodotte con la stessa sicurezza di quelle corrette. L'AI Act (Reg. UE 2024/1689), considerando 47, richiede che gli output con effetti giuridici siano verificati da persone qualificate."
    },
    {
      "question": "Quale strumento IA ha già un DPA incluso nel contratto per le scuole con Microsoft 365 Education?",
      "options": [
        "ChatGPT (versione gratuita)",
        "Claude (versione consumer)",
        "Microsoft Copilot in M365 Education",
        "Google Translate web"
      ],
      "correct": 2,
      "explanation": "Microsoft Copilot in M365 Education include un Data Processing Agreement nel contratto educativo: dati non usati per addestrare il modello, storage EU conforme GDPR. Questo è il punto di partenza più sicuro per le scuole già dotate di M365."
    },
    {
      "question": "Chi è responsabile se una circolare ufficiale con dati errati generati dall'IA viene pubblicata?",
      "options": [
        "Il fornitore dello strumento IA",
        "Nessuno — è un errore della macchina",
        "Il DS o chi ha firmato il documento",
        "Il personale ATA che ha usato l'IA"
      ],
      "correct": 2,
      "explanation": "Il firmatario è sempre responsabile del contenuto del documento ufficiale — GDPR art. 22 e L. 241/1990 art. 3 si applicano indipendentemente dallo strumento usato. L'IA non ha responsabilità giuridica: è uno strumento."
    },
    {
      "question": "Qual è il primo passo del workflow efficiente con l'IA?",
      "options": [
        "Aprire subito ChatGPT e scrivere velocemente",
        "Raccogliere tutti i dati fattuali PRIMA di aprire l'IA",
        "Guardare un tutorial su YouTube",
        "Chiedere all'IA cosa devo fare"
      ],
      "correct": 1,
      "explanation": "Raccogliere date, nomi, numeri e normative PRIMA di aprire l'IA è il passo più importante. L'IA produce output molto migliori quando riceve informazioni complete, riducendo drasticamente la necessità di correzioni."
    }
  ],
  "mod02": [
    {
      "question": "Il GDPR art. 9 classifica come 'categorie speciali' i dati:",
      "options": [
        "Solo i dati bancari e finanziari",
        "Sanitari, disabilità, DSA, etnia, religione, dati giudiziari",
        "Qualsiasi dato di un alunno minore",
        "Solo le diagnosi mediche formali"
      ],
      "correct": 1,
      "explanation": "GDPR art. 9: le categorie speciali includono dati sanitari, disabilità, DSA, origine etnica, convinzioni religiose, opinioni politiche, dati giudiziari. Richiedono base giuridica esplicita e misure di sicurezza rafforzate — il trattamento su IA consumer è vietato."
    },
    {
      "question": "Il flusso di lavoro corretto per usare l'IA su relazioni scolastiche è:",
      "options": [
        "Inserire tutti i dati reali per massima accuratezza dell'output",
        "Dati anonimi nell'IA → output generato → dati reali nel documento finale OFFLINE",
        "Pubblicare direttamente l'output dell'IA nel registro elettronico",
        "Chiedere il consenso dei genitori prima di usare l'IA per ogni relazione"
      ],
      "correct": 1,
      "explanation": "Il flusso corretto: dati anonimi/codici nell'IA → testo generato → inserimento dati reali OFFLINE nel documento finale. Questo rispetta GDPR artt. 8-9 proteggendo minori e categorie speciali, senza rinunciare al supporto dell'IA."
    },
    {
      "question": "Chi è il 'titolare del trattamento' in una scuola italiana?",
      "options": [
        "Il DPO (Data Protection Officer)",
        "Il singolo docente che usa l'IA",
        "La scuola come istituzione, rappresentata dal Dirigente Scolastico",
        "Il fornitore dello strumento IA"
      ],
      "correct": 2,
      "explanation": "GDPR art. 4(7): il titolare del trattamento è chi determina finalità e mezzi del trattamento. In una scuola è l'istituzione scolastica/DS. Il fornitore IA è il 'responsabile del trattamento' (art. 4(8)) e deve avere un DPA."
    },
    {
      "question": "Il principio 'human in the loop' si basa normativamente su:",
      "options": [
        "Solo sulla deontologia professionale informale",
        "AI Act art. 14 (supervisione umana) + GDPR art. 22 (no decisioni interamente automatizzate)",
        "D.Lgs. 82/2005 (CAD) esclusivamente",
        "Solo sul CCNL del personale scolastico"
      ],
      "correct": 1,
      "explanation": "Il 'human in the loop' ha doppia base normativa: AI Act art. 14 impone supervisione umana per sistemi ad alto rischio, GDPR art. 22 vieta decisioni interamente automatizzate con effetti giuridici. L'IA supporta, l'umano decide."
    },
    {
      "question": "La policy IA d'istituto deliberata dal CdI si fonda su:",
      "options": [
        "Solo il GDPR europeo",
        "DPR 275/1999 (autonomia) + GDPR art. 24 + AI Act art. 50 + D.Lgs. 82/2005 (CAD)",
        "Esclusivamente le circolari ministeriali",
        "Solo l'AI Act come norma prevalente"
      ],
      "correct": 1,
      "explanation": "La policy ha fondamento plurinormativo: DPR 275/1999 conferisce autonomia organizzativa, GDPR art. 24 impone misure tecniche adeguate, AI Act art. 50 richiede trasparenza, D.Lgs. 82/2005 promuove strumenti digitali PA. Nessuna norma è sufficiente da sola."
    },
    {
      "question": "Secondo le Linee guida MIM, nella gestione di un sistema di IA la scuola agisce come…",
      "options": [
        "fornitore del sistema",
        "«deployer» (utilizzatore) sotto la propria autorità",
        "autorità di controllo",
        "sviluppatore del modello"
      ],
      "correct": 1,
      "explanation": "L'Istituzione scolastica è «deployer» ai sensi dell'AI Act; il Dirigente è titolare del trattamento dei dati."
    },
    {
      "question": "Quando va integrata la FRIA (valutazione d'impatto sui diritti fondamentali)?",
      "options": [
        "Per ogni email inviata",
        "Mai, basta il consenso",
        "Quando si usa un sistema di IA ad alto rischio",
        "Solo nelle scuole paritarie"
      ],
      "correct": 2,
      "explanation": "La FRIA (art. 27 AI Act) integra la DPIA per i sistemi classificati ad alto rischio."
    },
    {
      "question": "Quale principio impone che l'uomo resti centrale e possa intervenire sugli output dell'IA?",
      "options": [
        "Sostenibilità",
        "Intervento e sorveglianza umana",
        "Automazione totale",
        "Massimizzazione dei dati"
      ],
      "correct": 1,
      "explanation": "La sorveglianza umana consente di individuare anomalie ed errori e intervenire a tutela degli interessati."
    }
  ],
  "mod03": [
    {
      "question": "Quale strumento ha il DPA incluso per le scuole con contratto Microsoft 365 Education?",
      "options": [
        "ChatGPT (versione gratuita)",
        "Claude (versione consumer)",
        "Microsoft Copilot in M365 Education",
        "Google Translate web gratuito"
      ],
      "correct": 2,
      "explanation": "Microsoft Copilot in M365 Education include un DPA nel contratto educativo: dati non usati per addestrare il modello, storage conforme GDPR EU. Questo lo rende il punto di partenza più sicuro per le scuole con M365."
    },
    {
      "question": "Perché la verifica dei dati fattuali nel workflow è OBBLIGATORIA e non facoltativa?",
      "options": [
        "Per evitare che l'IA si aggiorni automaticamente",
        "Perché DPR 445/2000 e L. 241/1990 richiedono correttezza di date, protocollo e motivazioni giuridiche negli atti PA",
        "Per motivi estetici di presentazione del documento",
        "Perché l'IA non capisce le date italiane"
      ],
      "correct": 1,
      "explanation": "Il DPR 445/2000 e la L. 241/1990 stabiliscono i requisiti formali e di motivazione degli atti amministrativi. Questi obblighi si applicano indipendentemente dallo strumento usato per produrre il testo — la responsabilità è sempre del firmatario."
    }
  ],
  "mod04": [
    {
      "question": "Se l'output dell'IA non è soddisfacente, la strategia più efficiente è:",
      "options": [
        "Ricominciare da capo con un nuovo prompt",
        "Cambiare strumento IA immediatamente",
        "Chiedere revisioni specifiche nella stessa sessione",
        "Accettare il risultato per risparmiare tempo"
      ],
      "correct": 2,
      "explanation": "L'IA mantiene il contesto nella stessa sessione. Chiedere 'rendi il secondo paragrafo più formale' o 'aggiungi una sezione su X' è molto più efficiente che ricominciare con tutte le informazioni iniziali."
    }
  ],
  "mod31": [
    {
      "question": "Le 'istruzioni personalizzate' in ChatGPT servono a:",
      "options": [
        "Cambiare il modello IA utilizzato",
        "Impostare il contesto della propria scuola per tutte le conversazioni future",
        "Accedere a funzioni premium senza abbonamento",
        "Memorizzare password e credenziali scolastiche"
      ],
      "correct": 1,
      "explanation": "Le istruzioni personalizzate (Impostazioni → Istruzioni personalizzate) permettono di impostare una volta il contesto fisso (ruolo, scuola, stile) che viene applicato automaticamente a tutte le conversazioni. Elimina la necessità di ripetere il contesto ogni volta."
    },
    {
      "question": "Le convocazioni per le supplenze da graduatoria d'istituto si gestiscono…",
      "options": [
        "scrivendole con ChatGPT",
        "tramite SIDI (Reclutamento → Convocazioni)",
        "su un gestionale di contabilità",
        "via messaggio sui social"
      ],
      "correct": 1,
      "explanation": "La segreteria invia la convocazione da SIDI; l'aspirante risponde tramite un link su Istanze OnLine."
    },
    {
      "question": "Qual è un uso APPROPRIATO dell'IA accanto a SIDI?",
      "options": [
        "Caricare l'anagrafe alunni coi dati reali",
        "Far assegnare la supplenza all'IA",
        "Far redigere la bozza della comunicazione che accompagna la convocazione",
        "Sostituire NoiPA per gli stipendi"
      ],
      "correct": 2,
      "explanation": "L'IA aiuta a scrivere e spiegare ciò che gira attorno all'atto, non a compiere l'atto né a trattare dati reali."
    },
    {
      "question": "Stipendi e cedolini del personale scolastico sono gestiti da…",
      "options": [
        "NoiPA",
        "un modello linguistico",
        "il registro elettronico",
        "Pago In Rete"
      ],
      "correct": 0,
      "explanation": "NoiPA gestisce lo stato giuridico-economico e i pagamenti del personale: l'IA non vi entra."
    }
  ],
  "mod06": [
    {
      "question": "Quale è il primo adempimento obbligatorio dopo aver generato una nota all'UST con l'IA?",
      "options": [
        "Inviare subito la nota senza perdere tempo",
        "Verificare tutti i riferimenti normativi su normattiva.it prima dell'invio",
        "Chiedere conferma a un secondo strumento IA",
        "Stampare una copia fisica per l'archivio"
      ],
      "correct": 1,
      "explanation": "La L. 241/1990, art. 3, richiede che gli atti amministrativi citino correttamente le basi giuridiche. L'IA può inventare norme plausibili. La verifica su normattiva.it è obbligatoria — non facoltativa — prima di qualsiasi invio ufficiale."
    },
    {
      "question": "Quale normativa impone che i dati del PDP di un alunno con DSA siano trattati come dati sanitari?",
      "options": [
        "Solo il GDPR art. 5 (principi del trattamento)",
        "L. 170/2010 + DM 5669/2011 + GDPR art. 9 (categorie speciali)",
        "DPR 275/1999 (autonomia scolastica)",
        "D.Lgs. 82/2005 (CAD)"
      ],
      "correct": 1,
      "explanation": "La L. 170/2010 impone riservatezza assoluta sui dati DSA. Il GDPR art. 9 classifica i dati sanitari come categorie speciali, vietandone il trattamento su piattaforme IA senza adeguate garanzie. I dati del PDP sono sanitari per entrambe le normative."
    }
  ],
  "mod08": [
    {
      "question": "Il PTOF secondo il DPR 275/1999 viene approvato da:",
      "options": [
        "Solo il Dirigente Scolastico",
        "Il Collegio dei Docenti",
        "Il Consiglio di Istituto su proposta del Collegio dei Docenti",
        "L'Ufficio Scolastico Territoriale"
      ],
      "correct": 2,
      "explanation": "DPR 275/1999, art. 3: il PTOF è approvato dal Consiglio di Istituto su proposta del Collegio dei Docenti. L'IA accelera la stesura delle sezioni narrative, ma l'approvazione formale degli organi è insostituibile."
    }
  ],
  "mod10": [
    {
      "question": "Quale atto del personale NON deve mai essere delegato interamente all'IA?",
      "options": [
        "Comunicazione di assegnazione supplenza",
        "Convocazione per il Consiglio di Classe",
        "Circolare interna su variazione orario",
        "Atto disciplinare formale che richiede competenza giuridica"
      ],
      "correct": 3,
      "explanation": "Il D.Lgs. 165/2001, art. 55-bis, disciplina gli atti disciplinari nel pubblico impiego con procedure precise. Richiedono competenza giuridica specifica — l'IA può produrre bozze, ma la revisione di un esperto è sempre necessaria prima della firma."
    }
  ],
  "mod22": [
    {
      "question": "Per la documentazione PNRR, quale adempimento NON può essere delegato all'IA?",
      "options": [
        "Comunicare alle famiglie l'attivazione di un'attività",
        "Descrivere il progetto per il sito web della scuola",
        "Rendicontazione contabile e certificazioni di spesa",
        "Strutturare la relazione narrativa del progetto"
      ],
      "correct": 2,
      "explanation": "La rendicontazione contabile e le certificazioni di spesa richiedono precisione assoluta e responsabilità legale diretta. L'IA può sbagliare calcoli o interpretare le regole in modo errato. Questi adempimenti devono essere verificati e firmati manualmente da personale qualificato."
    }
  ],
  "mod13": [
    {
      "question": "La formula RCOF per i prompt sta per:",
      "options": [
        "Risposta, Controllo, Output, Feedback",
        "Ruolo, Compito, Contesto, Formato",
        "Revisione, Correzione, Ottimizzazione, Fine",
        "Risposta, Circolare, Oggetto, Firma"
      ],
      "correct": 1,
      "explanation": "RCOF = Ruolo + Compito + Contesto + Formato. Questa struttura fornisce all'IA tutte le informazioni per produrre output professionali e pertinenti nel registro scolastico corretto."
    },
    {
      "question": "Il DPR 445/2000 stabilisce che le circolari scolastiche devono avere:",
      "options": [
        "Almeno 200 parole",
        "Data, numero di protocollo e firma del responsabile",
        "Approvazione dell'UST prima della pubblicazione",
        "Intestazione in almeno due lingue"
      ],
      "correct": 1,
      "explanation": "Il DPR 445/2000 (T.U. Documentazione Amministrativa), art. 3, stabilisce i requisiti formali degli atti PA: data, protocollo e firma del responsabile. L'IA produce la bozza — questi elementi vanno verificati e apposti dall'umano responsabile."
    }
  ],
  "mod16": [
    {
      "question": "Costruire un repertorio di risposte email tipo richiede circa:",
      "options": [
        "Una giornata intera con un esperto",
        "3-4 ore di investimento iniziale con risparmio permanente di 30-40 min al giorno",
        "Nessun tempo — l'IA lo gestisce in automatico",
        "15 settimane di lavoro progressivo"
      ],
      "correct": 1,
      "explanation": "Il repertorio di risposte tipo richiede 3-4 ore iniziali per generare le risposte per le 10-15 casistiche più frequenti. L'investimento si ripaga in pochi giorni grazie al risparmio permanente di tempo."
    },
    {
      "question": "Quale principio GDPR si applica alle email con le famiglie?",
      "options": [
        "Principio di finalità — usare i dati solo per lo scopo dichiarato",
        "Principio di minimizzazione — le comunicazioni devono contenere solo i dati necessari",
        "Principio di esattezza — tutte le informazioni devono essere accurate",
        "Principio di integrità — protezione da accessi non autorizzati"
      ],
      "correct": 1,
      "explanation": "Il GDPR art. 5(1)(c) stabilisce il principio di minimizzazione: i dati personali devono essere adeguati, pertinenti e limitati a quanto necessario. Le risposte email generate dall'IA aiutano a strutturare comunicazioni essenziali e precise."
    }
  ],
  "mod18": [
    {
      "question": "Per i verbali di organi collegiali, la base normativa di riferimento è:",
      "options": [
        "Solo il GDPR art. 28",
        "DPR 416/1974 sugli organi collegiali e DPR 445/2000",
        "L. 241/1990 esclusivamente",
        "AI Act art. 14"
      ],
      "correct": 1,
      "explanation": "I verbali degli organi collegiali scolastici (CdI, Collegio Docenti, Consigli di Classe) sono disciplinati dal DPR 416/1974 che ne stabilisce funzioni e procedure. Il DPR 445/2000 disciplina i requisiti formali della documentazione. L'IA supporta la redazione rispettando entrambe le normative."
    }
  ],
  "mod20": [
    {
      "question": "Per le traduzioni nelle lingue delle famiglie straniere, l'IA è:",
      "options": [
        "Inadatta — la qualità è troppo bassa per uso ufficiale",
        "Utile per comunicazioni ordinarie; per atti critici verifica con un madrelingua",
        "Perfetta per tutti i tipi di documento senza revisione",
        "Utilizzabile solo con abbonamento premium"
      ],
      "correct": 1,
      "explanation": "Per comunicazioni ordinarie (circolari informative, FAQ, comunicazioni di servizio) l'IA è molto efficace per arabo, cinese, rumeno e altre lingue comuni. Per atti con rilevanza legale o disciplinare, la verifica con un madrelingua è sempre prudente."
    }
  ],
  "mod26": [
    {
      "question": "Quale classificazione assegna l'AI Act ai sistemi IA per valutare gli studenti?",
      "options": [
        "Rischio minimo — nessun adempimento",
        "Rischio limitato — solo trasparenza",
        "Alto rischio — supervisione umana e documentazione obbligatorie",
        "Inaccettabile — completamente vietati"
      ],
      "correct": 2,
      "explanation": "L'AI Act (Reg. UE 2024/1689), art. 6 e Allegato III, classifica esplicitamente come 'alto rischio' i sistemi IA in ambito educativo per valutare, selezionare o orientare studenti. Richiedono documentazione tecnica, supervisione umana e trasparenza."
    },
    {
      "question": "Il GDPR art. 28 richiede che la scuola stipuli un DPA con il fornitore IA:",
      "options": [
        "Solo per i dati sanitari degli alunni",
        "Per qualsiasi trattamento di dati personali per conto della scuola",
        "Solo se il fornitore è estero",
        "Solo per dati di minori under 16"
      ],
      "correct": 1,
      "explanation": "Il GDPR art. 28 è generale: qualsiasi responsabile del trattamento che elabora dati personali per conto della scuola deve avere un DPA. Senza DPA, ogni uso su dati personali — anche comuni — è una violazione."
    },
    {
      "question": "Cosa ha fatto il Garante Privacy italiano riguardo a ChatGPT nel marzo 2023?",
      "options": [
        "Ha multato OpenAI",
        "Ha bloccato temporaneamente ChatGPT per violazione del GDPR sui dati degli utenti italiani",
        "Ha approvato l'uso di ChatGPT in tutte le scuole",
        "Ha richiesto l'uso solo per adulti"
      ],
      "correct": 1,
      "explanation": "Il Garante ha disposto il blocco temporaneo per: assenza di base giuridica per il trattamento, nessuna informativa agli utenti, mancanza di protezioni per i minori. ChatGPT è stato ripristinato dopo adeguamenti da parte di OpenAI."
    }
  ],
  "mod34": [
    {
      "question": "La policy IA della scuola deliberata in CdI si fonda principalmente su:",
      "options": [
        "Solo il GDPR europeo",
        "DPR 275/1999 (autonomia scolastica) + GDPR art. 24 + D.Lgs. 82/2005",
        "Solo le circolari MIUR",
        "Esclusivamente l'AI Act"
      ],
      "correct": 1,
      "explanation": "Il DPR 275/1999 conferisce autonomia organizzativa agli istituti. Il GDPR art. 24 impone misure tecniche e organizzative adeguate. Il D.Lgs. 82/2005 (CAD) promuove strumenti digitali nella PA. La delibera del CdI esercita questa autonomia."
    },
    {
      "question": "Quale norma italiana istituisce l'obbligo di alfabetizzazione digitale per il personale scolastico?",
      "options": [
        "D.Lgs. 196/2003 (Codice Privacy)",
        "DPR 445/2000 (Documentazione amministrativa)",
        "L. 107/2015 art. 1 cc. 56-57 (Piano Nazionale Scuola Digitale)",
        "D.Lgs. 165/2001 (Pubblico impiego)"
      ],
      "correct": 2,
      "explanation": "La L. 107/2015 (La Buona Scuola), art. 1 cc. 56-57, istituisce il Piano Nazionale Scuola Digitale (PNSD) che include l'obbligo di formazione digitale per tutto il personale scolastico, docente e ATA."
    }
  ],
  "mod38": [
    {
      "question": "Le UDA prodotte con l'IA devono essere basate su quale quadro normativo didattico?",
      "options": [
        "Solo le indicazioni dell'IA stessa",
        "DM 254/2012 (Indicazioni Nazionali) e Raccomandazione UE 2018 sulle competenze chiave",
        "Esclusivamente le disposizioni del dirigente scolastico",
        "L. 107/2015 (La Buona Scuola) esclusivamente"
      ],
      "correct": 1,
      "explanation": "Le UDA devono essere coerenti con il DM 254/2012 (Indicazioni Nazionali per il curricolo) e con la Raccomandazione UE 2018 sulle competenze chiave. L'IA può costruire UDA coerenti con questo quadro se fornita degli elementi corretti nel prompt RCOF."
    },
    {
      "question": "Il D.Lgs. 66/2017 supporta quale pratica didattica che l'IA può facilitare?",
      "options": [
        "La valutazione interamente automatizzata",
        "La differenziazione dei materiali per l'inclusione di tutti gli studenti",
        "L'esonero dalle verifiche per alunni BES",
        "La separazione degli alunni con disabilità in classi dedicate"
      ],
      "correct": 1,
      "explanation": "Il D.Lgs. 66/2017 promuove l'inclusione scolastica. La differenziazione dei materiali (schede a 3 livelli) è uno strumento fondamentale — l'IA accelera enormemente la produzione senza compromettere la qualità pedagogica."
    },
    {
      "question": "Il DM 62/2017 stabilisce che le rubriche di valutazione devono:",
      "options": [
        "Essere tenute riservate fino alla consegna del compito",
        "Essere coerenti con i criteri definiti dal Collegio e comunicati alle famiglie",
        "Usare solo voti numerici senza descrizioni qualitative",
        "Essere compilate dall'IA in modo automatico"
      ],
      "correct": 1,
      "explanation": "Il DM 62/2017, art. 2, stabilisce che la valutazione è coerente con i criteri definiti dal Collegio dei Docenti e comunicati alle famiglie. Le rubriche condivise prima della prova rispettano questo principio e aumentano la trasparenza valutativa."
    },
    {
      "question": "Per le relazioni finali sugli alunni, il flusso corretto con l'IA è:",
      "options": [
        "Inserire il nome completo nell'IA per massima accuratezza",
        "Usare dati anonimi nell'IA, completare con dati reali OFFLINE nel documento finale",
        "Pubblicare la relazione generata direttamente nel registro",
        "Evitare completamente l'IA per qualsiasi documento su alunni"
      ],
      "correct": 1,
      "explanation": "Il flusso corretto rispetta il GDPR artt. 8-9: dati anonimi/codici nell'IA → output generato → inserimento dei dati reali OFFLINE nel documento finale. Questo protegge la privacy senza rinunciare al supporto dell'IA."
    },
    {
      "question": "La formazione continua dei docenti sull'IA trova base normativa principalmente in:",
      "options": [
        "Non ha ancora base normativa specifica",
        "CCNL Istruzione 2019-2021 art. 63 + Piano Nazionale Scuola Digitale (L. 107/2015)",
        "Solo nel GDPR art. 32 (sicurezza)",
        "Esclusivamente nelle circolari ministeriali non vincolanti"
      ],
      "correct": 1,
      "explanation": "Il CCNL Istruzione 2019-2021, art. 63, riconosce l'obbligo di formazione professionale continua. Il PNSD (L. 107/2015) include la formazione digitale come priorità sistemica. Insieme, forniscono la base per inserire la formazione IA nel Piano di Formazione d'Istituto."
    }
  ],

  "mod01": [
    { "question": "Cosa si intende con il termine 'allucinazione' riferito a un sistema IA?", "options": ["Un errore di connessione al server", "Un output plausibile ma falso o con fonti inventate", "Un'immagine distorta generata dall'IA", "Un bug nel codice del modello"], "correct": 1, "explanation": "I modelli IA possono produrre testi convincenti ma errati: è fondamentale verificare sempre le informazioni prima di usarle." },
    { "question": "Quale principio è alla base dell'IA generativa?", "options": ["Ricerca in database prefissati", "Apprendimento automatico su grandi quantità di dati", "Elaborazione di sole immagini digitali", "Calcolo matematico tradizionale"], "correct": 1, "explanation": "L'IA generativa utilizza modelli addestrati su enormi dataset per produrre testo, immagini e altri contenuti originali." },
    { "question": "Nel contesto scolastico, l'IA deve essere usata rispettando principalmente…", "options": ["La velocità di esecuzione dei compiti", "La normativa su privacy, dati personali e trasparenza", "Il numero di utenti connessi contemporaneamente", "Le preferenze estetiche dell'utente"], "correct": 1, "explanation": "GDPR, AI Act e normative nazionali impongono limiti precisi sull'uso dei dati degli alunni e del personale." }
  ],
  "mod02": [
    { "question": "Il GDPR si applica al trattamento dei dati scolastici perché…", "options": ["Le scuole sono aziende private", "I dati di alunni e personale sono dati personali e sensibili", "Il GDPR riguarda solo i dati finanziari", "È obbligatorio solo per le università"], "correct": 1, "explanation": "I dati degli alunni e del personale sono dati personali; quelli relativi a salute, DSA, BES sono categorie particolari (art. 9 GDPR)." },
    { "question": "L'AI Act classifica come 'ad alto rischio' i sistemi che…", "options": ["Generano testi creativi", "Influenzano l'accesso all'istruzione o la valutazione degli studenti", "Traducono documenti interni", "Creano presentazioni grafiche"], "correct": 1, "explanation": "Valutazione, selezione e profilazione in ambito educativo ricadono nella categoria ad alto rischio dell'AI Act." },
    { "question": "Il principio di minimizzazione del GDPR impone di…", "options": ["Raccogliere il massimo dei dati possibile", "Trattare solo i dati strettamente necessari alla finalità", "Condividere i dati con tutti i dipendenti", "Eliminare subito tutti i dati dopo l'uso"], "correct": 1, "explanation": "Si raccolgono e si trattano solo i dati indispensabili per lo scopo dichiarato, per il tempo strettamente necessario." }
  ],
  "mod03": [
    { "question": "Un prompt efficace per la redazione di una circolare scolastica dovrebbe includere…", "options": ["Solo il tema da trattare", "Contesto, destinatari, tono formale e formato richiesto", "Il nome del dirigente scolastico", "La data corrente e il numero di protocollo"], "correct": 1, "explanation": "Più informazioni contestuali fornisci (chi scrive, a chi, in che formato), più l'output dell'IA sarà preciso e usabile." },
    { "question": "La tecnica 'few-shot prompting' consiste nel…", "options": ["Fare domande brevissime all'IA", "Fornire esempi del risultato atteso nel prompt", "Usare l'IA una sola volta al giorno", "Ridurre al minimo il testo del prompt"], "correct": 1, "explanation": "Includere 1-3 esempi del formato desiderato aiuta il modello a calibrare l'output sulle aspettative specifiche." },
    { "question": "Quando l'output di un prompt non è soddisfacente, la prima cosa da fare è…", "options": ["Cambiare strumento IA", "Riformulare il prompt con maggiore contesto e precisione", "Accettare il risultato così com'è", "Segnalare un bug al fornitore"], "correct": 1, "explanation": "L'iterazione sul prompt è la pratica standard: aggiungere dettagli, esempi o suddividere il compito in passi migliora quasi sempre il risultato." }
  ],
  "mod04": [
    { "question": "Prima di adottare un tool IA nella scuola, è necessario verificare…", "options": ["Solo il costo della licenza", "Conformità al GDPR, AI Act e condizioni di trattamento dei dati", "Il numero di funzioni disponibili nella versione gratuita", "La compatibilità con il sistema operativo del dirigente"], "correct": 1, "explanation": "Ogni strumento IA deve superare una valutazione di conformità normativa (DPIA se necessario) prima dell'adozione ufficiale." },
    { "question": "Microsoft 365 Copilot per le scuole può essere usato principalmente per…", "options": ["Prendere decisioni disciplinari in autonomia", "Generare bozze di documenti, sintesi e analisi da rivedere", "Sostituire il personale amministrativo", "Accedere ai dati riservati del MIUR"], "correct": 1, "explanation": "Copilot è un assistente di produttività: produce bozze e sintesi che il personale deve sempre verificare e approvare." },
    { "question": "La piattaforma 'Scuola Futura' del MIUR è dedicata a…", "options": ["La gestione delle paghe del personale", "La formazione digitale di docenti e personale scolastico", "Il monitoraggio degli edifici scolastici", "La comunicazione con le famiglie degli alunni"], "correct": 1, "explanation": "Scuola Futura offre percorsi di formazione sul digitale e sull'IA per tutto il personale della scuola." }
  ],
  "mod06": [
    { "question": "L'IA può supportare la gestione del personale scolastico principalmente…", "options": ["Prendendo decisioni disciplinari autonomamente", "Generando bozze di comunicazioni e analizzando dati da validare", "Sostituendo la firma del dirigente sui documenti", "Accedendo direttamente a NoiPA per modificare le buste paga"], "correct": 1, "explanation": "L'IA supporta nella produzione di bozze e nell'analisi; le decisioni che riguardano il personale restano sempre in capo al dirigente." },
    { "question": "Il CCNL del comparto Istruzione e Ricerca regola…", "options": ["Solo i diritti dei docenti di ruolo", "Le condizioni di lavoro di tutto il personale scolastico (docenti e ATA)", "Esclusivamente le retribuzioni del personale amministrativo", "I rapporti tra scuola e famiglie"], "correct": 1, "explanation": "Il Contratto Collettivo Nazionale di Lavoro definisce diritti, doveri, orari e retribuzioni di tutto il personale della scuola." },
    { "question": "Quando si usa l'IA per elaborare dati del personale, occorre garantire…", "options": ["La massima velocità di elaborazione", "Il rispetto del GDPR e la non condivisione di dati sensibili con tool pubblici", "L'accesso aperto a tutti i colleghi", "La sincronizzazione automatica con il Ministero"], "correct": 1, "explanation": "I dati del personale (presenze, valutazioni, contratti) sono dati personali: non vanno mai inseriti in sistemi IA pubblici senza anonimizzazione." }
  ],
  "mod08": [
    { "question": "La gestione delle supplenze tramite IA può includere…", "options": ["La nomina automatica del supplente senza intervento umano", "Il suggerimento dei candidati dalle graduatorie con decisione finale dell'operatore", "La modifica diretta dei contratti sul sistema MIUR", "L'esclusione automatica dei candidati non idonei"], "correct": 1, "explanation": "L'IA può ottimizzare la ricerca nelle graduatorie, ma la nomina è un atto amministrativo che richiede sempre la firma del dirigente." },
    { "question": "I dati relativi alle assenze del personale sono classificati come…", "options": ["Dati aperti, accessibili a tutti", "Dati personali soggetti a GDPR, con obbligo di riservatezza", "Informazioni di dominio pubblico scolastico", "Dati tecnici non soggetti a normativa privacy"], "correct": 1, "explanation": "Le assenze, specie se per malattia, possono rivelare lo stato di salute: sono dati sensibili da trattare con le misure previste dal GDPR." },
    { "question": "Il portale POLIS-MIUR viene usato dalle segreterie per…", "options": ["La gestione dei pagamenti alle famiglie", "L'invio di comunicazioni ufficiali e la gestione degli organici", "La videocomunicazione con il CSPI", "Il controllo dei sussidi scolastici regionali"], "correct": 1, "explanation": "POLIS è il portale ministeriale attraverso cui le scuole gestiscono istanze, organici e comunicazioni ufficiali con il MIUR." }
  ],
  "mod10": [
    { "question": "Le graduatorie d'istituto per le supplenze vengono aggiornate…", "options": ["Ogni mese automaticamente", "Periodicamente secondo le disposizioni normative del MIUR", "Solo su richiesta del singolo candidato", "Una volta all'anno in modo automatico dal sistema"], "correct": 1, "explanation": "Le graduatorie seguono un calendario definito dal MIUR con avvisi pubblici; l'aggiornamento non è automatico ma procedurale." },
    { "question": "L'IA può supportare la gestione delle ferie del personale…", "options": ["Approvando autonomamente le richieste di ferie", "Analizzando le richieste e segnalando sovrapposizioni critiche, con approvazione umana", "Modificando d'ufficio il piano ferie senza informare il lavoratore", "Calcolando automaticamente il TFR"], "correct": 1, "explanation": "L'IA è uno strumento di analisi e supporto; l'approvazione delle ferie è un atto gestionale che spetta al dirigente o al responsabile." },
    { "question": "Il piano ferie del personale deve rispettare…", "options": ["Solo le preferenze dell'amministrazione", "Il CCNL, le esigenze di servizio e i diritti del lavoratore", "Esclusivamente le indicazioni dell'USR", "Le decisioni automatiche del software gestionale"], "correct": 1, "explanation": "Il CCNL tutela il diritto alle ferie e i tempi di fruizione; le esigenze di servizio devono essere bilanciate con i diritti del lavoratore." }
  ],
  "mod13": [
    { "question": "Le iscrizioni online degli alunni alle scuole statali vengono gestite tramite…", "options": ["Il sito web della singola scuola", "La piattaforma ministeriale 'Iscrizioni Online' del MIUR", "Il registro elettronico di classe", "Un modulo cartaceo inviato per posta"], "correct": 1, "explanation": "Le iscrizioni alle scuole statali italiane si effettuano tramite la piattaforma ufficiale del MIUR, con credenziali SPID o CIE." },
    { "question": "I dati degli alunni raccolti durante le iscrizioni devono essere trattati secondo…", "options": ["Le politiche interne della singola scuola", "Il GDPR, il Codice Privacy e le istruzioni del Garante per la protezione dei dati personali", "Le indicazioni dell'associazione dei genitori", "I soli requisiti tecnici del software gestionale"], "correct": 1, "explanation": "I dati degli studenti sono dati personali (e spesso sensibili); la scuola è titolare del trattamento e deve rispettare tutte le prescrizioni GDPR." },
    { "question": "Nelle commissioni degli esami di stato, l'IA può essere utilizzata per…", "options": ["Assegnare i voti al posto della commissione", "Produrre analisi statistiche di supporto, lasciando le decisioni ai commissari", "Generare automaticamente i verbali ufficiali firmati", "Selezionare i candidati da esaminare"], "correct": 1, "explanation": "Le decisioni sugli esami sono esclusivamente umane; l'IA può supportare con analisi statistiche ma non può sostituire la commissione." }
  ],
  "mod16": [
    { "question": "La segreteria scolastica, in relazione agli alunni con BES, deve garantire…", "options": ["La pubblicazione dei dati di salute sul sito scolastico", "La riservatezza assoluta dei dati sanitari e di salute degli studenti", "La condivisione delle diagnosi con tutti i docenti via email non cifrata", "La trasmissione automatica dei dati all'USR"], "correct": 1, "explanation": "Le diagnosi e i dati sanitari degli alunni con BES/DSA sono dati particolari (art. 9 GDPR): vanno condivisi solo con chi ne ha necessità e con le dovute misure di sicurezza." },
    { "question": "Le comunicazioni alle famiglie generate con supporto IA devono essere…", "options": ["Inviate direttamente senza revisione umana per risparmiare tempo", "Riviste e approvate dall'operatore prima dell'invio ufficiale", "Firmate digitalmente dall'IA stessa", "Formattate sempre in lingua inglese per uniformità"], "correct": 1, "explanation": "L'IA è un assistente: ogni comunicazione ufficiale richiede la verifica e l'approvazione di un operatore responsabile." },
    { "question": "Il registro elettronico per la comunicazione scuola-famiglia deve rispettare…", "options": ["Solo le preferenze grafiche dell'istituto", "Le misure di sicurezza previste dal GDPR per la protezione dei dati degli utenti", "I soli standard tecnici ISO 9001", "Le indicazioni della singola software house fornitrice"], "correct": 1, "explanation": "Il registro elettronico tratta dati personali di alunni e famiglie: la scuola deve verificare che il fornitore sia un responsabile del trattamento conforme al GDPR." }
  ],
  "mod18": [
    { "question": "La PEC (Posta Elettronica Certificata) ha valore legale equivalente a…", "options": ["Una normale email aziendale", "Una raccomandata con avviso di ricevimento", "Un documento notarile", "Un messaggio di testo SMS"], "correct": 1, "explanation": "La PEC garantisce la certezza dell'invio e della ricezione con valore legale, equiparata alla raccomandata A/R (D.Lgs. 82/2005, art. 48)." },
    { "question": "Il protocollo informatico nelle scuole è disciplinato principalmente da…", "options": ["Il regolamento interno di ogni istituto", "Il D.Lgs. 82/2005 (Codice dell'Amministrazione Digitale)", "Le linee guida del registro elettronico", "La circolare annuale della Ragioneria Generale dello Stato"], "correct": 1, "explanation": "Il CAD (Codice dell'Amministrazione Digitale) regola il protocollo informatico, la firma digitale e la conservazione dei documenti PA." },
    { "question": "L'IA può supportare la gestione del protocollo scolastico…", "options": ["Protocollando autonomamente tutti gli atti in arrivo senza supervisione", "Classificando e smistando i documenti in arrivo, con verifica finale dell'operatore", "Firmando digitalmente i documenti al posto del dirigente", "Eliminando automaticamente i documenti ritenuti non rilevanti"], "correct": 1, "explanation": "L'IA può velocizzare la classificazione e l'instradamento dei documenti, ma la protocollazione ufficiale richiede sempre la verifica e la validazione umana." }
  ],
  "mod20": [
    { "question": "Il piano di conservazione dei documenti scolastici stabilisce…", "options": ["Il colore delle cartelle archivio da usare", "I tempi di conservazione per ogni tipologia di documento amministrativo", "La frequenza delle riunioni del consiglio d'istituto", "Il numero massimo di documenti per fascicolo"], "correct": 1, "explanation": "Il massimario di scarto e il piano di conservazione definiscono per quanto tempo ogni categoria di documento deve essere conservata prima della possibile eliminazione." },
    { "question": "L'accesso agli atti amministrativi scolastici da parte dei cittadini è regolato dalla…", "options": ["Circolare ministeriale annuale sull'accesso", "Legge 241/1990 sul procedimento amministrativo e l'accesso agli atti", "Delibera del consiglio d'istituto", "Normativa interna di ogni singola scuola"], "correct": 1, "explanation": "La L. 241/1990 garantisce il diritto di accesso ai documenti amministrativi, con le eccezioni previste per la privacy e altri interessi tutelati." },
    { "question": "La digitalizzazione dei documenti cartacei deve rispettare…", "options": ["Solo le preferenze del personale archivista", "Le linee guida AgID e le norme del CAD per la conservazione digitale", "Il formato che occupa meno spazio sul server", "Le indicazioni del fornitore del software gestionale"], "correct": 1, "explanation": "AgID definisce i requisiti tecnici per la conservazione digitale a norma (formati, metadati, firma elettronica) affinché i documenti abbiano pieno valore legale." }
  ],
  "mod22": [
    { "question": "Il Mercato Elettronico della Pubblica Amministrazione (MePa) è…", "options": ["Un supermercato online per i dipendenti pubblici", "La piattaforma per gli acquisti digitali delle PA sotto soglia comunitaria", "Un sistema di pagamento per le famiglie degli alunni", "Un portale di aste giudiziarie online"], "correct": 1, "explanation": "Il MePa di Consip permette alle scuole di acquistare beni e servizi in modo trasparente e conforme al Codice degli Appalti per importi sotto soglia comunitaria." },
    { "question": "L'IA in ambito contabile scolastico può essere utilizzata per…", "options": ["Autorizzare autonomamente i pagamenti", "Analizzare i dati di spesa e segnalare anomalie, con validazione umana", "Modificare il programma annuale senza delibera del CdI", "Generare mandati di pagamento con firma digitale automatica"], "correct": 1, "explanation": "L'IA è uno strumento di analisi: la validazione e l'autorizzazione di ogni atto contabile restano di competenza esclusiva del DSGA e del dirigente." },
    { "question": "Il Programma Annuale della scuola viene deliberato da…", "options": ["Il DSGA in autonomia", "Il Consiglio di Istituto su proposta del dirigente e del DSGA", "Il Collegio dei Docenti", "L'Ufficio Scolastico Regionale"], "correct": 1, "explanation": "Il Programma Annuale (bilancio preventivo) è adottato dal Consiglio di Istituto entro il 15 dicembre; il DSGA lo predispone con il dirigente." }
  ],
  "mod26": [
    { "question": "Il PNRR per la scuola punta principalmente su…", "options": ["La costruzione di nuovi edifici scolastici in ogni comune", "Digitalizzazione, inclusione, potenziamento delle competenze e sostenibilità", "L'aumento del numero di classi per scuola", "La riduzione del personale amministrativo tramite automazione"], "correct": 1, "explanation": "Il PNRR finanzia la transizione digitale, l'inclusione, le palestre e il contrasto alla dispersione scolastica nell'ottica della Next Generation EU." },
    { "question": "La rendicontazione dei progetti PNRR richiede…", "options": ["Solo la firma del dirigente a fine progetto", "Documentazione precisa di spese, attività e indicatori di risultato, caricata su piattaforma MIUR", "Un report informale inviato via email all'USR", "La sola conservazione dei giustificativi di spesa in formato cartaceo"], "correct": 1, "explanation": "I fondi PNRR sono soggetti a rendicontazione rigorosa: ogni spesa va documentata, caricata sulla piattaforma ministeriale e conservata per i controlli." },
    { "question": "L'IA può supportare la gestione dei progetti scolastici principalmente…", "options": ["Firmando autonomamente i contratti con i fornitori", "Nella stesura di report, monitoraggio delle scadenze e analisi dei dati di avanzamento", "Selezionando i beneficiari dei fondi al posto del CdI", "Collegandosi direttamente alla piattaforma ReGiS per la rendicontazione"], "correct": 1, "explanation": "L'IA è utile per sintesi, monitoraggio e analisi; le decisioni e gli atti ufficiali restano di competenza degli organi scolastici." }
  ],
  "mod31": [
    { "question": "SIDI è l'acronimo di…", "options": ["Sistema Informativo per la Didattica Innovativa", "Sistema Informativo dell'Istruzione del MIUR", "Servizio Integrato Digitale Italiano", "Sportello Informatico per i Dirigenti Istruzione"], "correct": 1, "explanation": "SIDI (Sistema Informativo dell'Istruzione) è il sistema gestionale del MIUR per organici, graduatorie, anagrafe scolastica e comunicazioni ministeriali." },
    { "question": "NoiPA viene utilizzato dalle scuole per…", "options": ["La gestione del registro elettronico di classe", "Il trattamento economico e previdenziale del personale della scuola statale", "L'iscrizione degli alunni alle scuole medie", "Il controllo degli accessi ai laboratori informatici"], "correct": 1, "explanation": "NoiPA è la piattaforma del MEF che gestisce le paghe, le certificazioni e i dati previdenziali del personale della scuola statale." },
    { "question": "L'accesso ai sistemi SIDI e NoiPA richiede…", "options": ["Un semplice account email personale", "Credenziali istituzionali personali e il rispetto delle norme di sicurezza informatica", "L'autorizzazione dell'USR per ogni singola operazione", "Solo la connessione alla rete interna della scuola"], "correct": 1, "explanation": "L'accesso è nominativo e controllato: le credenziali sono personali, non cedibili e soggette alle norme sulla sicurezza informatica in ambito PA." }
  ],
  "mod34": [
    { "question": "Un 'agente IA' si distingue da un chatbot perché…", "options": ["Ha un'interfaccia grafica più moderna", "Esegue sequenze di compiti autonomamente, pianificando azioni in più passi", "Risponde solo a domande predefinite", "Non richiede connessione a internet"], "correct": 1, "explanation": "Gli agenti IA possono pianificare, usare strumenti esterni (ricerche, file, API) e portare avanti compiti complessi in più step, senza intervento umano a ogni passo." },
    { "question": "L'uso di agenti IA autonomi in ambito PA richiede…", "options": ["Nessuna supervisione se il sistema è certificato", "Supervisione umana sui risultati e conformità all'AI Act per i sistemi ad alto rischio", "Solo l'approvazione del fornitore tecnologico", "Un aggiornamento annuale del software"], "correct": 1, "explanation": "L'AI Act impone la supervisione umana sui sistemi che prendono decisioni rilevanti; nessun agente IA può operare in autonomia totale su atti ufficiali." },
    { "question": "L'automazione del flusso di lavoro con IA in segreteria deve sempre prevedere…", "options": ["La completa eliminazione della revisione umana per maggiore efficienza", "Un punto di controllo umano prima di ogni azione con effetti esterni ufficiali", "La delega totale all'IA per i compiti ripetitivi", "La sostituzione del DSGA nelle funzioni ordinarie"], "correct": 1, "explanation": "Anche i processi automatizzati devono avere checkpoint umani: l'operatore è responsabile degli atti amministrativi emessi, indipendentemente da chi o cosa li ha preparati." }
  ],
  "mod38": [
    { "question": "Nel laboratorio prompt, prima di usare un output IA in un documento ufficiale occorre…", "options": ["Copiarlo direttamente senza modifiche per risparmiare tempo", "Verificarne l'accuratezza, la conformità normativa e adattarlo al contesto specifico", "Inviarlo direttamente alle famiglie come comunicazione ufficiale", "Salvarlo nel cloud senza revisione"], "correct": 1, "explanation": "L'output IA è sempre una bozza: va verificato nei fatti, nel linguaggio formale e nella conformità normativa prima di diventare un documento ufficiale." },
    { "question": "Un allegato generato con l'IA per una circolare scolastica deve essere…", "options": ["Accettato così com'è se il testo sembra corretto", "Rivisto nel contenuto, adattato allo stile istituzionale e approvato dal responsabile", "Firmato digitalmente dall'IA come autore", "Inviato anonimamente per evitare responsabilità"], "correct": 1, "explanation": "Il responsabile dell'atto (dirigente o DSGA) è sempre il firmatario e il responsabile legale; l'IA è solo lo strumento di supporto alla redazione." },
    { "question": "L'obiettivo principale del prompt engineering in ambito scolastico è…", "options": ["Fare in modo che l'IA sostituisca il personale nella presa di decisioni", "Ottenere output utili, precisi e conformi alle esigenze specifiche della segreteria", "Ridurre al massimo il numero di parole nel prompt", "Usare solo prompt in lingua inglese per risultati migliori"], "correct": 1, "explanation": "Un buon prompt engineering non automatizza le decisioni: ottimizza la qualità del materiale di supporto che l'operatore poi valuta e usa." }
  ]
};

// 20-question final test — pass >= 70% to earn the certificate
export const FINAL_TEST = [
  {
    "question": "La formula RCOF per i prompt significa:",
    "options": [
      "Risultato, Controllo, Output, Feedback",
      "Ruolo, Compito, Contesto, Formato",
      "Revisione, Correzione, Ottimizzazione, Fine",
      "Risposta, Circolare, Oggetto, Firma"
    ],
    "correct": 1,
    "explanation": "RCOF = Ruolo + Compito + Contesto + Formato. Questa struttura produce output professionali riducendo drasticamente i tempi di correzione."
  },
  {
    "question": "L'AI Act classifica come 'alto rischio' l'IA usata per:",
    "options": [
      "Redigere circolari",
      "Tradurre comunicazioni",
      "Valutare studenti o determinare l'accesso all'istruzione",
      "Produrre verbali di riunione"
    ],
    "correct": 2,
    "explanation": "AI Act (Reg. UE 2024/1689), art. 6 e Allegato III: sistemi IA per valutare studenti = alto rischio. Richiedono supervisione umana, documentazione e trasparenza."
  },
  {
    "question": "Il GDPR art. 28 impone di stipulare un DPA con il fornitore IA:",
    "options": [
      "Solo per dati sanitari",
      "Solo per dati di minori",
      "Per qualsiasi trattamento di dati personali per conto della scuola",
      "Solo se il fornitore è straniero"
    ],
    "correct": 2,
    "explanation": "GDPR art. 28: qualsiasi responsabile del trattamento che elabora dati personali per conto della scuola deve avere un DPA. Vale per tutti i dati personali."
  },
  {
    "question": "I dati del PDP di un alunno con DSA inseriti in ChatGPT consumer sono:",
    "options": [
      "Legali con consenso del genitore",
      "Una violazione del GDPR art. 9 (categorie speciali)",
      "Consentiti se il documento è anonimizzato dopo",
      "Legali se usati solo per generare la bozza"
    ],
    "correct": 1,
    "explanation": "I dati del PDP sono sanitari (categorie speciali GDPR art. 9). Inserirli in piattaforme senza DPA è violazione del GDPR — il consenso non è la base giuridica applicabile in questo contesto."
  },
  {
    "question": "Chi è responsabile se una circolare con dati errati generati dall'IA viene firmata e pubblicata?",
    "options": [
      "Il fornitore dello strumento IA",
      "Il personale che ha generato il testo",
      "Il Dirigente Scolastico o chi ha firmato",
      "Responsabilità condivisa 50/50"
    ],
    "correct": 2,
    "explanation": "Il firmatario è sempre responsabile: L. 241/1990 art. 3 e D.Lgs. 165/2001 art. 55-bis. L'IA non ha responsabilità giuridica — è uno strumento."
  },
  {
    "question": "La verifica dei riferimenti normativi generati dall'IA si effettua su:",
    "options": [
      "Wikipedia o un altro sito informativo",
      "normattiva.it per le leggi, istruzione.it per le circolari MIUR",
      "Un secondo strumento IA per conferma",
      "Il chatbot del Garante Privacy"
    ],
    "correct": 1,
    "explanation": "normattiva.it è l'archivio ufficiale delle leggi italiane. istruzione.it per le circolari MIUR. Solo questi garantiscono l'autenticità del testo normativo citato in documenti ufficiali."
  },
  {
    "question": "Il DPR 445/2000 stabilisce che le circolari scolastiche devono avere:",
    "options": [
      "Almeno 200 parole di contenuto",
      "Data, numero di protocollo e firma del responsabile",
      "Approvazione dell'UST prima della pubblicazione",
      "Intestazione in almeno due lingue"
    ],
    "correct": 1,
    "explanation": "DPR 445/2000 (T.U. Documentazione Amministrativa), art. 3: requisiti formali degli atti PA. Data, protocollo e firma del responsabile sono obbligatori — l'IA produce la bozza, l'umano verifica e firma."
  },
  {
    "question": "Per usare l'IA su documentazione BES/DSA in modo conforme al GDPR, il flusso corretto è:",
    "options": [
      "Inserire dati reali per massima accuratezza",
      "Dati anonimi nell'IA → output → dati reali nel documento finale OFFLINE",
      "Usare l'IA solo per la correzione ortografica",
      "Evitare completamente l'IA per qualsiasi documento BES"
    ],
    "correct": 1,
    "explanation": "Il flusso: dati anonimi nell'IA → output → dati reali nel documento OFFLINE. Rispetta GDPR artt. 8-9 proteggendo minori e categorie speciali senza rinunciare al supporto dell'IA."
  },
  {
    "question": "Il PTOF secondo DPR 275/1999 viene approvato da:",
    "options": [
      "Solo il DS",
      "Il Collegio dei Docenti",
      "Il CdI su proposta del Collegio",
      "L'UST territoriale"
    ],
    "correct": 2,
    "explanation": "DPR 275/1999, art. 3: il PTOF è approvato dal Consiglio di Istituto su proposta del Collegio. L'IA accelera la stesura — l'approvazione degli organi collegiali è insostituibile."
  },
  {
    "question": "La responsabilità disciplinare del dipendente pubblico per atti irregolari è sancita da:",
    "options": [
      "GDPR art. 82",
      "D.Lgs. 165/2001 art. 55-bis",
      "AI Act art. 14",
      "L. 241/1990 art. 7"
    ],
    "correct": 1,
    "explanation": "D.Lgs. 165/2001, art. 55-bis: responsabilità disciplinare del dipendente per atti irregolari. L'uso dell'IA non è un'esimente — chi firma è responsabile del contenuto."
  },
  {
    "question": "Il PNSD (Piano Nazionale Scuola Digitale) è istituito da:",
    "options": [
      "D.Lgs. 196/2003",
      "DPR 275/1999",
      "L. 107/2015 art. 1 cc. 56-57",
      "AI Act art. 6"
    ],
    "correct": 2,
    "explanation": "La L. 107/2015 (La Buona Scuola), art. 1 cc. 56-57, istituisce il PNSD che include l'obbligo di alfabetizzazione digitale per tutto il personale scolastico — inclusa la formazione sull'IA."
  },
  {
    "question": "Quale strumento ha il DPA incluso nel contratto per le scuole con Google Workspace for Education?",
    "options": [
      "ChatGPT (versione gratuita)",
      "Claude (versione consumer)",
      "Google Gemini in Workspace for Education",
      "Microsoft Copilot senza contratto M365"
    ],
    "correct": 2,
    "explanation": "Google Gemini in Google Workspace for Education include garanzie GDPR nel contratto educativo (no riuso dati per addestramento, storage EU). È il punto di partenza più sicuro per le scuole che usano Google Workspace."
  },
  {
    "question": "Il principio 'human in the loop' in ambito scolastico si basa su:",
    "options": [
      "Deontologia professionale informale",
      "AI Act art. 14 + GDPR art. 22",
      "D.Lgs. 82/2005 (CAD) esclusivamente",
      "Solo il CCNL del personale"
    ],
    "correct": 1,
    "explanation": "AI Act art. 14: supervisione umana obbligatoria per sistemi ad alto rischio. GDPR art. 22: divieto di decisioni interamente automatizzate con effetti giuridici. Insieme: l'IA supporta, l'umano decide."
  },
  {
    "question": "La tecnica di anonimizzazione in 4 passi (sostituisci → rimuovi → generalizza → completa offline) protegge da:",
    "options": [
      "Errori ortografici nei documenti",
      "Violazioni del GDPR artt. 8-9 per dati di minori e categorie speciali",
      "Allucinazioni dell'IA sui dati inseriti",
      "Errori di formato nelle circolari"
    ],
    "correct": 1,
    "explanation": "L'anonimizzazione protegge dal trattamento illecito di categorie speciali (GDPR art. 9) e dati di minori (art. 8) su piattaforme IA senza DPA. Il processo richiede 2-3 minuti ma protegge da sanzioni che possono arrivare a €20 milioni."
  },
  {
    "question": "La formazione del personale scolastico sull'IA trova base normativa in:",
    "options": [
      "Nessuna norma specifica — è solo buona prassi",
      "CCNL Istruzione 2019-2021 artt. 22 e 63 + PNSD (L. 107/2015)",
      "Solo nel GDPR art. 32",
      "Esclusivamente nell'AI Act"
    ],
    "correct": 1,
    "explanation": "Il CCNL Istruzione 2019-2021 (artt. 22 e 63) riconosce il diritto-dovere di formazione professionale. Il PNSD (L. 107/2015) include la formazione digitale come priorità sistemica. Insieme fondano l'obbligo di inserire la formazione IA nel Piano di Formazione d'Istituto."
  },
  {
    "question": "La policy IA dell'istituto deliberata in CdI si basa su:",
    "options": [
      "Solo il GDPR europeo",
      "DPR 275/1999 + GDPR art. 24 + AI Act + D.Lgs. 82/2005",
      "Solo le circolari MIUR",
      "Esclusivamente l'AI Act come norma prevalente"
    ],
    "correct": 1,
    "explanation": "La policy ha fondamento plurinormativo: DPR 275/1999 (autonomia), GDPR art. 24 (misure organizzative), AI Act (trasparenza e rischio), D.Lgs. 82/2005 (digitalizzazione PA). La delibera del CdI esercita formalmente questa autonomia normativa."
  },
  {
    "question": "L'uso dell'IA per redigere circolari scolastiche è classificato dall'AI Act come:",
    "options": [
      "Alto rischio — obblighi specifici",
      "Inaccettabile — vietato",
      "Rischio minimo — buone pratiche, nessun obbligo specifico",
      "Rischio limitato — obbligo di dichiarare l'uso dell'IA"
    ],
    "correct": 2,
    "explanation": "La redazione di circolari e documentazione amministrativa = rischio minimo (AI Act). Non richiede adempimenti specifici, ma le buone pratiche di trasparenza, revisione umana e privacy si applicano sempre."
  },
  {
    "question": "Il provvedimento del Garante Privacy del 30 marzo 2023 ha disposto:",
    "options": [
      "L'approvazione di ChatGPT per tutte le scuole italiane",
      "Il blocco temporaneo di ChatGPT in Italia per violazione del GDPR",
      "Una multa di 1 miliardo a OpenAI",
      "Il divieto permanente dell'IA nelle scuole"
    ],
    "correct": 1,
    "explanation": "Il Garante ha disposto il blocco temporaneo di ChatGPT per: assenza di base giuridica, nessuna informativa agli utenti, mancanza di protezioni per i minori. ChatGPT è stato ripristinato dopo adeguamenti di OpenAI nell'aprile 2024."
  },
  {
    "question": "Il DM 62/2017 impone che la valutazione scolastica sia:",
    "options": [
      "Esclusivamente numerica",
      "Coerente con criteri definiti dal Collegio e comunicati alle famiglie",
      "Delegabile a sistemi automatizzati per obiettività",
      "Gestita autonomamente da ogni docente senza criteri condivisi"
    ],
    "correct": 1,
    "explanation": "DM 62/2017, art. 2: la valutazione è coerente con i criteri definiti dal Collegio dei Docenti e comunicati alle famiglie. Le rubriche generate con l'IA devono essere coerenti con questi criteri approvati collegialmente."
  },
  {
    "question": "Il quadro normativo completo per l'uso dell'IA in una segreteria scolastica italiana include:",
    "options": [
      "Solo il GDPR — non ci sono norme italiane",
      "AI Act + GDPR + D.Lgs. 196/2003 + DPR 445/2000 + L. 241/1990 + DPR 275/1999 + normativa specifica",
      "Solo le circolari MIUR non vincolanti",
      "Esclusivamente l'AI Act come norma UE prevalente"
    ],
    "correct": 1,
    "explanation": "Il quadro è plurilivello: AI Act (rischio), GDPR + D.Lgs. 196/2003 (privacy), DPR 445/2000 + L. 241/1990 (documentazione PA), DPR 275/1999 (autonomia), più L. 170/2010 e L. 104/1992 per BES/DSA. Nessuna norma è sufficiente da sola."
  }
];
// Sector grouping for the sidebar navigation
export const SECTORS = [
  {
    id: 'comune',
    label: 'Aree comuni',
    areaIds: ['intro'],
  },
  {
    id: 'ata',
    label: 'Assistenti amministrativi',
    areaIds: ['personale', 'alunni', 'protocollo', 'contabilita', 'progetti', 'piattaforme', 'organizzazione', 'laboratorio'],
  },
  {
    id: 'docenti',
    label: 'Docenti',
    areaIds: ['docenti'],
  },
  {
    id: 'collaboratori',
    label: 'Collaboratori scolastici',
    areaIds: ['collaboratori'],
  },
  {
    id: 'tecnici',
    label: 'Assistenti tecnici',
    areaIds: ['tecnici'],
  },
];

// Which sectors each role can access (comune is always included)
export const ROLE_SECTORS = {
  ata:     ['comune', 'ata'],
  docente: ['comune', 'docenti'],
  at:      ['comune', 'tecnici'],
  cs:      ['comune', 'collaboratori'],
};

// Returns the COURSE_AREAS visible to a given profile.
// Admins and users with no role see everything.
export function getVisibleAreas(profile) {
  if (!profile) return COURSE_AREAS;
  if (profile.is_admin || profile.role === 'admin') return COURSE_AREAS;
  const allowedSectors = ROLE_SECTORS[profile.role];
  if (!allowedSectors) return COURSE_AREAS; // no role set → show all (legacy users)
  const visibleIds = new Set(
    SECTORS.filter(s => allowedSectors.includes(s.id)).flatMap(s => s.areaIds)
  );
  return COURSE_AREAS.filter(a => visibleIds.has(a.id));
}

export const QUIZ_PASS_THRESHOLD = 0.80;

// Prompt library with normative bases (category + target role)
export const PROMPT_TEMPLATES = [
  {
    "label": "Circolare colloqui genitori",
    "cat": "Circolari",
    "role": "ata",
    "prompt": "Sei la segretaria dell'IC [nome] di [città].\nScrivi circolare n.[N]/[anno] del [data].\nDestinatari: Docenti, Genitori, Alunni\nOggetto: Colloqui genitori-docenti [periodo]\n\nI colloqui si svolgono [data] dalle [ora]\nalle [ora] nelle aule dei rispettivi docenti.\nPrenotazione: [registro] entro [data]\nFirma: Il Dirigente Scolastico [nome]\n\nFormato: circolare scolastica italiana con\nintestazione, numero protocollo, oggetto\nin grassetto, corpo formale, firma [BOZZA].\nBase: DPR 445/2000 art. 3."
  },
  {
    "label": "Comunicazione urgente (email + SMS)",
    "cat": "Circolari",
    "role": "ata",
    "prompt": "Comunicazione urgente alle famiglie:\nLezioni di domani [data] sospese per [motivo].\nAlunni trasporti: assistenza 8:00-10:00.\nAggiornamenti: [URL sito]\n\nProduci DUE versioni:\n1) Email/registro (max 100 parole)\n2) SMS (max 160 caratteri)\n\nBase: L. 241/1990 art. 8."
  },
  {
    "label": "Circolare uscita didattica",
    "cat": "Circolari",
    "role": "ata",
    "prompt": "Circolare per uscita didattica:\nClasse: [N] — Accompagnatore: Prof. [nome]\nMeta: [luogo] — Data: [data]\nPartenza: [ora] da [luogo] — Rientro: [ora]\nContributo: €[N] entro [data]\nAutorizzazione: da riconsegnare entro [data]\n\nBase: CM 14/1992 (visite guidate)."
  },
  {
    "label": "Variazione orario classe",
    "cat": "Circolari",
    "role": "ata",
    "prompt": "Comunica variazione orario alla famiglia:\nClasse: [N] — Giorno: [data]\nVariazione: [entrata 9:00 / uscita 12:00]\nMotivo: [assenza docente / altra causa]\nValidità: [solo questo giorno / dal X al Y]\n\nTono: professionale e rassicurante.\nMax 80 parole."
  },
  {
    "label": "Risposta assenza alunno",
    "cat": "Email famiglie",
    "role": "ata",
    "prompt": "Email ricevuta:\n'Mio figlio/a [nome] è assente oggi per febbre.'\n\nRisposta professionale (max 100 parole):\n1. Conferma ricezione comunicazione\n2. Procedura giustificazione al rientro\n   (dichiarazione scritta del genitore)\n3. Certificato medico dopo [N] giorni\n   consecutivi (CCNL scuola art. 41)\n4. Auguri di pronta guarigione"
  },
  {
    "label": "Risposta richiesta certificato frequenza",
    "cat": "Email famiglie",
    "role": "ata",
    "prompt": "Risposta a: 'Come richiedo il certificato\ndi frequenza?'\n\nSpiega:\n1. Modalità richiesta (sportello/email)\n2. Documenti necessari\n3. Tempi di rilascio ([N] giorni lavorativi)\n4. Eventuale costo (marca da bollo se\n   necessaria per uso extragiudiziale)\n5. Orari sportello segreteria"
  },
  {
    "label": "Benvenuto nuovi iscritti",
    "cat": "Email famiglie",
    "role": "ata",
    "prompt": "Email di benvenuto per famiglie di\nnuovi iscritti a [ordine scuola].\n\nIncludi:\n- Conferma iscrizione avvenuta\n- Date inizio anno scolastico\n- Come ritirare il materiale\n- Canali di comunicazione (registro [nome],\n  sito [URL], email segreteria)\n- Orari e recapiti segreteria\n\nTono: caloroso e professionale. 250-300 parole."
  },
  {
    "label": "Traduzione in arabo",
    "cat": "Email famiglie",
    "role": "ata",
    "prompt": "Traduci questa circolare in arabo standard\nformale per famiglie con figli in una\nscuola pubblica italiana.\nMantieni tono istituzionale.\nAggiungi il titolo in italiano tra parentesi\nin cima per l'archiviazione.\n\n[Incolla il testo italiano della circolare]\n\nNote: verifica con madrelingua per atti\ncon rilevanza legale o disciplinare."
  },
  {
    "label": "FAQ iscrizioni 12 domande",
    "cat": "Email famiglie",
    "role": "ata",
    "prompt": "Crea FAQ sulle iscrizioni alla [scuola]\ncon 12 domande e risposte semplici su:\n- Documentazione necessaria\n- Procedura online MIUR/Unica\n- Scadenze 2025/2026\n- Criteri precedenza in esubero\n- Scelta del tempo scuola\n- Come segnalare BES, DSA, disabilità\n  [risposta generica — dati specifici offline:\n  base L. 170/2010 e GDPR art. 9]\n\nFormato: domanda in grassetto, risposta sotto."
  },
  {
    "label": "Verbale CdI da appunti",
    "cat": "Verbali",
    "role": "ata",
    "prompt": "Trasforma questi appunti in verbale formale\ndel Consiglio di Istituto:\n\nData: [data] ore [ora] — Luogo: [luogo]\nPresidente: [nome] — Segretario: [nome]\nPresenti: [lista] — Assenti: [nomi]\n\nAPPUNTI:\n[Incolla gli appunti della riunione]\n\nFormato: verbale ufficiale, punti numerati,\nDELIBERA N°X con voti in evidenza.\nBase: DPR 416/1974 (organi collegiali)."
  },
  {
    "label": "ODG Collegio Docenti",
    "cat": "Verbali",
    "role": "ata",
    "prompt": "Prepara ODG per Collegio Docenti di [periodo].\n\nArgomenti:\n1. Analisi scrutini [periodo]\n2. Aggiornamento PTOF (DPR 275/1999)\n3. Piano di miglioramento\n4. Aggiornamento PAI (D.Lgs. 66/2017)\n5. Comunicazioni DS\n6. Varie ed eventuali\n\nPer ogni punto:\n- Titolo formale\n- Scopo (2 righe)\n- Tipo azione (delibera/informazione)\n- Tempo stimato"
  },
  {
    "label": "PTOF — Analisi del contesto",
    "cat": "Documenti strategici",
    "role": "ata",
    "prompt": "Scrivi sezione 'Analisi del contesto'\ndel PTOF 2025-2028.\nBase normativa: DPR 275/1999, art. 3.\n\nDati REALI della scuola:\n- [N] alunni, [N] plessi\n- Territorio: [specificare]\n- Famiglie straniere: [%] — da: [paesi]\n- Livello socioeconomico: [basso/medio/alto]\n- Punti di forza: [specificare]\n- Criticità: [specificare]\n\nCirca 400 parole, linguaggio formale MIUR.\nBOZZA — personalizzare e approvare in CdI."
  },
  {
    "label": "RAV — Priorità strategiche",
    "cat": "Documenti strategici",
    "role": "ata",
    "prompt": "Sulla base dei risultati INVALSI:\n[incolla dati]\nOsservazioni del gruppo di autovalutazione:\n[descrivi]\n\nAiutami a formulare:\n1. Le 2-3 priorità strategiche RAV\n2. Obiettivi di processo correlati\n3. Motivazione delle scelte\n4. Traguardi a 3 anni\n\nUsa il framework RAV ufficiale MIUR.\nBOZZA per il gruppo di autovalutazione."
  },
  {
    "label": "UDA completa (DM 254/2012)",
    "cat": "Docenti — Progettazione",
    "role": "doc",
    "prompt": "Sei docente di [materia] scuola [tipo].\nProgetta UDA su [argomento] per classe [N].\nDurata: [N] settimane — [N] ore totali\nCompetenze (Rac. UE 2018): [specificare]\n\nIncludi:\n1. Titolo accattivante\n2. Competenze chiave europee\n3. Obiettivi (verbi di Bloom, min. 4)\n4. Sequenza attività con tempi\n5. Metodologie didattiche\n6. Rubrica valutazione (DM 62/2017)\n7. Personalizzazioni BES/DSA GENERICHE\n   [mai nomi reali — GDPR art. 9]\nBase: DM 254/2012."
  },
  {
    "label": "Scheda a 3 livelli (inclusione)",
    "cat": "Docenti — Progettazione",
    "role": "doc",
    "prompt": "Crea scheda su [argomento] per classe [N].\nBase: L. 170/2010 e D.Lgs. 66/2017.\n\nLIVELLO BASE (BES/difficoltà):\n- Linguaggio semplice, istruzioni passo-passo\n- Max 5 esercizi con supporto\n- Risposta multipla o completamento\n\nLIVELLO STANDARD:\n- 8-10 esercizi variati\n\nLIVELLO AVANZATO:\n- Problem solving, sfida aperta\n\nStesso argomento, accessibilità calibrata.\nNessun dato reale degli alunni."
  },
  {
    "label": "Rubrica analitica (DM 62/2017)",
    "cat": "Docenti — Valutazione",
    "role": "doc",
    "prompt": "Crea rubrica analitica per [tipo di prova].\nDisciplina: [materia] — Classe: [N]\nBase: DM 62/2017 (criteri valutazione)\n\n- 4-5 criteri SPECIFICI e OSSERVABILI\n- 4 livelli: Avanzato/Intermedio/Base/\n  In via di acquisizione\n- Descrittori MISURABILI:\n  NON 'sa la materia'\n  SÌ 'elenca almeno 3 caratteristiche di...'\n- Corrispondenza voti 4-10\n- Da condividere con studenti PRIMA della prova"
  },
  {
    "label": "Feedback personalizzato motivante",
    "cat": "Docenti — Valutazione",
    "role": "doc",
    "prompt": "Scrivi feedback per uno studente:\nPunti di forza: [specificare]\nDa migliorare: [specificare]\nVoto: [N]/10\n\nIl feedback deve:\n- Riconoscere i punti di forza specificamente\n- Indicare cosa migliorare con chiarezza\n- Suggerire 2-3 azioni concrete\n- Tono motivante e rispettoso\n- Max 100 parole\n- NO frasi generiche ('devi impegnarti')"
  },
  {
    "label": "Relazione finale alunno (anonima)",
    "cat": "Docenti — Relazioni",
    "role": "doc",
    "prompt": "Relazione finale per [ALUNNO_X — codice].\n⚠️ GDPR artt. 8-9: MAI dati identificativi\nreali su IA pubblica. Usa sempre codici.\n\nPunti di forza: [descrivere]\nDifficoltà: [descrivere]\nProgressi: [descrivere]\nComportamento/socializzazione: [descrivere]\nSituazione in uscita: [descrivere]\n\n150-200 parole, tono obiettivo e pedagogico.\n→ Inserisci dati reali SOLO nel file finale\n  OFFLINE (conforme GDPR artt. 8-9)."
  },
  {
    "label": "Bozza policy IA per CdI",
    "cat": "Policy e compliance",
    "role": "all",
    "prompt": "Sei il segretario del Consiglio di Istituto.\nRedigi bozza delibera per policy IA.\n\nIncludi:\n1. Premessa normativa:\n   AI Act (Reg. UE 2024/1689)\n   GDPR (Reg. UE 2016/679 art. 28)\n   DPR 275/1999 (autonomia scolastica)\n2. Ambito: studenti, docenti, personale ATA\n3. Usi consentiti e non consentiti\n4. Obblighi di formazione (CCNL art. 63)\n5. Referente IA designato\n6. Aggiornamento annuale\n\nFormato: delibera CdI con votazione."
  },
  {
    "label": "Checklist compliance GDPR per strumento IA",
    "cat": "Policy e compliance",
    "role": "all",
    "prompt": "Sei il DPO della scuola.\nCrea checklist verifica GDPR per\nnuovo strumento IA:\n\nVerificare:\n1. DPA con il fornitore (art. 28) — sì/no\n2. Localizzazione dati (UE/extra UE)\n3. Base giuridica per categorie speciali (art. 9)\n4. Informativa agli interessati (art. 13)\n5. Diritti degli interessati garantiti\n6. Misure sicurezza adeguate (art. 32)\n7. DPIA necessaria? (art. 35)\n8. Registro trattamenti aggiornato (art. 30)\n\nFormato: tabella SÌ/NO/VERIFICA con note."
  },
  {
    "label": "Progettare un'UDA",
    "cat": "Progettazione",
    "role": "doc",
    "prompt": "Agisci come progettista didattico. Aiutami a costruire un'Unità di Apprendimento per la classe [classe/indirizzo], disciplina [materia], sul tema [argomento]. Indica: traguardi e obiettivi, competenze (disciplinari e trasversali), fasi e attività, materiali, tempi e modalità di verifica. Linguaggio adatto a [ordine di scuola]. Non usare dati personali di studenti reali."
  },
  {
    "label": "Esercizi differenziati",
    "cat": "Materiali",
    "role": "doc",
    "prompt": "Genera 3 set di esercizi sullo stesso argomento [argomento] per la classe [classe]: livello base, intermedio e avanzato. Per ogni esercizio fornisci la soluzione e una breve spiegazione. Includi una versione semplificata ad alta leggibilità per studenti con DSA."
  },
  {
    "label": "Rubrica di valutazione",
    "cat": "Valutazione",
    "role": "doc",
    "prompt": "Aiutami a redigere una rubrica di valutazione per [compito/prodotto] della classe [classe]. Definisci 4 dimensioni con descrittori su 4 livelli (iniziale, base, intermedio, avanzato). Ricorda: la rubrica mi supporta, ma la valutazione finale resta una mia decisione."
  },
  {
    "label": "Semplificare un testo (BES/DSA)",
    "cat": "Inclusione",
    "role": "doc",
    "prompt": "Riscrivi il seguente testo in versione semplificata e ad alta leggibilità, con frasi brevi, lessico chiaro e una mappa dei concetti chiave, mantenendo i contenuti essenziali: [incolla qui il testo]. Non inserire dati personali."
  },
  {
    "label": "Versione multilingue di una consegna",
    "cat": "Inclusione",
    "role": "doc",
    "prompt": "Traduci e adatta questa consegna per una famiglia di lingua [lingua], mantenendo un tono chiaro e cortese e spiegando eventuali termini scolastici italiani: [incolla la consegna]. Segnala se qualche passaggio richiede una verifica per la sua valenza ufficiale."
  },
  {
    "label": "Feedback formativo a uno studente",
    "cat": "Feedback",
    "role": "doc",
    "prompt": "A partire da questi punti di forza e di debolezza [elenco], scrivi un feedback formativo per uno studente di [classe]: incoraggiante, specifico, con 2 suggerimenti concreti di miglioramento. Usa un nome di fantasia, non dati reali."
  }
];

// Glossary of AI & legal terms (incl. SIDI, NoiPA, DPIA, FRIA, deployer...)
export const GLOSSARY = [
  {
    "term": "AI Act",
    "full": "Reg. UE 2024/1689",
    "def": "Prima legge mondiale organica sull'IA. 4 livelli di rischio (inaccettabile, alto, limitato, minimo). In vigore dal 2024. Artt. 6-7: valutazione studenti = alto rischio. Art. 14: supervisione umana. Art. 50: trasparenza."
  },
  {
    "term": "GDPR",
    "full": "Reg. UE 2016/679",
    "def": "Regolamento europeo protezione dati. Art. 9: categorie speciali (sanitari, DSA, etnia, religione) — vietate su IA senza DPA. Art. 22: no decisioni interamente automatizzate. Art. 28: DPA obbligatorio con fornitori IA."
  },
  {
    "term": "DPA",
    "full": "Data Processing Agreement",
    "def": "Contratto obbligatorio (GDPR art. 28) tra scuola (titolare) e fornitore IA (responsabile). Stabilisce: finalità, durata, misure sicurezza. Senza DPA: ogni uso su dati personali è violazione GDPR."
  },
  {
    "term": "Categorie speciali",
    "full": "GDPR art. 9",
    "def": "Dati che richiedono protezione massima: sanitari, disabilità, DSA, etnia, religione, opinioni politiche, dati giudiziari. MAI inserire in ChatGPT o Claude consumer. Solo sistemi con DPA approvato dal DPO."
  },
  {
    "term": "Allucinazione",
    "full": "Tecnico",
    "def": "Informazione falsa ma plausibile prodotta dall'IA con la stessa sicurezza di quelle corrette. Causa principale di errori in documenti ufficiali. Soluzione: verifica obbligatoria su normattiva.it per ogni norma citata."
  },
  {
    "term": "RCOF",
    "full": "Formula per prompt professionali",
    "def": "Ruolo + Compito + Contesto + Formato. La struttura di prompt che produce output professionali senza allucinazioni strutturali. Esempio: 'Sei la segretaria IC [nome]. Scrivi circolare n.X/2025 per... Formato: circolare italiana con protocollo.'"
  },
  {
    "term": "DPO",
    "full": "Data Protection Officer",
    "def": "Responsabile della Protezione dei Dati: obbligatorio per le PA incluse le scuole (GDPR art. 37). Verifica la compliance GDPR degli strumenti IA, stipula i DPA, aggiorna il registro dei trattamenti."
  },
  {
    "term": "Titolare del trattamento",
    "full": "GDPR art. 4(7)",
    "def": "Chi determina finalità e mezzi del trattamento. In una scuola: l'istituzione/DS. Il fornitore IA è il 'responsabile del trattamento' (art. 4(8)). Il titolare è sempre responsabile della compliance."
  },
  {
    "term": "DPR 275/1999",
    "full": "Autonomia scolastica",
    "def": "Art. 3: il PTOF è approvato dal CdI su proposta del Collegio. Conferisce autonomia organizzativa: base per deliberare la policy IA. L'IA supporta la stesura delle sezioni narrative — l'approvazione è dell'organo."
  },
  {
    "term": "L. 170/2010",
    "full": "Legge DSA",
    "def": "Tutela il diritto allo studio degli alunni con Disturbi Specifici di Apprendimento. Impone il PDP con strumenti compensativi e misure dispensative. I dati del PDP sono sanitari (GDPR art. 9): mai su IA consumer."
  },
  {
    "term": "L. 104/1992",
    "full": "Legge disabilità",
    "def": "Legge-quadro per assistenza e integrazione delle persone con disabilità. Base per il PEI (Piano Educativo Individualizzato). Tutti i dati del PEI sono sanitari: vietato inserirli in piattaforme IA senza DPA."
  },
  {
    "term": "DPR 445/2000",
    "full": "T.U. Documentazione Amministrativa",
    "def": "Art. 3: gli atti amministrativi devono riportare data, protocollo e firma del responsabile. Obblighi verificabili e non delegabili all'IA — la checklist di revisione è il modo per rispettarli."
  },
  {
    "term": "L. 241/1990",
    "full": "Procedimento Amministrativo",
    "def": "Art. 3: obbligo di motivazione degli atti PA con indicazione delle ragioni giuridiche. Atti con normative errate (generate dall'IA) possono essere annullabili. Da qui l'obbligo di verifica su normattiva.it."
  },
  {
    "term": "D.Lgs. 165/2001",
    "full": "Pubblico impiego",
    "def": "Art. 55-bis: responsabilità disciplinare del dipendente pubblico per atti irregolari. Chi firma un documento con errori generati dall'IA non è esente — la produzione con strumenti digitali non costituisce esimente."
  },
  {
    "term": "PNSD",
    "full": "Piano Nazionale Scuola Digitale",
    "def": "Istituito da L. 107/2015, art. 1 cc. 56-57. Obbligo di alfabetizzazione digitale per docenti e ATA. L'Animatore Digitale coordina l'attuazione. Base per inserire la formazione IA nel Piano di Formazione d'Istituto."
  },
  {
    "term": "D.Lgs. 82/2005",
    "full": "Codice Amministrazione Digitale",
    "def": "Art. 12: le PA promuovono l'uso delle tecnologie digitali. Art. 40: le PA formano i propri documenti con mezzi informatici. Base per la digitalizzazione documentale scolastica e l'uso legittimo degli strumenti IA."
  },
  {
    "term": "DM 62/2017",
    "full": "Valutazione scolastica",
    "def": "Art. 2: la valutazione è coerente con i criteri definiti dal Collegio e comunicati alle famiglie. Le rubriche generate con l'IA devono rispettare i criteri approvati collegialmente e essere condivise con gli studenti prima della prova."
  },
  {
    "term": "D.Lgs. 66/2017",
    "full": "Inclusione scolastica",
    "def": "Norme per la promozione dell'inclusione degli studenti con disabilità. La differenziazione dei materiali didattici (schede a 3 livelli) è uno strumento di inclusione supportato dall'IA senza compromettere la qualità pedagogica."
  },
  {
    "term": "CCNL Istruzione 2019-2021",
    "full": "Contratto Collettivo",
    "def": "Artt. 22 e 63: diritto-dovere di formazione professionale continua per tutto il personale scolastico. Base per inserire la formazione sull'IA nel Piano di Formazione d'Istituto come adempimento contrattuale."
  },
  {
    "term": "Prov. Garante 30/03/2023",
    "full": "ChatGPT in Italia",
    "def": "Blocco temporaneo di ChatGPT per: assenza base giuridica, nessuna informativa agli utenti, mancanza protezioni per minori. Ripristinato ad aprile 2024 dopo adeguamenti OpenAI. Fondamentale per comprendere i rischi GDPR dell'IA."
  },
  {
    "term": "DM 166/2025",
    "full": "Linee guida IA MIM",
    "def": "Decreto che adotta le Linee guida per l'introduzione dell'IA nelle scuole: 4 pilastri, principi e requisiti etici/tecnici/normativi."
  },
  {
    "term": "Deployer",
    "full": "Utilizzatore (AI Act)",
    "def": "Chi usa un sistema di IA sotto la propria autorità: nelle Linee guida è l'Istituzione scolastica."
  },
  {
    "term": "DPIA",
    "full": "Data Protection Impact Assessment",
    "def": "Valutazione d'impatto sulla protezione dei dati, da svolgere prima del trattamento con nuove tecnologie (artt. 35 ss. GDPR)."
  },
  {
    "term": "FRIA",
    "full": "Fundamental Rights Impact Assessment",
    "def": "Valutazione d'impatto sui diritti fondamentali, obbligatoria per i sistemi di IA ad alto rischio (art. 27 AI Act); integra la DPIA."
  },
  {
    "term": "DPO",
    "full": "Data Protection Officer",
    "def": "Responsabile della protezione dei dati che supporta la scuola fin dall'adozione di un sistema di IA."
  },
  {
    "term": "Sorveglianza umana",
    "full": "Human oversight",
    "def": "Controllo umano sui sistemi di IA per individuare anomalie e intervenire; l'uomo resta responsabile della decisione."
  },
  {
    "term": "Privacy by design/default",
    "full": "GDPR artt. 25",
    "def": "Protezione dei dati integrata fin dalla progettazione e, per impostazione predefinita, solo i dati strettamente necessari."
  },
  {
    "term": "Dati sintetici",
    "full": "Synthetic data",
    "def": "Dati artificiali che riproducono struttura e caratteristiche dei dati reali, usati per ridurre i rischi privacy."
  },
  {
    "term": "Allucinazione",
    "full": "AI hallucination",
    "def": "Output dell'IA plausibile ma falso o con riferimenti inventati: va sempre verificato."
  },
  {
    "term": "Piattaforma Unica",
    "full": "unica.istruzione.gov.it",
    "def": "Portale del MIM che ospita le Linee guida IA, la mappa delle sperimentazioni e gli strumenti di governance."
  },
  {
    "term": "SIDI",
    "full": "Sistema Informativo dell'Istruzione",
    "def": "Piattaforma ministeriale per graduatorie, convocazioni, anagrafe studenti, fascicoli e flussi verso il MIM."
  },
  {
    "term": "NoiPA",
    "full": "Gestione personale PA",
    "def": "Piattaforma per lo stato giuridico-economico e i pagamenti (stipendi, cedolini) del personale."
  },
  {
    "term": "Pago In Rete",
    "full": "PagoPA per la scuola",
    "def": "Servizio per i pagamenti delle famiglie verso la scuola (contributi, viaggi, ecc.)."
  },
  {
    "term": "Gestionale scolastico",
    "full": "Software di segreteria",
    "def": "Applicativi (Argo, Spaggiari/Classeviva, Madisoft Nuvola) per protocollo, registro, alunni e personale."
  },
  {
    "term": "UDA",
    "full": "Unità di Apprendimento",
    "def": "Segmento di percorso didattico centrato su competenze, con compiti e prodotti attesi."
  },
  {
    "term": "PEI",
    "full": "Piano Educativo Individualizzato",
    "def": "Documento per gli studenti con disabilità che definisce obiettivi, strumenti e misure (L. 104/1992)."
  },
  {
    "term": "PDP",
    "full": "Piano Didattico Personalizzato",
    "def": "Piano per studenti con DSA/BES con misure compensative e dispensative (L. 170/2010)."
  },
  {
    "term": "BES",
    "full": "Bisogni Educativi Speciali",
    "def": "Studenti che necessitano di interventi individualizzati per ragioni varie (disabilità, DSA, svantaggio)."
  },
  {
    "term": "DSA",
    "full": "Disturbi Specifici dell'Apprendimento",
    "def": "Dislessia, disgrafia, disortografia, discalculia: richiedono misure personalizzate."
  },
  {
    "term": "DigComp 2.2",
    "full": "Quadro competenze digitali UE",
    "def": "Framework europeo delle competenze digitali; l'area 1 riguarda la valutazione critica di dati e fonti."
  }
];

// Official reference sources (incl. MIM guidelines, Unica, AI Act)
export const RESOURCES = [
  {
    "ico": "🏛️",
    "title": "Normattiva.it — Leggi italiane",
    "desc": "Archivio ufficiale OBBLIGATORIO per verificare ogni riferimento normativo generato dall'IA. Ricorda: l'IA può inventare numeri di legge plausibili.",
    "url": "https://www.normattiva.it"
  },
  {
    "ico": "📋",
    "title": "MIUR — Istruzione.it",
    "desc": "Circolari ministeriali, linee guida RAV/PTOF, notizie normative scolastiche. Fonte ufficiale per verificare le circolari MIUR citate dall'IA.",
    "url": "https://www.istruzione.it"
  },
  {
    "ico": "🔒",
    "title": "Garante Privacy — Istruzione",
    "desc": "Provvedimenti e linee guida per le scuole, inclusi quelli su ChatGPT e dati di minori. Lettura essenziale per chiunque usi l'IA con dati scolastici.",
    "url": "https://www.garanteprivacy.it"
  },
  {
    "ico": "🤖",
    "title": "ChatGPT — OpenAI",
    "desc": "Versione gratuita (GPT-4o mini): ottima per task quotidiani. Solo per dati anonimi nella versione consumer. Accesso: chat.openai.com.",
    "url": "https://chat.openai.com"
  },
  {
    "ico": "🟣",
    "title": "Claude — Anthropic",
    "desc": "Eccellente per testi lunghi e documenti formali (PTOF, RAV, verbali articolati). Versione gratuita su claude.ai — solo per dati anonimi.",
    "url": "https://claude.ai"
  },
  {
    "ico": "🌐",
    "title": "DeepL — Traduzioni professionali",
    "desc": "Traduttore automatico di alta qualità per comunicazioni multilingua con famiglie straniere. Qualità superiore a Google Translate per arabo, cinese, rumeno.",
    "url": "https://www.deepl.com"
  },
  {
    "ico": "📖",
    "title": "AI Act — Testo ufficiale EUR-Lex",
    "desc": "Reg. UE 2024/1689 in italiano. Leggi l'Allegato III per verificare la classificazione del tuo uso specifico. Fondamentale per la compliance.",
    "url": "https://eur-lex.europa.eu"
  },
  {
    "ico": "📚",
    "title": "Linee guida EDPB su IA e GDPR",
    "desc": "European Data Protection Board: linee guida sull'uso dell'IA nei servizi pubblici. Riferimento tecnico per il DPO della scuola.",
    "url": "https://www.edpb.europa.eu"
  },
  {
    "ico": "📕",
    "title": "Linee guida IA MIM (DM 166/2025)",
    "desc": "Il testo ufficiale delle Linee guida per l'introduzione dell'IA nelle scuole.",
    "url": "https://www.mim.gov.it/-/pubblicate-le-linee-guida-per-l-introduzione-dell-intelligenza-artificiale-nelle-istituzioni-scolastiche-allegato-al-dm-n-166-del-09-08-2025"
  },
  {
    "ico": "🟦",
    "title": "Piattaforma Unica — sezione IA",
    "desc": "Versione interattiva delle Linee guida e mappa delle sperimentazioni.",
    "url": "https://unica.istruzione.gov.it/it/linee-guida-ia"
  },
  {
    "ico": "🇪🇺",
    "title": "AI Act (Reg. UE 2024/1689)",
    "desc": "Il Regolamento europeo sull'Intelligenza Artificiale.",
    "url": "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32024R1689"
  }
];

// "Who does what": platforms/management software vs. where AI actually helps
export const PLATFORMS = [
  {
    "name": "SIDI",
    "handles": "Graduatorie, convocazioni telematiche, contratti, Anagrafe Studenti, fascicoli, flussi verso il MIM.",
    "ai": "Spiegare la procedura; bozza della comunicazione di accompagnamento."
  },
  {
    "name": "NoiPA",
    "handles": "Stato giuridico-economico, stipendi e cedolini del personale.",
    "ai": "Nessun ruolo sui dati; spiegare voci e procedure."
  },
  {
    "name": "Pago In Rete / PagoPA",
    "handles": "Contributi e pagamenti delle famiglie.",
    "ai": "Bozza dell'avviso alle famiglie (senza dati reali)."
  },
  {
    "name": "Sistema di Interscambio",
    "handles": "Fatturazione elettronica verso la PA.",
    "ai": "Nessun ruolo; al più spiegare gli adempimenti."
  },
  {
    "name": "Gestionali (Argo, Spaggiari, Nuvola)",
    "handles": "Protocollo, registro elettronico, alunni, personale, segreteria digitale, conservazione.",
    "ai": "Bozze di testo e sintesi; mai inserimento di dati reali."
  }
];

// The 6 reference principles of the MIM guidelines (DM 166/2025)
export const MIM_PRINCIPLES = [
  {
    "name": "Centralità della persona",
    "desc": "Approccio antropocentrico: l'uomo governa i sistemi di IA."
  },
  {
    "name": "Equità",
    "desc": "Pari accesso e nessuna discriminazione; gestione dei bias."
  },
  {
    "name": "Innovazione etica e responsabile",
    "desc": "Supporto a competenze autentiche, non sostituzione."
  },
  {
    "name": "Sostenibilità",
    "desc": "Equilibrio sociale, economico e ambientale."
  },
  {
    "name": "Tutela dei diritti e delle libertà",
    "desc": "Privacy by design/default, minimizzazione, dignità."
  },
  {
    "name": "Sicurezza dei sistemi",
    "desc": "Riservatezza, integrità e disponibilità dei dati."
  }
];

// Quizzes for the Teacher track modules (risks/responsible use, inclusion & SEN, guiding students)
export const TEACHER_QUIZZES = {
  "doc21": [
    {
      "question": "Quale approccio raccomandano le Linee guida MIM per introdurre l'IA in didattica?",
      "options": [
        "Adozione immediata e generalizzata",
        "Prudenziale e graduale, partendo da pratiche a basso rischio",
        "Solo per le scuole superiori",
        "Vietarla del tutto"
      ],
      "correct": 1,
      "explanation": "Si parte da usi a basso rischio educativo e giuridico, con sperimentazione e monitoraggio."
    },
    {
      "question": "La valutazione degli apprendimenti tramite IA è considerata dall'AI Act…",
      "options": [
        "un uso a rischio minimo",
        "un uso ad alto rischio",
        "sempre vietata",
        "obbligatoria"
      ],
      "correct": 1,
      "explanation": "È ad alto rischio: richiede DPIA/FRIA e non va comunque delegata; il voto resta del docente."
    },
    {
      "question": "A scuola, quale uso dell'IA è espressamente vietato dall'AI Act?",
      "options": [
        "Generare esercizi di ripasso",
        "Riconoscere le emozioni degli studenti (sentiment analysis)",
        "Tradurre una consegna",
        "Creare una mappa concettuale"
      ],
      "correct": 1,
      "explanation": "Il riconoscimento delle emozioni in ambito educativo è vietato, salvo motivi medici o di sicurezza."
    },
    {
      "question": "Cosa intendono le Linee guida per «sistemi ibridi»?",
      "options": [
        "Usare due chatbot insieme",
        "Automatizzare il ripetitivo lasciando al docente decisioni e relazione",
        "Sostituire il docente con l'IA",
        "Vietare il lavoro di gruppo"
      ],
      "correct": 1,
      "explanation": "L'IA arricchisce, non sostituisce l'insegnamento diretto e l'interazione umana."
    }
  ],
  "doc22": [
    {
      "question": "Gli adattamenti prodotti con l'IA per uno studente con DSA devono…",
      "options": [
        "sostituire il PDP",
        "essere coerenti con quanto previsto nel PDP/PEI",
        "essere decisi dall'IA",
        "ignorare le misure dispensative"
      ],
      "correct": 1,
      "explanation": "L'IA supporta, ma gli adattamenti devono integrare PDP/PEI a tutela dello studente."
    },
    {
      "question": "Quali dati NON vanno inseriti in un tool IA pubblico?",
      "options": [
        "Un brano del libro di testo",
        "Diagnosi e dati di salute reali di uno studente",
        "Una consegna generica",
        "Il titolo di un'UDA"
      ],
      "correct": 1,
      "explanation": "Salute e disabilità sono categorie particolari (art. 9 GDPR): usa esempi fittizi."
    },
    {
      "question": "Un uso inclusivo tipico dell'IA per i docenti è…",
      "options": [
        "Riconoscere le emozioni in classe",
        "Produrre versioni multilingue e semplificate dei materiali",
        "Assegnare i voti automaticamente",
        "Profilare gli studenti"
      ],
      "correct": 1,
      "explanation": "Materiali multilingue e accessibili sono un caso d'uso inclusivo raccomandato."
    },
    {
      "question": "Le funzionalità di trascrizione e sintesi vocale servono soprattutto a…",
      "options": [
        "sorvegliare gli studenti",
        "aumentare l'accessibilità dell'apprendimento",
        "valutare gli alunni",
        "sostituire il docente di sostegno"
      ],
      "correct": 1,
      "explanation": "Migliorano accessibilità e inclusione, come indicato dalle Linee guida."
    }
  ],
  "doc23": [
    {
      "question": "Cosa sono le «allucinazioni» dell'IA?",
      "options": [
        "Errori di battitura",
        "Output plausibili ma falsi o con fonti inventate",
        "Immagini generate",
        "Virus informatici"
      ],
      "correct": 1,
      "explanation": "Vanno sempre verificate: è un'occasione per educare al pensiero critico e alla valutazione delle fonti."
    },
    {
      "question": "Qual è l'obiettivo nell'uso dell'IA con gli studenti?",
      "options": [
        "Renderli utilizzatori passivi",
        "Farne co-creatori consapevoli e critici",
        "Sostituire lo studio",
        "Assegnare meno compiti"
      ],
      "correct": 1,
      "explanation": "L'IA non deve sostituire lo sforzo cognitivo: si promuove un uso critico e responsabile."
    },
    {
      "question": "Le scelte sull'uso dell'IA in classe vanno…",
      "options": [
        "tenute riservate",
        "condivise in modo trasparente con studenti e famiglie",
        "decise dall'IA",
        "imposte senza spiegazioni"
      ],
      "correct": 1,
      "explanation": "La trasparenza e il coinvolgimento (anche tramite organi collegiali) creano fiducia."
    },
    {
      "question": "Quale framework richiamano le Linee guida per valutare le fonti digitali?",
      "options": [
        "ISO 9001",
        "DigComp 2.2",
        "MEPA",
        "SPID"
      ],
      "correct": 1,
      "explanation": "DigComp 2.2, area 1 'Alfabetizzazione su informazioni e dati'."
    }
  ]
};
