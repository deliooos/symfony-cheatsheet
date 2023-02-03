---
title: 'Créer une app - SF Cheatsheet'
description: 'Initialisez un projet Symfony automatiquement avec le binaire Symfony'
---

# Initialiser un projet Symfony

#### **Documentation de cet article**
- [Installer Symfony (en)](https://symfony.com/doc/current/setup.html)
- [Prérequis à Symfony (fr)](https://symfony.com/doc/6.2/the-fast-track/fr/1-tools.html)

Initialisez simplement votre _première_ application Symfony avec cette commande fournie par le [binaire de symfony](https://symfony.com/download), customisable selon vos besoins et fonctionne du premier coup, promis !

::tip{type="alert-info"}
Il est nécessaire d'avoir le [binaire de symfony](https://symfony.com/download) installé !
::

## Puis-je initialiser une app Symfony ?
Il est bon de se demander s'il est possible de créer une application Symfony sur sa machine. Avez-vous toutes les bonnes dépendances, les bonnes extensions php activées ? Toutes ces questions trouveront leur réponse après que vous ayez exécuté la commande `symfony check:requirements`. Si tout est bon vous verrez un message vert disant quelque chose du genre :
```
[OK]
Your system is ready to run Symfony projects
```
Si vous avez des avertissements sur ci ou ça manquant, je vous invite à vous documenter sur comment l'ajouter selon votre système d'exploitation.

::tip{type="alert-warning"}
`symfony check:requirements` effectue une vérification minimale, si vous voulez être sûrs d'avoir tout bon du premier coup, allez checker [ce guide](https://symfony.com/doc/6.2/the-fast-track/fr/1-tools.html) issu du livre Symfony
::
## Initaliser mon app
Maintenant que tout est prêt, 
