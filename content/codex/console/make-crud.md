---
title: 'make:crud - SF Cheatsheet'
description: "Créer automatiquement un CRUD (create, read, update, delete) avec Symfony à partir d'une entité"
displayName: 'make:crud'
tags: ["crud", "create", "delete", "read", "update", "console", "formulaire"]
---

# symfony console make:crud
#### **Documentation de cet article**
- [Maker Bundle (en)](https://symfony.com/bundles/SymfonyMakerBundle/current/index.html)

Créer automatiquement un CRUD (create, read, update, delete) avec Symfony à partir d'une entité.

Commande complète
```shell
symfony console make:crud
```

Après l'exécution de la commande, Symfony va vous poser 3 questions :
- À partir de quelle entité générer un CRUD
- Quel nom voulez-vous donner au controller qui va être généré pour le CRUD
- Voulez-vous générer des tests pour ces CRUD

Voyons quelques astuces à propos de ces points, pour l'entité, je vous conseille d'être sûrs de la structure de votre entité, car il va générer un formulaire représentant l'entité, il est très facile de [modifier un formulaire](/tutoriels/les-formulaires-symfony), mais c'est toujours agréable d'arriver et de mettre les pieds sous la table. 

Pour ce qui est du nom du Controller, il vous proposera par défaut le même nom que l'entité, si vous avez bien nommé votre entité au préalable, pourquoi pas laisser le même nom, sinon mettez ce qui vous convient.

Enfin pour les tests, c'est un à votre guise, il n'y a aucun risque à ce que ça ruine votre projet, mais au moment où j'écris l'article, cette fonctionnalité est encore en bêta et donc susceptible d'avoir des défauts ou de vous mettre des bâtons dans les roues plus qu'autre chose. Vous pouvez néanmoins ajouter ces tests pour avoir une base de test que vous pouvez toujours modifier par la suite.