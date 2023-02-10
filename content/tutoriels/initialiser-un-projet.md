---
title: 'Créer une app - SF Cheatsheet'
description: 'Initialisez un projet Symfony automatiquement avec le binaire Symfony'
displayName: 'Initialiser un projet'
tags: ["initialiser", "creer", "projet", "application", "app"]
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
Il est bon de se demander s'il est possible de créer une application Symfony sur sa machine. Avez-vous toutes les bonnes dépendances, les bonnes extensions php activées ? Toutes ces questions trouveront leur réponse après que vous ayez exécuté la commande suivante :

```shell
symfony check:requirements
```

Si tout est bon vous verrez un message vert disant quelque chose du genre :
```shell
[OK]
Your system is ready to run Symfony projects
```
Si vous avez des avertissements sur ci ou ça manquant, je vous invite à vous documenter sur comment l'ajouter selon votre système d'exploitation.

::tip{type="alert-warning"}
`symfony check:requirements` effectue une vérification minimale, si vous voulez être sûrs d'avoir tout bon du premier coup, allez lire [ce guide](https://symfony.com/doc/6.2/the-fast-track/fr/1-tools.html) issu du livre Symfony
::
## Initaliser mon app
Maintenant que tout est prêt, 2 commandes s'offrent à vous
```shell
# Application complète
symfony new nom_du_projet --version="6.2.*" --webapp

# Squelette d'application
symfony new nom_du_projet --version="6.2.*"
```

Expliquons-les en voyant d'abord les points communs, ces 2 commandes commencent par `symfony`, c'est le binaire symfony qui sera le mot clé de départ de toutes les commandes Symfony. `new` est une commande issue du binaire Symfony qui va prendre 1 paramètre, le nom de votre projet et plusieurs _flags_, optionnels, que l'on va voir dans quelques instants.

Ces 2 commandes vont toutes les deux créer un dossier, nommé à votre convenance (dans mon cas `nom_du_projet`), et ajouter dedans tous les fichiers nécessaires au fonctionnement de Symfony. Veillez donc à exécuter cette commande à l'emplacement où vous voulez placer votre projet Symfony. Elles comportent également un premier _flag_. 

::tip{type="alert-info"}
Les _flags_ sont des compléments à une commande, utiles pour spécifier certaines options.
::

Ici, le premier est assez clair `--version` va spécifier la version de Symfony à utiliser. L'étoile (`*`) sert à prendre la version la plus récente. On utilise ici l'étoile sur le dernier chiffre de la version car il représente une mise-à-jour mineure ayant peu d'importance. Pour les autres chiffres, on se réfère à la [documentation Symfony](https://symfony.com/doc/current/setup.html) parce qu'ils représentent une version stable et sans bug apte à faire fonctionner durablement une application Symfony.

## Lancer mon app
Une fois que tout est installé, Symfony vous affichera qu'il a fini. Allez dans le fichier fraîchement créé depuis votre terminal en entrant `cd nom_du_projet`, _nom_du_projet_ étant évidemment à remplacer par le nom que vous avez choisi. Maintenant que vous vous situez dans votre projet Symfony, lancez la commande `symfony server:start`. Il va travailler quelques instants puis vous donner une adresse (par défaut, et si le port est disponible `localhost:8000`). Vous pouvez cliquer dessus et admirer votre travail !