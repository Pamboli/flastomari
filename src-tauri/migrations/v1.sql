CREATE TABLE
  IF NOT EXISTS swearwords (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    swearword TEXT NOT NULL,
    description TEXT NOT NULL,
    use TEXT,
    audio TEXT NOT NULL
  );

CREATE TABLE
  IF NOT EXISTS swearword_uses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    swearword_id INTEGER NOT NULL,
    is_default INTEGER NOT NULL DEFAULT 0,
    audio TEXT NOT NULL,
    FOREIGN KEY (swearword_id) REFERENCES swearwords (id) ON DELETE NO ACTION
  );

INSERT
OR IGNORE INTO swearwords (id, swearword, description, use, audio)
VALUES
  (
    1,
    'Nito/a',
    'Nic, malhumorat. Genuí de Manacor.',
    'Què tens, que estàs tan nito?',
    'D1.mp3'
  ),
  (
    2,
    'Anar de cul',
    'Anar de bòlit, anar escopetejat.',
    'Avui no puc ni fer un rebentat a s''Agrícola, vaig de cul.',
    'D2.mp3'
  ),
  (
    3,
    'Pixa',
    'Membre viril, penis.',
    'Escures tu avui? I una pixa! Te toca a tu',
    'D3.mp3'
  ),
  (
    4,
    'Rave',
    'Membre viril, exclamació de disconformitat, cosa de baixa qualitat',
    'I un rave!',
    'D4.mp3'
  ),
  (
    5,
    'Cotorra',
    'Genitals femenins',
    'Sa madona de Sa Torre / es pa negre li fa mal / però no n''hi fa es pardal / quan li fiquen a sa cotorra',
    'D5.mp3'
  ),
  (
    6,
    'Fufa',
    'Vulva',
    'No me toquis sa fufa, que no estic per tonteries',
    'D6.mp3'
  ),
  (
    7,
    'Figa',
    'Parts genitals externes de la dona',
    'Estic fins a sa figa, no m''empipis més',
    'D7.mp3'
  ),
  (
    8,
    'Cap de fava (amb orelles)',
    'Curt',
    'és ben cap de fava aquell policia, sempre me posa multes',
    'D8.mp3'
  ),
  (
    9,
    'Cap de suro',
    'Persona nècia, ignorant, curta d''enteniment',
    'T''has equivocat de portal, cap de suro!',
    'D9.mp3'
  ),
  (
    10,
    'Tros de banc',
    'Ser ximple, curt d''enteniment.',
    'No siguis tros de banc!',
    'D10.mp3'
  ),
  (
    11,
    'Curt/-a de gambals',
    'Persona amb poca capacitat mental, ximple',
    'En Joan no pot ser més curt de gambals, s''ha tornat a deixar ses claus de caseva',
    'D11.mp3'
  ),
  (
    12,
    'Pixapins',
    'Persona de ciutat que va al camp els caps de setmana o a les vacances.',
    NULL,
    'D12.mp3'
  ),
  (
    13,
    'Enviar (algú) a pastar fang',
    'enviar a mal viatge, acomiadar despectivament',
    'Encara surts amb na Maria? què va, me va enviar a pastar fang.',
    'D13.mp3'
  ),
  (
    14,
    'Enviar (algú) a porgar fum',
    'Engegar algú, desfer-se d’una persona molesta, sovint de mala manera.',
    'Estic cansat/da de sentir-te, veste''n a porgar fum!',
    'D14.mp3'
  ),
  (
    15,
    'Ves-te''n a pondre',
    'Engegar algú, desfer-se d’una persona molesta, sovint de mala manera.',
    NULL,
    'D15.mp3'
  ),
  (
    16,
    'Ves-te''n a comptar llavors',
    'Engegar algú, desfer-se d’una persona molesta, sovint de mala manera.',
    NULL,
    'D16.mp3'
  ),
  (
    17,
    'Ves-te''n a cagar',
    'Engegar algú, desfer-se d’una persona molesta, sovint de mala manera.',
    'Me tornes a demanar dobers? Ves-te''n a cagar!',
    'D17.mp3'
  ),
  (
    18,
    'Tenir el cul en punta',
    'Persona inquieta, que no es conforma',
    'Em Joan mai vol seure a classe, te es cul en punta.',
    'D18.mp3'
  ),
  (
    19,
    'Llepaous',
    'Llepacrestes, baix adulador.',
    'Ara vens de bones? no siguis llepaous.',
    'D19.mp3'
  ),
  (
    20,
    'Llepaculs',
    'Llepacrestes, baix adulador.',
    'Ets un llepaculs, tot lo dia xerrant amb sa professora.',
    'D20.mp3'
  ),
  (
    21,
    'Pep Merda',
    'Persona de no-res, menyspreable',
    'Ets més beneit que en Pep merda!',
    'D21.mp3'
  ),
  (
    22,
    'Menjamerda',
    'O, si vols, tros de merda seca. Un insult en tota regla.',
    'Ets un menjamerda!',
    'D22.mp3'
  ),
  (
    23,
    'Cap de trons',
    'Cap avalotat, de poc seny',
    NULL,
    'D23.mp3'
  ),
  (
    24,
    'Capbuit',
    'Persona de poc seny, que obra irreflexivament',
    'Ets un cap buit, mai saps on has aparcat es cotxe',
    'D24.mp3'
  ),
  (
    25,
    'Cap de gri',
    'Per indicar el poc seny, la lleugeresa en les obres, la falta de prudència, la irreflexió,',
    NULL,
    'D25.mp3'
  ),
  (
    26,
    'Cap verjo',
    'Per indicar el poc seny, la lleugeresa en les obres, la falta de prudència, la irreflexió,',
    NULL,
    'D26.mp3'
  ),
  (
    27,
    'Capsigrany',
    'Capbuit, home de poc enteniment',
    'Vaja capsigrany que estàs fet',
    'D27.mp3'
  ),
  (
    28,
    'Cap d''ase',
    'persona d''enteniment molt curt',
    'ets més cap d''ase, no te banyis a nes riuet',
    'D28.mp3'
  ),
  (
    29,
    'Cap de poal',
    'persona d''enteniment molt curt',
    'Què no ho entens, cap de poal?',
    'D29.mp3'
  ),
  (
    30,
    'Cap de meló',
    'persona d''enteniment molt curt',
    'Cap de meló! fes es cap viu!',
    'D30.mp3'
  ),
  (
    31,
    'Cap de carabassa',
    'Per indicar el poc seny, la lleugeresa en les obres, la falta de prudència, la irreflexió,',
    'Què passa cap de carabasa?!',
    'D31.mp3'
  ),
  (
    32,
    'Poc cervell',
    'persona de poc enteniment, que no reflexiona.',
    'Poc cervell! Pensa un poc abans de xerrar',
    'D32.mp3'
  ),
  (
    33,
    'Cervell de canari',
    'persona de poc enteniment, que no reflexiona.',
    'Cervell de canari! No n''encertes ni una!',
    'D33.mp3'
  ),
  (
    34,
    'Pere Punyetes',
    'Persona que tendeix a fastiguejar i molestar',
    'Deixa de molestar la teva germana i no siguis Pere Punyetes!',
    'D34.mp3'
  ),
  (
    35,
    'Tros de quòniam',
    'Persona molt beneita o inútil',
    'No entens mai res, tros de quòniam',
    'D35.mp3'
  ),
  (
    36,
    'Tros de soca',
    'Persona molt dura d’enteniment',
    'Li ho expliques i no ho pilla, és un tros de soca',
    'D36.mp3'
  ),
  (
    37,
    'Tros de suro',
    'Persona curta d’enteniment o que no s’assabenta de res',
    'No té cap sentit això que dius, tros de suro',
    'D37.mp3'
  ),
  (
    38,
    'Més curt que una màniga de guardapits',
    'Persona molt curta d’enteniment, dit en forma de comparació humorística',
    'No li demanis massa, és més curt que una màniga de guardapits',
    'D38.mp3'
  ),
  (
    39,
    'No ets més curt perquè ton pare va dir basta',
    'Burla molt directa per dir que algú és curt d’enteniment al límit',
    'Has signat sense llegir, no ets més curt perquè ton pare va dir basta',
    'D39.mp3'
  ),
  (
    40,
    'Més pesat que un quilo de merda damunt sa cella',
    'Persona molt pesada i insistent, dita molt grollera i exagerada',
    'Deixa de repetir-ho, ets més pesat que un quilo de merda damunt sa cella',
    'D40.mp3'
  ),
  (
    41,
    'Més lleig que pegar a un pare',
    'Persona o cosa molt lletja, comparació feta per remarcar que és molt desagradable',
    'Aquest jersei és més lleig que pegar a un pare.',
    'D41.mp3'
  ),
  (
    42,
    'Més beneit que pixar d''esquenes',
    'Persona molt beneita, comparació grollera i humorística',
    'S’ho ha cregut tot, és més beneit que pixar d’esquenes',
    'D42.mp3'
  ),
  (
    43,
    'Titafluixa',
    'Persona covarda o amb poca empenta',
    'Ets un titafluixa. Mai t''atreveixes a res.',
    'D43.mp3'
  ),
  (
    44,
    'Titapansida',
    'Persona sense vigor, apocada',
    'Sempre te fas enrere a l’últim moment, quina titapansida.',
    'D44.mp3'
  ),
  (
    45,
    'Torracollons',
    'Pesat, que tot el temps es fica on no el demanen',
    'Ets un torracollons, pots callar una estona?',
    'D45.mp3'
  ),
  (
    46,
    'Collonut',
    'Que és de puta mare!',
    'Te fumes un canut; això és collonut!',
    'D46.mp3'
  ),
  (
    47,
    'Collonera',
    'Escrot, també s’usa com a insult sinònim de beneit o curt d’enteniment',
    'No pots ser més collonera',
    'D47.mp3'
  ),
  (
    48,
    'Acollonar-se',
    'Tenir por a fer qualque cosa',
    'Al final no vens a jugar? T''has acollonat?',
    'D48.mp3'
  ),
  (
    49,
    'Colló',
    'Curt d''enteniment',
    'S''ha de ser colló per ser del Barça.',
    'D49.mp3'
  ),
  (
    50,
    'Collonarro',
    'Curt d''enteniment, però més suau. De vegades dit amb to afectuós.',
    'Sé cert que vas de bromes, Collonarro!',
    'D50.mp3'
  ),
  (
    51,
    'Collons de porc',
    'Groller, que diu barbaritats',
    'Collons de porc! Deixa de fer beneitures.',
    'D51.mp3'
  ),
  (
    52,
    'Malparit/ida',
    'Persona dolenta i amb mala fe',
    'M’ha enganyat i a més a mes s''enriu, és un malparit.',
    'D52.mp3'
  ),
  (
    53,
    'Malnascut/uda',
    'Persona sense escrúpols i de mala pasta',
    'El que ha fet no té nom, és un malnascut.',
    'D53.mp3'
  ),
  (
    54,
    'Mala pècora',
    'Mala persona i retorçada, amb un component de gènere',
    'Ho ha fet expressament, quina mala pècora',
    'D54.mp3'
  ),
  (
    55,
    'Malcriat/ada',
    'Persona consentida, sense límits i amb poca educació',
    'No accepta un no, és un malcriat',
    'D55.mp3'
  ),
  (
    56,
    'Maleducat/ada',
    'Mancat de respecte i de cortesia en el tracte',
    'No interrompis, ets un maleducat',
    'D56.mp3'
  ),
  (
    57,
    'Beneit/a',
    'Ingenu, de bona fe, que es deixa enredar',
    'No siguis beneit, que t’estan prenent el pèl',
    'D57.mp3'
  ),
  (
    58,
    'Betzol/a',
    'Persona grollera, maleducada, poc fina',
    'En Sion és un betzol, mai no me saluda.',
    'D58.mp3'
  ),
  (
    59,
    'Bàmbol/a',
    'Curt de reflexos, atabalat, que fa el ridícul.',
    'Na Joana sempre està empanada, és un poc bàmbola',
    'D59.mp3'
  ),
  (
    60,
    'Ruc/a',
    'Tossut i/o curt d’enteniment',
    'Ets un ruc: t’ho he explicat tres vegades!',
    'D60.mp3'
  ),
  (
    61,
    'Ximple',
    'Poca-solta, que fa o diu ximpleries',
    'Aquestes coses que molles són de ximple.',
    'D61.mp3'
  ),
  (
    62,
    'Curt/a',
    'Curt d''enteniment',
    'En Pere Joan és curt, deixa''l fer.',
    'D62.mp3'
  ),
  (
    63,
    'Babau/a',
    'Beneit i despistat, fàcil d’enganyar.',
    'Em vaig creure el missatge… quin babau que som',
    'D63.mp3'
  ),
  (
    64,
    'Me la rebufa',
    'Expressió per referir-se a que ens és indiferent alguna cosa amb to de provocació',
    'Sa mare d''en Toni ens ha fet croquetes. Me la rebufa!',
    'D64.mp3'
  ),
  (
    65,
    'Què putes m''és a mi',
    'Expressió per referir-se a que ens és indiferent alguna cosa amb to agressiu',
    'N''Alícia s''ha enrollat amb en Jord Ique putes m''és a mi?',
    'D65.mp3'
  ),
  (
    66,
    'Me la pela',
    'Expressió per referir-se a que ens és indiferent alguna cosa',
    '-Albert, faràs es deures? +Me la pela!',
    'D66.mp3'
  ),
  (
    67,
    'Cercameuca',
    'Fer una volta en un acte festiu per intentar lligar amb qualcú',
    'Anem a fer una cercameuca! Avui lligues, Joanet!',
    'D67.mp3'
  ),
  (
    68,
    'Aixafaguitarres',
    'Persona que desbarata o interromp una festa, una activitat divertida',
    NULL,
    'D68.mp3'
  ),
  (
    69,
    'Bocamoll/a',
    'Que tot ho molla, que tot ho conta',
    'En Marc és un bocamoll, no sap guardar un secret.',
    'D69.mp3'
  ),
  (
    70,
    'Calçasses',
    'Home exessivament condescendent o que es deixa governar per la parella',
    'Ets un calçasses, sempre fas lo que ella vol.',
    'D70.mp3'
  ),
  (
    71,
    'Destraler/a',
    'Mancat de finor',
    'Fa ses feines com un destraler',
    'D71.mp3'
  ),
  (
    72,
    'Pixa',
    'Sinònim de sort.',
    'He fet gol per pura pixa.',
    'D72.mp3'
  ),
  (
    73,
    'Llemuga',
    'Persona lenta, massa minuciosa, que s''entreté massa en les coses que fa',
    'Deixa de fer sa llemuga!',
    'D73.mp3'
  ),
  (
    74,
    'Groller/a',
    'Bast, grosser',
    'Ets un groller! Només dius guarrades',
    'D74.mp3'
  ),
  (
    75,
    'Xoquinet',
    'Curt d''enteniment',
    'Aquest home és un xoquinet!',
    'D75.mp3'
  ),
  (
    76,
    'Endiotenc',
    'Estúpid',
    'Ets un endiotenc tu!',
    'D76.mp3'
  ),
  (
    77,
    'Cap-juger',
    'Persona sense seny',
    'Ets ben cap-juger... mira que xiular dins s''iglesi',
    'D77.mp3'
  ),
  (
    78,
    'Encapirronat',
    'obstinat',
    '¿Ells están encapirronats en fer asades? ¡Venga idò, una raccioneta de blat d''ase per tots ells!',
    'D78.mp3'
  ),
  (
    79,
    'Ferrassa',
    'Persona avariciosa',
    'uns ferrasses i ets altres mans foradades i tudats',
    'D79.mp3'
  ),
  (
    80,
    'Tapamorros',
    'allò que obliga algú a callar:',
    'Te fortré un tapamorros si no calles!',
    'D80.mp3'
  ),
  (
    81,
    'Babaluet',
    'Beneitot, persona de poc enteniment',
    'Ai... babaluet.. no sé si ho treuràs',
    'D81.mp3'
  ),
  (
    82,
    'Aliardo/a',
    'Persona inculta, de poc enteniment o de poca moralitat',
    'És un bol aliardo aquell, no en treu aguller',
    'D82.mp3'
  ),
  (
    83,
    'Bajà/na',
    'Beneitot, mancat del bon ús de la raó',
    'No siguis bajà, i posa un poc de seny!',
    'D83.mp3'
  ),
  (
    84,
    'Baladrer/era',
    'Que parla a crits o que crida immoderadament',
    'Aquella veïnada és una baladrera, només crida',
    'D84.mp3'
  ),
  (
    85,
    'Bandua',
    'Persona que no va de feina ni d''estar subjecta i que en fa de les seves',
    'Més valdria que enlloc de fer es bandua, fessis un poc de feina',
    'D85.mp3'
  ),
  (
    86,
    'Betzà',
    'Persona gran i beneitota',
    'Es ben betzà aquell padrinet... li fan fer lo que volen',
    'D86.mp3'
  ),
  (
    87,
    'Beina',
    'Home dolent, depravat',
    'És un beina aquell home, ningú vol saber res d''ell',
    'D87.mp3'
  ),
  (
    88,
    'Belitre',
    'Home de poca vergonya i sense escrúpols',
    'Consol de molts, consol de belitres',
    'D88.mp3'
  ),
  (
    89,
    'Beduí/na',
    'Persona excessivament ximple, fàcil d''enganyar',
    'És una beduina... s''ho creu tot!',
    'D89.mp3'
  ),
  (
    90,
    'Bobià',
    'Curt d''enteniment',
    'quin homo tan bobià!',
    'D90.mp3'
  ),
  (
    91,
    'Embàlit',
    'Persona inútil per curtor d''enteniment; persona que no serveix per a res',
    'Aquell no serveix per res, és un bon embàlit!',
    'D91.mp3'
  ),
  (
    92,
    'Estrúmbol',
    'Persona embambada, aturada, que no té iniciativa o seny per a obrar',
    'Es va quedar ben aturat, talment un estrúmbol',
    'D92.mp3'
  ),
  (
    93,
    'Mòpia',
    'Persona curta de gambals, inútil, que fa més nosa que profit',
    'Pareixes una mòpia, te vols concentrar d''una vegada',
    'D93.mp3'
  ),
  (
    94,
    'Tarambana',
    'Eixelebrat; que obra sense seny, sense preocupació per la serietat o formalitat',
    'Ets ben tarambana tu!',
    'D94.mp3'
  ),
  (
    95,
    'Baliga-balaga',
    'Home informal, de poca serietat',
    'Aquí ve gent formal; no''n vull de baligues balagues',
    'D95.mp3'
  ),
  (
    96,
    'Terroler/era',
    'Aturat, mancat d''iniciativa, curt d''acció; que perd el temps i no sap aprofitar-lo per coses útils',
    'Terrolera que ets... espavila un poc',
    'D96.mp3'
  ),
  (
    97,
    'Toixarrut/uda',
    'Rude, grosser mentalment, estúpid',
    'És més toixarruda na Joana, sempre va a lo que va!',
    'D97.mp3'
  ),
  (
    98,
    'Tudossa',
    'Curt d''enteniment; testarrut, obstinat',
    'Avui dematí un al·lot ben tudossa s''examinava de llatí',
    'D98.mp3'
  ),
  (
    99,
    'Xeubo/a',
    'Beneitot, bàmbol',
    'Encara hey hagué fadrines xeubes que se''n anaren amb un moxet',
    'D99.mp3'
  );

