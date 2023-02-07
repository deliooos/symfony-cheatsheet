---
title: 'make:user - SF Cheatsheet'
description: "Créé un système d'utilisateurs"
displayName: 'make:user'
tags: ["user", "utilisateur", "role", "permissions", "auth", "authentification", "make"]
---

# symfony console make:user
#### **Documentation de cet article**
- [Sécurité Symfony (en)](https://symfony.com/doc/current/security.html#the-user)
- [Maker Bundle (en)](https://symfony.com/bundles/SymfonyMakerBundle/current/index.html)

Créé un système d'utilisateur dans votre application Symfony afin de sécuriser ~~des parties~~ de votre application, gérer la connexion et l'inscription ou encore instaurer un système de rôle.

Commande complète
```shell
symfony console make:user
```

Après l'exécution de la commande, Symfony va vous poser une série de questions, je vous conseille, s'il vous en propose, de garder les choix par défaut à moins que vous sachiez exactement ce que vous faites. Ceci créera une entité, sa repository et mettra à jour le fichier `security.yaml`. Vous aurez donc besoin de créer et effectuer les migrations et modifier le fichier `security.yaml` à votre guise.