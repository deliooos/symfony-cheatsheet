---
title: 'make:entity - SF Cheatsheet'
description: 'Créé une entité Symfony, représentant une table de base de donnée'
displayName: 'make:entity'
tags: ["migration", "base de donnée", "doctrine", "db", "bdd", "entite"]
---

# symfony console make:entity
#### **Documentation de cet article**
- [Doctrine (en)](https://symfony.com/doc/current/doctrine.html#creating-an-entity-class)
- [Maker Bundle (en)](https://symfony.com/bundles/SymfonyMakerBundle/current/index.html)

Créé une entité Doctrine, représentant une table dans la base de donnée

Commande complète
```shell
symfony console make:entity
```

Après l'exécution de la commande, Symfony va vous poser une série de questions. Tout d'abord il vous demandera le nom de l'entité à créer. Par convention ce nom s'écrit en _PascalCase_, c'est-à-dire avec une majuscule en chaque début de mot, seulement avec des lettres et sans espaces. Essayez de mettre un nom décrivant la fonction de l'entité, par exemple, pour une entité représentant un article, appelez-la tout simplement **Article**.

Ensuite, il vous demandera si vous souhaitez ajouter des champs en vous demandant le nom du champ. Cette fois la convention change, on spécifie les noms de champs en _camelCase_, c'est-à-dire avec une majuscule seulement après le premier mot, ou autrement dit, avec une majuscule à tous les mots sauf au premier.

Après ça, il vous demandera le type du champ. Vous serez certainement amenés à utiliser 3 types de champs principalement.

- string : le plus connu, une chaîne de caractères de 255 caractères maximum
- text : un chaîne de caractères, cette fois-ci illimitée en taille
- relation : une relation avec une autre table

Enfin, il vous demandera des informations liées aux champs, s'il est possiblement `null`, combien de caractère doit-il comporter etc...

Après avoir fini votre entité, vous devrez générer le schéma de nouvelle base de donnée avec [make:migration](/codex/console/make-migration)