INSERT
OR IGNORE INTO swearword_uses (id, swearword_id, is_default, audio)
VALUES
  (1, 1, 1, 'A1.mp3'),
  (2, 2, 1, 'A2.mp3'),
  (3, 3, 1, 'A3.mp3'),
  (4, 4, 1, 'A4.mp3'),
  (5, 5, 1, 'A5.mp3'),
  (6, 6, 1, 'A6.mp3'),
  (7, 7, 1, 'A7.mp3'),
  (8, 8, 1, 'A8.mp3'),
  (9, 9, 1, 'A9.mp3'),
  (10, 10, 1, 'A10.mp3'),
  (11, 11, 1, 'A11.mp3'),
  (12, 12, 1, 'A12.mp3'),
  (13, 13, 1, 'A13.mp3'),
  (14, 14, 1, 'A14.mp3'),
  (15, 15, 1, 'A15.mp3'),
  (16, 16, 1, 'A16.mp3'),
  (17, 17, 1, 'A17.mp3'),
  (18, 18, 1, 'A18.mp3'),
  (19, 19, 1, 'A19.mp3'),
  (20, 20, 1, 'A20.mp3'),
  (21, 21, 1, 'A21.mp3'),
  (22, 22, 1, 'A22.mp3'),
  (23, 23, 1, 'A23.mp3'),
  (24, 24, 1, 'A24.mp3'),
  (25, 25, 1, 'A25.mp3'),
  (26, 26, 1, 'A26.mp3'),
  (27, 27, 1, 'A27.mp3'),
  (28, 28, 1, 'A28.mp3'),
  (29, 29, 1, 'A29.mp3'),
  (30, 30, 1, 'A30.mp3'),
  (31, 31, 1, 'A31.mp3'),
  (32, 32, 1, 'A32.mp3'),
  (33, 33, 1, 'A33.mp3'),
  (34, 34, 1, 'A34.mp3'),
  (35, 35, 1, 'A35.mp3'),
  (36, 36, 1, 'A36.mp3'),
  (37, 37, 1, 'A37.mp3'),
  (38, 38, 1, 'A38.mp3'),
  (39, 39, 1, 'A39.mp3'),
  (40, 40, 1, 'A40.mp3'),
  (41, 41, 1, 'A41.mp3'),
  (42, 42, 1, 'A42.mp3'),
  (43, 43, 1, 'A43.mp3'),
  (44, 44, 1, 'A44.mp3'),
  (45, 45, 1, 'A45.mp3'),
  (46, 46, 1, 'A46.mp3'),
  (47, 47, 1, 'A47.mp3'),
  (48, 48, 1, 'A48.mp3'),
  (49, 49, 1, 'A49.mp3'),
  (50, 50, 1, 'A50.mp3'),
  (51, 51, 1, 'A51.mp3'),
  (52, 52, 1, 'A52.mp3'),
  (53, 53, 1, 'A53.mp3'),
  (54, 54, 1, 'A54.mp3'),
  (55, 55, 1, 'A55.mp3'),
  (56, 56, 1, 'A56.mp3'),
  (57, 57, 1, 'A57.mp3'),
  (58, 58, 1, 'A58.mp3'),
  (59, 59, 1, 'A59.mp3'),
  (60, 60, 1, 'A60.mp3'),
  (61, 61, 1, 'A61.mp3'),
  (62, 62, 1, 'A62.mp3'),
  (63, 63, 1, 'A63.mp3'),
  (64, 64, 1, 'A64.mp3'),
  (65, 65, 1, 'A65.mp3'),
  (66, 66, 1, 'A66.mp3'),
  (67, 67, 1, 'A67.mp3'),
  (68, 68, 1, 'A68.mp3'),
  (69, 69, 1, 'A69.mp3'),
  (70, 70, 1, 'A70.mp3'),
  (71, 71, 1, 'A71.mp3'),
  (72, 72, 1, 'A72.mp3'),
  (73, 73, 1, 'A73.mp3'),
  (74, 74, 1, 'A74.mp3'),
  (75, 75, 1, 'A75.mp3'),
  (76, 76, 1, 'A76.mp3'),
  (77, 77, 1, 'A77.mp3'),
  (78, 78, 1, 'A78.mp3'),
  (79, 79, 1, 'A79.mp3'),
  (80, 80, 1, 'A80.mp3'),
  (81, 81, 1, 'A81.mp3'),
  (82, 82, 1, 'A82.mp3'),
  (83, 83, 1, 'A83.mp3'),
  (84, 84, 1, 'A84.mp3'),
  (85, 85, 1, 'A85.mp3'),
  (86, 86, 1, 'A86.mp3'),
  (87, 87, 1, 'A87.mp3'),
  (88, 88, 1, 'A88.mp3'),
  (89, 89, 1, 'A89.mp3'),
  (90, 90, 1, 'A90.mp3'),
  (91, 91, 1, 'A91.mp3'),
  (92, 92, 1, 'A92.mp3'),
  (93, 93, 1, 'A93.mp3'),
  (94, 94, 1, 'A94.mp3'),
  (95, 95, 1, 'A95.mp3'),
  (96, 96, 1, 'A96.mp3'),
  (97, 97, 1, 'A97.mp3'),
  (98, 98, 1, 'A98.mp3'),
  (99, 99, 1, 'A99.mp3');

UPDATE sqlite_sequence
SET
  seq = (
    SELECT
      MAX(id)
    FROM
      swearwords
  )
WHERE
  name = 'swearwords';

UPDATE sqlite_sequence
SET
  seq = (
    SELECT
      MAX(id)
    FROM
      swearword_uses
  )
WHERE
  name = 'swearword_uses';