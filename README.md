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
