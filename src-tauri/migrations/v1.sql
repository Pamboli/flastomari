CREATE TABLE
  IF NOT EXISTS swearwords (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    swearword TEXT NOT NULL,
    description TEXT
  );

CREATE TABLE
  IF NOT EXISTS swearword_uses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    swearword_id INTEGER NOT NULL,
    use_description TEXT NOT NULL,
    FOREIGN KEY (swearword_id) REFERENCES swearwords (id) ON DELETE CASCADE
  );

INSERT
OR IGNORE INTO swearwords (swearword, description)
VALUES
  ('Nito/a', 'Nic, malhumorat. Genuí de Manacor.'),
  (
    'Anar de cul',
    'Anar de bòlit, anar escopetejat. '
  ),
  ('Pixa', 'Membre viril, penis, mentula, muto'),
  (
    'Rave',
    'Membre viril, exclamació de disconformitat, cosa de baixa qualitat'
  ),
  ('Perdiu', 'Membre viril'),
  ('Cotorra', 'Genitals femenins'),
  ('Fufa', 'Vulva'),
  ('Figa', 'Parts genitals externes de la dona'),
  ('Cap de fava (amb orelles)', 'Tonto, curt'),
  (
    'Cap de suro',
    'Persona nècia, ignorant, curta d''enteniment'
  ),
  ('Tros de banc', 'Ser ximple, curt d''enteniment.'),
  (
    'Curt de gambals',
    'Persona amb poca capacitat mental, ximple'
  ),
  ('Pixamandúrries', NULL),
  ('Pixapins', NULL),
  ('Pixaolives', NULL),
  ('Ves a pastar fang', NULL),
  ('Ves-te''n a porgar fum', NULL),
  ('Ves-te''n a pondre', NULL),
  ('Ves-te''n a comptar llavors', NULL),
  ('Ves-te''n a cagar', NULL),
  ('Culinquiet', NULL),
  ('Culfeixuc', NULL),
  ('Cul d''olla', NULL),
  ('Caure de cul', NULL),
  ('Tenir el cul en punta', NULL),
  ('Llepaculs', NULL),
  ('Ser cul i merda', NULL),
  ('Tenir una flor al cul', NULL),
  ('Llepafils', NULL),
  ('Llepaous', NULL),
  ('Llepaculs', NULL),
  ('Menjamerda', NULL),
  ('Mitja merda', NULL),
  ('Cagandanes', NULL),
  ('Cagabandúrries', NULL),
  ('Cagadubtes', NULL),
  ('Cagacalçons/cagacalces', NULL),
  ('Cap de trons', NULL),
  ('Capbuit', NULL),
  ('Capsigrany', NULL),
  ('Cap de meló', NULL),
  ('Cap de carabassa', NULL),
  ('Pere Punyetes', NULL),
  ('Pere Joan', NULL),
  ('Tros de quòniam ', NULL),
  ('Tros de soca', NULL),
  ('Tros de suro', NULL),
  ('Més curt que una màniga de guardapits', NULL),
  (
    'No ets més curt perquè ton pare va dir basta',
    NULL
  ),
  (
    'Més pesat que un quilo de merda damunt sa cella',
    NULL
  ),
  ('Més lleig que pegar a un pare', NULL),
  ('Més beneit que pixar d''esquenes', NULL),
  ('Titafluixa', NULL),
  ('Titapansida', NULL),
  ('Torracollons', NULL),
  ('Collonut', NULL),
  ('Collonera', NULL),
  ('Acollonar-se', NULL),
  ('Colló', NULL),
  ('Collonarro', NULL),
  ('Collons de porc', NULL),
  ('Malparit', NULL),
  ('Malnascut', NULL),
  ('Mala pècora', NULL),
  ('Malcriat', NULL),
  ('Maleducat', NULL),
  ('Beneit', 'Per no dir "tonto"'),
  ('Betzol', 'Per no dir "tonto"'),
  ('Bàmbol', 'Per no dir "tonto"'),
  ('Ruc', 'Per no dir "tonto"'),
  ('Ximple', 'Per no dir "tonto"'),
  ('Curt ', 'Per no dir "tonto"'),
  ('Babau', 'Per no dir "tonto"'),
  ('Me la rebuja', 'Per no dir "me la suda"'),
  ('Me la bufa', 'Per no dir "me la suda"'),
  ('a mi què m''és', 'Per no dir "me la suda"'),
  (
    'què putes m''és a mi ',
    'Per no dir "me la suda"'
  ),
  ('tant m''és', 'Per no dir "me la suda"'),
  (
    'i a mi què m''importa',
    'Per no dir "me la suda"'
  ),
  ('me la pela', 'Per no dir "me la suda"'),
  ('Cercameuca', 'Per no dir "putivuelta"'),
  ('Aixafaguitarres', NULL),
  ('Bocamoll', NULL),
  ('Calçasses', NULL),
  ('Destraler', NULL),
  ('Pixa', 'Sinònim de sort. '),
  ('Llemuga', NULL),
  ('Groller', NULL);

INSERT INTO
  swearword_uses (swearword_id, use_description)
SELECT
  id,
  'Què tens, que estàs tan nito?'
FROM
  swearwords
WHERE
  swearword = 'Nito/a';

INSERT INTO
  swearword_uses (swearword_id, use_description)
SELECT
  id,
  'Avui no puc ni fer un rebentat a s''Agrícola, vaig de cul.'
FROM
  swearwords
WHERE
  swearword = 'Anar de cul';

INSERT INTO
  swearword_uses (swearword_id, use_description)
SELECT
  id,
  'Tens sa pixa torta?'
FROM
  swearwords
WHERE
  swearword = 'Pixa';

INSERT INTO
  swearword_uses (swearword_id, use_description)
SELECT
  id,
  'I un rave!'
FROM
  swearwords
WHERE
  swearword = 'Rave';

INSERT INTO
  swearword_uses (swearword_id, use_description)
SELECT
  id,
  'Sa madona de Sa Torre / es pa negre li fa mal / però no n''hi fa es pardal / quan li fiquen a sa cotorra'
FROM
  swearwords
WHERE
  swearword = 'Cotorra';

INSERT INTO
  swearword_uses (swearword_id, use_description)
SELECT
  id,
  'Un gambal és la corretja que mantené l''estrep subjectat a la sella d’un cavall.'
FROM
  swearwords
WHERE
  swearword = 'Curt de gambals';

INSERT INTO
  swearword_uses (swearword_id, use_description)
SELECT
  id,
  'Cadena que es posava al capdavall de les cames dels condemnats per impedir que caminessin amb llibertat'
FROM
  swearwords
WHERE
  swearword = 'Curt de gambals';

INSERT INTO
  swearword_uses (swearword_id, use_description)
SELECT
  id,
  'He fet gol per pura pixa.'
FROM
  swearwords
WHERE
  swearword = 'Pixa';