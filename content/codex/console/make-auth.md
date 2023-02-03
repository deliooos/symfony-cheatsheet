---
title: 'make:auth - SF Cheatsheet'
description: 'Initialise un projet Symfony'
---

# symfony console make:auth
#### **Documentation de cet article**
- [Sécurité Symfony (en)](https://symfony.com/doc/current/security.html)
- [Maker Bundle (en)](https://symfony.com/bundles/SymfonyMakerBundle/current/index.html)

Créé un système d'

Commande complète
```
symfony console make:user
```

Après l'exécution de la commande, Symfony va vous poser une série de questions, je vous conseille, s'il vous en propose, de garder les choix par défaut à moins que vous sachiez exactement ce que vous faites. Ceci créera une entité, sa repository et mettra à jour le fichier `security.yaml`. Vous aurez donc besoin de créer et effectuer les migrations et modifier le fichier `security.yaml` à votre guise.