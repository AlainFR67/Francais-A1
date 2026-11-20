# Révision Français A1

Application web simple (HTML/CSS/JavaScript, sans dépendance) pour réviser les bases du français de niveau A1 (CECRL).

## Lancer l'application

Aucune installation nécessaire : ouvre simplement `index.html` dans un navigateur.

Ou avec un petit serveur local :

```bash
cd francais-a1
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

## Contenu

8 leçons de niveau A1 :

1. Se présenter (salutations, questions de base)
2. Les articles (le/la/les, un/une/des, possessifs, démonstratifs)
3. Être et avoir (conjugaison au présent)
4. Les verbes en -er au présent
5. Les verbes en -ir au présent (2ᵉ groupe)
6. Les 3 groupes de verbes (dont aller, faire et les verbes irréguliers du 3ᵉ groupe)
7. Les nombres et l'heure
8. La vie quotidienne (jours, mois, lieux)

## Fonctionnalités

- **Cours** : règle claire + exemples pour chaque leçon
- **Cartes mémoire** : mot → définition, à retourner, avec progression
- **Quiz** : choix multiples, questions et réponses mélangées, résultat détaillé
- **Examen final** : 20 questions tirées au sort dans les 8 leçons, thème indiqué à chaque question, meilleur score et nombre de tentatives enregistrés
- **Progression** : meilleur score par leçon et cartes consultées, sauvegardés dans le navigateur (localStorage), sans compte ni serveur
- **Numéro de version** affiché en bas de page pour vérifier que tu utilises la dernière version

## Versions

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
