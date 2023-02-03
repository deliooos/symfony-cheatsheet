---
title: 'doctrine:migrations:migrate - SF Cheatsheet'
description: 'Lit le dossier des migrations et exécute les migrations nécessaires'
displayName: 'doctrine:migrations:migrate'
---

# symfony console doctrine:migrations:migrate
#### **Documentation de cet article**
- [Doctrine (en)](https://symfony.com/doc/current/doctrine.html)

Lit le dossier des migrations et exécute les migrations nécessaires

Commande complète
```shell
symfony console doctrine:migrations:migrate

# ou avec l'alias (raccourci)
symfony console d:m:m
```

Lit les migrations de votre dossier `migrations`, les compare si nécessaires avec les migrations enregistrées en base de donnée et si tout est correct, synchronise la base de donnée avec vos entités.