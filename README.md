# Français pour Alinda · A1 à B2

**Français pour Alinda** : application web simple (HTML/CSS/JavaScript, sans dépendance) pour réviser le français aux niveaux A1, A2, B1 et B2 (CECRL). Un menu déroulant en haut de page permet de changer de niveau ; cours, quiz, examen et progression sont indépendants pour chaque niveau.

## Lancer l'application

Aucune installation nécessaire : ouvre simplement `index.html` dans un navigateur.

Ou avec un petit serveur local :

```bash
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

## Contenu

### Niveau A1 (11 leçons)

1. Se présenter (salutations, questions de base)
2. Les articles (le/la/les, un/une/des, possessifs, démonstratifs)
3. Être et avoir (conjugaison au présent)
4. Les verbes du 1er groupe (-er) au présent
5. Les verbes du 2ème groupe (-ir) au présent
6. Les verbes du 3ème groupe (tous les autres) au présent (aller, faire, venir, pouvoir, vouloir, partir)
7. Les 3 groupes de verbes au présent (synthèse)
8. Les nombres et l'heure
9. La vie quotidienne (jours, mois, lieux)
10. La France : culture et citoyenneté (devise, symboles, dates et personnes célèbres — questions type test de nationalité)
11. Vocabulaire : les mots du quotidien (banque de 200 mots niveau A1 — 10 tirés au sort à chaque chargement)

### Niveau A2 (6 leçons)

1. Le passé composé avec avoir (participes passés, négation)
2. Le passé composé avec être (verbes de mouvement, accord du participe)
3. Le futur proche (aller + infinitif)
4. Les pronoms compléments (COD : le/la/l'/les, COI : lui/leur)
5. La ville et les sorties (proposer, accepter, refuser, vocabulaire)
6. Vocabulaire : la vie pratique (banque de 200 mots niveau A2 — 10 tirés au sort à chaque chargement)

### Niveau B1 (5 leçons)

1. L'imparfait (formation, irréguliers, opposé au passé composé)
2. Le futur simple (formation, irréguliers, futur proche ou futur simple ?)
3. Les pronoms relatifs (qui, que, dont, où)
4. Donner son avis et enchaîner ses idées (connecteurs logiques)
5. Vocabulaire : médias et opinions (banque de 200 mots niveau B1 — 10 tirés au sort à chaque chargement)

### Niveau B2 (3 leçons)

1. Le subjonctif présent (formation, irréguliers, emplois)
2. Le discours rapporté (direct/indirect, concordance des temps)
3. Vocabulaire : idées et langue soutenue (banque de 200 mots niveau B2 — 10 tirés au sort à chaque chargement)

## Fonctionnalités

- **Niveaux (A1 / A2 / B1 / B2)** : menu déroulant en haut de page ; le niveau est mémorisé et s'applique aux cours, cartes, quiz, examen et progression
- **Cours** : règle claire + exemples pour chaque leçon
- **Cartes mémoire** : mot → définition, à retourner, avec progression
- **Quiz** : choix multiples, questions et réponses mélangées, questions générées à partir des tableaux de conjugaison et du vocabulaire, résultat détaillé
- **Examen final** : 20 questions tirées au sort dans les leçons du niveau courant, thème indiqué à chaque question, meilleur score et nombre de tentatives enregistrés par niveau
- **Vocabulaire** : une banque de 200 mots par niveau (800 mots au total) ; à chaque chargement de la page, 10 mots sont tirés au sort pour les cartes mémoire et le quiz du module vocabulaire
- **Progression** : meilleur score par leçon et cartes consultées, sauvegardés dans le navigateur (localStorage), sans compte ni serveur
- **Numéro de version** affiché en bas de page pour vérifier que tu utilises la dernière version

## Versions

- **2.3.0** (build du 2026-11-20 à 14:51 UTC) : l'application s'appelle désormais « **Français pour Alinda** » (titre de page, en-tête) ; le pied de page précise la couverture complète des niveaux A1 → B2 (CECRL)
- **2.2.0** (build du 2026-11-20 à 13:22 UTC) : ajout du niveau B2 (le subjonctif présent, le discours rapporté, module de vocabulaire « idées et langue soutenue ») et banques de vocabulaire portées à 200 mots par niveau (800 mots au total, 10 tirés au sort à chaque chargement)
- **2.1.0** (build du 2026-11-20 à 13:05 UTC) : banques de 100 mots de vocabulaire par niveau (300 mots au total), dont 10 tirés au sort à chaque chargement de la page pour les cartes mémoire et le quiz du module vocabulaire
- **2.0.0** (build du 2026-11-20 à 11:15 UTC) : sélecteur de niveau A1/A2/B1 avec 9 nouvelles leçons (5 A2 : passé composé avec avoir/être, futur proche, pronoms compléments, ville et sorties ; 4 B1 : imparfait, futur simple, pronoms relatifs, opinions et connecteurs), examens et progression par niveau
- **1.6.0** (build du 2026-11-20 à 10:39 UTC) : leçon « La France : culture et citoyenneté » (devise, symboles, grandes dates, personnes célèbres)
- **1.5.0** (build du 2026-11-20 à 10:30 UTC) : leçon « Les verbes du 3ème groupe (tous les autres) au présent » et titres des leçons de conjugaison renommés par groupe
- **1.4.1** (build du 2026-11-20 à 10:19 UTC) : correction d'une question impossible du quiz « Articles » (possessif + complément « de Marie » ne peuvent pas se cumuler en français)
- **1.4.0** (build du 2026-11-20 à 10:12 UTC) : générateur de questions — de nouvelles questions à chaque quiz et examen (253 questions disponibles)
- **1.3.0** (build du 2026-11-20 à 09:58 UTC) : mode « Examen final » (20 questions mélangées des 8 leçons, thème par question, tentatives comptées)
- **1.2.4** (build du 2026-11-20 à 09:56 UTC) : signature « … créée par son ami **Vibe Code** » en pied de page
- **1.2.3** (build du 2026-11-20 à 09:54 UTC) : correctif anti-cache — les fichiers portent maintenant la version dans leur URL (?v=1.2.3)
- **1.2.2** (build du 2026-11-20 à 09:50 UTC) : mention « Application suggérée par Alain et créée par son ami » en pied de page
- **1.2.1** (build du 2026-11-20 à 09:48 UTC) : heure du build affichée en pied de page
- **1.2.0** (build du 2026-11-20 à 09:35 UTC) : numéro de version affiché en pied de page
- **1.1.0** (build du 2026-11-20) : ajout des leçons « Verbes en -ir » et « Les 3 groupes de verbes »
- **1.0.1** (build du 2026-11-20) : correction de l'enregistrement des quiz dans la progression
- **1.0.0** (build du 2026-11-20) : première version (6 leçons, cartes mémoire, quiz, progression)
