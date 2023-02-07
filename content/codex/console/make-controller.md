---
title: 'make:controller - SF Cheatsheet'
description: 'Créé un controller Symfony, le cerveau reliant votre base de donnée à votre template'
displayName: 'make:controller'
---

# symfony console make:controller
#### **Documentation de cet article**
- [Maker Bundle (en)](https://symfony.com/bundles/SymfonyMakerBundle/current/index.html)

Créé un controller Symfony, le cerveau reliant votre base de donnée à votre template.

Commande complète
```shell
symfony console make:controller
```

Après l'exécution de la commande, Symfony va vous poser une seule question : le nom de votre **Controller**. Essayer de choisir un nom qui correspond à la fonction de votre **Controller** : on nomme en général le **Controller** servant à la page d'accueil _Home_, par exemple. Pour les autres, faites-vous confiance en essayant de nommer votre **Controllers** en Anglais !

::tip{type='alert-info'}
Vous remarquerez que Symfony vous demande que votre **Controller** finissent par "Controller". Cependant, il rajoutera automatiquement ce suffixe pour vous si vous ne le précisez pas. Donc, afin d'éviter les erreurs de syntaxe, je vous conseille de laisser Symfony écrire "Controller" pour vous tout simplement en ne le mettant pas vous-même
::