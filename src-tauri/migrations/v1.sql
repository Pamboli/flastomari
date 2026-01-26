CREATE TABLE
  IF NOT EXISTS swearwords (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    swearword TEXT NOT NULL,
    description TEXT,
    use TEXT
  );

-- CREATE TABLE
--   IF NOT EXISTS swearword_uses (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     swearword_id INTEGER NOT NULL,
--     use_description TEXT NOT NULL,
--     FOREIGN KEY (swearword_id) REFERENCES swearwords (id) ON DELETE CASCADE
--   );
INSERT
OR IGNORE INTO swearwords (swearword, description, use)
VALUES
  (
    'Nito/a',
    'Nic, malhumorat. Genuí de Manacor.',
    'Què tens, que estàs tan nito? '
  ),
  (
    'Anar de cul',
    'Anar de bòlit, anar escopetejat. ',
    'Avui no puc ni fer un rebentat a s''Agrícola, vaig de cul. '
  ),
  (
    'Pixa',
    'Membre viril, penis, mentula, muto',
    'Escures tu avui? I una pixa! Te toca a tu'
  ),
  (
    'Rave',
    'Membre viril, exclamació de disconformitat, cosa de baixa qualitat',
    'I un rave!'
  ),
  (
    'Cotorra',
    'Genitals femenins',
    'Sa madona de Sa Torre / es pa negre li fa mal / però no n''hi fa es pardal / quan li fiquen a sa cotorra'
  ),
  (
    'Fufa',
    'Vulva',
    'No me toquis sa fufa, que no estic per tonteries'
  ),
  (
    'Figa',
    'Parts genitals externes de la dona',
    'Estic fins a sa figa, no m''empipis més'
  ),
  (
    'Cap de fava (amb orelles)',
    'Tonto, curt',
    'és ben cap de fava aquell policia, sempre me posa multes'
  ),
  (
    'Cap de suro',
    'Persona nècia, ignorant, curta d''enteniment',
    'T''has equivocat de portal, cap de suro!'
  ),
  (
    'Tros de banc',
    'Ser ximple, curt d''enteniment.',
    'No siguis tros de banc!'
  ),
  (
    'Curt/-a de gambals',
    'Persona amb poca capacitat mental, ximple',
    'En Joan no pot ser més curt de gambals, s''ha tornat a deixar ses claus de caseva'
  ),
  (
    'Pixapins',
    'Persona de ciutat que va al camp els caps de setmana o a les vacances.',
    NULL
  ),
  (
    'Enviar (algú) a pastar fang',
    'enviar a mal viatge, acomiadar despectivament ',
    'Encara surts amb na Maria? què va, me va enviar a pastar fang.'
  ),
  (
    'Enviar (algú) a porgar fum',
    'Engegar algú, desfer-se d’una persona molesta, sovint de mala manera.',
    'Estic cansat/da de sentir-te, veste''n a porgar fum!'
  ),
  ('Ves-te''n a pondre', NULL, NULL),
  ('Ves-te''n a comptar llavors', NULL, NULL),
  (
    'Ves-te''n a cagar',
    NULL,
    'Me tornes a demanar dobers? Ves-te''n a cagar!'
  ),
  ('Tenir el cul en punta', NULL, NULL),
  (
    'Llepaous',
    NULL,
    'Ara vens de bones? no siguis llepaous.'
  ),
  (
    'Llepaculs',
    'Llepacrestes',
    'Ets un llepaculs, tot lo dia xerrant amb sa professora.'
  ),
  ('Merda', 'Persona de no-res, menyspreable ', NULL),
  ('Menjamerda', NULL, NULL),
  ('Cap de trons', 'Cap avalotat, de poc seny', NULL),
  (
    'Capbuit',
    'Persona de poc seny, que obra irreflexivament ',
    NULL
  ),
  (
    'Cap de gri',
    'Per indicar el poc seny, la lleugeresa en les obres, la falta de prudència, la irreflexió,',
    NULL
  ),
  (
    'Cap verjo',
    'Per indicar el poc seny, la lleugeresa en les obres, la falta de prudència, la irreflexió,',
    NULL
  ),
  (
    'Capsigrany',
    'Capbuit, home de poc enteniment',
    NULL
  ),
  (
    'Cap d''ase',
    'persona d''enteniment molt curt',
    'ets més cap d''ase, no te banyis a nes riuet'
  ),
  (
    'Cap de poal',
    'persona d''enteniment molt curt',
    'Què no ho entens, cap de poal?'
  ),
  (
    'Cap de meló',
    'persona d''enteniment molt curt',
    NULL
  ),
  (
    'Cap de carabassa',
    'Per indicar el poc seny, la lleugeresa en les obres, la falta de prudència, la irreflexió,',
    'Què passa cap de carabasa?!'
  ),
  (
    'Poc cervell',
    'persona de poc enteniment, que no reflexiona.',
    NULL
  ),
  (
    'Cervell de canari',
    'persona de poc enteniment, que no reflexiona.',
    NULL
  ),
  (
    'Pere Punyetes',
    'Persona que tendeix a fastiguejar i molestar',
    NULL
  ),
  (
    'Tros de quòniam ',
    'Persona molt beneita o inútil',
    'No entens mai res, tros de quòniam'
  ),
  (
    'Tros de soca',
    'Persona molt dura d’enteniment',
    'Li ho expliques i no ho pilla, és un tros de soca'
  ),
  (
    'Tros de suro',
    'Persona curta d’enteniment o que no s’assabenta de res',
    'No té cap sentit això que dius, tros de suro'
  ),
  (
    'Més curt que una màniga de guardapits',
    'Persona molt curta d’enteniment, dit en forma de comparació humorística',
    'No li demanis massa, és més curt que una màniga de guardapits'
  ),
  (
    'No ets més curt perquè ton pare va dir basta',
    'Burla molt directa per dir que algú és curt d’enteniment al límit',
    'Has signat sense llegir, no ets més curt perquè ton pare va dir basta'
  ),
  (
    'Més pesat que un quilo de merda damunt sa cella',
    'Persona molt pesada i insistent, dita molt grollera i exagerada',
    'Deixa de repetir-ho, ets més pesat que un quilo de merda damunt sa cella'
  ),
  (
    'Més lleig que pegar a un pare',
    'Persona o cosa molt lletja, comparació feta per remarcar que és molt desagradable',
    'Aquest jersei és més lleig que pegar a un pare.'
  ),
  (
    'Més beneit que pixar d''esquenes',
    'Persona molt beneita, comparació grollera i humorística',
    'S’ho ha cregut tot, és més beneit que pixar d’esquenes'
  ),
  (
    'Titafluixa',
    'Persona covarda o amb poca empenta',
    'Ets un titafluixa. Mai t''atreveixes a res.'
  ),
  (
    'Titapansida',
    'Persona sense vigor, apocada',
    'Sempre te fas enrere a l’últim moment, quina titapansida.'
  ),
  (
    'Torracollons',
    'Pesat, que tot el temps es fica on no el demanen',
    'Ets un torracollons, pots callar una estona?'
  ),
  (
    'Collonut',
    'Que és de puta mare!',
    'Te fumes un canut; això és collonut!'
  ),
  (
    'Collonera',
    'Escrot, també s’usa com a insult sinònim de beneit o curt d’enteniment',
    'No pots ser més collonera'
  ),
  (
    'Acollonar-se',
    'Tenir por a fer qualque cosa',
    'Al final no vens a jugar? T''has acollonat?'
  ),
  (
    'Colló',
    'Curt d''enteniment',
    'S''ha de ser colló per ser del Barça.'
  ),
  (
    'Collonarro',
    'Curt d''enteniment, però més suau. De vegades dit amb to afectuós. ',
    'Sé cert que vas de bromes, Collonarro!'
  ),
  (
    'Collons de porc',
    'Groller, que diu barbaritats',
    'Collons de porc! Deixa de fer beneitures. '
  ),
  (
    'Malparit',
    'Persona dolenta i amb mala fe',
    'M’ha enganyat i a més a mes s''enriu, és un malparit.'
  ),
  (
    'Malnascut',
    'Persona sense escrúpols i de mala pasta',
    'El que ha fet no té nom, és un malnascut.'
  ),
  (
    'Mala pècora',
    'Mala persona i retorçada, amb un component de gènere',
    'Ho ha fet expressament, quina mala pècora'
  ),
  (
    'Malcriat',
    'Persona consentida, sense límits i amb poca educació',
    'No accepta un no, és un malcriat'
  ),
  (
    'Maleducat',
    'Mancat de respecte i de cortesia en el tracte',
    'No interrompis, ets un maleducat'
  ),
  (
    'Beneit',
    'Ingenu, de bona fe, que es deixa enredar',
    'No siguis beneit, que t’estan prenent el pèl'
  ),
  (
    'Betzol',
    'Persona grollera, maleducada, poc fina',
    'En Sion és un betzol, mai no me saluda.'
  ),
  (
    'Bàmbol',
    'Curt de reflexos, atabalat, que fa el ridícul.',
    'Na Joana sempre està empanada, és un poc bàmbola'
  ),
  (
    'Ruc',
    'Tossut i/o curt d’enteniment',
    'Ets un ruc: t’ho he explicat tres vegades!'
  ),
  (
    'Ximple',
    'Poca-solta, que fa o diu ximpleries',
    'Aquestes coses que molles són de ximple.'
  ),
  (
    'Curt ',
    'Curt d''enteniment',
    'En Pere Joan és curt, deixa''l fer.'
  ),
  (
    'Babau',
    'Beneit i despistat, fàcil d’enganyar.',
    'Em vaig creure el missatge… quin babau que som'
  ),
  (
    'Me la rebufa',
    'Expressió per referir-se a que ens és indiferent alguna cosa amb to de provocació',
    'Sa mare d''en Toni ens ha fet croquetes. Me la rebutja!'
  ),
  (
    'què putes m''és a mi ',
    'Expressió per referir-se a que ens és indiferent alguna cosa amb to agressiu',
    'N''Alícia s''ha enrollat amb en Jordi. I que putes m''és a mi?'
  ),
  (
    'me la pela',
    'Expressió per referir-se a que ens és indiferent alguna cosa ',
    '-Albert, faràs es deures? +Me la pela!'
  ),
  (
    'Cercameuca',
    'Fer una volta en un acte festiu per intentar lligar amb qualcú',
    'Anem a fer una cercameuca! Avui lligues, Joanet!'
  ),
  (
    'Aixafaguitarres',
    'Persona que desbarata o interromp una festa, una activitat divertida',
    'No tornis a treure aquest tema, per favor! Ets un aixafaguitarres!'
  ),
  (
    'Bocamoll',
    'Que tot ho molla, que tot ho conta',
    'En Marc és un bocamoll, no sap guardar un secret.'
  ),
  (
    'Calçasses',
    'Home exessivament condescendent o que es deixa governar per la parella',
    'Ets un calçasses, sempre fas lo que ella vol.'
  ),
  (
    'Destraler',
    'Mancat de finor',
    'Fa ses feines com un destraler'
  ),
  (
    'Pixa',
    'Sinònim de sort. ',
    'He fet gol per pura pixa.'
  ),
  (
    'Llemuga',
    'Persona lenta, massa minuciosa, que s''entreté massa en les coses que fa',
    'Deixa de fer sa llemuga!'
  ),
  (
    'Groller',
    'Bast, grosser',
    'Ets un groller! Només dius guarrades'
  ),
  (
    'Xoquinet',
    'Curt d''enteniment',
    'Aquest home és un xoquinet!'
  );