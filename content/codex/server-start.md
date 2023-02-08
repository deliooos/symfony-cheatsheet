---
title: 'server:start - SF Cheatsheet'
description: 'Lance un projet Symfony'
displayName: 'server:start'
tags: ["lancer", "start", "server", "app"]
---

# symfony new
#### **Documentation de cet article**
- [Installer Symfony (en)](https://symfony.com/doc/current/setup.html#running-symfony-applications)

Lance un projet Symfony avec php

Commande complète
```shell
symfony server:start
```

Lance un projet Symfony avec _php-fpm_, de base sur le localhost (127.0.0.1) au port 8000, vous pourrez donc de base accéder à votre site lancé à l'adresse `127.0.0.1:8000`.

::tip{type='alert-warning'}
Votre projet doit être apte à faire tourner Symfony, voir [initialiser un projet](http://localhost:3000/tutoriels/initialiser-un-projet#puis-je-initialiser-une-app-symfony)
::

En plus de lancer un projet, cette commande dira à Symfony de vérifier si des variables Docker sont disponibles, si c'est le cas, il utilisera les variables renseignés dans votre configuration Docker à la place de celles présentent dans les dossiers `.env`.

::tip{type='alert-info'}
`symfony server:start` ne lance pas docker automatiquement, si vous voulez l'utiliser avec Docker, vous devrez lancer Docker en même temps que le serveur Symfony
::