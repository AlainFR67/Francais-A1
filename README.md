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
- **Progression** : meilleur score par leçon et cartes consultées, sauvegardés dans le navigateur (localStorage), sans compte ni serveur
- **Numéro de version** affiché en bas de page pour vérifier que tu utilises la dernière version

## Versions

- **1.2.1** (build du 2025-11-20 à 09:48 UTC) : heure du build affichée en pied de page
- **1.2.0** (build du 2025-11-20 à 09:35 UTC) : numéro de version affiché en pied de page
- **1.1.0** (build du 2025-11-20) : ajout des leçons « Verbes en -ir » et « Les 3 groupes de verbes »
- **1.0.1** (build du 2025-11-20) : correction de l'enregistrement des quiz dans la progression
- **1.0.0** (build du 2025-11-20) : première version (6 leçons, cartes mémoire, quiz, progression)
