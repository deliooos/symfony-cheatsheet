---
title: 'make:migration - SF Cheatsheet'
description: 'Créé un fichier de migration contenant le schéma avant/après de la base de donnée'
displayName: 'make:migration'
---

# symfony console make:migration
#### **Documentation de cet article**
- [Doctrine (en)](https://symfony.com/doc/current/doctrine.html)
- [Maker Bundle (en)](https://symfony.com/bundles/SymfonyMakerBundle/current/index.html)

Créé un fichier de migration contenant le schéma avant/après de la base de donnée

Commande complète
```shell
symfony console make:migration
```

Génère un fichier de migration dans le dossier `migrations`. Facultativement, vous pouvez vous rendre dans ce fichier et ajouter un commentaire dans la partie **description**, comme vous feriez pour un commit git ainsi que modifier les requêtes SQL effectués par Symfony à votre guise.

::tip{type='alert-info'}
Générer une migration n'altèrera pas votre base de donnée, pour valider la migration, vous devrez faire [doctrine:migrations:migrate](/codex/console/doctrine-migrations-migrate)
::
