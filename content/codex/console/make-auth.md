---
title: 'make:auth - SF Cheatsheet'
description: 'Créé un authenticator avec ou sans formulaire de connexion'
displayName: 'make:auth'
---

# symfony console make:auth
#### **Documentation de cet article**
- [Sécurité Symfony (en)](https://symfony.com/doc/current/security.html)
- [Maker Bundle (en)](https://symfony.com/bundles/SymfonyMakerBundle/current/index.html)

Créé un système d'authentification

Commande complète
```
symfony console make:auth
```

Après l'exécution de la commande, Symfony va vous poser une série de questions. Tout d'abord il vous demandera si vous voulez un "authenticator" vide ou avec formulaire de connexion. Par défaut je vous conseille de choisir avec le formulaire de connexion, vous en aurez besoin dans la plupart des cas. Si vous ne souhaitez pas de formulaire de connexion, choisissez `Empty authenticator`, sinon choisissez `Login form authenticator`.

::tip{type='alert-info'}
Vous pourrez rajouter le formulaire manuellement plus tard dans tous les cas
::

Il vous demandera ensuite un nom pour votre _authenticator_, il ne vous donne pas de valeur par défaut, vous pouvez donc vous attendre à ce que ce choix ait peu d'importance, choisissez un nom qui vous convient. Si vous n'avez pas d'idée, vous pouvez par exemple mettre `AppAuthenticator`.

Dans la prochaine étape il vous demande un nom pour votre _controller_, qui contiendra, comme tous les controllers, la logique métier, ici, de connexion. Il vous propose un nom de base, vous pouvez le prendre ou en choisir un qui se finit, par convention, par "Controller".

Etape suivante, il vous demande si vous voulez générer une URL de déconnexion, encore une fois vous pourrez le rajouter plus tard mais je vous conseille fortement d'accepter.

Et voilà ! Vous avez un formulaire de connexion disponible sur la route `/login`.