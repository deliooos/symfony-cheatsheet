---
title: 'make:registration-form - SF Cheatsheet'
description: "Créé un formulaire d'inscription"
displayName: 'make:registration-form'
tags: ["inscription", "register", "formulaire"]
---

# symfony console make:registration-form
#### **Documentation de cet article**
- [Sécurité Symfony (en)](https://symfony.com/doc/current/security.html)
- [Maker Bundle (en)](https://symfony.com/bundles/SymfonyMakerBundle/current/index.html)

Créé un système d'inscription

Commande complète
```shell
symfony console make:registration-form
```

Après l'exécution de la commande, Symfony va vous poser une série de questions. Tout d'abord il vous demandera si vous voulez ajouter l'annotation `@UniqueEntity` à votre entité "User". Si vous acceptez, cela empêchera la duplication de compte. Je vous conseille donc d'accepter, à moins que vous sachiez ce que vous faites.

Il vous demandera ensuite si vous souhaitez envoyer un mail pour vérifier le mail de l'utilisateur. Je vous conseille d'accepter si vous êtes déjà assez avancé dans Symfony, sinon vous pourrez le rajouter assez facilement plus tard.

::tip{type='alert-warning'}
Si vous ajoutez la vérification par mail, cela implique de gérer l'envoie de mail, en local et en production, ce que peut être fastidieux
::

Si vous avez choisi d'envoyer un mail, il va vous expliquer que vous pouvez choisir si l'utilisateur doit être authentifié pour valider son mail. Si vous mettez "no" (choix de base), l'utilisateur devra être connecté et donc ne pourra par exemple pas envoyer le mail depuis son ordinateur et l'accepter depuis son téléphone. Si vous mettez "yes", il pourra. À vous de choisir. Suite à ça il vous demandera des infos sur le mail à utiliser et le nom à afficher, ce qui à peut d'importance en développement.

Enfin, il vous demandera si vous souhaitez authentifier l'utilisateur automatiquement après l'inscription, encore une fois, à vous de choisir.